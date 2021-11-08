import { VercelRequest, VercelResponse } from '@vercel/node';
import moment from 'moment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
import config from '../utils/firebase';
import VantLog from '../utils/vant-logger';

export default (request: VercelRequest, response: VercelResponse) => {
  // instance of local util logger
  const logger: VantLog = new VantLog();
  // Logging request
  logger.info(`Receieved request at ${moment().toISOString()}`)
  logger.info('Attempting to handle request.');

  // create resources for firebase
  const app = initializeApp(config);
  const database = getDatabase(app);

  logger.info(`database is ${database.type}`);

  //begin firebase request
  const rtdbPathReference = ref(database, 'lambda');
  return onValue(rtdbPathReference, (snapshot) => {
    const data = snapshot.val();
    logger.info('data: ' + data);
    response.status(200);
    response.setHeader('Content-Type', 'text/html');
    response.send(`<em style="color:cyan;font-size:1rem;">lambda responded with ${data} </em>`);
    logger.info(`Request with an origin of ${request.headers.location} handled successfully.`);
  });
  // Close out request;
};