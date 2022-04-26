
export const MinimumDiscount = ({discount}: {discount :number}) => {
  return(
    <div className="desc-box">
      <p className="desc">新品折扣最低{discount * 10}折</p>
    </div>
  );
}