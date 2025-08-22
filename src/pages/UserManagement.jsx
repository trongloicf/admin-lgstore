import { HiPencil, HiTrash, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'

function UserManagement() {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div className="wrap-input flex gap-5">
                    <input className="manager-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                    <button className="manager-btn-search">
                        <HiOutlineSearch />
                    </button>
                </div>
                <button className="btn-add">Thêm người dùng</button>
            </div>
            <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: "#22C55E", textAlign: "left" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>ID</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Tên</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Email</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Vai trò</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>1</td>
                        <td style={{ padding: "10px" }}>Nguyễn Văn A</td>
                        <td style={{ padding: "10px" }}>a@example.com</td>
                        <td style={{ padding: "10px" }}>Admin</td>
                        <td style={{ padding: "10px" }}>
                            <div className="btn-actions">
                                <div style={{ padding: "10px", background: "green", borderRadius: "50%", display: "flex", alignItems: "center" }}>
                                    <HiPencil
                                        style={{ cursor: "pointer", color: "#fff" }}
                                        title="Sửa"
                                        size={17}
                                        onClick={() => alert("Sửa user 1")}
                                    />
                                </div>
                                <div style={{ padding: "10px", background: "red", borderRadius: "50%", display: "flex", alignItems: "center" }}>
                                    <HiTrash
                                        style={{ cursor: "pointer", color: "#fff" }}
                                        title="Xóa"
                                        size={17}
                                        onClick={() => alert("Xóa user 1")}
                                    />
                                </div>
                                <div style={{ padding: "10px", background: "blue", borderRadius: "50%", display: "flex", alignItems: "center" }}>
                                    <HiEye
                                        style={{ cursor: "pointer", color: "#fff" }}
                                        title="Chi tiết"
                                        size={17}
                                        onClick={() => alert("Xem chi tiết user 1")}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserManagement;
