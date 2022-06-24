import React from "react";
import LoadingSkeleton from "../../skeleton/LoadingSkeleton";
import "./style.scss";

const TaskItemLoading = () => {
  return (
    <div className="task-item px-[15px] py-3">
      <h3 className="title">
        Title: Task {<LoadingSkeleton width="150px" height="15px" />}
      </h3>
      <div className="cteator">
        Creator: {<LoadingSkeleton width="150px" height="15px" />}
      </div>
      <div className="status">
        Status: {<LoadingSkeleton width="150px" height="15px" />}
      </div>
      <div className="desc">
        <span className="desc-main">Desscription:</span>
        <span>
          <LoadingSkeleton width="100%" height="15px" marginBottom="10px" />
          <LoadingSkeleton width="100%" height="15px" />
        </span>
      </div>
    </div>
  );
};

export default TaskItemLoading;
