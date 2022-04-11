import { post } from "components/fetch";
import router from "next/router";
import { useEffect, useState } from "react";
import PageHeaderArea from "./pageHeaderArea";

export function parseJwt(token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export default function Accountlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [checkUserNameError, setCheckUserNamError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

  useEffect(() => {

    if (check) {
      setError('');
      if (username === '') {
        setCheckUserNamError('用户名不能为空');
      } else {
        setCheckUserNamError('');
      }
      if (password === '') {
        setCheckPasswordError('密码不能为空');
      } else {
        setCheckPasswordError('');
      }
    }
  }, [check, username, password]);


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
                  <h2 className="title">登录</h2>
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
                          <input className="form-control" type="text" autoComplete="off" onChange={(e) => { setUsername(e.currentTarget.value) }} />
                          <div style={{ fontFamily: 'cursive', color: '#ff0000'}}>{checkUserNameError}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">密码 <span className="required">*</span></label>
                          <input className="form-control" type="password" autoComplete="new-password" onChange={(e) => { setPassword(e.currentTarget.value)}}/>
                          <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkPasswordError}</div>
                          <div style={{ fontFamily: 'cursive', color: !isLogin ? '#ff0000' : '#16e02c', fontWeight: !isLogin ? '' : 'bold'}}>{error}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          {/* <Link href={"/account"}>
                            <a className="btn-login">Login</a>
                          </Link> */}
                          <a className="btn-login"
                          onClick={()=>{
                            setCheck(true);
                            if (username !== '' && password!== '') {
                              post('/User/user/', { 'username': username, 'password': password, 'email': ''}).then(res => {
                                console.log(res);
                                if (res.status === 200) {
                                  setIsLogin(true);
                                  setError(res.message);
                                  const jwt = res.token;
                                  const user = parseJwt(jwt);
                                  const username = user.username;
                                  const email = user.email;
                                  console.log({ jwt, user, email})
                                  window.localStorage.setItem('auth', JSON.stringify({ jwt, username, email}));
                                  router.push('/account')
                                } else if (res.status === 301) {
                                  setError(res.message);
                                  router.push('/account-register');
                                } else {
                                  setError(res.message);
                                  setIsLogin(false);
                                }
                              })
                            }
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