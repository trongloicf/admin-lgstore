import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ padding: "20px", background: "#e2e8f0", minHeight: "100vh", marginLeft: "250px", marginTop: "50px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;