import { all } from 'redux-saga/effects'

// import algorithmsSagas from './algorithms'

export default function* rootSaga() {
  yield all([
    // ...algorithmsSagas,
  ])
}
