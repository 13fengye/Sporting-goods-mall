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
                            账户信息
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
                            订单列表
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
                            账单地址
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
                            登出
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
                              <h3>账单信息</h3>
                              <address>
                                { typeof billingAddress === 'string' ? 
                                <>
                                  <p><strong>{billingAddress}</strong></p>
                                </> : 
                                <>
                                  <p>姓名: {billingAddress.name}</p>
                                  <p>地址: {billingAddress.address}</p>
                                  <p>联系方式: {billingAddress.phone}</p>
                                </>
                                }
                              </address>
                              <a className="check-btn sqr-btn" onClick={()=>{
                                setAddOrUpdateBillingInfo(!addOrUpdateBillingInfo)
                              }}><i className="fa fa-edit">添加或修改账单信息</i>
                              </a>
                            </div>
                           : (
                            <div className="myaccount-content">
                              <h3 style={{ marginBottom: "0px" }}>
                                添加或修改账单信息
                              </h3>
                              <div className="checkout-billing-details-wrap">
                                <div className="billing-form-wrap">
                                  <div className="row">
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="f_name">
                                          姓名{" "}
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
                                          placeholder="收件人姓名"
                                          onChange={(e) => {
                                            setName(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="street-address">
                                          详细地址{" "}
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
                                          placeholder="收件人详细地址"
                                          onChange={(e) => {
                                            setAddress(e.currentTarget.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 margin-bottom-10">
                                      <div className="form-group">
                                        <label htmlFor="phone">
                                          联系方式{" "}
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
                                          placeholder="收件人联系方式"
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
                                    }}>更新</button>
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
                              <h3>订单列表{'  '}<a className="red-color" onClick={async ()=>{
                                await post("/Order/deleteallorderinfos/", { 'username': authState.username }).then((res)=>{
                                  alert(res.message);
                                  setReFreshGlobalState(!refreshGlobalState);
                                })
                              }}>清空订单</a></h3>
                              <div className="myaccount-table table-responsive text-center">
                                <table className="table table-bordered">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>订单</th>
                                      <th>日期</th>
                                      <th>状态</th>
                                      <th>总计</th>
                                      <th>备注</th>
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
                                            <td>￥{order.price}</td>
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
                                  <td>暂无订单</td>
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
                            <h3>账户信息</h3>
                            <div className="account-details-form">
                              <div>
                                <fieldset>
                                  <legend>修改密码</legend>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="current-pwd"
                                      className="required"
                                    >
                                      旧密码
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
                                          新密码
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
                                          再次输入新密码
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
                                        alert("两次输入的密码不一致");
                                      } else {
                                        await post("/User/changepassword/", { 'username': authState.username, 'currentPassword': currentPassword, 'newPassword': newPassword }).then((res)=>{
                                          alert(res.message);
                                          if (res.status === 200) {
                                            router.push("/account-login");
                                          }
                                        })
                                      }
                                    }}>
                                    保存修改
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