import { post } from "components/fetch";
import { NEXT_PUBLIC_URL } from "components/url";
import router from "next/router";
import { AuthContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { Cart } from "store/interface";

// export async function getServerSideProps(context: { params: { productinfo_id: string, quantity: number } }) {
  
//   return {
//     props: {
//       productinfo_id: context.params.productinfo_id,
//       quantity: context.params.quantity,
//     }, // will be passed to the page component as props
//   };
// }

export default function ShoppingCart() {
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
        {/* <!--== Start Blog Area Wrapper ==--> */}
        <section className="shopping-cart-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shopping-cart-form table-responsive">
                  <form action="#" method="post">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th className="product-remove">&nbsp;</th>
                          <th className="product-thumb">&nbsp;</th>
                          <th className="product-name">商品</th>
                          <th className="product-price">价格</th>
                          <th className="product-quantity">数量</th>
                          <th className="product-subtotal">总计</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartList.map((cart: Cart) => {
                            return(<tr className="cart-product-item">
                              <td className="product-remove">
                                <a href="#/"><i className="fa fa-trash-o"></i></a>
                              </td>
                              <td className="product-thumb">
                                <a href="/single-product">
                                  <img src={`${NEXT_PUBLIC_URL}/${cart.img}`} alt="Image-HasTech" />
                                </a>
                              </td>
                              <td className="product-name">
                                <h4 className="title"><a href="/single-product">{cart.name}</a></h4>
                              </td>
                              <td className="product-price">
                                <span className="price">￥{cart.price}</span>
                              </td>
                              <td className="product-quantity">
                                <div className="pro-qty">
                                  <input type="text" className="quantity" title="Quantity" value={cart.quantity} />
                                </div>
                              </td>
                              <td className="product-subtotal">
                                <span className="price">￥{cart.price * cart.quantity}</span>
                              </td>
                            </tr>);
                          })
                        }
                        { cartList.length === 0 && <tr><td colSpan={6}>您的购物车是空的</td></tr> }
                        <tr className="actions">
                          <td className="border-0" colSpan={6}>
                            <button type="submit" className="clear-cart" onClick={async ()=>{
                              await post("/Order/clearCart/", {'username': authState.username}).then((res) => {
                                if (res.status) {
                                  setCartList([]);
                                }
                              })
                            }}>清空购物车</button>
                            <a href="/shop" className="btn-theme btn-flat">继续购物</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
            <div className="row row-gutter-50">
              <div className="col-md-12 col-lg-4">
                <div className="shipping-form-cart-totals">
                  <div className="section-title-cart">
                    <h5 className="title">购物车总数</h5>
                  </div>
                  <div className="cart-total-table">
                    <table className="table">
                      <tbody>
                        <tr className="cart-subtotal">
                          <td>
                            <p className="value">小计</p>
                          </td>
                          <td>
                            <p className="price">￥{subTotal}</p>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <td>
                            <p className="value">优惠</p>
                          </td>
                          <td>
                            <p className="price">￥{discount}</p>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <td>
                            <p className="value">总计</p>
                          </td>
                          <td>
                            <p className="price">￥{subTotal - discount}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div onClick={()=>{
                    if (cartList.length === 0) {
                      alert("请先添加商品");
                    } else {
                      router.push("/shop-checkout");
                    }
                  }}>
                    <a className="btn-theme btn-flat">进行结算</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Blog Area Wrapper ==--> */}
      </main>
    </>
  );
}
