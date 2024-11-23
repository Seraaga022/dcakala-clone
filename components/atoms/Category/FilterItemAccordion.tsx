"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import { vazirmatn } from "@/app/Fonts";
import { ExpandMore } from "@mui/icons-material";
import {
  FilterValueT,
  TFilter,
} from "@/components/template/Category/FiltersSideBar";

type TFilterItems = {
  title: string;
  items: Array<{ title: string; id: number }>;
};

const FilterItemAccordion = ({
  filter,
  ...props
}: {
  filter: TFilterItems;
  existsInFilters: (
    targetValue: string,
    targetBrandName: string
  ) => boolean | undefined;
  filterItemsChangeHandler: (
    newItem: FilterValueT & Pick<TFilter, "brandName">
  ) => void;
}) => {
  const [accordionExpanded, setAccordionExpanded] = React.useState<
    Record<string, boolean>
  >({});
  const handleAccordionChange =
    (title: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setAccordionExpanded((prevState) => ({
        ...prevState,
        [title]: newExpanded,
      }));
    };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <AnimatePresence>
        {
          <motion.div
            layout
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -20 }}
          >
            <Accordion
              expanded={accordionExpanded[filter.title]}
              onChange={handleAccordionChange(filter.title)}
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
                            checked={props.existsInFilters(
                              subItem.title,
                              filter.title
                            )}
                            size="small"
                            color="warning"
                            onChange={() =>
                              props.filterItemsChangeHandler({
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
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  );
};

export default FilterItemAccordion;
