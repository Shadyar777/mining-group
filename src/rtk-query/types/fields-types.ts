export interface ListFields {
  listFields: ListField[];
  page: number;
  allPageCount: number;
}

export interface ListField {
  id: number;
  title: string;
  resources: string[];
  price: number;
  createdDate: string;
  backgroundImageFiles: string;
}

export interface DataGetAllFields {
  pageTitle: string;
  listFields: ListFields;
}

export type FieldsCommonResponse<Data> = {
  message: string;
  data: Data;
};

export type QueryFieldsParams = {
  language?: string;
  limit?: number;
  orderBy?: string;
  page?: number;
  resources?: Array<string>;
  title?: string;
};

export type CreateBodyFields = FormData;
// export type CreateBodyFields = {
//   resources: string;
//   backgroundImageFiles: any;
//   mainFile: any;
//   images: any;
//   location: string;
// };

export interface DataById {
  id: number;
  title: string;
  password: string;
  price: number;
  resources: string[];
  language: string;
  backgroundImageFiles: string;
  mainFile: string;
  images: Image[];
  location: string;
  createdDate: string;
}

export interface Image {
  id: string;
  name: string;
  type: string;
  data: string;
  fieldsId: number;
}
