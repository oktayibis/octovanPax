import axios from 'axios';
const defaultParams = {
  baseUrl: 'https://api.instantwebtools.net/v1/passenger',
  size: 10,
  pageNo: 0,
};
//axios.defaults.baseURL = defaultParams.baseUrl;

export const getPaxList = async (pageNo = defaultParams.pageNo) => {
  const fetchUrl = `${defaultParams.baseUrl}?page=${pageNo}&size=${defaultParams.size}`;
  return await axios.get(fetchUrl);
};

export const updatePaxName = async (paxId, name) => {
  const patchUrl = `/${paxId}`;
  return await axios.patch(patchUrl, {name});
};

export default {
  getPaxList,
  updatePaxName,
};
