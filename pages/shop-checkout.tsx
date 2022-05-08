import { get, post } from "components/fetch";
import router from "next/router";
import { parseJwt } from "pages/account-login";
import { AuthContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { Cart } from "store/interface";

export default function ShoppingCartCheckout() {
    const [authState] = useContext(AuthContext);
  const [cartList, setCartList] = useState<Cart[]>([]);
  const [discount, setDiscount] = useState<number>(0);
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

  }, [authState])
  console.log(cartList);
  const subTotal = cartList.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
 
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Shopping Checkout Area Wrapper ==--> */}
        <section className="shopping-checkout-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <!--== Start Billing Accordion ==--> */}
                <div className="checkout-billing-details-wrap">
                  <h2 className="title">结算明细</h2>
                  <div className="billing-form-wrap">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="f_name">
                              姓名{" "}
                              <a className="required" title="required">
                                *
                              </a>
                            </label>
                            <input
                              id="f_name"
                              type="text"
                              className="form-control"
                              placeholder="收件人姓名"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="street-address">
                              详细地址{" "}
                              <abbr className="required" title="required">
                                *
                              </abbr>
                            </label>
                            <input
                              id="street-address"
                              type="text"
                              className="form-control"
                              placeholder="收件人详细地址"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="phone">
                              联系方式{" "}
                              <a className="required" title="required">
                                *
                              </a>
                            </label>
                            <input
                              id="phone"
                              type="text"
                              className="form-control"
                              placeholder="收件人联系方式"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb--0">
                            <label htmlFor="order-notes">
                              订单备注 (可选)
                            </label>
                            <textarea
                              id="order-notes"
                              className="form-control"
                              placeholder="订单备注"
                            ></textarea>
                          </div>
                        </div>
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
                        {
                          cartList.map((cart: Cart) => {
                            return (
                              <tr className="cart-item">
                                <td className="product-name">
                                  {cart.name}{" "}
                                  <span className="product-quantity">
                                    × {cart.quantity}
                                  </span>
                                </td>
                                <td className="product-total">
                                  ￥{cart.price * cart.quantity}
                                </td>
                              </tr>
                            );
                          })
                        }
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
                      <div id="PaymentMethodAccordion">
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
                      </div>
                      <a href="/account-login" className="btn-theme" style={{height: '60px'}}>
                        下单
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