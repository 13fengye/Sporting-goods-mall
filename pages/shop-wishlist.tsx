import { useState } from "react";
import { ProductNo } from "store/interface";

export default function ShopWishlist(){

  const [productNos, setProductNos] = useState<ProductNo[]>([]);

  return (
    <>
      <main className="main-content">
        <section className="shopping-wishlist-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shopping-wishlist-table table-responsive">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="product-remove">&nbsp;</th>
                        <th className="product-thumb">&nbsp;</th>
                        <th className="product-name">商品</th>
                        <th className="product-stock-status">库存</th>
                        <th className="product-price">价格</th>
                        <th className="product-action">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {<tr className="cart-wishlist-item">
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
                        <td className="product-stock-status">
                          <span className="stock">In Stock</span>
                        </td>
                        <td className="product-price">
                          <span className="price">£25.99</span>
                        </td>
                        <td className="product-action">
                          <a className="btn-cart" href="/shop-cart">Add to cart</a>
                        </td>
                      </tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Wishlist Area Wrapper ==--> */}
      </main>
    </>
  );
}