import { get } from "components/fetch";
import ProductNavbar from "components/product-navbar";
import React, { useContext, useEffect, useState } from "react";
import { ProductNo } from "store/interface";
import { NEXT_PUBLIC_URL } from "components/url";
import { NextPage } from "next";

export async function getServerSideProps(context: { params: { belonging: string, type: string } }) {
  
  return {
    props: {
      belonging: context.params.belonging,
      type: context.params.type,
    }, // will be passed to the page component as props
  };
}

const ClassifiedGoods: NextPage<any> = ({
  belonging,
  type,
}: {
  belonging: string;
  type: string;
}) => {
  console.log(belonging, type);
  const [classifiedGoods, setClassifiedGoods] = useState<ProductNo[]>();

  useEffect(() => {
    const loadNewProducts = async () => {
      await get(`/Product/getclassifiedgoods/${belonging}/${type}`).then((data) => {
        setClassifiedGoods(data.products);
      });
    };
    loadNewProducts();
  }, []);

  // return <div></div>

  if (!classifiedGoods) return <div></div>;

  return (
    <>
      <main className="main-content">
        {/* <!--== Start Product Area Wrapper ==--> */}
        <section className="product-area product-default-area">
          <div className="container">
            <div className="row flex-xl-row-reverse justify-content-between margin-top-50">
              <div className="col-xl-9">
                <div className="row">
                  <ProductNavbar />
                  <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-grid"
                        role="tabpanel"
                        aria-labelledby="nav-grid-tab"
                      >
                        <div className="row">
                          {classifiedGoods.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-sm-6 col-lg-4">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a href="/single-product">
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                      <div className="product-flag">
                                        <ul>
                                          <li className="discount">新品</li>
                                        </ul>
                                      </div>
                                      <div className="product-action">
                                        <a
                                          className="btn-product-wishlist"
                                          href="/shop-wishlist"
                                        >
                                          <i className="fa fa-heart"></i>
                                        </a>
                                        <a
                                          className="btn-product-cart"
                                          href="/shop-cart"
                                        >
                                          <i className="fa fa-shopping-cart"></i>
                                        </a>
                                      </div>
                                      <a
                                        className="banner-link-overlay"
                                        href="/"
                                      ></a>
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a href="/single-product">
                                          {product.name}
                                        </a>
                                      </h4>
                                      <div className="prices">
                                        {/* <span className="price-old">
                                          $240.00
                                        </span>
                                        <span className="sep">-</span> */}
                                        <span className="price">
                                          ￥{product.standard_price}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--== End prPduct Item ==--> */}
                              </div>
                            );
                          })}

                          {/* 分页 */}
                          {/* <div className="col-12">
                            <div className="pagination-items">
                              <ul className="pagination justify-content-end mb--0">
                                <li>
                                  <a className="active" href="/">
                                    1
                                  </a>
                                </li>
                                <li>
                                  <a href="/shop-four-columns">2</a>
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-list"
                        role="tabpanel"
                        aria-labelledby="nav-list-tab"
                      >
                        <div className="row">
                          {classifiedGoods.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-md-12">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item product-list-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a href="/single-product">
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                      <div className="product-flag">
                                        <ul>
                                          <li className="discount">新品</li>
                                        </ul>
                                      </div>
                                      <div className="product-action">
                                        <a
                                          className="btn-product-wishlist"
                                          href="/shop-wishlist"
                                        >
                                          <i className="fa fa-heart"></i>
                                        </a>
                                        <a
                                          className="btn-product-cart"
                                          href="/shop-cart"
                                        >
                                          <i className="fa fa-shopping-cart"></i>
                                        </a>
                                      </div>
                                      <a
                                        className="banner-link-overlay"
                                        href="/"
                                      ></a>
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a href="/single-product">
                                          {product.name}
                                        </a>
                                      </h4>
                                      <div className="prices">
                                        {/* <span className="price-old">$240.00</span>
                                    <span className="sep">-</span> */}
                                        <span className="price">
                                          ￥{product.standard_price}
                                        </span>
                                      </div>
                                      <p>{product.describe}</p>
                                      <a
                                        className="btn-theme btn-sm"
                                        href="/shop-cart"
                                      >
                                        加入购物车
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--== End prPduct Item ==--> */}
                              </div>
                            );
                          })}

                          {/* 分页 */}
                          {/* <div className="col-12">
                            <div className="pagination-items">
                              <ul className="pagination justify-content-end mb--0">
                                <li>
                                  <a className="active" href="/">
                                    1
                                  </a>
                                </li>
                                <li>
                                  <a href="/shop-four-columns">2</a>
                                </li>
                                <li>
                                  <a href="/shop-three-columns">3</a>
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Product Area Wrapper ==--> */}
      </main>
    </>
  );
};

export default ClassifiedGoods;