import { get } from "components/fetch";
import Link from "next/link";
import { useState } from "react";
import PageHeaderArea from "./pageHeaderArea";
import { NEXT_PUBLIC_URL } from "components/url"

export default function Accountlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


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
                          <label htmlFor="username">Username or email address <span className="required">*</span></label>
                          <input id="username" className="form-control" type="email" onChange={(e) => { setEmail(e.currentTarget.value) }} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="password">Password <span className="required">*</span></label>
                          <input id="password" className="form-control" type="password" onChange={(e) => { setPassword(e.currentTarget.value) }}/>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          {/* <Link href={"/account"}>
                            <a className="btn-login">Login</a>
                          </Link> */}
                          <a className="btn-login"
                          onClick={()=>{
                            get(`${NEXT_PUBLIC_URL}/User/user/`).then(res => {
                              console.log(res)
                              // if(res.data.length>0){
                              //   if(res.data[0].email==email && res.data[0].password==password){
                              //     localStorage.setItem("user",JSON.stringify(res.data[0]))
                              //     window.location.href="/account"
                              //   }else{
                              //     setError("Invalid email or password")
                              //   }
                              // }else{
                              //   setError("Invalid email or password")
                              // }
                            })
                          }}>Login</a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group account-info-group mb--0">
                          <div className="rememberme-account">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                              <label className="form-check-label" htmlFor="defaultCheck1">Remember me</label>
                            </div>
                          </div>
                          <a className="lost-password" href="#/">Lost your password?</a>
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