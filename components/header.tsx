import {  useEffect, useState } from "react";
import { get } from "./fetch";

export default function Header({ 
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
                    <li><a href="/"><span>首页</span></a></li>
                    <li className="has-submenu position-static"><a href="/#/"><span>分类</span></a>
                      <ul className="submenu-nav submenu-nav-mega column-3">
                        { belongings.map((thisbelonging: { belonging: string, img: string }) => { 
                          // console.log(types[belongings.indexOf(thisbelonging)]);
                          const index = types.findIndex((type: { [x: string]: [] }) => type[thisbelonging.belonging] !== undefined);
                          // if (index !== -1) console.log(types[index][thisbelonging.belonging]);
                          return(
                            index !== -1 && types[index][thisbelonging.belonging].length > 0 && <li className="mega-menu-item"><a className="mega-title"><span>{thisbelonging.belonging}</span></a>
                              <ul>
                                { 
                                  types[index][thisbelonging.belonging].map((type: string)=>{
                                    return(
                                      <li><a href={`/classified-goods/${thisbelonging.belonging}/${type}`}><span>{type}</span></a></li>
                                    );
                                  })
                                }
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li><a href="/contact"><span>联系我们</span></a></li>
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