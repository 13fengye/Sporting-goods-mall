export interface Belonging {
  belonging: string;
  img: string;
}

export interface ProductNo {
  id?: number;
  stock?: number;
  isPercentage: boolean;
  discount?: number;
  isDiscount: boolean;
  custom_color_id?: string;
  custom_size_id?: string;
  size?: string;
  color?: string;
  details?: any;
  img2?: string;
  img: string;
  name: string;
  product_no: string;
  sold: number;
  standard_price: number;
  describe: string;
}
