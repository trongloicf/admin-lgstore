import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        <StatsCard title="Doanh thu hôm nay" value="15.000.000₫" />
        <StatsCard title="Đơn hàng mới" value="25" />
        <StatsCard title="Khách hàng" value="1024" />
        <StatsCard title="Sản phẩm" value="512" />
      </div>

      {/* Bảng đơn hàng gần đây */}
      <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginTop: '20px' }}>
        <h3 style={{ marginBottom: '5px' }}>Đơn hàng gần đây</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f1f5f9", textAlign: "left" }}>
              <th style={{ padding: "10px", borderBottom: "1px solid #e2e8f0" }}>ID</th>
              <th style={{ padding: "10px", borderBottom: "1px solid #e2e8f0" }}>Khách hàng</th>
              <th style={{ padding: "10px", borderBottom: "1px solid #e2e8f0" }}>Sản phẩm</th>
              <th style={{ padding: "10px", borderBottom: "1px solid #e2e8f0" }}>Giá</th>
              <th style={{ padding: "10px", borderBottom: "1px solid #e2e8f0" }}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "10px" }}>id</td>
              <td style={{ padding: "10px" }}>kh</td>
              <td style={{ padding: "10px" }}>sp</td>
              <td style={{ padding: "10px" }}>gia</td>
              <td style={{ padding: "10px" }}>trthai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
