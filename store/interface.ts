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

export interface Cart {
  id: number;
  quantity: number;
  commodityInfos_id: string;
  user_id: string;
  name: string;
  price: number;
  img: string;
}

export interface OrderInfos {
  id: number;
  price: number;
  productinfos_id: string;
  created: string;
  user_id: string;
  state: string;
  remark: string;
}

export interface UserAddress {
  username: string;
  name: string;
  address: string;
  phone: string;
}
    