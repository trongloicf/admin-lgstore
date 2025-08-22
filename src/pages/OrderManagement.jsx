import { HiPencil, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'

function OrderManagement() {
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
                    <tr style={{ background: "#22C55E", textAlign: "left" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>ID</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Người nhận</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Số điện thoại</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Tổng tiền đơn hàng</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Tình trạng</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "400" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>1</td>
                        <td style={{ padding: "10px" }}>Nguyễn Văn A</td>
                        <td style={{ padding: "10px" }}>0337337848</td>
                        <td style={{ padding: "10px" }}>200,000VND</td>
                        <td style={{ padding: "10px" }}>
                            <span style={{ color: "green", background: "#eee", padding: "5px", borderRadius: "2px" }}>Chờ xử lý</span>
                        </td>
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

export default OrderManagement;
