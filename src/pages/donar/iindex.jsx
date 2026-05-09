import React, { useEffect, useState } from "react";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

/* ── Inline SVG assets (no external image deps) ── */

// Doctor / nurse SVG illustration — green scrubs, stethoscope, watch
const DoctorSVG = () => (
  <svg
    viewBox="0 0 380 520"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
    aria-hidden="true"
  >
    {/* Background wash */}
    <rect width="380" height="520" fill="none" />

    {/* Body / scrubs */}
    <ellipse cx="190" cy="420" rx="130" ry="160" fill="#3db08c" />
    <rect x="100" y="300" width="180" height="220" rx="20" fill="#3db08c" />

    {/* Collar / inner scrubs */}
    <path d="M155,300 Q190,340 225,300 L220,320 Q190,355 160,320Z" fill="#2a9070" />

    {/* Neck */}
    <rect x="170" y="220" width="40" height="85" rx="8" fill="#f5c5a3" />

    {/* Head */}
    <ellipse cx="190" cy="200" rx="65" ry="75" fill="#f5c5a3" />

    {/* Hair */}
    <path d="M125,185 Q130,110 190,110 Q250,110 255,185 Q240,155 190,155 Q140,155 125,185Z" fill="#3a2a1a" />
    {/* Short hair sides */}
    <path d="M125,185 Q122,210 128,230 Q135,195 140,190Z" fill="#3a2a1a" />
    <path d="M255,185 Q258,210 252,230 Q245,195 240,190Z" fill="#3a2a1a" />

    {/* Ears */}
    <ellipse cx="126" cy="205" rx="12" ry="16" fill="#f0b090" />
    <ellipse cx="254" cy="205" rx="12" ry="16" fill="#f0b090" />

    {/* Face features */}
    {/* Eyes */}
    <ellipse cx="168" cy="198" rx="9" ry="10" fill="#fff" />
    <ellipse cx="212" cy="198" rx="9" ry="10" fill="#fff" />
    <ellipse cx="170" cy="200" rx="5" ry="6" fill="#5a3a2a" />
    <ellipse cx="214" cy="200" rx="5" ry="6" fill="#5a3a2a" />
    <ellipse cx="171" cy="199" rx="2" ry="2.5" fill="#111" />
    <ellipse cx="215" cy="199" rx="2" ry="2.5" fill="#111" />
    {/* Eyebrows */}
    <path d="M158,186 Q168,181 178,185" stroke="#3a2a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M202,185 Q212,181 222,186" stroke="#3a2a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Nose */}
    <path d="M188,210 Q185,225 183,230 Q190,234 197,230 Q195,225 192,210" fill="#e0a080" />
    {/* Mouth / smile */}
    <path d="M174,242 Q190,254 206,242" stroke="#c07050" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M174,242 Q174,248 180,249" stroke="#c07050" strokeWidth="1.5" fill="none" />
    <path d="M206,242 Q206,248 200,249" stroke="#c07050" strokeWidth="1.5" fill="none" />

    {/* Stethoscope */}
    <path
      d="M160,295 Q140,310 135,340 Q133,360 145,370 Q165,385 175,365 Q180,350 170,340 Q160,330 155,340"
      stroke="#555" strokeWidth="5" fill="none" strokeLinecap="round"
    />
    <circle cx="155" cy="343" r="10" fill="#666" />
    <circle cx="145" cy="370" r="13" fill="#888" />
    <circle cx="145" cy="370" r="7" fill="#aaa" />
    {/* Earpieces */}
    <path d="M160,295 Q158,280 150,272" stroke="#555" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M160,295 Q162,280 155,270" stroke="#555" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="149" cy="271" r="5" fill="#444" />
    <circle cx="154" cy="269" r="5" fill="#444" />

    {/* Right arm raised — holding something */}
    <ellipse cx="285" cy="330" rx="28" ry="90" fill="#3db08c" transform="rotate(-20,285,330)" />
    <ellipse cx="295" cy="260" rx="20" ry="30" fill="#f5c5a3" transform="rotate(-20,295,260)" />

    {/* Watch on right wrist */}
    <rect x="280" y="252" width="30" height="16" rx="4" fill="#c8a060" />
    <rect x="284" y="254" width="22" height="12" rx="2" fill="#1a1a2e" />
    <line x1="295" y1="256" x2="295" y2="264" stroke="#fff" strokeWidth="1" />
    <line x1="291" y1="260" x2="299" y2="260" stroke="#fff" strokeWidth="1" />

    {/* Left arm down */}
    <ellipse cx="100" cy="370" rx="26" ry="80" fill="#3db08c" transform="rotate(10,100,370)" />
    <ellipse cx="96" cy="435" rx="20" ry="25" fill="#f5c5a3" transform="rotate(10,96,435)" />

    {/* Clipboard or tablet in left hand */}
    <rect x="65" y="420" width="55" height="70" rx="4" fill="#e8e0d0" transform="rotate(10,90,450)" />
    <rect x="70" y="426" width="45" height="55" rx="2" fill="#f5f0e8" transform="rotate(10,90,450)" />
    <line x1="74" y1="432" x2="110" y2="430" stroke="#ccc" strokeWidth="1.5" transform="rotate(10,90,450)" />
    <line x1="74" y1="438" x2="110" y2="436" stroke="#ccc" strokeWidth="1.5" transform="rotate(10,90,450)" />
    <line x1="74" y1="444" x2="100" y2="442" stroke="#ccc" strokeWidth="1.5" transform="rotate(10,90,450)" />

    {/* ID badge */}
    <rect x="178" y="305" width="24" height="32" rx="3" fill="#fff" opacity="0.9" />
    <rect x="181" y="308" width="18" height="8" rx="2" fill="#2a9070" />
    <line x1="182" y1="320" x2="196" y2="320" stroke="#ddd" strokeWidth="1.5" />
    <line x1="182" y1="325" x2="193" y2="325" stroke="#ddd" strokeWidth="1.5" />
    <line x1="182" y1="330" x2="195" y2="330" stroke="#ddd" strokeWidth="1.5" />

    {/* Pant legs */}
    <rect x="110" y="460" width="65" height="60" rx="8" fill="#2a8060" />
    <rect x="185" y="460" width="65" height="60" rx="8" fill="#2a8060" />
    {/* Shoes */}
    <ellipse cx="143" cy="520" rx="40" ry="12" fill="#222" />
    <ellipse cx="217" cy="520" rx="40" ry="12" fill="#222" />
  </svg>
);

