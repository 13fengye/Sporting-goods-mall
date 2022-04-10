import { post } from "components/fetch";
import router from "next/router";
import { useEffect, useState } from "react";
import PageHeaderArea from "./pageHeaderArea";

export default function AccountRegister() {
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9_-]+)+$/;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegiste] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [checkEmailError, setCheckEmailError] = useState('');
  const [checkUserNameError, setCheckUserNamError] = useState('');
  const [checkPassword1Error, setCheckPassword1Error] = useState('');
  const [checkPassword2Error, setCheckPassword2Error] = useState('');

  useEffect(() => {

    if (check) {
      setError('');
      if (username === '') {
        setCheckUserNamError('用户名不能为空');
      } else {
        setCheckUserNamError('');
      }
      if (email === '') {
        setCheckEmailError('邮箱不能为空');
      } else if (!emailReg.test(email)) {
        setCheckEmailError('邮箱格式不正确');
      } else {
        setCheckEmailError('');
      }
      if (password1 === '') {
        setCheckPassword1Error('密码不能为空');
      } else {
        setCheckPassword1Error('');
      }
      if (password2 !== '' && password2 !== password1) {
        setCheckPassword2Error('两次输入的密码不一致');
      } else if (password2 === '') {
        setCheckPassword2Error('再次输入的密码不能为空');
      } else {
        setCheckPassword2Error('');
      }
    }
  }, [check, username, email, password1, password2]);

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
                          <label htmlFor="username">用户名<span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" onChange={(e) => { setUsername(e.currentTarget.value) }} value={username} />
                          <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkUserNameError}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="email">邮箱 <span className="required">*</span></label>
                          <input id="email" className="form-control" type="email" onChange={(e) => { setEmail(e.currentTarget.value) }} value={email} />
                          <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkEmailError}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">密码 <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" onChange={(e) => { setPassword1(e.currentTarget.value) }} value={password1} />
                          <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkPassword1Error}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">再次密码 <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" onChange={(e) => { setPassword2(e.currentTarget.value) }} value={password2} />
                          <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkPassword2Error}</div>
                          <div style={{ fontFamily: 'cursive', color: !isRegister ? '#ff0000' : '#16e02c', fontWeight: !isRegister ? '' : 'bold' }}>{error}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb--0">
                          <a className="btn-register"
                            onClick={() => {
                              setCheck(true);
                              if (username !== '' && email !== '' && password1 !== '' && password2 !== '' && password1 === password2 && emailReg.test(email)) {
                                post('/User/user/register', { 'username': username, 'password': password1, 'email': email}).then(res => {
                                  if (res.status === 200) {
                                    setIsRegiste(true);
                                    setError(res.message);
                                    router.push('/account')
                                  } else {
                                    setError(res.message);
                                    setIsRegiste(false);
                                  }
                                })
                              }
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