import { post } from "components/fetch";
import { useState } from "react";
import PageHeaderArea from "./pageHeaderArea";

export default function AccountRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (<>
    <main className="main-content">
      <PageHeaderArea />


        {/* <!--== Start My Account Area Wrapper ==--> */}
        <section className="account-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 m-auto">
                <div className="section-title text-center">
                  <h2 className="title">注册</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="register-form-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="username">用户名或邮箱 <span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" onChange={(e) => { setUsername(e.currentTarget.value) }} value={username} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email">邮箱 <span className="required">*</span></label>
                        <input id="email" className="form-control" type="email" onChange={(e) => { setEmail(e.currentTarget.value) }} value={email} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">密码 <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" onChange={(e) => { setPassword(e.currentTarget.value) }} value={password} />
                          <div style={{ fontFamily: 'cursive', color: !isLogin ? '#ff0000' : '#16e02c' }}>{error}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb--0">
                          <a className="btn-register"
                            onClick={() => {
                              post('/User/user/', { 'username': username, 'password': password, 'email': email}).then(res => {
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
                            }}>注册</a>
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
  </>)
}