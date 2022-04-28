
export const MinimumDiscount = ({discount}: {discount :number}) => {
  return(
    <div className="slider-content">
      <div className="content">
        <div className="title-box">
          <h2 className="title">特色新品</h2>
        </div>
        <div className="desc-box">
          <p className="desc">新品折扣最低{discount * 10}折</p>
        </div>
        <div className="btn-box">
          <a className="btn-slider" href="shop">现在去购买</a>
        </div>
      </div>
    </div>
  );
}