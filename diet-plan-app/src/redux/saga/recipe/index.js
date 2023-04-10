import { call, put, takeLatest } from "redux-saga/effects";

import * as services from "../../../services";
import { errorAlert, successAlert } from "../../../utils";
import { getRecipeData } from "../../reducer/recipe";

function* getRecipeDataRequest(action) {
  try {
    const response = yield call(
      services.getRecipeRequest,
      action.payload.userId,
    );
    console.log("===>response", response);
    const { status, statusText, data = [] } = response || {};
    if (status === 200) {
      successAlert("Successfully added answers.");
      yield put(action.payload.successCallback(data));
    } else {
      errorAlert("Failed to added answers");
      yield put(action.payload.failureCallback("error from recipe"));
    }
  } catch (e) {
    errorAlert("Failed to added answers");
    yield put(action.payload.failureCallback("error from recipe"));
  }
}

function* recipeSaga() {
  yield takeLatest(getRecipeData.type, getRecipeDataRequest);
}

export default recipeSaga;
