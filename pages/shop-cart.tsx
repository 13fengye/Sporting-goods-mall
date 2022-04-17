import PageHeaderArea from "./pageHeaderArea";

export default function ShopCart(){
  return (
    <>
      <main className="main-content">
        <PageHeaderArea />

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
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart-product-item">
                          <td className="product-remove">
                            <a href="#/"><i className="fa fa-trash-o"></i></a>
                          </td>
                          <td className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/14.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </td>
                          <td className="product-name">
                            <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                          </td>
                          <td className="product-price">
                            <span className="price">£69.99</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty">
                              <input type="text" className="quantity" title="Quantity" value="1" />
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="price">£69.99</span>
                          </td>
                        </tr>
                        <tr className="cart-product-item">
                          <td className="product-remove">
                            <a href="#/"><i className="fa fa-trash-o"></i></a>
                          </td>
                          <td className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/2.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </td>
                          <td className="product-name">
                            <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
                          </td>
                          <td className="product-price">
                            <span className="price">£20.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty">
                              <input type="text" className="quantity" title="Quantity" value="1" />
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="price">£20.00</span>
                          </td>
                        </tr>
                        <tr className="cart-product-item">
                          <td className="product-remove">
                            <a href="#/"><i className="fa fa-trash-o"></i></a>
                          </td>
                          <td className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/3.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </td>
                          <td className="product-name">
                            <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
                          </td>
                          <td className="product-price">
                            <span className="price">£39.00</span>
                          </td>
                          <td className="product-quantity">
                            <div className="pro-qty">
                              <input type="text" className="quantity" title="Quantity" value="1" />
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="price">£39.00</span>
                          </td>
                        </tr>
                        <tr className="actions">
                          <td className="border-0" colSpan={6}>
                            <button type="submit" className="update-cart" disabled={false}>Update cart</button>
                            <button type="submit" className="clear-cart">Clear Cart</button>
                            <a href="/shop" className="btn-theme btn-flat">Continue Shopping</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
            <div className="row row-gutter-50">
              <div className="col-md-6 col-lg-4">
                <div id="CategoriesAccordion" className="shipping-form-calculate">
                  <div className="section-title-cart">
                    <h5 className="title">Calculate Shipping</h5>
                    <div className="desc">
                      <p>Estimate your shipping fee *</p>
                    </div>
                  </div>
                  <span data-bs-toggle="collapse" data-bs-target="#CategoriesTwo" aria-expanded="true" role="button">Calculate shipping</span>
                  <div id="CategoriesTwo" className="collapse show" data-bs-parent="#CategoriesAccordion">
                    <form action="#" method="post">
                      <div className="row row-gutter-50">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="visually-hidden" htmlFor="FormCountry">State</label>
                            <select id="FormCountry" className="form-control">
                              <option selected={false}>Select a country…</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="stateCounty" className="visually-hidden">State / County</label>
                            <input type="text" id="stateCounty" className="form-control" placeholder="State / County" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="townCity" className="visually-hidden">Town / City</label>
                            <input type="text" id="townCity" className="form-control" placeholder="Town / City" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="postcodeZip" className="visually-hidden">Postcode / ZIP</label>
                            <input type="text" id="postcodeZip" className="form-control" placeholder="Postcode / ZIP" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <button type="submit" className="update-totals">Update totals</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="shipping-form-coupon">
                  <div className="section-title-cart">
                    <h5 className="title">Coupon Code</h5>
                    <div className="desc">
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                  </div>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="couponCode" className="visually-hidden">Coupon Code</label>
                          <input type="text" id="couponCode" className="form-control" placeholder="Enter your coupon code.." />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <button type="submit" className="coupon-btn">Apply coupon</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="shipping-form-cart-totals">
                  <div className="section-title-cart">
                    <h5 className="title">Cart totals</h5>
                  </div>
                  <div className="cart-total-table">
                    <table className="table">
                      <tbody>
                        <tr className="cart-subtotal">
                          <td>
                            <p className="value">Subtotal</p>
                          </td>
                          <td>
                            <p className="price">£128.00</p>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <td>
                            <p className="value">Shipping</p>
                          </td>
                          <td>
                            <ul className="shipping-list">
                              <li className="radio">
                                <input type="radio" name="shipping" id="radio1" checked={false} />
                                  <label htmlFor="radio1"><span></span> Flat Rate</label>
                              </li>
                              <li className="radio">
                                <input type="radio" name="shipping" id="radio2" />
                                  <label htmlFor="radio2"><span></span> Free Shipping</label>
                              </li>
                              <li className="radio">
                                <input type="radio" name="shipping" id="radio3" />
                                  <label htmlFor="radio3"><span></span> Local Pickup</label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <td>
                            <p className="value">Total</p>
                          </td>
                          <td>
                            <p className="price">£128.00</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a className="btn-theme btn-flat" href="/shop-checkout">Proceed to checkout</a>
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