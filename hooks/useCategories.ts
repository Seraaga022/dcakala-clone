import { TCategory } from "@/utils/types/Category";

const useCategories = () => {
  const data: undefined | TCategory[] = [
    { name: "درب اتوماتیک ایور Ivor", slug: "automatic-gate/ivor" },
    { name: "جک درب پارکینگ", slug: "automatic-gate" },
  ];
  const isLoading: boolean | undefined = false;
  const error: Error | undefined = undefined;
  return { data, isLoading, error };
};

export default useCategories;
