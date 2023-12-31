import { getDataTotalUser } from '../../services/api/functions/users';
import { put, call, takeEvery } from "redux-saga/effects"
import _ from "lodash"

function* suggestAPI(action) {
  if (!action?.data) {
    const { data, status } = yield call(getDataTotalUser)
    if (status == 200) {
      yield put({
        type: "FETCH_TOTAL_USER_SUCCESS",
        data: data?.data,
      })
    }
  }
}

export function* watchFetchTotalUser() {
  yield takeEvery("FETCH_TOTAL_USER", suggestAPI)
}
