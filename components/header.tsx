import { useContext, useEffect, useState } from "react";
import Footer from "./footer";

export default function Header({ 
  authUsername, 
  setAuthState,
  currState
}: {
  authUsername: string | false,
  setAuthState: any,
  currState: string
}) {

  return (
    <>
    <header className="main-header-wrapper position-relative">
      <div className="header-top">
        <div className="container pt--0 pb--0">
          <div className="row">
            <div className="col-12">
              <div style={{ textAlign: "right" }}>
                <div className="header-info-items">
                  <div className="info-items">
                    <ul style={{ display: "inline-block" }}>
                      { authUsername && <li className="email"><i className="fa fa-envelope"></i><span>{authUsername}</span></li>}
                      <li className="account"><i className="fa fa-user"></i>
                        {authUsername && <><a href="/account">账户</a> | <button style={{ borderRadius: '5px' }} onClick={() => {
                          setAuthState(currState);
                          window.localStorage.setItem('auth', JSON.stringify({ "jwt": "", "username": "", "email": ""}));
                        }}>退出</button></>}
                        {!authUsername &&  <><a href="/account-login">登录</a> | <a href="/account-register">注册</a></>}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container pt--0 pb--0">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="header-middle-align">
                <div className="header-middle-align-start">
                  <div className="header-logo-area">
                    <a href="/">
                      <h2 className="title" style={{ fontFamily: "fantasy", fontSize: "-webkit-xxx-large" }}>13fengye</h2>
                    </a>
                  </div>
                </div>
                <div className="header-middle-align-center">
                  <div className="header-search-area">
                    <form className="header-searchbox">
                      <input type="search" className="form-control" placeholder="搜索" />
                      <button className="btn-submit" type="submit"><i className="pe-7s-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="header-middle-align-end">
                  <div className="header-action-area">
                    <div className="shopping-search">
                      <button className="shopping-search-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i className="pe-7s-search icon"></i></button>
                    </div>
                    <div className="shopping-wishlist">
                      <a className="shopping-wishlist-btn" href="shop-wishlist">
                        <i className="pe-7s-like icon"></i>
                      </a>
                    </div>
                    <div className="shopping-cart">
                      <button className="shopping-cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="offcanvasRightLabel">
                        <i className="pe-7s-shopbag icon"></i>
                        <sup className="shop-count">02</sup>
                      </button>
                    </div>
                    <button className="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                      <i className="pe-7s-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area header-default">
        <div className="container">
          <div className="row no-gutter align-items-center position-relative">
            <div className="col-12">
              <div className="header-align">
                <div className="header-navigation-area position-relative">
                  <ul className="main-menu nav">
                    <li><a href="/#/"><span>首页</span></a></li>
                    <li className="has-submenu">
                      <ul className="submenu-nav">
                        <li><a href="/account"><span>Account</span></a></li>
                        <li><a href="/account-login"><span>Login</span></a></li>
                        <li><a href="/account-register"><span>Register</span></a></li>
                      </ul>
                    </li>
                    <li className="has-submenu position-static"><a href="/#/"><span>Shop</span></a>
                      <ul className="submenu-nav submenu-nav-mega column-3">
                        <li className="mega-menu-item"><a href="/#/" className="mega-title"><span>Shop Layout</span></a>
                          <ul>
                            <li><a href="/shop-three-columns"><span>Shop 3 Column</span></a></li>
                            <li><a href="/shop-four-columns"><span>Shop 4 Column</span></a></li>
                            <li><a href="/shop"><span>Shop Left Sidebar</span></a></li>
                            <li><a href="/shop-right-sidebar"><span>Shop Right Sidebar</span></a></li>
                          </ul>
                        </li>
                        <li className="mega-menu-item"><a href="/#/" className="mega-title"><span>Single Product</span></a>
                          <ul>
                            <li><a href="/single-normal-product"><span>Single Product Normal</span></a></li>
                            <li><a href="/single-product"><span>Single Product Variable</span></a></li>
                            <li><a href="/single-group-product"><span>Single Product Group</span></a></li>
                            <li><a href="/single-affiliate-product"><span>Single Product Affiliate</span></a></li>
                          </ul>
                        </li>
                        <li className="mega-menu-item"><a href="/#/" className="mega-title"><span>Others Pages</span></a>
                          <ul>
                            <li><a href="/shop-cart"><span>Shopping Cart</span></a></li>
                            <li><a href="/shop-checkout"><span>Checkout</span></a></li>
                            <li><a href="/shop-wishlist"><span>Wishlist</span></a></li>
                            <li><a href="/shop-compare"><span>Compare</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu"><a href="/#/"><span>Blog</span></a>
                      <ul className="submenu-nav submenu-nav-mega">
                        <li className="mega-menu-item"><a href="/#/" className="mega-title">Blog Layout</a>
                          <ul>
                            <li><a href="/blog">Blog Grid</a></li>
                            <li><a href="/blog-left-sidebar">Blog Left Sidebar</a></li>
                            <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="mega-menu-item"><a href="/#/" className="mega-title">Single Blog</a>
                          <ul>
                            <li><a href="/blog-details-no-sidebar">Blog Details</a></li>
                            <li><a href="/blog-details-left-sidebar">Blog Details Left Sidebar</a></li>
                            <li><a href="/blog-details">Blog Details Right Sidebar</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="/contact"><span>Contact</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}