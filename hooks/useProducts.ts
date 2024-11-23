import { TProduct } from "@/utils/types/Product";

const useProducts = () => {
  const data: undefined | TProduct[] = [
    {
      id: 0,
      title: "ریموت جک پارکینگی ایور- Remote Ivor",
      image:
        "https://dashboard.dcakala.com/public/images/product/remote-ivor/2024/08/remote-ivor_medium_2x.webp",
      slug: "automatic-gate/ivor/remote-ivor.html",
    },
  ];
  const isLoading: boolean | undefined = false;
  const error: Error | undefined = undefined;
  return { data, isLoading, error };
};

export default useProducts;