// Blood drop with hands SVG for "Give the Gift of Life" section
const BloodDonationSVG = () => (
  <svg viewBox="0 0 260 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 260 }} aria-hidden="true">
    {/* Large blood drop */}
    <path
      d="M130,20 Q170,70 185,110 Q200,150 180,180 Q160,215 130,220 Q100,215 80,180 Q60,150 75,110 Q90,70 130,20Z"
      fill="#cc2222"
    />
    {/* Shine on drop */}
    <ellipse cx="110" cy="95" rx="18" ry="28" fill="rgba(255,255,255,0.25)" transform="rotate(-20,110,95)" />

    {/* Hands reaching up from bottom */}
    {/* Left hand */}
    <path
      d="M30,280 Q25,240 35,220 Q40,210 50,215 Q52,200 62,202 Q64,188 74,192 Q76,178 86,183 L88,230 Q78,232 70,245 Q62,260 55,280Z"
      fill="#e8b090"
    />
    {/* Left hand details - fingers */}
    <path d="M50,215 L52,195" stroke="#d09070" strokeWidth="2" fill="none" />
    <path d="M62,202 L64,183" stroke="#d09070" strokeWidth="2" fill="none" />
    <path d="M74,192 L76,174" stroke="#d09070" strokeWidth="2" fill="none" />

    {/* Right hand */}
    <path
      d="M230,280 Q235,240 225,220 Q220,210 210,215 Q208,200 198,202 Q196,188 186,192 Q184,178 174,183 L172,230 Q182,232 190,245 Q198,260 205,280Z"
      fill="#e8b090"
    />
    {/* Right hand details */}
    <path d="M210,215 L208,195" stroke="#d09070" strokeWidth="2" fill="none" />
    <path d="M198,202 L196,183" stroke="#d09070" strokeWidth="2" fill="none" />
    <path d="M186,192 L184,174" stroke="#d09070" strokeWidth="2" fill="none" />

    {/* Small blood drops scattered around */}
    <path d="M50,150 Q54,140 58,150 Q56,160 50,160Z" fill="#cc2222" opacity="0.8" />
    <path d="M200,145 Q204,135 208,145 Q206,155 200,155Z" fill="#cc2222" opacity="0.8" />
    <path d="M70,200 Q73,193 76,200 Q74,207 70,207Z" fill="#cc2222" opacity="0.7" />
    <path d="M188,198 Q191,191 194,198 Q192,205 188,205Z" fill="#cc2222" opacity="0.7" />
    <path d="M35,175 Q37,169 39,175 Q38,181 35,181Z" fill="#cc2222" opacity="0.6" />
    <path d="M220,170 Q222,164 224,170 Q223,176 220,176Z" fill="#cc2222" opacity="0.6" />
  </svg>
);

