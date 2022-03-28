export default function SingleProductsingleProduct() {
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Product Details</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Product Details</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

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
                              <a className="lightbox-image" data-fancybox="gallery" href="static/picture/1.webp">
                                <img src="static/picture/1.webp" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a className="lightbox-image" data-fancybox="gallery" href="static/picture/28.webp">
                                <img src="static/picture/28.webp" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a className="lightbox-image" data-fancybox="gallery" href="static/picture/37.webp">
                                <img src="static/picture/37.webp" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a className="lightbox-image" data-fancybox="gallery" href="static/picture/45.webp">
                                <img src="static/picture/45.webp" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                            <div className="swiper-slide">
                              <a className="lightbox-image" data-fancybox="gallery" href="static/picture/53.webp">
                                <img src="static/picture/53.webp" width="570" height="541" alt="Image-HasTech" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-container single-product-nav single-product-nav-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="static/picture/nav-1.webp" width="127" height="127" alt="Image-HasTech" />
                            </div>
                            <div className="swiper-slide">
                              <img src="static/picture/nav-2.webp" width="127" height="127" alt="Image-HasTech" />
                            </div>
                            <div className="swiper-slide">
                              <img src="static/picture/nav-3.webp" width="127" height="127" alt="Image-HasTech" />
                            </div>
                            <div className="swiper-slide">
                              <img src="static/picture/nav-4.webp" width="127" height="127" alt="Image-HasTech" />
                            </div>
                            <div className="swiper-slide">
                              <img src="static/picture/nav-5.webp" width="127" height="127" alt="Image-HasTech" />
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
                        <div className="rating-box-wrap">
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
                        </div>
                        <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
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
                          <a className="btn-theme" href="shop-cart.html">Add to Cart</a>
                        </div>
                        <div className="product-wishlist-compare">
                          <a href="shop-wishlist.html"><i className="pe-7s-like"></i>Add to Wishlist</a>
                          <a href="shop-compare.html"><i className="pe-7s-shuffle"></i>Add to Compare</a>
                        </div>
                        <div className="product-info-footer">
                          <h6 className="code"><span>Code :</span>Ch-256xl</h6>
                          <div className="social-icons">
                            <span>Share</span>
                            <a href="#/"><i className="fa fa-facebook"></i></a>
                            <a href="#/"><i className="fa fa-dribbble"></i></a>
                            <a href="#/"><i className="fa fa-pinterest-p"></i></a>
                          </div>
                        </div>
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
                  <ul className="nav product-tab-nav" id="ReviewTab" role="tablist">
                    <li role="presentation">
                      <a className="active" id="information-tab" data-bs-toggle="pill" href="#information" role="tab" aria-controls="information" aria-selected="true">Information</a>
                    </li>
                    <li role="presentation">
                      <a id="description-tab" data-bs-toggle="pill" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
                    </li>
                    <li role="presentation">
                      <a id="reviews-tab" data-bs-toggle="pill" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews <span>(05)</span></a>
                    </li>
                  </ul>
                  <div className="tab-content product-tab-content" id="ReviewTabContent">
                    <div className="tab-pane fade show active" id="information" role="tabpanel" aria-labelledby="information-tab">
                      <div className="product-information">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                      <div className="product-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                      <div className="product-review-content">
                        <div className="review-content-header">
                          <h3>Customer Reviews</h3>
                          <div className="review-info">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star-o"></li>
                            </ul>
                            <span className="review-caption">Based on 5 reviews</span>
                            <span className="review-write-btn">Write a review</span>
                          </div>
                        </div>

                        {/* <!--== Start Reviews Form Item ==--> */}
                        <div className="reviews-form-area">
                          <h4 className="title">Write a review</h4>
                          <div className="reviews-form-content">
                            <form action="#">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="for_name">Name</label>
                                    <input id="for_name" className="form-control" type="text" placeholder="Enter your name" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="for_email">Email</label>
                                    <input id="for_email" className="form-control" type="email" placeholder="john.smith@example.com" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <span className="title">Rating</span>
                                    <ul className="review-rating">
                                      <li className="fa fa-star-o"></li>
                                      <li className="fa fa-star-o"></li>
                                      <li className="fa fa-star-o"></li>
                                      <li className="fa fa-star-o"></li>
                                      <li className="fa fa-star-o"></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="for_review-title">Review Title</label>
                                    <input id="for_review-title" className="form-control" type="text" placeholder="Give your review a title" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="for_comment">Body of Review (1500)</label>
                                    <textarea id="for_comment" className="form-control" placeholder="Write your comments here"></textarea>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-submit-btn">
                                    <button type="submit" className="btn-submit">Post comment</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* <!--== End Reviews Form Item ==--> */}

                        <div className="reviews-content-body">
                          {/* <!--== Start Reviews Content Item ==--> */}
                          <div className="review-item">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                            </ul>
                            <h3 className="title">Awesome shipping service!</h3>
                            <h5 className="sub-title"><span>Nantu Nayal</span> no <span>Sep 30, 2018</span></h5>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href="#/">Report as Inappropriate</a>
                          </div>
                          {/* <!--== End Reviews Content Item ==--> */}

                          {/* <!--== Start Reviews Content Item ==--> */}
                          <div className="review-item">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star-o"></li>
                              <li className="fa fa-star-o"></li>
                              <li className="fa fa-star-o"></li>
                              <li className="fa fa-star-o"></li>
                            </ul>
                            <h3 className="title">Low Quality</h3>
                            <h5 className="sub-title"><span>Oliv hala</span> no <span>Sep 30, 2018</span></h5>
                            <p>My Favorite White Sneakers From Splurge To Save the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <a href="#/">Report as Inappropriate</a>
                          </div>
                          {/* <!--== End Reviews Content Item ==--> */}

                          {/* <!--== Start Reviews Content Item ==--> */}
                          <div className="review-item">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                            </ul>
                            <h3 className="title">Excellent services!</h3>
                            <h5 className="sub-title"><span>Halk Marron</span> no <span>Sep 30, 2018</span></h5>
                            <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            <a href="#/">Report as Inappropriate</a>
                          </div>
                          {/* <!--== End Reviews Content Item ==--> */}

                          {/* <!--== Start Reviews Content Item ==--> */}
                          <div className="review-item">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star-o"></li>
                              <li className="fa fa-star-o"></li>
                            </ul>
                            <h3 className="title">Price is very high</h3>
                            <h5 className="sub-title"><span>Musa</span> no <span>Sep 30, 2018</span></h5>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <a href="#/">Report as Inappropriate</a>
                          </div>
                          {/* <!--== End Reviews Content Item ==--> */}

                          {/* <!--== Start Reviews Content Item ==--> */}
                          <div className="review-item">
                            <ul className="review-rating">
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star"></li>
                              <li className="fa fa-star-o"></li>
                            </ul>
                            <h3 className="title">Normal</h3>
                            <h5 className="sub-title"><span>Muhammad</span> no <span>Sep 30, 2018</span></h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                            <a href="#/">Report as Inappropriate</a>
                          </div>
                          {/* <!--== End Reviews Content Item ==--> */}
                        </div>

                        {/* <!--== Start Reviews Pagination Item ==--> */}
                        <div className="review-pagination">
                          <span className="pagination-pag">1</span>
                          <span className="pagination-pag">2</span>
                          <span className="pagination-next">Next »</span>
                        </div>
                        {/* <!--== End Reviews Pagination Item ==--> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Product Single Area Wrapper ==--> */}

        {/* <!--== Start Product Area Wrapper ==--> */}
        <section className="product-area product-best-seller-area">
          <div className="container pt--0">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 className="title">Related Products</h3>
                  <div className="desc">
                    <p>There are many variations of passages of Lorem Ipsum available</p>
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
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
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
                              <h4 className="title"><a href="">Modern Smart Shoes</a></h4>
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
                      <div className="swiper-slide">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
                                <img src="static/picture/7.webp" width="270" height="274" alt="Image-HasTech" />
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
                              <h4 className="title"><a href="">Quickiin Mens shoes</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="swiper-slide">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
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
                              <h4 className="title"><a href="">Rexpo Womens shoes</a></h4>
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
                      <div className="swiper-slide">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
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
                              <h4 className="title"><a href="">Leather Mens Slipper</a></h4>
                              <div className="prices">
                                <span className="price">$240.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--== End prPduct Item ==--> */}
                      </div>
                      <div className="swiper-slide">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
                                <img src="static/picture/5.webp" width="270" height="274" alt="Image-HasTech" />
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
                              <h4 className="title"><a href="">Primitive Mens shoes</a></h4>
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
                      <div className="swiper-slide">
                        {/* <!--== Start Product Item ==--> */}
                        <div className="product-item">
                          <div className="inner-content">
                            <div className="product-thumb">
                              <a href="">
                                <img src="static/picture/6.webp" width="270" height="274" alt="Image-HasTech" />
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
                              <h4 className="title"><a href="">Simple Fabric Shoe</a></h4>
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
                    </div>
                  </div>
                  {/* <!--== Add Swiper Arrows ==--> */}
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
        {/* <!--== End Product Area Wrapper ==--> */}
      </main>
    </>
  );
}