import { goodsApi } from './rtkQuery.ts';
import {
  activitiesApi,
  homeApi,
  jobsApi,
  strategyApi,
  valuesApi,
} from '../rtk-query';

export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
  strategyApi.middleware,
  valuesApi.middleware,
  homeApi.middleware,
];
