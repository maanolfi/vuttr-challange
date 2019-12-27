import { put, call, takeLatest, all } from 'redux-saga/effects';

import reduxSagaFirebase from '../../../config/firebase';
import FirebaseService from '../../../services/FirebaseService';

import { successTools, failureTools } from './actions';

function* ToolsRequest() {
  try {
    const data = yield call(reduxSagaFirebase.database.read, 'datatools');
    const dataArray = Object.keys(data).map(chave => ({
      ...data[chave],
      id: chave,
    }));

    FirebaseService.getDataList('datatools', dataReceived =>
      console.tron.log(dataReceived)
    );

    yield put(successTools(dataArray));
  } catch {
    yield put(failureTools());
  }
}

function* createToolRequest({ payload }) {
  try {
    yield call(reduxSagaFirebase.database.create, 'datatools', payload);

    const data = yield call(reduxSagaFirebase.database.read, 'datatools');
    const dataArray = Object.keys(data).map(chave => data[chave]);

    yield put(successTools(dataArray));
  } catch {
    yield put(failureTools());
  }
}

function* DeleteRequest({ id }) {
  try {
    yield call(reduxSagaFirebase.database.delete, `datatools/${id}`);

    const data = yield call(reduxSagaFirebase.database.read, 'datatools');
    const dataArray = Object.keys(data).map(chave => data[chave]);

    yield put(successTools(dataArray));
  } catch {
    yield put(failureTools());
  }
}

export default all([
  takeLatest('@tool/REQUEST_ALL', ToolsRequest),
  takeLatest('@tool/CREATE_TOOL', createToolRequest),
  takeLatest('@tool/DELETE_TOOL', DeleteRequest),
]);
