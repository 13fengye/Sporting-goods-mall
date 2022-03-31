export default function ShopWishlist(){
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Wishlist</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="/index">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Wishlist</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start Wishlist Area Wrapper ==--> */}
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
                        <th className="product-name">Product</th>
                        <th className="product-stock-status">Stock Status</th>
                        <th className="product-price">Price</th>
                        <th className="product-action">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-wishlist-item">
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
                      </tr>
                      <tr className="cart-wishlist-item">
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
                        <td className="product-stock-status">
                          <span className="stock">In Stock</span>
                        </td>
                        <td className="product-price">
                          <span className="price">£69.99</span>
                        </td>
                        <td className="product-action">
                          <a className="btn-cart" href="/shop-cart">Add to cart</a>
                        </td>
                      </tr>
                      <tr className="cart-wishlist-item">
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
                        <td className="product-stock-status">
                          <span className="stock">In Stock</span>
                        </td>
                        <td className="product-price">
                          <span className="price">£39.99</span>
                        </td>
                        <td className="product-action">
                          <a className="btn-cart" href="/shop-cart">Add to cart</a>
                        </td>
                      </tr>
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