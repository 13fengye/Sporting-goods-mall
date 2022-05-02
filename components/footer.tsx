import { useEffect, useState } from "react";

export default function Footer({
  authUsername,
  setAuthState,
  currState,
  belongings,
  types
}: {
  authUsername: string | false,
  setAuthState: any,
  currState: string,
  belongings: {
    belonging: string;
    img: string;
  }[],
  types: {
    [x: string]: [];
  }[]
}) {
  return(
    <>
      <footer className="footer-area">
        <div className="footer-main">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="widget-item">
                  <div className="about-widget-wrap">
                    <div className="widget-logo-area">
                      <a href="/">
                        <h2 className="title" style={{ fontFamily: "fantasy", fontSize: "-webkit-xxx-large", color:"white" }}>13fengye</h2>
                      </a>
                    </div>
                    <p className="desc">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                    {/* <div className="social-icons">
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-dribbble"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-pinterest-p"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget-item widget-services-item">
                  <h4 className="widget-title">Services</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Services</h4>
                  <div id="widgetId-1" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li><a href="/contact">Home monitoring</a></li>
                          <li><a href="/contact">Air Filters</a></li>
                          <li><a href="/contact">Professional installation</a></li>
                          <li><a href="/contact">Smart Buildings</a></li>
                          <li><a href="/contact">For contractors</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget-item widget-account-item">
                  <h4 className="widget-title">My Account</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-2">My Account</h4>
                  <div id="widgetId-2" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li><a href="/account-login">My Account</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/shop-cart">Shopping cart</a></li>
                          <li><a href="/shop">Shop</a></li>
                          <li><a href="/account-login">Services Login</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget-item">
                  <h4 className="widget-title">Contact Info</h4>
                  <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">Contact Info</h4>
                  <div id="widgetId-3" className="collapse widget-collapse-body">
                    <div className="collapse-body">
                      <div className="widget-contact-wrap">
                        <ul>
                          <li><span>Address:</span> Your address goes here.</li>
                          <li><span>Phone//fax:</span> <a href="tel://0123456789">0123456789</a></li>
                          <li><span>Email:</span> <a href="mailto://demo@example.com">demo@example.com</a></li>
                          <li><a target="_blank" href="javascript:;">www.example.com</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up"></span></div>
      <aside className="product-quick-view-modal">
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close">
              <span className="close-icon"><i className="fa fa-close"></i></span>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="thumb">
                  <img src="/static/picture/1.webp" width="570" height="541" alt="Alan-Shop" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="content">
                  <h4 className="title">Space X Bag For Office</h4>
                  <div className="prices">
                    <del className="price-old">$85.00</del>
                    <span className="price">$70.00</span>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,</p>
                  <div className="quick-view-select">
                    <div className="quick-view-select-item">
                      <label htmlFor="forSize" className="form-label">Size:</label>
                      <select className="form-select" id="forSize" required={false}>
                        <option selected={false} value="">s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                      </select>
                    </div>
                    <div className="quick-view-select-item">
                      <label htmlFor="forColor" className="form-label">Color:</label>
                      <select className="form-select" id="forColor" required={false}>
                        <option selected={false} value="">red</option>
                        <option>green</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>white</option>
                      </select>
                    </div>
                  </div>
                  <div className="action-top">
                    <div className="pro-qty">
                      <input type="text" id="quantity20" title="Quantity" value="1" />
                    </div>
                    <button className="btn btn-black">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas-overlay"></div>
      </aside>
      <div className="aside-cart-wrapper offcanvas offcanvas-end" tabIndex={-1} id="AsideOffcanvasCart" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h1 id="offcanvasRightLabel"></h1>
          <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i className="fa fa-chevron-right"></i></button>
        </div>
        <div className="offcanvas-body">
          <ul className="aside-cart-product-list">
            <li className="product-list-item">
              <a href="#/" className="remove">×</a>
              <a href="/single-product">
                <img src="/static/picture/14.webp" width="90" height="110" alt="Image-HasTech" />
                <span className="product-title">Leather Mens Slipper</span>
              </a>
              <span className="product-price">1 × £69.99</span>
            </li>
            <li className="product-list-item">
              <a href="#/" className="remove">×</a>
              <a href="/single-product">
                <img src="/static/picture/2.webp" width="90" height="110" alt="Image-HasTech" />
                <span className="product-title">Quickiin Mens shoes</span>
              </a>
              <span className="product-price">1 × £20.00</span>
            </li>
          </ul>
          <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
          <a className="btn-theme" data-margin-bottom="10" href="shop-cart">View cart</a>
          <a className="btn-theme" href="shop-checkout">Checkout</a>
          <a className="d-block text-end lh-1" href="shop-checkout"><img src="/static/picture/paypal.webp" width="133" height="26" alt="Has-image" /></a>
        </div>
      </div>
      <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex={-1} id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="pe-7s-close"></i></button>
        </div>
        <div className="offcanvas-body">
          <div className="container pt--0 pb--0">
            <div className="search-box-form-wrap">
              <div className="search-note">
                <p>Start typing and press Enter to search</p>
              </div>
              <form action="#" method="post">
                <div className="search-form position-relative">
                  <label htmlFor="search-input" className="visually-hidden">Search</label>
                  <input id="search-input" type="search" className="form-control" placeholder="Search entire store…" />
                  <button className="search-button"><i className="fa fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </aside>
      <div className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex={-1} id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 id="offcanvasExampleLabel"></h1>
          <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">菜单<i className="fa fa-chevron-left"></i></button>
        </div>
        <div className="offcanvas-body">
          <div className="info-items">
            {authUsername && <ul>
              {/* <li className="number"><a href="tel://0123456789"><i className="fa fa-phone"></i>+00 123 456 789</a></li> */}
              <li className="email"><a><i className="fa fa-envelope"></i>demo@example.com</a></li>
              <li className="account"><a href="/account-login"><i className="fa fa-user"></i>账户</a></li>
              <li className="account"><a onClick={() => {
                setAuthState(currState);
                window.localStorage.setItem('auth', JSON.stringify({ "jwt": "", "username": "", "email": "" }));
              }}><i className="fa fa-user"></i>退出</a></li>
              
            </ul>}
            {!authUsername && <ul className="sub-menu">
              <li><a href="/account-login">登录</a></li>
              <li><a href="/account-register">注册</a></li>
            </ul>}
          </div>

          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li><a href="#">首页</a>
              </li>
              <li><a href="/about-us">关于我们</a></li>
              <li><a href="#">商品</a>
                <ul className="sub-menu">

                  { belongings.map((thisbelonging: { belonging: string, img: string }) => { 
                    // console.log(types[belongings.indexOf(thisbelonging)]);
                    const index = types.findIndex((type: { [x: string]: [] }) => type[thisbelonging.belonging] !== undefined);
                    // if (index !== -1) console.log(types[index][thisbelonging.belonging]);
                    return(
                      index !== -1 && types[index][thisbelonging.belonging].length > 0 && <li><a>{thisbelonging.belonging}</a>
                        <ul className="sub-menu">
                          { 
                            types[index][thisbelonging.belonging].map((type: string)=>{
                              return(
                                <li><a href={`/classified-goods/${thisbelonging.belonging}/${type}`}>{type}</a></li>
                              );
                            })
                          }
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li><a href="#">其他</a>
                <ul className="sub-menu">
                  <li><a href="/shop-cart">购物车</a></li>
                  <li><a href="/shop-checkout">结算</a></li>
                  <li><a href="/shop-wishlist">愿望清单</a></li>
                  <li><a href="/shop-compare">比较</a></li>
                </ul>
              </li>
              <li><a href="/contact">联系我们</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}