import instance from "./axios";

export const getWhitelists = (data?: object) => {
  return instance.get("/whitelists/getWhitelists", { params: data });
};
export const createWhitelist = (data: object) => {
  return instance.post("/whitelists/createWhitelist", data);
};
export const updateWhitelist = (id: string, data?: object) => {
  return instance.post("/whitelists/updateWhitelist", {
    whitelistId: id,
    ...data,
  });
};
export const deleteWhitelist = (id: string) => {
  return instance.post("/whitelists/deleteWhitelist", { whitelistId: id });
};
