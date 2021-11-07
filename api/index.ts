import { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../utils/firebase';
import { getRealtimeLambdaHealthCheck } from '../utils/rtdb';
import VantLog from '../utils/vant-logger';

export default (request: VercelRequest, response: VercelResponse) => {
  const logger: VantLog = new VantLog();
  logger.info(`Receieved request from ${request.headers.location}`)
  logger.info('Attempting to handle request.');
  const data = getRealtimeLambdaHealthCheck();
  response.status(200);
  response.setHeader('Content-Type', 'text/html');
  response.send(`<em style="color:cyan;font-size:1rem;">lambda responded with ${data}</em>`);
  logger.info(`Request with an origin of ${request.headers.location} handled successfully.`);
};