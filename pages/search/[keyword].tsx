import { get, post } from "components/fetch";
import ProductNavbar from "components/product-navbar";
import { NEXT_PUBLIC_URL } from "components/url";
import { useRouter } from "next/router";
import { AuthContext, ReFreshGlobalContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { ProductNo } from "store/interface";

export async function getServerSideProps(context: { params: { keyword: string } }) {
  
  return {
    props: {
      keyword: context.params.keyword,
    }, // will be passed to the page component as props
  };
}

export default function SearchProducts({
  keyword
}:{
  keyword: string
}) {
  const [searchProducts, setSearchProducts] = useState<ProductNo[]>([]);
  console.log(keyword);
  
  useEffect(()=>{
    const loadSearchProducts = async () => {
      await get(`/Product/searchproducts/${keyword}`).then((data) => {
        if (data.status === 200) {
          setSearchProducts(data.products);
        }
      });
    };
    loadSearchProducts();
  },[keyword]);

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
                  {searchProducts.length > 0 ? 
                    <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-grid"
                        role="tabpanel"
                        aria-labelledby="nav-grid-tab"
                      >
                        <div className="row">
                          {searchProducts.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-sm-6 col-lg-4">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a
                                        href={`/product/${product.product_no}`}
                                      >
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                      <a
                                        className="banner-link-overlay"
                                        href="/"
                                      ></a>
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a
                                          href={`/product/${product.product_no}`}
                                        >
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
                          {searchProducts.flatMap((product: ProductNo) => {
                            return (
                              <div className="col-md-12">
                                {/* <!--== Start Product Item ==--> */}
                                <div className="product-item product-list-item">
                                  <div className="inner-content">
                                    <div className="product-thumb">
                                      <a
                                        href={`/product/${product.product_no}`}
                                      >
                                        <img
                                          src={`${NEXT_PUBLIC_URL}/${product.img}`}
                                          width="270"
                                          height="270"
                                          alt="Image-HasTech"
                                        />
                                      </a>
                                    </div>
                                    <div className="product-info">
                                      <h4 className="title">
                                        <a
                                          href={`/product/${product.product_no}`}
                                        >
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
                  </div> : 
                  <div>
                    <h1 className="search-result">没有搜索到相关商品</h1>
                  </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Product Area Wrapper ==--> */}
      </main>
    </>
  );
}
