import { goodsApi } from './rtkQuery.ts';
import {
  activitiesApi,
  homeApi,
  jobsApi,
  strategyApi,
  titleApi,
  valuesApi,
} from '../rtk-query';

export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
  strategyApi.middleware,
  valuesApi.middleware,
  homeApi.middleware,
  titleApi.middleware,
];
