import axiosConfig from '@/axios/axiosConfig';

export const getData = async (url:string, token?:string) => {
  let header = {};
  if (token) header = {'Authorization': `Bearer ${token}`}
  const res = await axiosConfig.get(url, {headers: header})
  return res.data;
}