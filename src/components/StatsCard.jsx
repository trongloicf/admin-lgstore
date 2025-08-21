// src/components/StatsCard.jsx
const StatsCard = ({ title, value }) => {
  return (
    <div style={{ background: "white", padding: "25px 20px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default StatsCard;
