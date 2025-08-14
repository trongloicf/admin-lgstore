import './App.css';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ padding: "20px", background: "#e2e8f0", minHeight: "100vh" }}>
          <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <StatsCard title="Doanh thu hôm nay" value="15.000.000₫" />
            <StatsCard title="Đơn hàng mới" value="25" />
            <StatsCard title="Khách hàng" value="1024" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
