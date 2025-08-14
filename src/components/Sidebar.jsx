import Logo from "./Logo";
import '../App.css';
import '../assets/styles/Slidebar.css';
import { HiViewGridAdd, HiOutlineUser, HiOutlineUserGroup, HiClipboardCheck, HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div style={{ width: "250px", background: "#fafafa", color: "white", padding: "10px", minHeight: "100vh" }}>
      <Logo />
      <ul>
        <li className="flex items-center gap-5 active">
          <HiViewGridAdd size={18}/>
          Dashboard
        </li>
        <li className="flex items-center gap-5">
          <HiOutlineUser size={18}/>
          Người dùng
        </li>
        <li className="flex items-center gap-5">
          <HiOutlineUserGroup size={18}/>
          Khách hàng
        </li>
        <li>Sản phẩm</li>
        <li className="flex items-center gap-5">
          <HiClipboardCheck size={18}/>
          Đơn hàng
        </li>
        <li className="flex items-center gap-5">
          <HiOutlineLogout size={18}/>
          Đăng xuất
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
