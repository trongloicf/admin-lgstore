import { HiPencil, HiTrash, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'

function GuestManagement() {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div className="wrap-input flex gap-5">
                    <input className="manager-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                    <button className="manager-btn-search">
                        <HiOutlineSearch />
                    </button>
                </div>
            </div>
            <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Tên</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Số điện thoại</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Địa chỉ</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>1</td>
                        <td style={{ padding: "10px" }}>Nguyễn Văn A</td>
                        <td style={{ padding: "10px" }}>0337337848</td>
                        <td style={{ padding: "10px" }}>Đông Kết, Khoái Châu, Hưng Yên</td>
                        <td style={{ padding: "10px", display: "flex", gap: '10px' }}>
                            <div style={{ padding: "10px", background: "green", borderRadius: "50%", display: "flex", alignItems: "center" }}>
                                <HiPencil
                                    style={{ cursor: "pointer", color: "#fff"}}
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GuestManagement;
