import router from "next/router";

export default function Success() {
  return (
    <div className="success">
      <h1>支付成功</h1>
      <button className="border-radius-30 btn-theme " onClick={()=>{router.push('/')}}>回到首页</button>
    </div>
  );
}