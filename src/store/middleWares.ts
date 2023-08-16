import { jobsApi } from '../rtk-query';
import { activitiesApi } from '../rtk-query/activitiesApi.ts';
import { goodsApi } from './rtkQuery.ts';

export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
];
