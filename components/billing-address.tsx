import { Dispatch, SetStateAction, useEffect } from "react";
import { UserAddress } from "store/interface";

export const BillingAddress = ({
  name,
  phone,
  address,
  remark,
  setName,
  setPhone,
  setAddress,
  setRemark,
}: {
  name: string;
  phone: string;
  address: string;
  remark: string;
  setName: Dispatch<SetStateAction<string>>,
  setPhone: Dispatch<SetStateAction<string>>,
  setAddress: Dispatch<SetStateAction<string>>,
  setRemark: Dispatch<SetStateAction<string>>,
}) => {
  console.log(name, phone, address);

  return (
    <div className="col-lg-6">
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
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="street-address">
                    详细地址{" "}
                    <a className="required" title="required">
                      *
                    </a>
                  </label>
                  <input
                    id="street-address"
                    type="text"
                    className="form-control"
                    placeholder="收件人详细地址"
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb--0">
                  <label htmlFor="order-notes">订单备注 (可选)</label>
                  <textarea
                    id="order-notes"
                    className="form-control"
                    placeholder="订单备注"
                    onChange={(e) => setRemark(e.currentTarget.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};