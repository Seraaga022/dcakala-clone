import { FilterValueT, TFilter } from "./Category";

export type HandleFilterChangePayloadT = {
  newItem: FilterValueT & Pick<TFilter, "brandName">;
};
type HandleFilterChangeT = {
  type: "HANDLE_CHANGE";
  payload: HandleFilterChangePayloadT;
};
type DeleteFilterPayloadT = {
  valueTitle: string;
};
type DeleteFilterT = {
  type: "DELETE";
  payload: DeleteFilterPayloadT;
};
type ResetFilters = {
  type: "RESET";
};

export interface FiltersReducerT {
  state: TFilter[];
  action: HandleFilterChangeT | DeleteFilterT | ResetFilters;
}
