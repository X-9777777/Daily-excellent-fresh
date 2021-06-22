import Axios from 'axios';
import baseURL, { Urls } from './Urls';

const appkey = 'wushixiong_1623570215135';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(Urls.getSide, {
  params: { type },
});

const getGoodsList = (type, page, size, sort) => request.get(Urls.getGoodsList, {
  params: {
    type, page, size, sort,
  },
});

const likeSearch = (value) => request.get(Urls.likeSearch, {
  params: { likeValue: value },
});

const search = (type, page, size) => request.get(Urls.search, {
  params: { type, page, size },
});

const getGoodsByIds = (value) => request.get(Urls.getGoodsByIds, {
  params: { value },
});

export default {
  getSideList,
  getGoodsList,
  likeSearch,
  search,
  getGoodsByIds,
};