const Index = () => {
  const [stock, setStock] = useState({});
  const [stats, setStats] = useState({ donors: 0, units: 0 });

  useEffect(() => {
    document.title = "BBDMS - Blood Bank & Donor Management";

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      const mockStock = {
        "A+": 12, "A-": 4, "B+": 15, "B-": 2,
        "AB+": 5, "AB-": 1, "O+": 22, "O-": 8,
      };
      const totalUnits = Object.values(mockStock).reduce((a, b) => a + b, 0);
      setStock(mockStock);
      setStats({ donors: 142, units: totalUnits });
    };

    fetchData();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Segoe UI', Arial, sans-serif", overflow: "hidden" }}>

      {/* ── HERO SECTION ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #18c5b5 0%, #5ad7cc 100%)",
        overflow: "hidden",
      }}>

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.08)", zIndex: 0 }} />

        {/* NAVBAR */}
        <nav style={{
          position: "relative", zIndex: 30,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 64px",
        }}>
          <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 700, letterSpacing: 2, margin: 0 }}>BBDMS</h1>
          <ul style={{
            display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0,
            color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase",
          }}>
            {["Home", "About", "Donors List", "Contact Us", "Donor Signup", "Admin", "Search Donor"].map((item) => (
              <li key={item} style={{ cursor: "pointer", opacity: 0.9 }}>{item}</li>
            ))}
          </ul>
        </nav>

        {/* HERO CONTENT */}
        <div style={{
          position: "relative", zIndex: 20,
          maxWidth: 1200, margin: "0 auto", padding: "40px 64px 0",
          minHeight: "85vh", display: "flex", alignItems: "center",
        }}>
          {/* LEFT TEXT */}
          <div style={{ color: "#fff", maxWidth: 520 }}>
            <h1 style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 900, textTransform: "uppercase",
              lineHeight: 1.15, margin: 0, letterSpacing: -1,
            }}>
              Blood Is Meant<br />
              For Circulation.<br />
              Donate Blood.
            </h1>

            <p style={{
              marginTop: 28, fontSize: 13, lineHeight: 1.8, opacity: 0.85, maxWidth: 420,
            }}>
              A blood bank is a center where blood gathered as a result of blood donation is stored
              and preserved for later use in blood transfusion. The term blood bank typically refers
              to a division of a hospital where storage of blood products occurs.
            </p>

            {/* BUTTONS */}
            <div style={{ marginTop: 36, display: "flex", gap: 18, flexWrap: "wrap" }}>
              <button style={{
                background: "#fff", color: "#17bcae",
                padding: "13px 34px", borderRadius: 999,
                fontWeight: 700, fontSize: 14, border: "none",
                cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}>
                Donate Now
              </button>
              <button style={{
                background: "transparent", color: "#fff",
                padding: "13px 34px", borderRadius: 999,
                fontWeight: 700, fontSize: 14,
                border: "2px solid rgba(255,255,255,0.8)",
                cursor: "pointer",
              }}>
                Find Donor
              </button>
            </div>

            {/* SLIDER DOTS */}
            <div style={{ display: "flex", gap: 10, marginTop: 52 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
            </div>
          </div>

          {/* RIGHT — Doctor illustration */}
          <div style={{
            position: "absolute", right: -30, top: -40,
            height: "calc(100% + 40px)", width: "48%",
            display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
            overflow: "hidden",
          }}>
            {/* Glow */}
            <div style={{
              position: "absolute", right: 60, top: 60,
              width: 420, height: 420,
              background: "rgba(255,255,255,0.18)",
              filter: "blur(60px)", borderRadius: "50%",
            }} />
            <div style={{ height: "100%", width: "100%", position: "relative", zIndex: 10 }}>
              <DoctorSVG />
            </div>
          </div>
        </div>

        {/* CURVED WHITE BOTTOM */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0, zIndex: 25 }}>
          <svg viewBox="0 0 1440 120" style={{ width: "100%", height: 120, display: "block" }} preserveAspectRatio="none">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ── BELOW-HERO: Give Blood + About Us ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 64px 80px", display: "flex", gap: 60, alignItems: "flex-start" }}>

        {/* LEFT: Give the Gift of Life */}
        <div style={{ flex: "0 0 340px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{
            fontSize: 26, fontWeight: 900, color: "#18c5b5",
            textTransform: "uppercase", letterSpacing: 1, textAlign: "center",
            lineHeight: 1.2, marginBottom: 20,
          }}>
            Give The Gift<br />Of Life:<br />
            <span style={{ color: "#cc2222" }}>Donate Blood</span>
          </h2>
          <BloodDonationSVG />
        </div>

        {/* RIGHT: About Us */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#222", marginBottom: 12 }}>About Us</h2>
          <div style={{ width: 48, height: 3, background: "#18c5b5", borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontSize: 14, lineHeight: 1.85, color: "#555", margin: 0 }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: "#555", marginTop: 16 }}>
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
            reasonable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;