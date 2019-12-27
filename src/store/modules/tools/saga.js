import { put, call, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { successTools, failureTools } from './actions';

function* ToolsRequest() {
  try {
    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
  } catch {
    yield put(failureTools());
    toast.error('Internal error in api');
  }
}

function* createToolRequest({ payload }) {
  try {
    yield call(api.post, `/tools`, payload);

    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
    toast.info('Data saved successfully.');
  } catch {
    yield put(failureTools());
    toast.error('error creating tool, please try again.');
  }
}

function* DeleteRequest({ id }) {
  try {
    yield call(api.delete, `/tools/${id}`);

    const { data } = yield call(api.get, `/tools`);

    yield put(successTools(data));
    toast.info('Data deleted successfully.');
  } catch {
    yield put(failureTools());
    toast.error('error delete tool, please try again.');
  }
}

function* SearchDescRequest({ text }) {
  try {
    const { data } = yield call(api.get, `/tools?q=${text}`);

    if (data.length === 0) {
      toast.warn('Not Found');
    }

    yield put(successTools(data));
  } catch {
    yield put(failureTools());
    toast.error('error search tool, please try again.');
  }
}

function* SearchTagsRequest({ text }) {
  try {
    const { data } = yield call(api.get, `/tools?tags_like=${text}`);

    if (data.length === 0) {
      toast.warn('Not Found');
    }

    yield put(successTools(data));
  } catch {
    yield put(failureTools());
    toast.error('error search tool tag, please try again.');
  }
}

export default all([
  takeLatest('@tool/REQUEST_ALL', ToolsRequest),
  takeLatest('@tool/CREATE_TOOL', createToolRequest),
  takeLatest('@tool/DELETE_TOOL', DeleteRequest),
  takeLatest('@tool/SEARCH_DESC_TOOL', SearchDescRequest),
  takeLatest('@tool/SEARCH_TAGS_TOOL', SearchTagsRequest),
]);
