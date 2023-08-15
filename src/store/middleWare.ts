// import { Middleware, MiddlewareAPI, PayloadAction } from '@reduxjs/toolkit';
//
// const setAcceptLanguageMiddleware: Middleware<NonNullable<unknown>, any> =
//   (storeAPI: MiddlewareAPI) =>
//   (next) =>
//   (action: PayloadAction<any, string, any, any>) => {
//     // Если это действие запроса RTK Query
//
//       console.log(action)
//     if (
//       action.type.endsWith('/pending') &&
//       action.meta &&
//       action.meta.request &&
//       action.meta.request.headers
//     ) {
//       // Получите язык из store или другого источника
//       // const language = storeAPI.getState().yourLanguageSlice;
//       const language = 'RU';
//
//       if (language) {
//           console.log('action', action)
//         // Модифицируйте заголовки запроса
//         action.meta.request.headers['Accept-Language'] = language;
//       }
//     }
//
//     // Передайте действие дальше по цепочке middleware
//     return next(action);
//   };
//
// export default setAcceptLanguageMiddleware;

export {};
