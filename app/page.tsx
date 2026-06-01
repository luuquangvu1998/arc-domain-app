"use client";
import { useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [registered, setRegistered] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  const handleRegister = () => {
    if (!domain) return;
    if (!domain.endsWith(".arc")) {
      setStatus("❌ Tên domain phải kết thúc bằng .arc");
      return;
    }
    if (registered.includes(domain)) {
      setStatus("⚠️ Domain này đã được đăng ký rồi!");
      return;
    }
    setRegistered([...registered, domain]);
    setStatus(`✅ Đăng ký "${domain}" thành công trên Arc Testnet!`);
    setDomain("");
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      fontFamily: "sans-serif",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48 }}>🌐</div>
          <h1 style={{ color: "#a78bfa", fontSize: 32, margin: "8px 0" }}>
            Arc Domain Registry
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 16 }}>
            Đăng ký tên miền Web3 của bạn trên Arc Testnet
          </p>
          <div style={{
            display: "inline-block",
            marginTop: 8,
            padding: "4px 12px",
            backgroundColor: "#1e1b4b",
            borderRadius: 20,
            color: "#818cf8",
            fontSize: 13
          }}>
            🔗 Arc Testnet • Chain ID: 5042002
          </div>
        </div>

        {/* Form đăng ký */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: 16,
          padding: 28,
          border: "1px solid rgba(167,139,250,0.2)"
        }}>
          <label style={{ color: "#cbd5e1", fontSize: 14, marginBottom: 8, display: "block" }}>
            Tên domain bạn muốn đăng ký
          </label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="vd: myname.arc"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: 16,
              borderRadius: 10,
              border: "2px solid #4c1d95",
              backgroundColor: "#1e1b4b",
              color: "white",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
          <button
            onClick={handleRegister}
            style={{
              marginTop: 12,
              width: "100%",
              padding: "14px",
              fontSize: 16,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #7c3aed, #4f46e5)",
              color: "white",
              border: "none",
              borderRadius: 10,
              cursor: "pointer"
            }}
          >
            🚀 Đăng ký Domain
          </button>

          {status && (
            <div style={{
              marginTop: 12,
              padding: "10px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#e2e8f0",
              fontSize: 14
            }}>
              {status}
            </div>
          )}
        </div>

        {/* Danh sách đã đăng ký */}
        {registered.length > 0 && (
          <div style={{ marginTop: 24 }}>
            <h3 style={{ color: "#a78bfa", marginBottom: 12 }}>
              📋 Domain đã đăng ký
            </h3>
            {registered.map((d, i) => (
              <div key={i} style={{
                padding: "12px 16px",
                marginBottom: 8,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 10,
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#e2e8f0",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <span>🌐 {d}</span>
                <span style={{ color: "#4ade80", fontSize: 13 }}>✓ Đã đăng ký</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 40, color: "#475569", fontSize: 13 }}>
          Built on Arc Testnet • Powered by Web3
        </div>

      </div>
    </main>
  );
}