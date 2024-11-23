import { TProduct } from "./Product";

export type TCategory = { name: string; slug: string };

export type TUrlPath = { title: string; slug: string };

export type TFilterItems = {
  title: string;
  items: Array<{ title: string; id: number }>;
}[];

export type TCategoryImportantProducts = {
  title: string;
  items: TProduct[];
};

export type CategoryVariousTypesItemT = {
  title: string;
  image: string;
  slug: string;
};

export type TCategoryVariousTypes = {
  title: string;
  items: CategoryVariousTypesItemT[];
};

export type TCategoryChosenBrands = TCategoryVariousTypes;

export type CategoryChosenBrandsItemT = CategoryVariousTypesItemT;

export type FilterValueT = { valueTitle: string; valueId: number };
export type TFilter = {
  brandName: string;
  values: FilterValueT[];
};

export type TMostPapularProducts = {
  id: number;
  title: string;
  image: string;
  slug: string;
};
