import {
  CartFinalPriceFunctionPropsT,
  CartFinalPriceFunctionT,
  TCart,
} from "@/utils/types/Cart";

const useCart = () => {
  const data: undefined | TCart[] = [
    {
      id: 0,
      image:
        "https://dashboard.dcakala.com/public/images/product/kone-gates-folding-arm/2024/08/kone-gates-barrier-folding-arm_samll.webp",
      title: "راهبند کانه گیتس با بوم تاشو",
      price: 73000000,
      discount: 10,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "1",
    },
    {
      id: 1,
      image:
        "https://dashboard.dcakala.com/public/images/product/milan-mohest/2024/08/milan-automatic-gate-mohest-400-package-and-box_samll.webp",
      title: "جک درب پارکینگ میلان 400 مدل Mohest400",
      price: 9600000,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "2",
    },
    {
      id: 2,
      image:
        "https://dashboard.dcakala.com/public/images/product/kone-gates-folding-arm/2024/08/kone-gates-barrier-folding-arm_samll.webp",
      title: "راهبند کانه گیتس با بوم تاشو",
      price: 73000000,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "1",
    },
    {
      id: 3,
      image:
        "https://dashboard.dcakala.com/public/images/product/milan-mohest/2024/08/milan-automatic-gate-mohest-400-package-and-box_samll.webp",
      title: "جک درب پارکینگ میلان 400 مدل Mohest400",
      price: 9600000,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "2",
    },
  ];
  const isLoading: boolean | undefined = false;
  const error: Error | undefined = undefined;
  return { data, isLoading, error };
};

export default useCart;

export const useAltCart = () => {
  const data: undefined | TCart[] = [
    {
      id: 0,
      image:
        "https://dashboard.dcakala.com/public/images/product/kone-gates-folding-arm/2024/08/kone-gates-barrier-folding-arm_samll.webp",
      title: "راهبند کانه گیتس با بوم تاشو",
      price: 73000000,
      discount: 10,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "1",
    },
    {
      id: 1,
      image:
        "https://dashboard.dcakala.com/public/images/product/milan-mohest/2024/08/milan-automatic-gate-mohest-400-package-and-box_samll.webp",
      title: "جک درب پارکینگ میلان 400 مدل Mohest400",
      price: 9600000,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "2",
    },
    {
      id: 2,
      image:
        "https://dashboard.dcakala.com/public/images/product/kone-gates-folding-arm/2024/08/kone-gates-barrier-folding-arm_samll.webp",
      title: "راهبند کانه گیتس با بوم تاشو",
      price: 73000000,
      qntt: 1,
      color: { title: "نقره ای", value: "6b6666" },
      path: "1",
    },
  ];
  const isLoading: boolean | undefined = false;
  const error: Error | undefined = undefined;
  return { data, isLoading, error };
};

export class CartInfo {
  private cart: TCart[];

  constructor(cart: TCart[]) {
    this.cart = cart;
  }

  get calcTotalCartPrice() {
    return this.cart.reduce((accum, current) => current.price + accum, 0);
  }

  get caclTotalDiscount() {
    return this.cart.reduce(
      (accum, current) => (current.discount || 0) + accum,
      0
    );
  }

  calcFinalPrice = ({
    price = this.calcTotalCartPrice,
    discount,
  }: CartFinalPriceFunctionPropsT): CartFinalPriceFunctionT => {
    const totalDiscount = discount || this.caclTotalDiscount;
    const burnedMoney = price * (totalDiscount / 100);
    const finalPrice = price - burnedMoney;
    return {
      finalPrice,
      burnedMoney,
    };
  };
}
