import { MinimumDiscount } from "components/discount";
import { get } from "components/fetch";
import React, { useContext, useEffect, useState } from "react";

export default function Home(){
  // const minnewShoesNumber = 1, maxnewShoesNumber = 2;
  // const [newShoesNumber, setNewShoesNumber] =useState<number>(1);
  const [discount, setDiscount] = useState<number>(0);
  useEffect(() => {
    get('/Product/getdiscount/').then(data => {
      setDiscount(data.discount);
    });
  }, [])

  return(
    <>
      <main className="main-content">
          <section className="home-slider-area">
            <div className="swiper-container home-slider-container default-slider-container">
              <div className="swiper-wrapper home-slider-wrapper slider-default">
                <div className="swiper-slide swiper-slide-active">
                  <div className="slider-content-area" style={{ backgroundImage: "url('/static/assets/img/shape/1.webp')" }}>
                    <div className="container">
                      <div className="slider-container">
                        <div className="row justify-content-between align-items-center">
                          <MinimumDiscount discount={discount}/>    
                          {/* <div className="col-sm-6 col-md-6">
                            <div className="slider-thumb">
                              <div className="thumb scene">
                                <span className="scene-layer" data-depth=".3"><img src={`/static/picture/slider-0${newShoesNumber}.webp`} width="461" height="489" alt="Image-HasTech" /></span>
                              </div>
                              <div className="shape-group mousemove">
                                <div className="shape-group-one mousemove-layer" data-speed=".8" style={{ backgroundImage: "url('/static/assets/img/shape/2.webp')" }}></div>
                                <div className="shape-group-two scene"><span className="scene-layer" data-depth=".6"><img src="/static/picture/33.webp" width="471" height="462" alt="Image-HasTech" /></span></div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <h2 className="slider-text-shape">NEW 2022</h2>
                  </div>
                </div>
              </div>

              {/* <div className="swiper-btn-wrap">
                <div className="swiper-btn-prev">
                  <i className={`pe-7s-angle-left ${newShoesNumber > 1 ? "" : "disabled"}`} onClick={() => {newShoesNumber > 1 ? setNewShoesNumber(newShoesNumber - 1) : setNewShoesNumber(maxnewShoesNumber)}}></i>
                </div>
                <div className="swiper-btn-next">
                  <i className={`pe-7s-angle-right ${newShoesNumber < maxnewShoesNumber ? "" : "disabled"}`} onClick={() => {newShoesNumber < maxnewShoesNumber ? setNewShoesNumber(newShoesNumber + 1) : setNewShoesNumber(minnewShoesNumber) }}></i>
                </div>
              </div> */}
            </div>
          </section>

          {/* 鞋子的分类 */}
          <section className="product-area product-collection-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="product-collection">
                    <div className="inner-content">
                      <div className="product-collection-content">
                        <div className="content">
                          <h3 className="title"><a href="/shop">Sports Shoes</a></h3>
                          <h4 className="price">From $95.00</h4>
                        </div>
                      </div>
                      <div className="product-collection-thumb" style={{ backgroundImage: "url('/static/assets/img/shop/collection/1.webp')"}}></div>
                      <a className="banner-link-overlay" href="shop"></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="product-collection">
                    <div className="inner-content">
                      <div className="product-collection-content">
                        <div className="content">
                          <h3 className="title"><a href="/shop">Latest Shoes</a></h3>
                          <h4 className="price">From $90.00</h4>
                        </div>
                      </div>
                      <div className="product-collection-thumb" style={{ backgroundImage: "url('/static/assets/img/shop/collection/2.webp')" }}></div>
                      <a className="banner-link-overlay" href="shop"></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="product-collection">
                    <div className="inner-content">
                      <div className="product-collection-content">
                        <div className="content">
                          <h3 className="title"><a href="/shop">Office Shoes</a></h3>
                          <h4 className="price">From $82.00</h4>
                        </div>
                      </div>
                      <div className="product-collection-thumb" style={{ backgroundImage: "url('/static/assets/img/shop/collection/3.webp')" }}></div>
                      <a className="banner-link-overlay" href="shop"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product-area product-default-area">
            <div className="container pt--0">
              <div className="row">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h3 className="title">畅销产品</h3>
                    <div className="desc">
                      {/* <p>There are many variations of passages of Lorem Ipsum available</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-flag">
                          <ul>
                            <li className="discount">-10%</li>
                          </ul>
                        </div>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                        <div className="prices">
                          <span className="price-old">$100</span>
                          <span className="sep">-</span>
                          <span className="price">$240.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
                        <div className="prices">
                          <span className="price">$140.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-flag">
                          <ul>
                            <li className="discount">-10%</li>
                          </ul>
                        </div>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
                        <div className="prices">
                          <span className="price-old">$60</span>
                          <span className="sep">-</span>
                          <span className="price">$260.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Hollister V-Neck Knit</a></h4>
                        <div className="prices">
                          <span className="price">$880.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3"> 
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Primitive Mens shoes</a></h4>
                        <div className="prices">
                          <span className="price">$500.00</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="col-sm-6 col-lg-3"> 
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-flag">
                          <ul>
                            <li className="discount">-10%</li>
                          </ul>
                        </div>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">New Womens High Hills</a></h4>
                        <div className="prices">
                          <span className="price-old">$300</span>
                          <span className="sep">-</span>
                          <span className="price">$333.00</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="col-sm-6 col-lg-3"> 
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">Simple Fabric Shoe</a></h4>
                        <div className="prices">
                          <span className="price">$133.00</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div className="col-sm-6 col-lg-3"> 
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <a href="/single-product">
                          <img src="/static/picture/8.webp" width="270" height="274" alt="Image-HasTech" />
                        </a>
                        <div className="product-flag">
                          <ul>
                            <li className="discount">-10%</li>
                          </ul>
                        </div>
                        <div className="product-action">
                          <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                          <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                          <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                          </button>
                          <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                        </div>
                        <a className="banner-link-overlay" href="shop"></a>
                      </div>
                      <div className="product-info">
                        <div className="category">
                          <ul>
                            <li><a href="/shop">Men</a></li>
                            <li className="sep">/</li>
                            <li><a href="/shop">Women</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/single-product">exclusive mens shoe</a></h4>
                        <div className="prices">
                          <span className="price-old">$300</span>
                          <span className="sep">-</span>
                          <span className="price">$420.00</span>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </section> 
    
          {/* <section className="bg-color-f2 position-relative z-index-1">
            <div className="container pt--0 pb--0">
              <div className="row divider-wrap divider-style1">
                <div className="col-lg-6">
                  <div className="divider-content" data-title="NEW">
                    <h4 className="sub-title">Saving 50%</h4>
                    <h2 className="title">All Online Store</h2>
                    <p className="desc">Offer Available All Shoes & Products</p>
                    <a className="btn-theme" href="shop">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-layer-wrap">
              <div className="bg-layer-style z-index--1 parallax" data-speed="1.05" style={{ backgroundImage: "url('/static/assets/img/photos/bg1.webp')" }}></div>
            </div>
          </section>   */}
          <section className="product-area product-best-seller-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h3 className="title">爆款</h3>
                    <div className="desc">
                      {/* <p>There are many variations of passages of Lorem Ipsum available</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="product-slider-wrap">
                    <div className="swiper-container product-slider-col4-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"> 
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-flag">
                                  <ul>
                                    <li className="discount">-10%</li>
                                  </ul>
                                </div>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Modern Smart Shoes</a></h4>
                                <div className="prices">
                                  <span className="price-old">$200</span>
                                  <span className="sep">-</span>
                                  <span className="price">$240.00</span>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                        <div className="swiper-slide"> 
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
                                <div className="prices">
                                  <span className="price">$440.00</span>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                        <div className="swiper-slide"> 
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-flag">
                                  <ul>
                                    <li className="discount">-10%</li>
                                  </ul>
                                </div>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
                                <div className="prices">
                                  <span className="price-old">$130</span>
                                  <span className="sep">-</span>
                                  <span className="price">$333.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                                <div className="prices">
                                  <span className="price">$540.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                  
                        </div>
                        <div className="swiper-slide">
                  
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Primitive Mens shoes</a></h4>
                                <div className="prices">
                                  <span className="price-old">$40</span>
                                  <span className="sep">-</span>
                                  <span className="price">$280.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                  
                        </div>
                        <div className="swiper-slide">
                  
                          <div className="product-item">
                            <div className="inner-content">
                              <div className="product-thumb">
                                <a href="/single-product">
                                  <img src="/static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                                </a>
                                <div className="product-flag">
                                  <ul>
                                    <li className="discount">-10%</li>
                                  </ul>
                                </div>
                                <div className="product-action">
                                  <a className="btn-product-wishlist" href="shop-wishlist"><i className="fa fa-heart"></i></a>
                                  <a className="btn-product-cart" href="shop-cart"><i className="fa fa-shopping-cart"></i></a>
                                  <button type="button" className="btn-product-quick-view-open">
                                    <i className="fa fa-arrows"></i>
                                  </button>
                                  <a className="btn-product-compare" href="shop-compare"><i className="fa fa-random"></i></a>
                                </div>
                                <a className="banner-link-overlay" href="shop"></a>
                              </div>
                              <div className="product-info">
                                <div className="category">
                                  <ul>
                                    <li><a href="/shop">Men</a></li>
                                    <li className="sep">/</li>
                                    <li><a href="/shop">Women</a></li>
                                  </ul>
                                </div>
                                <h4 className="title"><a href="/single-product">Simple Fabric Shoe</a></h4>
                                <div className="prices">
                                  <span className="price-old">$400</span>
                                  <span className="sep">-</span>
                                  <span className="price">$580.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                  
                        </div>
                      </div>
                    </div>
                    <div className="product-swiper-btn-wrap">
                      <div className="product-swiper-btn-prev">
                        <i className="fa fa-arrow-left"></i>
                      </div>
                      <div className="product-swiper-btn-next">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
           */}
          {/* <section className="blog-area blog-default-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h3 className="title">Latest Blog</h3>
                    <div className="desc">
                      <p>There are many variations of passages of Lorem Ipsum available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <a href="/blog-details"><img src="/static/picture/111.webp" width="370" height="260" alt="Image-HasTech" /></a>
                      </div>
                      <div className="content">
                        <div className="meta-post">
                          <ul>
                            <li className="post-date"><i className="fa fa-calendar"></i><a href="/blog">27,Jun 2030</a></li>
                            <li className="author-info"><i className="fa fa-user"></i><a href="/blog">Oaklee Odom</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/blog-details">Lorem ipsum dolor ametcons adipisicing elit sed</a></h4>
                        <a className="post-btn" href="blog">Read More</a>
                      </div>
                    </div>
                  </div>
          
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <a href="/blog-details"><img src="/static/picture/23.webp" width="370" height="260" alt="Image-HasTech" /></a>
                      </div>
                      <div className="content">
                        <div className="meta-post">
                          <ul>
                            <li className="post-date"><i className="fa fa-calendar"></i><a href="/blog">27,Jun 2030</a></li>
                            <li className="author-info"><i className="fa fa-user"></i><a href="/blog">Oaklee Odom</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/blog-details">Celebrity Daughter Opens About Upto Having Her Eye</a></h4>
                        <a className="post-btn" href="blog">Read More</a>
                      </div>
                    </div>
                  </div>
          
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <a href="/blog-details"><img src="/static/picture/32.webp" width="370" height="260" alt="Image-HasTech" /></a>
                      </div>
                      <div className="content">
                        <div className="meta-post">
                          <ul>
                            <li className="post-date"><i className="fa fa-calendar"></i><a href="/blog">27,Jun 2030</a></li>
                            <li className="author-info"><i className="fa fa-user"></i><a href="/blog">Oaklee Odom</a></li>
                          </ul>
                        </div>
                        <h4 className="title"><a href="/blog-details">Romantic Love Stories Of Hollywood Popular Celebrities</a></h4>
                        <a className="post-btn" href="blog">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
      </main>
    </>
  );
}
