import { all } from 'redux-saga/effects';

import tools from './tools/saga';

export default function* rootSaga() {
  return yield all([tools]);
}
