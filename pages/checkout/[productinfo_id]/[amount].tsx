import { BillingAddress } from "components/billing-address";
import { get, post } from "components/fetch";
import router from "next/router";
import { parseJwt } from "pages/account-login";
import { AuthContext, ReFreshGlobalContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { ProductNo, UserAddress } from "store/interface";

export async function getServerSideProps(context: { params: { productinfo_id: string, amount: number } }) {
  
  return {
    props: {
      productinfo_id: context.params.productinfo_id,
      amount: context.params.amount,
    }, // will be passed to the page component as props
  };
}

export default function ShopCheckout({
  productinfo_id,
  amount
}: {
  productinfo_id: string;
  amount: number;
}) {
  console.log(productinfo_id, amount);
  const [authState, setAuthState] = useContext(AuthContext);
  const [refreshGlobalState, setReFreshGlobalState] = useContext(ReFreshGlobalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [checkUserNameError, setCheckUserNamError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9_-]+)+$/;
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isRegister, setIsRegiste] = useState<boolean>(false);
  const [checkEmailError, setCheckEmailError] = useState('');
  const [checkPassword1Error, setCheckPassword1Error] = useState('');
  const [checkPassword2Error, setCheckPassword2Error] = useState('');

  const [productNo, setProductNo] = useState<ProductNo>();
  const [productInfo, setProductInfo] = useState<ProductNo>();
  const [price, setPrice] = useState<number>();
  const [billingAddress, setBillingAddress] = useState<UserAddress|string>('');
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [remark, setRemark] = useState<string>("无");
  
  useEffect(() => {
    const loadProductInfo = async () => {
      await get(`/Product/getproductinfo/${productinfo_id}/`).then(data => {
        setProductNo(data.productNo);
        setProductInfo(data.productInfo);
        const discountPrice = data.productInfo.isDiscount ? data.productInfo.discount : data.productNo.standard_price;
        const percentagePrice = data.productInfo.isPercentage ? Math.round(data.productNo.standard_price * data.productNo.thisPercentage_id * 10) / 10 : data.productNo.standard_price;
        setPrice(discountPrice >= percentagePrice ? percentagePrice: discountPrice);
      })
    };
    loadProductInfo();

    const loadBinglingAddress = async () => {
      await post("/User/getbillinginfo/", { 'username': authState.username }).then((res) => {
        if (res.status === 200) {
          setBillingAddress(res.billing_info[0]);
          setName(res.billing_info[0].name);
          setPhone(res.billing_info[0].phone);
          setAddress(res.billing_info[0].address);
        } else {
          setBillingAddress(res.message);
        }
      });
    };
    loadBinglingAddress();
  } , []);
  
  useEffect(() => {
    if (check) {
      setError("");
      if (username === "") {
        setCheckUserNamError("用户名不能为空");
      } else {
        setCheckUserNamError("");
      }
      if (password === "") {
        setCheckPasswordError("密码不能为空");
      } else {
        setCheckPasswordError("");
      }
      if (email === "") {
        setCheckEmailError("邮箱不能为空");
      } else if (!emailReg.test(email)) {
        setCheckEmailError("邮箱格式不正确");
      } else {
        setCheckEmailError("");
      }
      if (password1 === "") {
        setCheckPassword1Error("密码不能为空");
      } else {
        setCheckPassword1Error("");
      }
      if (password2 !== "" && password2 !== password1) {
        setCheckPassword2Error("两次输入的密码不一致");
      } else if (password2 === "") {
        setCheckPassword2Error("再次输入的密码不能为空");
      } else {
        setCheckPassword2Error("");
      }
    }
  }, [check, username, password, email, password1, password2]);
  console.log(productNo, productInfo);

  const canRegister = username !== '' && email !== '' && password1 !== '' && password2 !== '' && password1 === password2 && emailReg.test(email)
  const canLogin = username !== "" && password !== "";
  
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Shopping Checkout Area Wrapper ==--> */}
        <section className="shopping-checkout-wrap">
          <div className="container">
            {authState.jwt === "" ? (
              <div className="row">
                <div className="col-12">
                  <div className="checkout-page-login-wrap">
                    <div className="login-accordion" id="LoginAccordion">
                      <div className="card">
                        <h3>
                          <i className="fa fa-info-circle"></i>
                          您还没有登录或者注册，无法继续购买&nbsp;&nbsp;
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#loginaccordion"
                            onClick={() => {
                              setUsername("");
                              setError("");
                              setCheck(false);
                              setCheckUserNamError("");
                            }}
                          >
                            点击登录&nbsp;&nbsp;
                          </a>
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#registeraccordion"
                            onClick={() => {
                              setUsername("");
                              setError("");
                              setCheck(false);
                              setCheckUserNamError("");
                            }}
                          >
                            点击注册
                          </a>
                        </h3>
                        <div
                          id="loginaccordion"
                          className="collapse"
                          data-bs-parent="#LoginAccordion"
                        >
                          <div className="card-body">
                            <div className="login-wrap">
                              <form action="#" method="post">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="logEmail">
                                        用户名或者邮箱{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        id="logEmail"
                                        className="form-control"
                                        type="text"
                                        autoComplete="off"
                                        onChange={(e) => {
                                          setUsername(e.currentTarget.value);
                                        }}
                                      />
                                      <div
                                        style={{
                                          fontFamily: "cursive",
                                          color: "#ff0000",
                                        }}
                                      >
                                        {checkUserNameError}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group left-m">
                                      <label htmlFor="logPass">
                                        密码 <span className="required">*</span>
                                      </label>
                                      <input
                                        id="logPass"
                                        className="form-control"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={(e) => {
                                          setPassword(e.currentTarget.value);
                                        }}
                                      />
                                      <div
                                        style={{
                                          fontFamily: "cursive",
                                          color: "#ff0000",
                                        }}
                                      >
                                        {checkPasswordError}
                                      </div>
                                      <div
                                        style={{
                                          fontFamily: "cursive",
                                          color: !isLogin
                                            ? "#ff0000"
                                            : "#16e02c",
                                          fontWeight: !isLogin ? "" : "bold",
                                        }}
                                      >
                                        {error}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group mt-30">
                                      <button
                                        className={ canLogin ? "btn-login": "btn-login-disabled" }
                                        disabled={!canLogin}
                                        onClick={() => {
                                          setCheck(true);
                                          if (
                                            username !== "" &&
                                            password !== ""
                                          ) {
                                            post("/User/user/", {
                                              username: username,
                                              password: password,
                                              email: "",
                                            }).then((res) => {
                                              console.log(res);
                                              if (res.status === 200) {
                                                setIsLogin(true);
                                                setError(res.message);
                                                const jwt = res.token;
                                                const user = parseJwt(jwt);
                                                const username = user.username;
                                                const email = user.email;
                                                console.log({
                                                  jwt,
                                                  user,
                                                  email,
                                                });
                                                window.localStorage.setItem(
                                                  "auth",
                                                  JSON.stringify({
                                                    jwt,
                                                    username,
                                                    email,
                                                  })
                                                );
                                                setAuthState({
                                                  jwt,
                                                  username,
                                                  email,
                                                });
                                              } else if (res.status === 301) {
                                                setError(res.message);
                                              } else {
                                                setError(res.message);
                                                setIsLogin(false);
                                              }
                                            });
                                          }
                                        }}
                                      >
                                        登录
                                      </button>
                                      {/* <div className="rememberme-account">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input visually-hidden"
                                          id="remembermePass"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="remembermePass"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                    </div>
                                    <a className="lost-password" href="#">
                                      Lost your password?
                                    </a> */}
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          id="registeraccordion"
                          className="collapse"
                          data-bs-parent="#LoginAccordion"
                        >
                          <div className="card-body">
                            <div className="login-wrap">
                              <form action="#" method="post">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="username">
                                        用户名{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        id="username"
                                        className="form-control"
                                        type="username"
                                        autoComplete="off"
                                        onChange={(e) => { setUsername(e.currentTarget.value) }} value={username}
                                      />
                                      <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkUserNameError}</div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="email">
                                        邮箱{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        id="email"
                                        className="form-control"
                                        type="email"
                                        autoComplete="off"
                                        onChange={(e) => { setEmail(e.currentTarget.value) }} value={email}
                                      />
                                      <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkEmailError}</div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="logPass">
                                        密码 <span className="required">*</span>
                                      </label>
                                      <input
                                        id="logPass"
                                        className="form-control"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={(e) => { setPassword1(e.currentTarget.value) }} value={password1}
                                      />
                                      <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkPassword1Error}</div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="logPass">
                                        再次输入密码 <span className="required">*</span>
                                      </label>
                                      <input
                                        id="logPass"
                                        className="form-control"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={(e) => { setPassword2(e.currentTarget.value) }} value={password2}
                                      />
                                      <div style={{ fontFamily: 'cursive', color: '#ff0000' }}>{checkPassword2Error}</div>
                                      <div style={{ fontFamily: 'cursive', color: !isRegister ? '#ff0000' : '#16e02c', fontWeight: !isRegister ? '' : 'bold' }}>{error}</div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group mt-30">
                                      <button className={canRegister ? "btn-login" : "btn-login-disabled"} disabled={!canRegister}
                                        onClick={() => {
                                          setCheck(true);
                                          if (username !== '' && email !== '' && password1 !== '' && password2 !== '' && password1 === password2 && emailReg.test(email)) {
                                            post('/User/user/', { 'username': username, 'password': password1, 'email': email}).then(res => {
                                              if (res.status === 200) {
                                                setIsRegiste(true);
                                                setError(res.message);
                                                const jwt = res.token;
                                                const user = parseJwt(jwt);
                                                const username = user.username;
                                                const email = user.email;
                                                console.log({ jwt, user, email })
                                                window.localStorage.setItem('auth', JSON.stringify({ jwt, username, email }));
                                                setAuthState({ jwt, username, email });
                                                router.push('/account')
                                              } else {
                                                setError(res.message);
                                                setIsRegiste(false);
                                              }
                                            })
                                          }
                                        }}
                                      >注册
                                      </button>
                                      {/* <div className="rememberme-account">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input visually-hidden"
                                          id="remembermePass"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="remembermePass"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                    </div>
                                    <a className="lost-password" href="#">
                                      Lost your password?
                                    </a> */}
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--== End Checkout Login Accordion ==--> */}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="row">
              <div className="col-lg-6">
                {/* <!--== Start Billing Accordion ==--> */}
                <div className="checkout-billing-details-wrap">
                  <h2 className="title">结算明细</h2>
                  <div className="billing-form-wrap">
                    <form action="#" method="post">
                      <div className="row">
                        <BillingAddress
                          name={name}
                          phone={phone}
                          address={address}
                          remark={remark}
                          setName={setName}
                          setPhone={setPhone}
                          setAddress={setAddress}
                          setRemark={setRemark}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!--== End Billing Accordion ==--> */}
              </div>
              <div className="col-lg-6">
                {/* <!--== Start Order Details Accordion ==--> */}
                <div className="checkout-order-details-wrap">
                  <div className="order-details-table-wrap table-responsive">
                    <h2 className="title mb-25">您的订单</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-name">商品</th>
                          <th className="product-total">总计</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                        <tr className="cart-item">
                          <td className="product-name">
                            {productNo?.name}{" "}
                            <span className="product-quantity">× {amount}</span>
                          </td>
                          <td className="product-total">￥{price! * amount}</td>
                        </tr>
                      </tbody>
                      <tfoot className="table-foot">
                        {/* <tr className="cart-subtotal">
                          <th>小计</th>
                          <td>￥{price! * amount}</td>
                        </tr> */}
                        <tr className="order-total">
                          <th>总计 </th>
                          <td>￥{price! * amount}</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="shop-payment-method">
                      {/* <div id="PaymentMethodAccordion">
                        <div className="card">
                          <div className="card-header" id="check_payments2">
                            <h5
                              className="title"
                              data-bs-toggle="collapse"
                              data-bs-target="#itemTwo"
                              aria-controls="itemTwo"
                              aria-expanded="true"
                            >
                              支付宝
                            </h5>
                          </div>
                          <div
                            id="itemTwo"
                            className="collapse"
                            aria-labelledby="check_payments2"
                            data-bs-parent="#PaymentMethodAccordion"
                          >
                            <div className="card-body">
                              <p>
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="p-text">
                        您的个人数据将用于处理您的订单、支持您在本网站上的体验以及我们{" "}
                        <a href="#/">隐私政策中所述的其他目的 </a>。
                      </p>
                      <div className="agree-policy">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            id="privacy"
                            className="custom-control-input visually-hidden"
                          />
                          <label
                            htmlFor="privacy"
                            className="custom-control-label"
                          >
                            我已阅读并同意网站条款和条件
                          <span className="required">*</span>
                          </label>
                        </div>
                      </div> */}
                      <a className="btn-theme" style={{height: '60px'}}
                        onClick={async () => {
                          await post('/Order/createorder/', { 'username': authState.username, 'productinfo_id': productinfo_id, 'amount': amount, 'price': price, 'name': name, 'phone': phone, 'address': address, 'remark': remark }).then((res)=>{
                            if(res.status === 200) {
                              setReFreshGlobalState(!refreshGlobalState);
                              alert('支付成功！');
                            } else {
                              alert(res.message);
                            }
                          });
                        }}>下单
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!--== End Order Details Accordion ==--> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Shopping Checkout Area Wrapper ==--> */}
      </main>
    </>
  );
}