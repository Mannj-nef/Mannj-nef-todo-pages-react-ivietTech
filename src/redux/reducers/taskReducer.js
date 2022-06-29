import TYPE from "../../constants/type/type";

const initalState = {
  listTask: [],
};

const taskReducer = (state = initalState, action) => {
  let test;
  switch (action.type) {
    case TYPE.CREATE_NEW_TASK:
      console.log("creact new task");

      const newListTask = [...state.listTask];
      test = {
        ...state,
        listTask: [...newListTask, action.payload],
      };
      break;

    case TYPE.UPDATE_TASK:
      console.log("Update task");
      return state;

    default:
      return state;
  }
  console.log(test);
  console.log(action.payload);
  return test;
};

export default taskReducer;
