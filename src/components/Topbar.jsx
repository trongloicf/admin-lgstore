import '../assets/styles/Topbar.css';
import '../App.css';
import { HiOutlineMoon } from "react-icons/hi";

const Topbar = () => {
  return (
    <div style={{ background: "#f1f5f9", padding: "10px 20px", borderBottom: "1px solid #ccc" , display: 'flex', alignItems: 'center', height: '50px', position: "fixed", top: "0", right: "0", left: "250px"}}>
      <h2 className="title">Dashboard</h2>

      {/* <div className="con-input-search">
        <div className='wrap-input'> 
          <input type="text" placeholder="Tìm kiếm..."/>
        </div>
        <button>
          <HiOutlineSearch className="icon-search"/>
        </button>
      </div> */}

      <div className='con-theme'>
        <button>
          <HiOutlineMoon size={15} style={{ marginRight: '5px' }}/>
          Chế độ tối
        </button>
      </div>

      <div className="con-avatar-user">
        <div className="img-user">
          <img src="/avt.jpg" alt="" />
        </div>
        <p className="name-user">Trọng Lợi</p>

        {/* Dropdown menu */}
        <div className="dropdown-menu">
          <ul>
            <li>Thông tin cá nhân</li>
            <li>Đăng xuất</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
