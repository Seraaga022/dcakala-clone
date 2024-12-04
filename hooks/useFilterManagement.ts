import { FilterManagement } from "@/utils/class/FilterManagement";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useReducer } from "react";
import filtersReducer, { initialFiltersState } from "./filtersReducer";
import { HandleFilterChangePayloadT } from "@/utils/types/FiltersReducer";

const useFilterManagement = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, dispatch] = useReducer(filtersReducer, initialFiltersState);
  const {
    getAllFiltersAsSearchParams,
    areSearchParamsEmpty,
    existsInFilters,
    getFilterValuesTitle,
  } = new FilterManagement(filters, searchParams);

  const filterItemsChangeHandler = (
    newItem: HandleFilterChangePayloadT["newItem"]
  ) => {
    dispatch({ type: "HANDLE_CHANGE", payload: { newItem } });
  };

  const deleteFromFilters = (valueTitle: string) => {
    dispatch({ type: "DELETE", payload: { valueTitle } });
  };

  const removeFiltersFromUrl = () => {
    const urlParts = pathName.toString().split("?");
    router.push(urlParts[0]);
    dispatch({ type: "RESET" });
  };

  const addFiltersToUrl = () => {
    // {
    //   "attr[برند-سازنده_3][0]": "167",
    //   "attr[برند-سازنده_3][1]": "169",
    //   "page": "1"
    // }
    router.push(pathName + "?" + getAllFiltersAsSearchParams());
  };

  return {
    areSearchParamsEmpty,
    existsInFilters,
    getFilterValuesTitle,
    filterItemsChangeHandler,
    deleteFromFilters,
    removeFiltersFromUrl,
    addFiltersToUrl,
    filters,
  };
};

export default useFilterManagement;
