import { all } from "redux-saga/effects";

function* f() {
  yield console.log("started");
}

export default function*() {
  yield all([f()]);
}
