import router from "next/router";
import { AuthContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { Cart } from "store/interface";
import { post } from "./fetch";
import { NEXT_PUBLIC_URL } from "./url";

export default function Footer({
  authUsername,
  setAuthState,
  currState,
  belongings,
  types,
  cartList
}: {
  authUsername: string | false;
  setAuthState: any;
  currState: string;
  belongings: {
    belonging: string;
    img: string;
  }[];
  types: {
    [x: string]: [];
  }[];
  cartList: Cart[];
}) {
  const [authState] = useContext(AuthContext);
  const [discount, setDiscount] = useState<number>(0);
  const subTotal = cartList.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const [keyWord, setKeyWord] = useState<string>("");

  return (
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
                        <h2
                          className="title"
                          style={{
                            fontFamily: "fantasy",
                            fontSize: "-webkit-xxx-large",
                            color: "white",
                          }}
                        >
                          13fengye
                        </h2>
                      </a>
                    </div>
                    <p className="desc">一家不正经的体育用品商城网站</p>
                    {/* <div className="social-icons">
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-dribbble"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-pinterest-p"></i></a>
                      <a href="javascript:;" target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* 服务 */}
              {/* <div className="col-md-6 col-lg-3">
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
              </div> */}
              <div className="col-md-6 col-lg-3">
                <div className="widget-item widget-account-item">
                  <h4 className="widget-title">我的</h4>
                  <h4
                    className="widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#widgetId-2"
                  >
                    我的
                  </h4>
                  <div
                    id="widgetId-2"
                    className="collapse widget-collapse-body"
                  >
                    <div className="collapse-body">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li>
                            <a href="/account">我的账户</a>
                          </li>
                          <li>
                            <a href="/cart/shopping-cart">购物车</a>
                          </li>
                          <li>
                            <a href="/shop">全部商品</a>
                          </li>
                          {/* <li>
                            <a href="/contact">联系我们</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="widget-item">
                  <h4 className="widget-title">联系我们</h4>
                  <h4
                    className="widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#widgetId-3"
                  >
                    联系我们
                  </h4>
                  <div
                    id="widgetId-3"
                    className="collapse widget-collapse-body"
                  >
                    <div className="collapse-body">
                      <div className="widget-contact-wrap">
                        <ul>
                          <li>
                            <span>地址:</span> 广东省梅州市嘉应学院{" "}
                          </li>
                          <li>
                            <span>电话:</span> 12345678910{" "}
                          </li>
                          <li>
                            <span>邮箱:</span> 2457036415@qq.com
                          </li>
                          <li>
                            <span>网站源码:</span>
                            <a href="https://github.com/13fengye/Sporting-goods-mall">
                              {" "}
                              Github Code
                            </a>
                          </li>
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
      <div id="scroll-to-top" className="scroll-to-top">
        <span className="fa fa-angle-up"></span>
      </div>
      <aside className="product-quick-view-modal">
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close">
              <span className="close-icon">
                <i className="fa fa-close"></i>
              </span>
            </button>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="thumb">
                  <img
                    src="/static/picture/1.webp"
                    width="570"
                    height="541"
                    alt="Alan-Shop"
                  />
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-6 col-12">
                <div className="content">
                  <h4 className="title">Space X Bag For Office</h4>
                  <div className="prices">
                    <del className="price-old">$85.00</del>
                    <span className="price">$70.00</span>
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia,
                  </p>
                  <div className="quick-view-select">
                    <div className="quick-view-select-item">
                      <label htmlFor="forSize" className="form-label">
                        Size:
                      </label>
                      <select
                        className="form-select"
                        id="forSize"
                        required={false}
                      >
                        <option selected={false} value="">
                          s
                        </option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                      </select>
                    </div>
                    <div className="quick-view-select-item">
                      <label htmlFor="forColor" className="form-label">
                        Color:
                      </label>
                      <select
                        className="form-select"
                        id="forColor"
                        required={false}
                      >
                        <option selected={false} value="">
                          red
                        </option>
                        <option>green</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>white</option>
                      </select>
                    </div>
                  </div>
                  <div className="action-top">
                    <div className="pro-qty">
                      <input
                        type="text"
                        id="quantity20"
                        title="Quantity"
                        value="1"
                      />
                    </div>
                    <button className="btn btn-black">Add to cart</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="canvas-overlay"></div>
      </aside>
      <div
        className="aside-cart-wrapper offcanvas offcanvas-end"
        tabIndex={-1}
        id="AsideOffcanvasCart"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h1 id="offcanvasRightLabel"></h1>
          <button
            className="btn-aside-cart-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            购物车<i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="aside-cart-product-list">
            {cartList.map((cart: Cart) => {
              return (
                <li className="product-list-item">
                  <a href="/single-product">
                    <img src={`${NEXT_PUBLIC_URL}/${cart.img}`} alt="Image-HasTech" />
                    <span className="product-title">{cart.name}</span>
                  </a>
                  <span className="product-price">
                    {cart.quantity} × ￥{cart.price}
                  </span>
                </li>
              );
            })}
            {cartList.length === 0 && (
              <li className="product-list-item">购物车空空如也</li>
            )}
          </ul>
          <p className="cart-total">
            <span>小计:</span>
            <span className="amount">￥{subTotal}</span>
          </p>
          <p className="cart-total">
            <span>优惠:</span>
            <span className="amount">￥{discount}</span>
          </p>
          <p className="cart-total">
            <span>总计:</span>
            <span className="amount">￥{subTotal - discount}</span>
          </p>
          <div className="cart-button-text-center">
            <a
              className="btn-theme"
              data-margin-bottom="10"
              href="/cart/shopping-cart"
            >
              查看购物车
            </a>
          </div>
          <div
            className="cart-button-text-center"
            onClick={() => {
              if (cartList.length === 0) {
                alert("请先添加商品");
              }
            }}
          >
            <a className="btn-theme" href="/shop-checkout">结算</a>
          </div>
        </div>
      </div>
      <aside
        className="aside-search-box-wrapper offcanvas offcanvas-top"
        tabIndex={-1}
        id="AsideOffcanvasSearch"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="d-none" id="offcanvasTopLabel">
            Aside Search
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="pe-7s-close"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="container pt--0 pb--0">
            <div className="search-box-form-wrap">
              <div className="search-note">
                <p>输入关键词</p>
              </div>
              <div className="search-form position-relative">
                <label htmlFor="search-input" className="visually-hidden">
                  搜索
                </label>
                <input
                  id="search-input"
                  type="search"
                  className="form-control"
                  placeholder="搜索"
                  onChange={(e) => { setKeyWord(e.currentTarget.value) }}
                />
                <button className="search-button" style={keyWord === '' ? { backgroundColor: '#eb3e327d' } : {}} disabled={keyWord === ''}
                  onClick={() => {
                    router.push(`/search/${keyWord}/`);
                  }}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="off-canvas-wrapper offcanvas offcanvas-start"
        tabIndex={-1}
        id="AsideOffcanvasMenu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h1 id="offcanvasExampleLabel"></h1>
          <button
            className="btn-menu-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            菜单<i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="info-items">
            {authUsername && (
              <ul>
                {/* <li className="number"><a href="tel://0123456789"><i className="fa fa-phone"></i>+00 123 456 789</a></li> */}
                {/* <li className="email"><a><i className="fa fa-envelope"></i>demo@example.com</a></li> */}
                <li className="account">
                  <a href="/account">
                    <i className="fa fa-user"></i>账户
                  </a>
                </li>
                <li className="account">
                  <a
                    onClick={() => {
                      setAuthState(currState);
                      window.localStorage.setItem(
                        "auth",
                        JSON.stringify({ jwt: "", username: "", email: "" })
                      );
                    }}
                  >
                    <i className="fa fa-user"></i>退出
                  </a>
                </li>
              </ul>
            )}
            {!authUsername && (
              <ul className="sub-menu">
                <li>
                  <a href="/account-login">登录</a>
                </li>
                <li>
                  <a href="/account-register">注册</a>
                </li>
              </ul>
            )}
          </div>

          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a href="/shop">全部商品</a>
                <ul className="sub-menu">
                  {belongings.map(
                    (thisbelonging: { belonging: string; img: string }) => {
                      const index = types.findIndex(
                        (type: { [x: string]: [] }) =>
                          type[thisbelonging.belonging] !== undefined
                      );
                      return (
                        index !== -1 &&
                        types[index][thisbelonging.belonging].length > 0 && (
                          <li>
                            <a className="white-color">
                              {thisbelonging.belonging}
                            </a>
                            <ul className="sub-menu">
                              {types[index][thisbelonging.belonging].map(
                                (type: string) => {
                                  return (
                                    <li>
                                      <a
                                        href={`/classified-goods/${thisbelonging.belonging}/${type}`}
                                      >
                                        {type}
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </li>
                        )
                      );
                    }
                  )}
                </ul>
              </li>
              { authState.jwt !== "" && <li>
                <a href="/cart/shopping-cart">购物车</a>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}