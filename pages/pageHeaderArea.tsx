export default function PageHeaderArea() {
  return(
    <>
      <div className="page-header-area" data-bg-img="/static/assets/img/photos/bg3.webp">
        <div className="container pt--0 pb--0">
          <div className="row">
            <div className="col-12">
              <div className="page-header-content">
                <h2 className="title" data-aos="fade-down" data-aos-duration="1000">Contact Us</h2>
                <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                  <ul className="breadcrumb">
                    <li><a href="/index">Home</a></li>
                    <li className="breadcrumb-sep">//</li>
                    <li>Contact Us</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}