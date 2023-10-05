const { urls } = require("@/constants/urls");
const { DataService } = require("./api_service");

export const actions = {
  async addToWaitlist(data) {
    return await DataService.post(`${urls.WAIT_LIST}`, data);
  },
};
