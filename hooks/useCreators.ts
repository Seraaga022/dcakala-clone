import { TCreator } from "@/utils/types/Creator";

const useCreators = () => {
  const data: undefined | TCreator[] = [{ name: "ایور - IVOR", slug: "ivor" }];
  const isLoading: boolean | undefined = false;
  const error: Error | undefined = undefined; /* {
    message: "someting went wrong",
    name: "creators error",
  };*/
  return { data, isLoading, error };
};

export default useCreators;
