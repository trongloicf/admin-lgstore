import { HiPencil, HiTrash, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'
import { useState } from "react";
import Modal from "../components/Modal";

function ProductManagement() {
    console.log("PM.jsx")
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div className="wrap-input flex gap-5">
                    <input className="manager-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                    <button className="manager-btn-search">
                        <HiOutlineSearch />
                    </button>
                </div>
                <button className="btn-add"
                    onClick={() => setIsOpen(true)}
                >Thêm sản phẩm</button>
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
                                <div className="btn-actions">
                                    <div className="btn-action btn-edit">
                                        <HiPencil size={17} title="Sửa" onClick={() => alert("Sửa user 1")} />
                                    </div>
                                    <div className="btn-action btn-delete">
                                        <HiTrash size={17} title="Xóa" onClick={() => alert("Xóa user 1")} />
                                    </div>
                                    <div className="btn-action btn-view">
                                        <HiEye size={17} title="Chi tiết" onClick={() => alert("Xem chi tiết user 1")} />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {
                isOpen &&
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="modal-header">
                        <h2>Thêm sản phẩm</h2>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="p-name" className="modal-label">
                            Tên sản phẩm
                        </label>
                        <input id="p-name" className="modal-input" placeholder="Tên sản phẩm..."></input>
                        <div className="wrap-cate-price">
                            <div className="col-3">
                                <label className="modal-label">Danh mục</label>
                                <select className="modal-select" name="" id="">
                                    <option value="" className="modal-option">-- Chọn danh mục --</option>
                                    <option value="" className="modal-option">Áo bóng đá</option>
                                    <option value="" className="modal-option">Giày</option>
                                    <option value="" className="modal-option">Phụ kiện</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label className="modal-label">Khuyến mãi</label>
                                <select className="modal-select" name="" id="">
                                    <option value="" className="modal-option">-- Chọn khuyến mãi --</option>
                                    <option value="" className="modal-option">FlashSale (-50%)</option>
                                    <option value="" className="modal-option">Black Friday (-20%)</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label htmlFor="p-price" className="modal-label">Giá</label>
                                <input id="p-price" className="modal-input" type="number" placeholder="Giá sản phẩm...(VD: 2000)"></input>
                            </div>
                        </div>
                        <label htmlFor="p-desc" className="modal-label">
                            Mô tả sản phẩm
                        </label>
                        <textarea className="text-desc" name="" id="p-desc" placeholder="Mô tả sản phẩm..."></textarea>
                        <div className="wrap-size">
                            <label className="modal-label">
                                Kích thước + Số lượng
                            </label>
                            <button className="btn-add">Thêm kích thước</button>
                            <table className="modal-table">
                                <thead>
                                    <tr>
                                        <th>Kích thước</th>
                                        <th>Số lượng</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S</td>
                                        <td>36</td>
                                        <td>
                                            <div className="btn-actions">
                                                <button className="btn-edit">
                                                    Sửa
                                                </button>
                                                <button className="btn-delete">
                                                    Xóa
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div >
                            <label className="modal-label">Ảnh sản phẩm</label>
                            <div className="upload-area">
                                <button className="btn-add">
                                    Thêm ảnh
                                </button>
                            </div>

                            <div className="image-list">
                                {/* Ảnh 1 */}
                                <div className="image-item">
                                    <img
                                        src="https://sneakerdaily.vn/wp-content/uploads/2025/08/Ao-adidas-Manchester-United-25_26-Away-Authentic-Jersey-White-JI7424.jpg"
                                        alt="preview"
                                        className="thumb"
                                    />
                                    <button type="button" className="btn-remove">✖</button>
                                    <div className="main-check">
                                        <input type="radio" name="mainImage" />
                                        <p>Ảnh chính</p> 
                                    </div>
                                </div>

                                {/* Ảnh 2 */}
                                <div className="image-item">
                                    <img
                                        src="https://sneakerdaily.vn/wp-content/uploads/2025/08/Ao-adidas-Manchester-United-25_26-Away-Authentic-Jersey-White-JI7424-2.jpg"
                                        alt="preview"
                                        className="thumb"
                                    />
                                    <button type="button" className="btn-remove">✖</button>
                                    <div className="main-check">
                                        <input type="radio" name="mainImage" />
                                        <p>Ảnh chính</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <button id="modal-save">Lưu</button>
                    </div>
                </Modal>
            }
        </div>
    );
}

export default ProductManagement;
