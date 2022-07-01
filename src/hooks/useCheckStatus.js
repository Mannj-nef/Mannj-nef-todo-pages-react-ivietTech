import { useEffect, useState } from "react";

export default function useCheckStatus(list, status) {
  const [isStatusList, setIsStatusList] = useState([]);

  useEffect(() => {
    const listStatusTask = list.filter(
      (itemStatus) => itemStatus.status === status
    );

    setIsStatusList(listStatusTask);
  }, [list, status]);

  return isStatusList;
}
