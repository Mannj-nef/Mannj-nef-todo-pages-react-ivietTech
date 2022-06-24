import axiosClient from "../untils/axiosConfig";

export const getApiTask = async (action) => {
  const { data } = await axiosClient.get("tasks", {
    action,
  });
  return data;
};
export const deleteAPiTask = async (id, action) => {
  const { data } = await axiosClient.delete(`tasks/${id}`, {
    action,
  });
  return data;
};
export const updateApiTask = async (id, action) => {
  const { data } = await axiosClient.patch(`tasks/${id}`, {
    action,
  });
  return data;
};
export const creactApiTask = async (action) => {
  const { data } = await axiosClient.post("tasks", {
    action,
  });
  return data;
};
