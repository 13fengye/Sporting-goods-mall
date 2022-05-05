import PageHeaderArea from "./pageHeaderArea";

export default function SingleProductsingleProduct() {
  return (
    <>
      <main className="main-content">
        <PageHeaderArea />

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
                                href="/static/picture/1.webp"
                              >
                                <img
                                  src="/static/picture/1.webp"
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/static/picture/28.webp"
                              >
                                <img
                                  src="/static/picture/28.webp"
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/static/picture/37.webp"
                              >
                                <img
                                  src="/static/picture/37.webp"
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/static/picture/45.webp"
                              >
                                <img
                                  src="/static/picture/45.webp"
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="/static/picture/53.webp"
                              >
                                <img
                                  src="/static/picture/53.webp"
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-container single-product-nav single-product-nav-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                src="/static/picture/nav-1.webp"
                                width="127"
                                height="127"
                                alt="Image-HasTech"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="/static/picture/nav-2.webp"
                                width="127"
                                height="127"
                                alt="Image-HasTech"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="/static/picture/nav-3.webp"
                                width="127"
                                height="127"
                                alt="Image-HasTech"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="/static/picture/nav-4.webp"
                                width="127"
                                height="127"
                                alt="Image-HasTech"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="/static/picture/nav-5.webp"
                                width="127"
                                height="127"
                                alt="Image-HasTech"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--== End Product Thumbnail Area ==--> */}
                    </div>
                    <div className="col-xl-6">
                      {/* <!--== Start Product Info Area ==--> */}
                      <div className="product-single-info">
                        <h3 className="main-title">Leather Mens Slipper</h3>
                        <div className="prices">
                          <span className="price">$20.19</span>
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
                        <div className="product-color">
                          <h6 className="title">Color</h6>
                          <ul className="color-list">
                            <li data-bg-color="#586882"></li>
                            <li className="active" data-bg-color="#505050"></li>
                            <li data-bg-color="#73707a"></li>
                            <li data-bg-color="#c7bb9b"></li>
                          </ul>
                        </div>
                        <div className="product-size">
                          <h6 className="title">Size</h6>
                          <ul className="size-list">
                            <li>S</li>
                            <li className="active">M</li>
                            <li>L</li>
                            <li>XL</li>
                          </ul>
                        </div>
                        <div className="product-quick-action">
                          <div className="qty-wrap">
                            <div className="pro-qty">
                              <input type="text" title="Quantity" value="1" />
                            </div>
                          </div>
                          <a className="btn-theme" href="/shop-cart">
                            Add to Cart
                          </a>
                        </div>
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
                      <div className="product-information">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim adlo minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in tun
                          tuni reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserun mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rel aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim adlo minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in tun
                          tuni reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserun mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rel aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur.
                        </p>
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