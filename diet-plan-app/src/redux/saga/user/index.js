import { call, put, takeLatest } from "redux-saga/effects";

import * as services from "../../../services";
import { errorAlert, successAlert } from "../../../utils";
import {
  addUserAnswerRequest,
  userAnswerAddedSuccess,
  userAnswerAddedFailure,
} from "../../reducer/user";

function* addUserAnswer(action) {
  try {
    const response = yield call(
      services.addUserAnswer,
      action.payload.requestBody,
    );
    console.log("===>response", response);
    const { status, statusText, data = [] } = response || {};
    if (status === 200) {
      successAlert("Successfully added answers.");
      yield put(userAnswerAddedSuccess(data));
    } else {
      errorAlert("Failed to added answers");
      yield put(userAnswerAddedFailure());
    }
  } catch (e) {
    errorAlert("Failed to added answers");
    yield put(userAnswerAddedFailure());
  }
}

function* userSaga() {
  yield takeLatest(addUserAnswerRequest.type, addUserAnswer);
}

export default userSaga;
