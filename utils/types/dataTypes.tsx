export type category = {
  title: string;
  path: string;
  subCategory: subCategory[];
};

export type subCategory = {
  title: string;
  path: string;
};

export type Tab = {
  title: string;
  backgroundColor: string;
  imgUrl: string;
};
