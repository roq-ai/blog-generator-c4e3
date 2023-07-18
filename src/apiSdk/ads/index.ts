import axios from 'axios';
import queryString from 'query-string';
import { AdInterface, AdGetQueryInterface } from 'interfaces/ad';
import { GetQueryInterface } from '../../interfaces';

export const getAds = async (query?: AdGetQueryInterface) => {
  const response = await axios.get(`/api/ads${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAd = async (ad: AdInterface) => {
  const response = await axios.post('/api/ads', ad);
  return response.data;
};

export const updateAdById = async (id: string, ad: AdInterface) => {
  const response = await axios.put(`/api/ads/${id}`, ad);
  return response.data;
};

export const getAdById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ads/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdById = async (id: string) => {
  const response = await axios.delete(`/api/ads/${id}`);
  return response.data;
};
