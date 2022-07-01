import TYPE from "../../constants/type/type";

const initalState = {
  listTask: [
    {
      id: 1,
      title: "task abc",
      creator: "Quan",
      status: "Done",
      desscription: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 2,
      title: "task abc",
      creator: "Quan",
      status: "Doing",
      desscription: "This is a task, This is a task, This is a task, This...",
    },
    {
      id: 3,
      title: "task abc",
      creator: "Quan",
      status: "New",
      desscription: "This is a task, This is a task, This is a task, This...",
    },
  ],
};

const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPE.CREATE_NEW_TASK:
      console.log(action.payload);

      const cloneTask = [...state.listTask];
      const task = {
        ...action.payload,
        status: "New",
      };

      return {
        ...state,
        listTask: [...cloneTask, task],
      };

    case TYPE.UPDATE_TASK:
      console.log("Update task, ( handle with saga)");
      return state;

    case TYPE.DELETE_TASK:
      console.log("delete task, ( handle with saga)");
      return state;

    case TYPE.GET_ALL_TASK:
      console.log("get all task, ( handle with saga)");
      return state;

    case TYPE.GET_TASK_BY_ID:
      console.log("get task by id, ( handle with saga)");
      return state;

    case TYPE.SEARCH_TASK:
      console.log("search, ( handle with saga)");
      return state;

    default:
      return state;
  }
};

export default taskReducer;
