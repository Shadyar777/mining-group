import { goodsApi } from './rtkQuery.ts';
import { activitiesApi, jobsApi, strategyApi } from '../rtk-query';

// export const rtkMiddleWares: ConfigureStoreOptions['middleware'] = [
export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
  strategyApi.middleware,
];
