import { post } from "components/fetch";
import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { OrderInfos, UserAddress } from "store/interface";
import { AuthContext, ReFreshGlobalContext } from "./_app";

export default function Account() {

  const [authState] = useContext(AuthContext);
  const [refreshGlobalState, setReFreshGlobalState] = useContext(ReFreshGlobalContext);
  const [billingAddress, setBillingAddress] = useState<UserAddress|string>('');
  const [addOrUpdateBillingInfo, setAddOrUpdateBillingInfo] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [orders, setOrders] = useState<OrderInfos[]>([]);
  useEffect(() => {
    if (authState.jwt === '') {
      router.push("/account-login");
    }
  }, [authState])

  useEffect(() => {
    const loadBinglingAddress = async () => {
      await post("/User/getbillinginfo/", { 'username': authState.username }).then((res) => {
        if (res.status === 200) {
          setBillingAddress(res.billing_info[0]);
        } else {
          setBillingAddress(res.message);
        }
      });
    };
    loadBinglingAddress();
  }, [addOrUpdateBillingInfo]);
  const saveChanges = currentPassword === '' || newPassword === '' || confirmPassword === '';

  useEffect(() => {
    const loadSingeOrders = async () => {
      await post("/Order/getorders/", { 'username': authState.username }).then((res) => {
        if (res.status === 200) {
          setOrders(res.ordersList);
        } else {
          setOrders([]);
        }
      })
    };
    loadSingeOrders();
  }, [refreshGlobalState]);
  console.log(orders);

  return (
    <>
      <main className="main-content">
        <section className="my-account-area">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-lg-12">
                <div className="myaccount-page-wrapper">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <nav>
                        <div
                          className="myaccount-tab-menu nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="account-info-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#account-info"
                            type="button"
                            role="tab"
                            aria-controls="account-info"
                            aria-selected="true"
                          >
                            ????????????
                          </button>
                          <button
                            className="nav-link"
                            id="orders-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#orders"
                            type="button"
                            role="tab"
                            aria-controls="orders"
                            aria-selected="false"
                          >
                            ????????????
                          </button>
                          <button
                            className="nav-link"
                            id="address-edit-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#address-edit"
                            type="button"
                            role="tab"
                            aria-controls="address-edit"
                            aria-selected="false"
                          >
                            ????????????
                          </button>
                          <button
                            className="nav-link"
                            onClick={() => {
                              window.localStorage.setItem(
                                "auth",
                                JSON.stringify({
                                  jwt: "",
                                  username: "",
                                  email: "",
                                })
                              );
                              router.push("/account-login");
                            }}
                            type="button"
                          >
                            ??????
                          </button>
                        </div>
                      </nav>
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade"
                          id="address-edit"
                          role="tabpanel"
                          aria-labelledby="address-edit-tab"
                        >
                          {!addOrUpdateBillingInfo ? 
                            <div className="myaccount-content">
                              <h3>????????????</h3>
                              <address>
                                { typeof billingAddress === 'string' ? 
                                <>
                                  <p><strong>{billingAddress}</strong></p>
                                </> : 
                                <>
                                  <p>??????: {billingAddress.name}</p>
                                  <p>??????: {billingAddress.address}</p>
                                  <p>????????????: {billingAddress.phone}</p>
                                </>
                                }
                              </address>
                              <a className="check-btn sqr-btn" onClick={()=>{
                                setAddOrUpdateBillingInfo(!addOrUpdateBillingInfo)
                              }}><i className="fa fa-edit">???????????????????????????</i>
                              </a>
                            </div>
                           : (
                            <div className="myaccount-content">
                              <h3 style={{ marginBottom: "0px" }}>
                                ???????????????????????????
                              </h3>
                              <div className="checkout-billing-details-wrap">
                                <div className="billing-form-wrap">
                                  <div className="row">
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="f_name">
                                          ??????{" "}
                                          <a
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </a>
                                        </label>
                                        <input
                                          id="f_name"
                                          type="text"
                                          className="form-control"
                                          placeholder="???????????????"
                                          onChange={(e) => {
                                            setName(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="street-address">
                                          ????????????{" "}
                                          <a
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </a>
                                        </label>
                                        <input
                                          id="street-address"
                                          type="text"
                                          className="form-control"
                                          placeholder="?????????????????????"
                                          onChange={(e) => {
                                            setAddress(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="phone">
                                          ????????????{" "}
                                          <a
                                            className="required"
                                            title="required"
                                          >
                                            *
                                          </a>
                                        </label>
                                        <input
                                          id="phone"
                                          type="text"
                                          className="form-control"
                                          placeholder="?????????????????????"
                                          onChange={(e) => {
                                            setPhone(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <button className="btn btn-danger margin-top-20 margin-bottom-10" disabled={name === '' || address === '' || phone === ''} onClick={async ()=>{
                                      await post("/User/updatebillinginfo/", { 'username': authState.username, 'name': name, 'address': address, 'phone': phone }).then((res)=>{
                                        alert(res.message);
                                        setAddOrUpdateBillingInfo(!addOrUpdateBillingInfo);
                                      })
                                    }}>??????</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="orders"
                          role="tabpanel"
                          aria-labelledby="orders-tab"
                        >
                          <div className="myaccount-content">
                            { orders.length > 0 && <div>
                              <h3>????????????{'  '}<a className="red-color" onClick={async ()=>{
                                await post("/Order/deleteallorderinfos/", { 'username': authState.username }).then((res)=>{
                                  alert(res.message);
                                  setReFreshGlobalState(!refreshGlobalState);
                                })
                              }}>????????????</a></h3>
                              <div className="myaccount-table table-responsive text-center">
                                <table className="table table-bordered">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>??????</th>
                                      <th>??????</th>
                                      <th>??????</th>
                                      <th>??????</th>
                                      <th>??????</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      orders.map((order, index) => {
                                        return (
                                          <tr>
                                            <td>{index + 1}</td>
                                            <td>{order.created}</td>
                                            <td>{order.state}</td>
                                            <td>???{order.price}</td>
                                            <td>{order.remark}</td>
                                          </tr>
                                        );
                                      })
                                    }
                                  </tbody>
                                </table>
                              </div>
                            </div>}
                            { orders.length === 0 &&
                              <tbody>
                                <tr>
                                  <td>????????????</td>
                                </tr> 
                              </tbody>}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade  show active"
                          id="account-info"
                          role="tabpanel"
                          aria-labelledby="account-info-tab"
                        >
                          <div className="myaccount-content">
                            <h3>????????????</h3>
                            <div className="account-details-form">
                              <div>
                                <fieldset>
                                  <legend>????????????</legend>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="current-pwd"
                                      className="required"
                                    >
                                      ?????????
                                    </label>
                                    <input type="password" id="current-pwd" autoComplete="new-password" onChange={(e)=>{
                                      setCurrentPassword(e.currentTarget.value);
                                    }}/>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="single-input-item">
                                        <label
                                          htmlFor="new-pwd"
                                          className="required"
                                        >
                                          ?????????
                                        </label>
                                        <input type="password" id="new-pwd" onChange={(e)=>{
                                          setNewPassword(e.currentTarget.value);
                                        }}/>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="single-input-item">
                                        <label
                                          htmlFor="confirm-pwd"
                                          className="required"
                                        >
                                          ?????????????????????
                                        </label>
                                        <input
                                          type="password"
                                          id="confirm-pwd"
                                          onChange={(e)=>{
                                            setConfirmPassword(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                                <div className="single-input-item">
                                  <button className="check-btn sqr-btn"
                                    style={ saveChanges ? { backgroundColor: "#eb3e3263"} : {} }
                                    disabled={saveChanges}
                                    onClick={async ()=>{
                                      if (newPassword !== confirmPassword) {
                                        alert("??????????????????????????????");
                                      } else {
                                        await post("/User/changepassword/", { 'username': authState.username, 'currentPassword': currentPassword, 'newPassword': newPassword }).then((res)=>{
                                          alert(res.message);
                                          if (res.status === 200) {
                                            router.push("/account-login");
                                          }
                                        })
                                      }
                                    }}>
                                    ????????????
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End My Account Wrapper ==--> */}
      </main>
    </>
  );
}