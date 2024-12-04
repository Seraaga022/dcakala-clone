import { ReadonlyURLSearchParams } from "next/navigation";
import { TFilter } from "../types/Category";

export class FilterManagement {
  private filters;
  private searchParams;

  constructor(filters: TFilter[], searchParams: ReadonlyURLSearchParams) {
    this.filters = filters;
    this.searchParams = searchParams;
  }

  existsInFilters = (targetValue: string, targetBrandName: string) => {
    const filters = this.filters;
    if (!filters || !Array.isArray(filters)) return;
    for (const filter of filters) {
      if (filter.brandName === targetBrandName) {
        return filter.values.some((val) => val.valueTitle === targetValue);
      }
    }
    return false;
  };

  getFilterValuesTitle = (): string[] | undefined => {
    const filters = this.filters;
    if (!filters || !Array.isArray(filters)) return;
    const data: string[] = [];
    filters.forEach((f) => f.values.forEach((v) => data.push(v.valueTitle)));
    return data;
  };

  getAllFiltersAsSearchParams = () => {
    const filters = this.filters;
    const newSearchParams = new URLSearchParams(this.searchParams.toString());

    filters.forEach((filter) => {
      filter.values.forEach((value, index) => {
        const paramKey = `attr[${encodeURIComponent(
          filter.brandName.split(" ").join("_")
        )}][${index}]`;
        newSearchParams.append(paramKey, value.valueId.toString());
      });
    });
    newSearchParams.set("page", "1");

    return newSearchParams;
  };

  areSearchParamsEmpty = () => {
    return this.searchParams.size === 0;
  };
}
