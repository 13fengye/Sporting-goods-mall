import { get, post } from "components/fetch";
import Link from "next/link";
import { useState } from "react";
import PageHeaderArea from "./pageHeaderArea";
import { NEXT_PUBLIC_URL } from "components/url"

export default function Accountlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);


  return (
    <>
      <main className="main-content">
        <PageHeaderArea />

        {/* <!--== Start My Account Area Wrapper ==--> */}
        <section className="account-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="section-title text-center">
                  <h2 className="title">Login</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="login-form-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="username">用户名或邮箱 <span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" onChange={(e) => { setUsername(e.currentTarget.value) }} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">密码 <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" onChange={(e) => { setPassword(e.currentTarget.value) }}/>
                          <div style={{ fontFamily: 'cursive', color: !isLogin ? '#ff0000' : '#16e02c' }}>{error}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          {/* <Link href={"/account"}>
                            <a className="btn-login">Login</a>
                          </Link> */}
                          <a className="btn-login"
                          onClick={()=>{
                            post(`${NEXT_PUBLIC_URL}/User/user/`, JSON.stringify({ 'username': username, 'password': password})).then(res => {
                              if (res.status === "200") {
                                setIsLogin(true);
                                setError(res.message);
                                window.location.href = "/account";
                              } else {
                                setError(res.message);
                                setIsLogin(false);
                                setPassword("");
                              }
                            })
                          }}>登录</a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group account-info-group mb--0">
                          <div className="rememberme-account">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                              <label className="form-check-label" htmlFor="defaultCheck1">记住用户</label>
                            </div>
                          </div>
                          <a className="lost-password" href="#/">忘记密码?</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End My Account Area Wrapper ==--> */}
      </main>
    </>
  );
}