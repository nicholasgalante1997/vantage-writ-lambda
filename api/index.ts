// load environment variables
require('dotenv').config();

// import dependencies
import { VercelRequest, VercelResponse } from '@vercel/node';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from 'firebase/database';
import config from '../utils/firebase';
import VantLog from '../utils/vant-logger';

export default async (request: VercelRequest, response: VercelResponse) => {
  // instance of local util logger
  const logger: VantLog = new VantLog();
  // Logging request
  logger.info(`Receieved request at ${moment().toISOString()}`)
  logger.info('Attempting to handle request.');

  // create resources for firebase
  const app = initializeApp(config);
  const database = getDatabase(app);
  const dbRef = ref(database);

  logger.info(`database is ${database.type}`);

  //begin firebase request
  try {
      const snapshot = await get(child(dbRef, 'lambda'));
      if (snapshot.exists()) {
          logger.info('data: ' + snapshot.val());
            response.status(200);
            response.setHeader('Content-Type', 'text/html');
            response.send(`<em style="color:cyan;font-size:1rem;">lambda responded with ${snapshot.val()} </em>`);
          logger.info(`Request with an origin of ${moment().toISOString()} handled successfully.`);
        } else {
            logger.error('Lambda did not respond with data or error. Check firebase console.');
        }
  } catch (e: any) {
      logger.error(JSON.stringify(e));
  }

};