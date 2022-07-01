import { call } from "redux-saga/effects";

function* getTask() {
  try {
    yield;
  } catch (error) {
    console.log(error);
  }
}
function* deleteTask() {
  try {
    yield;
  } catch (error) {
    console.log(error);
  }
}

export default [getTask(), deleteTask()];
