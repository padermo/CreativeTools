import axiosConfig from '@/axios/axiosconfig';

export const getData = async (url:string) => {
  const res = await axiosConfig.get(url)
  return res.data;
}