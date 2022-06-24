import { useEffect } from "react";

const useActive = (dom) => {
  useEffect(() => {
    const listNode = document.querySelectorAll(dom);

    const handleClick = (e) => {
      const target = e.target;
      [...listNode].forEach((item) => {
        item.classList.remove("active");
      });
      target.classList.add("active");
    };
    [...listNode].forEach((item) => {
      item.addEventListener("click", handleClick);
    });
    return () => {
      [...listNode].forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, [dom]);
  return;
};

export default useActive;
