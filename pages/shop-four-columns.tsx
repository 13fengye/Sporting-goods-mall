export default function ShopFourColumns(){
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Product Page</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Product Page</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start Product Area Wrapper ==--> */}
        <section className="product-area product-default-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shop-top-bar">
                  <div className="shop-top-left">
                    <p className="pagination-line"><a href="shop.html">12</a> Product Found of <a href="shop.html">30</a></p>
                  </div>
                  <div className="shop-top-center">
                    <nav className="product-nav">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="fa fa-th"></i></button>
                        <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="fa fa-list"></i></button>
                      </div>
                    </nav>
                  </div>
                  <div className="shop-top-right">
                    <div className="shop-sort">
                      <span>Sort By :</span>
                      <select className="form-select" aria-label="Sort select example">
                        <option selected={false}>Default</option>
                        <option value="1">Popularity</option>
                        <option value="2">Average Rating</option>
                        <option value="3">Newsness</option>
                        <option value="4">Price Low to High</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                    <div className="row">
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/112.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/24.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/34.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/41.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-sm-6 col-xl-3">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/8.webp" width="270" height="274" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Primitive Men shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-12">
                        <div className="pagination-items">
                          <ul className="pagination justify-content-center mb--0">
                            <li><a href="shop-three-columns.html">1</a></li>
                            <li><a className="active" href="">2</a></li>
                            <li><a href="shop.html">3</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-1.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-2.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-3.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-4.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-5.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-flag">
                                <ul>
                                  <li className="discount">-10%</li>
                                </ul>
                              </div>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-md-12">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item product-list-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="single-product.html">
                                <img src="static/picture/list-6.webp" width="322" height="360" alt="Image-HasTech" />
                              </a>
                              <div className="product-action">
                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart"></i></a>
                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart"></i></a>
                                <button type="button" className="btn-product-quick-view-open">
                                  <i className="fa fa-arrows"></i>
                                </button>
                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random"></i></a>
                              </div>
                              <a className="banner-link-overlay" href="shop.html"></a>
                            </div>
                            <div className="product-info">
                              <div className="category">
                                <ul>
                                  <li><a href="shop.html">Men</a></li>
                                  <li className="sep">/</li>
                                  <li><a href="shop.html">Women</a></li>
                                </ul>
                              </div>
                              <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price-old">$300</span>
                                <span className="sep">-</span>
                                <span className="price">$240.00</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo, rerum rem soluta quisquam, repellat is deleniti omnis culpa ea quis provident dolore esse, offici modi dolorem nam cum eligendi enim!</p>
                              <a className="btn-theme btn-sm" href="shop-cart.html">Add To Cart</a>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="col-12">
                        <div className="pagination-items">
                          <ul className="pagination justify-content-center mb--0">
                            <li><a className="active" href="shop.html">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="shop-three-columns.html">3</a></li>
                          </ul>
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
}