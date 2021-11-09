// load environment variables
require('dotenv').config();

// import dependencies
import { VercelRequest, VercelResponse } from '@vercel/node';
import moment from 'moment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';

// local dependencies
import { enableCORS, setHeaders } from '../../utils/http/headers';
import config from '../../utils/firebase';
import VantLog from '../../utils/vant-logger';

export default async (request: VercelRequest, response: VercelResponse) => {
	// instance of local util logger
	const logger: VantLog = new VantLog();
	// Logging request
	logger.info(`Receieved request for 'COLLECTIONS' at ${moment().toISOString()}`);
	logger.info('Attempting to handle request.');

	// create resources for firebase
	const app = initializeApp(config);
	const database = getDatabase(app);
	const dbRef = ref(database);

	logger.info(`database is ${database.app.name}`);

	//begin firebase request
	try {
		const snapshot = await get(child(dbRef, 'collections'));
		if (snapshot.exists()) {
			logger.info('data: ' + JSON.stringify(snapshot.val()));
			response = setHeaders(response);
			response = enableCORS(response);
			response.json({ collections: snapshot.val()});
			logger.info('Request handled successfully.');
		} else {
			logger.error('Lambda did not respond with data or error. Check firebase console.');
		}
	} catch (e: any) {
		logger.error(JSON.stringify(e));
	} finally {
		logger.info('End of request.');
	}

};