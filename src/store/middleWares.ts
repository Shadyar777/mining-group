import { goodsApi } from './rtkQuery.ts';
import { activitiesApi, jobsApi, strategyApi, valuesApi } from '../rtk-query';

export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
  strategyApi.middleware,
  valuesApi.middleware,
];
