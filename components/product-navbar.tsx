export default function ProductNavbar() {
  return (
    <div className="col-12  navbar-text-center">
      <div className="shop-top-bar navbar-width">
        <div className="shop-top-center">
          <nav className="product-nav">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-grid-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-grid"
                type="button"
                role="tab"
                aria-controls="nav-grid"
                aria-selected="true"
              >
                <i className="fa fa-th"></i>
              </button>
              <button
                className="nav-link"
                id="nav-list-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-list"
                type="button"
                role="tab"
                aria-controls="nav-list"
                aria-selected="false"
              >
                <i className="fa fa-list"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}