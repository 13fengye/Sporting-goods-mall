import { get } from "components/fetch";
import { NEXT_PUBLIC_URL } from "components/url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductNo } from "store/interface";


export async function getServerSideProps(context: { params: { product_no: string } }) {
  
  return {
    props: {
      product_no: context.params.product_no
    }, // will be passed to the page component as props
  };
}

export default function ProductDetail({ product_no }:{product_no:string}) {
  const [productNo, setProductNo] = useState<ProductNo[]>();
  const [productInfos, setProductInfos] = useState<ProductNo[]>();
  const [oldPrice, setOldPrice] = useState<number>();
  const [newPrice, setNewPrice] = useState<number>();
  const [showColorGroup, setShowColorGroup] = useState<string[]>([]);
  const [showSizeGroup, setShowSizeGroup] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedProductInfo, setSelectedProductInfo] = useState<ProductNo>();
  const [quantity, setQuantity] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      await get(`/Product/getproduct/${product_no}/`).then((data) => {
        setProductNo(data.productNo);
        setProductInfos(data.productInfos);
        setOldPrice(data.productNo[0].standard_price);
        let colorGroup: string[] = [];
        let sizeGroup: string[] = [];
        if (selectedSize) {
          const optionalCharges = data.productInfos.filter((productInfo: ProductNo) => {
            return productInfo.size === selectedSize || productInfo.custom_size_id === selectedSize;
          });
          optionalCharges.forEach((optionalCharge: ProductNo) => {
            if (optionalCharge.color === "自定义颜色") {
              if (optionalCharge.custom_color_id) {
                colorGroup.push(optionalCharge.custom_color_id);
              } else {
                colorGroup.push("无");
              }
            } else {
              if (optionalCharge.color) {
                colorGroup.push(optionalCharge.color);
              }
            }
          })
        } else {
          data.productInfos.map((productInfo: ProductNo) => {
            if (productInfo.color === "自定义颜色") {
              if (productInfo.custom_color_id) {
                colorGroup.push(productInfo.custom_color_id);
              } else {
                colorGroup.push("无");
              }
            } else {
              if (productInfo.color) {
                colorGroup.push(productInfo.color);
              }
            }
          });
        }
        if (selectedColor) {
          const optionalCharges = data.productInfos.filter((productInfo: ProductNo) => {
            return productInfo.color === selectedColor || productInfo.custom_color_id === selectedColor;
          });
          optionalCharges.forEach((optionalCharge: ProductNo) => {
            if (optionalCharge.size === "自定义尺寸") {
              if (optionalCharge.custom_size_id) {
                sizeGroup.push(optionalCharge.custom_size_id);
              } else {
                sizeGroup.push("无");
              }
            } else {
              if (optionalCharge.size) {
                sizeGroup.push(optionalCharge.size);
              }
            }
          })
        } else {
          data.productInfos.map((productInfo: ProductNo) => {
            if (productInfo.size === "自定义尺寸") {
              if (productInfo.custom_size_id) {
                sizeGroup.push(productInfo.custom_size_id);
              } else {
                sizeGroup.push("无");
              }
            } else {
              if (productInfo.size) {
                sizeGroup.push(productInfo.size);
              }
            }
          })
        }
        if (selectedSize && selectedColor) {
          const getSelectedProductInfo:ProductNo = data.productInfos.filter((productInfo: ProductNo) => {
            return productInfo.color === selectedColor || productInfo.custom_color_id === selectedColor && productInfo.size === selectedSize || productInfo.custom_size_id === selectedSize;
          })[0];
          setSelectedProductInfo(getSelectedProductInfo);
          const discountPrice = getSelectedProductInfo.isDiscount ? getSelectedProductInfo.discount : data.productNo[0].standard_price;
          const percentagePrice = getSelectedProductInfo.isPercentage ? Math.round(data.productNo[0].standard_price * data.productNo[0].thisPercentage_id * 10) / 10 : data.productNo[0].standard_price;
          setNewPrice(discountPrice >= percentagePrice ? percentagePrice: discountPrice);
        } else if (selectedSize && showColorGroup[0] === "无") {
          const getSelectedProductInfo:ProductNo = data.productInfos.filter((productInfo: ProductNo) => {
            return productInfo.size === selectedSize || productInfo.custom_size_id === selectedSize;
          })[0];
          setSelectedProductInfo(getSelectedProductInfo);
          const discountPrice = getSelectedProductInfo.isDiscount ? getSelectedProductInfo.discount : data.productNo[0].standard_price;
          const percentagePrice = getSelectedProductInfo.isPercentage ? Math.round(data.productNo[0].standard_price * data.productNo[0].thisPercentage_id * 10) / 10 : data.productNo[0].standard_price;
          setNewPrice(discountPrice >= percentagePrice ? percentagePrice: discountPrice);
        } else if (selectedColor && showSizeGroup[0] === "无") {
          const getSelectedProductInfo:ProductNo = data.productInfos.filter((productInfo: ProductNo) => {
            return productInfo.color === selectedColor || productInfo.custom_color_id === selectedColor;
          })[0];
          setSelectedProductInfo(getSelectedProductInfo);
          const discountPrice = getSelectedProductInfo.isDiscount ? getSelectedProductInfo.discount : data.productNo[0].standard_price;
          const percentagePrice = getSelectedProductInfo.isPercentage ? Math.round(data.productNo[0].standard_price * data.productNo[0].thisPercentage_id * 10) / 10 : data.productNo[0].standard_price;
          setNewPrice(discountPrice >= percentagePrice ? percentagePrice: discountPrice);
        } else {
          setSelectedProductInfo(undefined);
          setNewPrice(undefined);
        }
        setShowColorGroup(Array.from(new Set(colorGroup)));
        setShowSizeGroup(Array.from(new Set(sizeGroup)));
      });
    };
    loadProduct();
    setQuantity(0);
  }, [selectedSize, selectedColor])
  if (!productNo || !productInfos) {
    return <div></div>;
  }
  console.log(selectedProductInfo);
  // console.log(productNo);
  // console.log(productInfos);

  return (
    <>
      <main className="main-content">
        {/* <!--== Start Product Single Area Wrapper ==--> */}
        <section className="product-area product-single-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-single-item">
                  <div className="row">
                    <div className="col-xl-6">
                      {/* <!--== Start Product Thumbnail Area ==--> */}
                      <div className="product-single-thumb">
                        <div className="swiper-container single-product-thumb single-product-thumb-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href={`${NEXT_PUBLIC_URL}/${productNo[0].img}`}
                                target="_blank"
                              >
                                <img
                                  src={`${NEXT_PUBLIC_URL}/${productNo[0].img}`}
                                  width="400"
                                  height="500"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-container single-product-nav single-product-nav-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                href={`${NEXT_PUBLIC_URL}/${productNo[0].img2}`}
                                target="_blank"
                              >
                                <img
                                  src={`${NEXT_PUBLIC_URL}/${productNo[0].img2}`}
                                  width="127"
                                  height="127"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--== End Product Thumbnail Area ==--> */}
                    </div>
                    <div className="col-xl-6">
                      {/* <!--== Start Product Info Area ==--> */}
                      <div className="product-single-info">
                        <h3 className="main-title">{productNo[0].name}</h3>
                        <div className="prices">
                          <div className="price">
                            <span className="pro-price">
                              <span
                                className={
                                  newPrice && oldPrice !== newPrice ? "old" : ""
                                }
                              >
                                ￥{oldPrice}
                              </span>
                              {newPrice && oldPrice !== newPrice && (
                                <span>￥{newPrice}</span>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom"></div>
                        {/* <div className="rating-box-wrap">
                          <div className="rating-box">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="review-status">
                            <a href="javascript:void(0)">(5 Customer Review)</a>
                          </div>
                        </div> */}
                        {/* <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmll tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad mill veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip exet
                          commodo consequat. Duis aute irure dolor
                        </p> */}
                        {showColorGroup.length > 0 && (
                          <h6 className="title font-size-20">选择颜色</h6>
                        )}
                        <div className="product-color">
                          <ul className="color-list">
                            {showColorGroup.flatMap((color: string) => {
                              return (
                                <li
                                  className={
                                    selectedColor === `${color}` ||
                                    color === "无"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() => {
                                    if (color !== "无") {
                                      if (selectedColor === color) {
                                        setSelectedColor(undefined);
                                      } else {
                                        setSelectedColor(color);
                                      }
                                    }
                                  }}
                                >
                                  {color}
                                </li>
                              );
                              // className="active"
                            })}
                          </ul>
                        </div>
                        {showSizeGroup.length > 0 && (
                          <h6 className="title font-size-20">选择尺码</h6>
                        )}
                        <div className="product-size">
                          <ul className="size-list">
                            {showSizeGroup.flatMap((size: string) => {
                              return (
                                <li
                                  className={
                                    selectedSize === `${size}` || size === "无"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() => {
                                    if (size !== "无") {
                                      if (selectedSize === size) {
                                        setSelectedSize(undefined);
                                      } else {
                                        setSelectedSize(size);
                                      }
                                    }
                                  }}
                                >
                                  {size}
                                </li>
                              );
                              // className="active"
                            })}
                          </ul>
                        </div>
                        {!selectedProductInfo && <div className="margin-bottom-10 font-color-red font-size-20">请选择颜色和尺码</div>}
                        <div className="product-quick-action" style={selectedProductInfo ? { display: '-webkit-box' }: {}}>
                          <div className="qty-wrap">
                            {selectedProductInfo && (
                              <button
                                className="border-radius-30 margin-right-10"
                                disabled={quantity <= 0}
                                onClick={() => {
                                  setQuantity(quantity - 1);
                                }}
                              >
                                -
                              </button>
                            )}
                            <div className="pro-qty">
                              <input
                                type="text"
                                disabled
                                title="Quantity"
                                value={quantity}
                              />
                            </div>
                            {selectedProductInfo && (
                              <button
                                className="border-radius-30 margin-left-10"
                                disabled={
                                  quantity > selectedProductInfo.stock! - 1
                                }
                                onClick={() => {
                                  setQuantity(quantity + 1);
                                }}
                              >
                                +
                              </button>
                            )}
                          </div>
                          <button className={`border-radius-30 ${selectedProductInfo && quantity>0 ? 'btn-theme' : 'btn-theme-disabled'}`} disabled={selectedProductInfo === undefined || quantity<=0} onClick={()=>{ router.push(`/checkout/${selectedProductInfo!.id}/${quantity}`) }}>
                            立即购买
                          </button>
                          <button className={`border-radius-30 ${selectedProductInfo && quantity>0 ? 'btn-theme btn-margin-top' : 'btn-theme-disabled'}`} disabled={selectedProductInfo === undefined || quantity<=0} onClick={()=>{ console.log('加购物车') }}>
                            加入购物车
                          </button>
                        </div>
                        {selectedProductInfo && (
                          <div>库存 {selectedProductInfo.stock}</div>
                        )}
                        <div className="border-bottom"></div>
                        {/* <div className="product-wishlist-compare">
                          <a href="/shop-wishlist">
                            <i className="pe-7s-like"></i>Add to Wishlist
                          </a>
                          <a href="/shop-compare">
                            <i className="pe-7s-shuffle"></i>Add to Compare
                          </a>
                        </div> */}
                        {/* <div className="product-info-footer">
                          <h6 className="code">
                            <span>Code :</span>Ch-256xl
                          </h6>
                          <div className="social-icons">
                            <span>Share</span>
                            <a href="#/">
                              <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#/">
                              <i className="fa fa-dribbble"></i>
                            </a>
                            <a href="#/">
                              <i className="fa fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div> */}
                      </div>
                      {/* <!--== End Product Info Area ==--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="product-review-tabs-content">
                  <ul
                    className="nav product-tab-nav"
                    id="ReviewTab"
                    role="tablist"
                  >
                    <li role="presentation">
                      <a
                        className="active"
                        id="information-tab"
                        data-bs-toggle="pill"
                        href="#information"
                        role="tab"
                        aria-controls="information"
                        aria-selected="true"
                      >
                        商品描述
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        id="description-tab"
                        data-bs-toggle="pill"
                        href="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="false"
                      >
                        商品详情
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content product-tab-content"
                    id="ReviewTabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div
                        className="product-information"
                        style={{ textAlign: "center" }}
                      >
                        <a
                          href={`${NEXT_PUBLIC_URL}/${productNo[0].details}`}
                          target="_blank"
                        >
                          <img
                            src={`${NEXT_PUBLIC_URL}/${productNo[0].details}`}
                            alt="Image-HasTech"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-description">
                        <p>{productNo[0].describe}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Product Single Area Wrapper ==--> */}
      </main>
    </>
  );
}
