import axiosConfig from '@/axios/axiosConfig';

export const getData = async (url:string) => {
  const res = await axiosConfig.get(url)
  return res.data;
}