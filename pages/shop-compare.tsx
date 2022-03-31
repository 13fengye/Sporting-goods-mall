export default function ShopCompare() {
  return (
    <>
      <main className="main-content">
        {/* <!--== Start Page Header Area Wrapper ==--> */}
        <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Compare</h2>
                  <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                    <ul className="breadcrumb">
                      <li><a href="/index">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Compare</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--== End Page Header Area Wrapper ==--> */}

        {/* <!--== Start Shopping Compare Area Wrapper ==--> */}
        <section className="shopping-compare-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shopping-compare-form table-responsive">

                  <table className="table">
                    <tbody>
                      <tr>
                        <th className="fz-13">Product Info</th>
                        <td>
                          <div className="product-remove">
                            <a href="#/"><i className="fa fa-times"></i>Remove</a>
                          </div>
                          <div className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/14.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </div>
                          <div className="product-name">
                            <h4 className="title"><a href="/single-product">Leather Mens Slipper</a></h4>
                          </div>
                          <a href="/shop-cart" className="btn-cart">Add to cart</a>
                        </td>
                        <td>
                          <div className="product-remove">
                            <a href="#/"><i className="fa fa-times"></i>Remove</a>
                          </div>
                          <div className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/2.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </div>
                          <div className="product-name">
                            <h4 className="title"><a href="/single-product">Quickiin Mens shoes</a></h4>
                          </div>
                          <a href="/shop-cart" className="btn-cart">Add to cart</a>
                        </td>
                        <td>
                          <div className="product-remove">
                            <a href="#/"><i className="fa fa-times"></i>Remove</a>
                          </div>
                          <div className="product-thumb">
                            <a href="/single-product">
                              <img src="/static/picture/3.webp" width="90" height="110" alt="Image-HasTech" />
                            </a>
                          </div>
                          <div className="product-name">
                            <h4 className="title"><a href="/single-product">Rexpo Womens shoes</a></h4>
                          </div>
                          <a href="/shop-cart" className="btn-cart">Add to cart</a>
                        </td>
                      </tr>

                      <tr>
                        <th>Price</th>
                        <td className="price">£69.99</td>
                        <td className="price">£69.99</td>
                        <td className="price">£69.99</td>
                      </tr>

                      <tr>
                        <th>Sku</th>
                        <td className="product-sku">REF. LA-791</td>
                        <td className="product-sku">REF. LA-779</td>
                        <td className="product-sku">REF. LA-788</td>
                      </tr>

                      <tr>
                        <th>Description</th>
                        <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                        <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                        <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                      </tr>

                      <tr>
                        <th>Availability</th>
                        <td><span className="product-stock">In stock</span></td>
                        <td><span className="product-stock">In stock</span></td>
                        <td><span className="product-stock">In stock</span></td>
                      </tr>

                      <tr>
                        <th>Weight</th>
                        <td className="product-weight">N/A</td>
                        <td className="product-weight">N/A</td>
                        <td className="product-weight">N/A</td>
                      </tr>

                      <tr>
                        <th>Dimensions</th>
                        <td className="product-dimensions">N/A</td>
                        <td className="product-dimensions">N/A</td>
                        <td className="product-dimensions">N/A</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Shopping Compare Area Wrapper ==--> */}
      </main>
    </>
  );
}