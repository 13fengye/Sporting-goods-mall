import { get } from "components/fetch";
import React, { useEffect, useState } from "react";
import { ProductNo } from "store/interface";
import { NEXT_PUBLIC_URL } from "components/url";
const AllProducts = ({ belonging, type }: { belonging: string; type: string }) => {
  console.log(belonging, type);
  const [allProducts, setAallProducts] = useState<ProductNo[]>();
  const [selectedLelonging, setSelectedLelonging] = useState<string>("默认");
  const [selectedType, setSelectedType] = useState<string>("默认");
  const [belongings, setBelongings] = useState<{belonging: string,img: string}[]>([]);
  const [types, setTypes] = useState<{ type: string; img: string }[]>([]);
  const [productsLength, setproductsLength] = useState<number>(0);


  useEffect(() => {
    const a: { [x: string]: [] }[] = [];
    const loadBelongings = async () => {
      await get("/Product/getbelongings/").then((data) => {
        const belongingsData = data.belongs.sort(
          (a: { belonging: string }, b: { belonging: string }) =>
            b.belonging.localeCompare(a.belonging)
        );
        setBelongings(belongingsData);
      });
    };
    loadBelongings();

    const loadType = async () => {
      await get('/Product/getalltypes/').then((data)=>
        setTypes(data.types)
      );
    };
    loadType();

    const loadNewProducts = async () => {
      await get(`/Product/getallproducts/${selectedLelonging}/${selectedType}`).then((data) => {
        setAallProducts(data.products);
        setproductsLength(data.products.length);
      });
    };
    loadNewProducts();
  }, [selectedLelonging, selectedType]);

  // return <div></div>

  if (!allProducts) return <div></div>;
  console.log(belongings, types);

  return (
    <>
      <main className="main-content">
        {/* <!--== Start Product Area Wrapper ==--> */}
        <section className="product-area product-default-area">
          <div className="container">
            <div className="row flex-xl-row-reverse justify-content-between margin-top-50 margin-top">
              <div className="col-xl-9">
                <div className="row">
                  <div className="shop-top-bar">
                    <div className="shop-top-left">
                      <p className="pagination-line">
                        找到 <a className="red-color">{productsLength}</a>{" "}
                        个商品
                      </p>
                    </div>
                    <div className="shop-top-center">
                      <nav className="product-nav">
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="nav-grid-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-grid"
                            type="button"
                            role="tab"
                            aria-controls="nav-grid"
                            aria-selected="true"
                          >
                            <i className="fa fa-th"></i>
                          </button>
                          <button
                            className="nav-link"
                            id="nav-list-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-list"
                            type="button"
                            role="tab"
                            aria-controls="nav-list"
                            aria-selected="false"
                          >
                            <i className="fa fa-list"></i>
                          </button>
                        </div>
                      </nav>
                    </div>
                    <div className="shop-top-right">
                      <form action="" method="">
                        <div className="shop-sort">
                          <span>类别:</span>
                          <select
                            className="form-select"
                            aria-label="Sort select example"
                            id="belonging"
                            onClick={(e) => {
                              setSelectedLelonging(e.currentTarget.value);
                            }}
                          >
                            <option selected={false}>默认</option>
                            {belongings.map(
                              (belonging: {
                                belonging: string;
                                img: string;
                              }) => {
                                return (
                                  <option value={`${belonging.belonging}`}>
                                    {belonging.belonging}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                        <div className="shop-sort">
                          <select
                            className="form-select"
                            aria-label="Sort select example"
                            id="belonging"
                            style={{ marginLeft: "60px" }}
                            onClick={(e) => {
                              setSelectedType(e.currentTarget.value);
                            }}
                          >
                            <option selected={false}>默认</option>
                            {types.map((type: { type: string; img: string }) => {
                              return <option value={`${type.type}`}>{type.type}</option>;
                            })}
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-grid"
                        role="tabpanel"
                        aria-labelledby="nav-grid-tab"
                      >
                        <div className="row">
                          {allProducts.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-sm-6 col-lg-4">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a href={`/product/${product.product_no}`}>
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                      {/* <div className="product-flag">
                                        <ul>
                                          <li className="discount">新品</li>
                                        </ul>
                                      </div> */}
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a href={`/product/${product.product_no}`}>
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
                                      <div>已售 {product.sold}</div>
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
                          {allProducts.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-md-12">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item product-list-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a href={`/product/${product.product_no}`}>
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                      {/* <div className="product-flag">
                                        <ul>
                                          <li className="discount">新品</li>
                                        </ul>
                                      </div> */}
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a href={`/product/${product.product_no}`}>
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
                                        href={`/product/${product.product_no}`}
                                      >
                                        去购买
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                {/* <!--== End prPduct Item ==--> */}
                              </div>
                            );
                          })}
                          { allProducts.length === 0 && 
                            <div>
                              <h1 className="search-result">没有搜索到相关商品</h1>
                            </div> }

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
};;

export default AllProducts;