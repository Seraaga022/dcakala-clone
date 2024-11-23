"use client";
import React from "react";
import { vazirmatn } from "@/app/Fonts";
import { FilterValueT, TFilter, TFilterItems } from "@/utils/types/Category";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { ReadonlyURLSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ComponentProps {
  filterItems: TFilterItems;
  router: AppRouterInstance;
  searchParams: ReadonlyURLSearchParams;
}

interface FilterManagementState {
  filters: TFilter[];
  expandedAccordions: Record<string, boolean>;
}

export default class FilterManagement extends React.Component<
  ComponentProps,
  FilterManagementState
> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      filters: [] as TFilter[],
      expandedAccordions: {} as Record<string, boolean>,
    };
  }

  initialFiltersState = [] as TFilter[];
  initialAccordionState = {} as Record<string, boolean>;

  filterItemsChangeHandler = (
    newItem: FilterValueT & Pick<TFilter, "brandName">
  ) => {
    this.setState(
      (prevState) => {
        const newFilters = prevState.filters.map((filter) => {
          if (filter.brandName === newItem.brandName) {
            const valueExists = filter.values.some(
              (val) => val.valueId === newItem.valueId
            );
            return {
              ...filter,
              values: valueExists
                ? filter.values.filter((val) => val.valueId !== newItem.valueId)
                : [
                    ...filter.values,
                    {
                      valueTitle: newItem.valueTitle,
                      valueId: newItem.valueId,
                    },
                  ],
            };
          }
          return filter;
        });

        // Check if brandName exists in filters
        const brandExists = newFilters.some(
          (filter) => filter.brandName === newItem.brandName
        );

        // If the brand doesn't exist and we are adding a new value, push the new brand to filters
        if (!brandExists) {
          newFilters.push({
            brandName: newItem.brandName,
            values: [
              { valueTitle: newItem.valueTitle, valueId: newItem.valueId },
            ],
          });
        }

        // Return the updated filters, filtering out any brand with no values
        return {
          ...prevState,
          filters: newFilters.filter((filter) => filter.values.length > 0),
        };
      },
      // callback function
      () => {
        return null;
      }
    );
  };

  getFilters = () => {
    console.log(this.state.filters);
    return this.state.filters;
  };

  existsInFilters = (targetValue: string, targetBrandName: string) => {
    const filters = this.state.filters;
    if (!filters || !Array.isArray(filters)) return;
    for (const filter of filters) {
      if (filter.brandName === targetBrandName) {
        return filter.values.some((val) => val.valueTitle === targetValue);
      }
    }
    return false;
  };

  getFilterValuesTitle = (): string[] | undefined => {
    const filters = this.state.filters;
    if (!filters || !Array.isArray(filters)) return;
    const data: string[] = [];
    filters.forEach((f) => f.values.forEach((v) => data.push(v.valueTitle)));
    return data;
  };

  deleteFromFilters = (valueTitle: string) => {
    this.setState((prevState) => {
      const updatedFilters = this.state.filters.map((f) => ({
        ...f,
        values: f.values.filter((v) => v.valueTitle !== valueTitle),
      }));
      return {
        ...prevState,
        filters: updatedFilters.filter((f) => f.values.length > 0),
      };
    });
  };

  getAllFiltersAsSearchParams = () => {
    const newSearchParams = new URLSearchParams(
      this.props.searchParams.toString()
    );

    this.state.filters.forEach((filter) => {
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

  addFiltersToUrl = () => {
    // {
    //   "attr[برند-سازنده_3][0]": "167",
    //   "attr[برند-سازنده_3][1]": "169",
    //   "page": "1"
    // }
    this.props.router.push(
      window.location + "?" + this.getAllFiltersAsSearchParams()
    );
  };

  removeFiltersFromUrl = () => {
    const urlParts = window.location.toString().split("?");
    this.props.router.push(urlParts[0]);
    this.setState((prevState) => ({
      ...prevState,
      filters: this.initialFiltersState,
    }));
  };

  areSearchParamsEmpty = () => {
    return this.props.searchParams.size === 0;
  };

  handleAccordionChange =
    (title: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      const prevExpandedAccordions = this.state.expandedAccordions;
      this.setState((prevState) => ({
        ...prevState,
        expandedAccordions: { ...prevExpandedAccordions, [title]: newExpanded },
      }));
    };

  componentDidMount = () => {
    console.log("this only runs when the component loaded for first time");
  };

  componentDidUpdate = () => {
    console.log("this runs whenever the component updates");
  };

  componentWillUnmount = () => {
    console.log(
      "do stuff that you dont want to continue after the component unmounted (removed from DOM)"
    );
  };

  render() {
    const { filterItems } = this.props;
    return (
      <Box>
        {filterItems.map((filter) => (
          <>
            <Box
              key={filter.title.concat(Math.random().toString())}
              className="filter-item"
            >
              <Accordion
                expanded={this.state.expandedAccordions[filter.title]}
                onChange={this.handleAccordionChange(filter.title)}
                dir="rtl"
                sx={{
                  boxShadow: "none",
                  "--Paper-shadow": "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="filters-accordion-content"
                  id="filters-accordion-header"
                >
                  <Box>
                    <Typography
                      fontFamily={vazirmatn.style.fontFamily}
                      fontSize="14px"
                    >
                      {filter.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack className="filter-children-wrapper">
                    {filter.items.map((subItem) => (
                      <Box key={subItem.title.concat(Math.random().toString())}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.existsInFilters(
                                subItem.title,
                                filter.title
                              )}
                              name={subItem.title}
                              id={subItem.title.concat(subItem.id.toString())}
                              size="small"
                              color="warning"
                              onChange={() =>
                                this.filterItemsChangeHandler({
                                  valueTitle: subItem.title,
                                  valueId: subItem.id,
                                  brandName: filter.title,
                                })
                              }
                              sx={{
                                "&.MuiCheckbox-root": { pr: 0 },
                              }}
                            />
                          }
                          label={subItem.title}
                          labelPlacement="end"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontFamily: vazirmatn.style.fontFamily,
                              fontSize: "13px",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Divider variant="middle" />
          </>
        ))}
      </Box>
    );
  }
}
