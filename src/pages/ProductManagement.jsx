import { HiPencil, HiTrash, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'

function ProductManagement() {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div className="wrap-input flex gap-5">
                    <input className="manager-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                    <button className="manager-btn-search">
                        <HiOutlineSearch />
                    </button>
                </div>
                <button className="btn-add">Thêm sản phẩm</button>
            </div>
            <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: "#22C55E", textAlign: "left" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>ID</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Ảnh sản phẩm</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Tên sản phẩm</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Danh mục</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Giá</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Tồn kho</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>1</td>
                        <td style={{ padding: "10px" }}>
                            <img style={{ width: "120px" }} src="https://sneakerdaily.vn/wp-content/uploads/2025/02/Ao-Adidas-Messi-Training-Jersey-White-IZ2996.jpg" alt=""></img>
                        </td>
                        <td style={{ padding: "10px" }}>Áo Adidas Messi Training Jersey ‘White’ IZ2996</td>
                        <td style={{ padding: "10px" }}>Áo bóng đá</td>
                        <td style={{ padding: "10px" }}>890.000</td>
                        <td style={{ padding: "10px" }}>890</td>
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

export default ProductManagement;
