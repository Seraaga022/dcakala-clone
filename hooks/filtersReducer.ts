import { TFilter } from "@/utils/types/Category";
import { FiltersReducerT } from "@/utils/types/FiltersReducer";

export const initialFiltersState: TFilter[] = [];

export default function filtersReducer(
  state: FiltersReducerT["state"],
  action: FiltersReducerT["action"]
) {
  switch (action.type) {
    case "DELETE":
      return state
        .map((filter) => ({
          ...filter,
          values: filter.values.filter(
            (v) => v.valueTitle !== action.payload.valueTitle
          ),
        }))
        .filter((f) => f.values.length > 0);
    case "HANDLE_CHANGE": {
      const newItem = action.payload.newItem;
      const newFilters = state.map((filter) => {
        if (filter.brandName === newItem.brandName)
          return {
            ...filter,
            values: filter.values.find((val) => val.valueId === newItem.valueId)
              ? filter.values.filter((val) => val.valueId !== newItem.valueId)
              : [
                  ...filter.values,
                  {
                    valueTitle: newItem.valueTitle,
                    valueId: newItem.valueId,
                  },
                ],
          };
        return filter;
      });

      // Check if an object with the brand exists
      const existingBrandIndex = newFilters.findIndex(
        (f) => f.brandName === newItem.brandName
      );

      // check if the values is empty
      if (existingBrandIndex === -1) {
        return [
          ...newFilters,
          {
            brandName: newItem.brandName,
            values: [
              {
                valueTitle: newItem.valueTitle,
                valueId: newItem.valueId,
              },
            ],
          },
        ];
      }

      return newFilters.filter((f) => f.values.length > 0);
    }
    case "RESET":
      return initialFiltersState;
    default:
      return state;
  }
}
