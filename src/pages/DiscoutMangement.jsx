import { HiPencil, HiTrash, HiEye, HiOutlineSearch } from "react-icons/hi";
import '../assets/styles/Management.css'
import { useState } from "react";
import Modal from "../components/Modal";

function DiscoutMangement() {
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
                >Thêm khuyến mãi</button>
            </div>
            <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: "#22C55E", textAlign: "left" }}>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>ID</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Tên khuyến mãi</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Phần trăm khuyễn mãi</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Ngày bắt đầu</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Ngày kết thúc</th>
                        <th style={{ padding: "10px", borderBottom: "1px solid #ddd", color: "#fff", fontSize: "13px", fontWeight: "500" }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>1</td>
                        <td style={{ padding: "10px" }}>Flash Sale</td>
                        <td style={{ padding: "10px" }}>50%</td>
                        <td style={{ padding: "10px" }}>24/8/2025</td>
                        <td style={{ padding: "10px" }}>27/8/2025</td>
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

            {
                isOpen &&
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="modal-header">
                        <h2>Thêm khuyến mãi</h2>
                    </div>
                    <div className="modal-body">
                        <label for="discount-name" class="modal-label">
                            Tên khuyến mãi
                        </label>
                        <input id="discount-name" class="modal-input" placeholder="Tên khuyến mãi..."></input>
                        <label for="discount-percent" class="modal-label">
                            Phần trăm khuyến mãi
                        </label>
                        <input id="discount-percent" class="modal-input" placeholder="Phần trăm khuyến mãi..."></input>
                        <button id="modal-save">Lưu</button>

                    </div>
                </Modal>
            }
        </div>
    );
}

export default DiscoutMangement;
