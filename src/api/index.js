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
  const patchUrl = `${defaultParams.baseUrl}/${paxId}`;
  return await axios.patch(patchUrl, {name});
};

export const getWtihId = async (id) => {
  console.log('id start');
  const fetchByIdUrl = `${defaultParams.baseUrl}/${id}`;
  return await axios.get(fetchByIdUrl);
};

export default {
  getPaxList,
  updatePaxName,
  getWtihId,
};
