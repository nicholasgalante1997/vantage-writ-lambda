import { getDatabase, ref, onValue} from "firebase/database";
import VantLogger from './vant-logger';

export function getRealtimeLambdaHealthCheck () {
  let content;
  const logger: VantLogger = new VantLogger();
  const db = getDatabase();
  const rtdbPathReference = ref(db, 'lambda');
  onValue(rtdbPathReference, (snapshot) => {
    const data = snapshot.val();
    logger.info('data: ' + data);
    content = data;
  });
  return content;
}