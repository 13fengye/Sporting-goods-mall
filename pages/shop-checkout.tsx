import { BillingAddress } from "components/billing-address";
import { get, post } from "components/fetch";
import router from "next/router";
import { parseJwt } from "pages/account-login";
import { AuthContext, ReFreshGlobalContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { Cart, UserAddress } from "store/interface";

export default function ShoppingCartCheckout() {
  const [authState] = useContext(AuthContext);
  const [refreshGlobalState, setReFreshGlobalState] = useContext(ReFreshGlobalContext);
  const [cartList, setCartList] = useState<Cart[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [billingAddress, setBillingAddress] = useState<UserAddress|string>('');
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [remark, setRemark] = useState<string>("无");
  console.log(name, phone, address);
  useEffect(() => {
    // console.log(authState);
    if (authState.jwt === '') {
      router.push("/account-login");
      return;
    }

    const loadShoppongCart = async () => {
      await post("/Order/getcart/", {'username': authState.username}).then((res) => {
        setCartList(res.cartList);
      });
    };
    loadShoppongCart();

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

  }, [authState, refreshGlobalState]);
  console.log(cartList);
  const subTotal = cartList.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
  const canClick = name === "" || phone === "" || address === "";
 
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Shopping Checkout Area Wrapper ==--> */}
        <section className="shopping-checkout-wrap">
          <div className="container">
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
                        {cartList.map((cart: Cart) => {
                          return (
                            <tr className="cart-item">
                              <td className="product-name">
                                {cart.name}{" "}
                                <span className="product-quantity">
                                  × {cart.quantity}
                                </span>
                              </td>
                              <td className="product-total">
                                ￥{Math.round(cart.price * cart.quantity * 10) / 10}
                              </td>
                            </tr>
                          );
                        })}
                        { cartList.length === 0 &&
                          <div>
                            <h1 className="search-result">没有搜索到相关商品</h1>
                          </div> }
                      </tbody>
                      <tfoot className="table-foot">
                        <tr className="cart-subtotal">
                          <th>小计</th>
                          <td>￥{subTotal}</td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>优惠</th>
                          <td>￥{discount}</td>
                        </tr>
                        <tr className="order-total">
                          <th>总计 </th>
                          <td>￥{subTotal - discount}</td>
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
                      <button className={`btn-theme height-60 ${canClick ? 'color' : ''}`}
                        disabled = { canClick }
                        onClick={async () => {
                          await post('/Order/createorders/', { 'username': authState.username, 'name': name, 'phone': phone, 'address': address, 'remark': remark, 'totalPrice': subTotal - discount, }).then((res)=>{
                            if(res.status === 200) {
                              setReFreshGlobalState(!refreshGlobalState);
                              alert('支付成功！');
                              router.push('/success');
                            } else {
                              alert(res.message);
                            }
                          });
                        }}
                      >下单
                      </button>
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