import { AxiosResponse } from 'axios';
import connectionInstance from './connection-instance';
import { TopTierResponse } from '@interfaces/home';

export function getTierByCountry(params: any): Promise<AxiosResponse<TopTierResponse>> {
  return connectionInstance.get('home/top-tier-marketplace', {
    params
  });
}
