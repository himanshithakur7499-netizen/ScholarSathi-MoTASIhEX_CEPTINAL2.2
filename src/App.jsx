import { useState } from "react";
import "./App.css";
import JagoChat from "./JagoChat";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const scholarships = [
    {
      name: "Pre-Matric Scholarship",
      short: "Pre-Matric",
      icon: "📚",
      level: "School Students",
      description: "Financial support for eligible ST students studying at school level.",
    },
    {
      name: "Post-Matric Scholarship",
      short: "Post-Matric",
      icon: "🎓",
      level: "College Students",
      description: "Support for ST students pursuing higher education after matriculation.",
    },
    {
      name: "Top Class Scholarship",
      short: "Top Class",
      icon: "🏆",
      level: "Higher Education",
      description: "Support for eligible ST students studying in premier institutions.",
    },
    {
      name: "National Fellowship for ST",
      short: "NFST",
      icon: "🔬",
      level: "Research Students",
      description: "Fellowship support for eligible ST students pursuing research.",
    },
    {
      name: "National Overseas Scholarship",
      short: "NOS",
      icon: "🌍",
      level: "Overseas Studies",
      description: "Support for eligible ST students pursuing higher studies abroad.",
    },
  ];

  const menuItems = [
    ["Dashboard", "⌂"],
    ["Scholarships", "🎓"],
    ["My Applications", "📋"],
    ["Scholarship Passport", "🪪"],
    ["Verification", "✓"],
    ["Document Wallet", "📁"],
    ["DBT & Payments", "₹"],
  ];

  const renderDashboard = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">SCHOLARSATHI • UNIFIED SCHOLARSHIP PLATFORM</div>

          <h1>One Student.<br />One Scholarship Journey.</h1>

          <p>
            Discover the right scholarship, reuse your verified profile,
            track your application and understand every step — all in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setActivePage("Scholarships")}
            >
              Find My Scholarship →
            </button>

            <button
              className="secondary-btn"
              onClick={() => setActivePage("Scholarship Passport")}
            >
              View Scholarship Passport
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="passport-circle">
            <div className="passport-icon">✓</div>
            <strong>Scholarship</strong>
            <strong>Passport</strong>
            <span>Verified Profile</span>
          </div>

          <div className="floating-tag tag-one">✓ Verified</div>
          <div className="floating-tag tag-two">5 Schemes</div>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎓</div>
          <div>
            <strong>5</strong>
            <span>Scholarship Schemes</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <strong>4</strong>
            <span>Verified Records</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">₹</div>
          <div>
            <strong>₹24,000</strong>
            <span>DBT Received</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning-icon">!</div>
          <div>
            <strong>1</strong>
            <span>Action Required</span>
          </div>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <div className="section-label">SCHOLARSHIP DISCOVERY</div>
          <h2>Five Scholarships. One Platform.</h2>
          <p>Explore scholarship opportunities available through the unified platform.</p>
        </div>

        <button
          className="text-btn"
          onClick={() => setActivePage("Scholarships")}
        >
          View all →
        </button>
      </div>

      <section className="scholarship-grid">
        {scholarships.map((scheme) => (
          <div className="scheme-card" key={scheme.name}>
            <div className="scheme-top">
              <div className="scheme-icon">{scheme.icon}</div>
              <span className="status-badge">MoTA</span>
            </div>

            <span className="scheme-level">{scheme.level}</span>

            <h3>{scheme.name}</h3>

            <p>{scheme.description}</p>

            <div className="scheme-bottom">
              <div>
                <small>STATUS</small>
                <strong>Explore eligibility</strong>
              </div>

              <button onClick={() => setActivePage("Scholarships")}>
                Explore →
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="two-column">
        <div className="passport-card">
          <div className="card-header">
            <div>
              <div className="section-label">YOUR VERIFIED PROFILE</div>
              <h2>Scholarship Passport</h2>
            </div>

            <button onClick={() => setActivePage("Scholarship Passport")}>
              Open Passport →
            </button>
          </div>

          <div className="profile-row">
            <div className="avatar">HT</div>

            <div className="profile-info">
              <h3>Himanshi Thakur</h3>
              <p>Student ID: ST-DEMO-2026-001</p>

              <div className="verification-pills">
                <span>✓ Identity</span>
                <span>✓ ST Status</span>
                <span>✓ Academic</span>
                <span>✓ Enrollment</span>
              </div>
            </div>

            <div className="profile-score">
              <strong>80%</strong>
              <span>Profile Verified</span>
            </div>
          </div>

          <div className="progress">
            <div style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="jago-preview">
          <div className="jago-icon">✦</div>

          <div className="section-label">AI SCHOLARSHIP ASSISTANT</div>

          <h2>Meet JAGO</h2>

          <p>
            Ask about eligibility, documents, application status,
            verification and DBT payments.
          </p>

          <button>Ask JAGO ✦</button>
        </div>
      </section>

      <section className="application-card">
        <div>
          <div className="section-label">CURRENT APPLICATION</div>
          <h2>Post-Matric Scholarship</h2>
          <p>Application ID: PM-2026-00142</p>
        </div>

        <div className="application-progress">
          <span className="status-badge warning">Verification in Progress</span>
          <div className="progress">
            <div style={{ width: "70%" }}></div>
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={() => setActivePage("My Applications")}
        >
          Track Application
        </button>
      </section>
    </>
  );

  const renderScholarships = () => (
    <>
      <div className="page-title">
        <div className="section-label">SCHOLARSHIP DISCOVERY</div>
        <h1>Find Your Scholarship</h1>
        <p>
          Explore all five MoTA scholarship schemes from one unified platform.
        </p>
      </div>

      <section className="scholarship-large-grid">
        {scholarships.map((scheme) => (
          <div className="scheme-card large" key={scheme.name}>
            <div className="scheme-top">
              <div className="scheme-icon">{scheme.icon}</div>
              <span className="status-badge success">Available</span>
            </div>

            <span className="scheme-level">{scheme.level}</span>

            <h3>{scheme.name}</h3>

            <p>{scheme.description}</p>

            <div className="scheme-bottom">
              <div>
                <small>ELIGIBILITY</small>
                <strong>Check your eligibility</strong>
              </div>

              <button>Check →</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );

  const renderApplications = () => (
    <>
      <div className="page-title">
        <div className="section-label">APPLICATION TRACKING</div>
        <h1>My Applications</h1>
        <p>Track your scholarship application from submission to DBT.</p>
      </div>

      <div className="application-large">
        <span className="status-badge warning">Verification in Progress</span>

        <h2>Post-Matric Scholarship</h2>

        <p>Application ID: PM-2026-00142</p>

        <div className="big-progress">70%</div>

        <div className="timeline">
          <div className="timeline-item done">
            <span>✓</span>
            <div>
              <strong>Application Submitted</strong>
              <small>Completed</small>
            </div>
          </div>

          <div className="timeline-item done">
            <span>✓</span>
            <div>
              <strong>Academic Verification</strong>
              <small>Verified</small>
            </div>
          </div>

          <div className="timeline-item done">
            <span>✓</span>
            <div>
              <strong>ST Status Verification</strong>
              <small>Verified</small>
            </div>
          </div>

          <div className="timeline-item current">
            <span>!</span>
            <div>
              <strong>Income Verification</strong>
              <small>Action required</small>
            </div>
          </div>

          <div className="timeline-item">
            <span>5</span>
            <div>
              <strong>Sanction</strong>
              <small>Waiting for verification</small>
            </div>
          </div>

          <div className="timeline-item">
            <span>6</span>
            <div>
              <strong>DBT Disbursement</strong>
              <small>Not started</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderPassport = () => (
    <>
      <div className="page-title">
        <div className="section-label">STUDENT PROFILE</div>
        <h1>Scholarship Passport</h1>
        <p>Your reusable verified scholarship profile.</p>
      </div>

      <div className="passport-full">
        <div className="big-avatar">HT</div>

        <h2>Himanshi Thakur</h2>
        <p>ST Student • Student ID: ST-DEMO-2026-001</p>

        <div className="passport-score">80% Profile Verified</div>

        <div className="passport-details">
          <div>
            <strong>Identity</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>ST Status</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>Academic Record</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>Enrollment</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>Income</strong>
            <span className="needs">! Action Required</span>
          </div>

          <div>
            <strong>Bank Details</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>Institution</strong>
            <span className="verified">✓ Verified</span>
          </div>

          <div>
            <strong>Profile Reuse</strong>
            <span className="verified">✓ Enabled</span>
          </div>
        </div>
      </div>
    </>
  );

  const renderVerification = () => (
    <>
      <div className="page-title">
        <div className="section-label">UNIFIED VERIFICATION</div>
        <h1>Verification Center</h1>
        <p>See which records are verified and which need your attention.</p>
      </div>

      <div className="verification-list">
        {[
          ["Identity", "Student identity record verified", "✓", false],
          ["ST Status", "ST certificate verified", "✓", false],
          ["Academic Record", "Academic information verified", "✓", false],
          ["Enrollment", "Institution enrollment verified", "✓", false],
          ["Income Certificate", "Income record needs correction", "!", true],
          ["Bank Account", "Bank details verified", "✓", false],
        ].map(([title, desc, icon, warning]) => (
          <div className="verification-row" key={title}>
            <div className={`verification-icon ${warning ? "warning" : ""}`}>
              {icon}
            </div>

            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>

            <span className={`status-badge ${warning ? "warning" : "success"}`}>
              {warning ? "Action Required" : "Verified"}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  const renderDocuments = () => (
    <>
      <div className="page-title">
        <div className="section-label">DIGITAL DOCUMENT WALLET</div>
        <h1>My Documents</h1>
        <p>Store and reuse your scholarship documents.</p>
      </div>

      <div className="document-grid">
        {[
          ["ST Certificate", "Verified", "✓"],
          ["Income Certificate", "Needs Update", "!"],
          ["Academic Record", "Verified", "✓"],
          ["Bank Details", "Verified", "✓"],
          ["Institution Proof", "Verified", "✓"],
          ["Identity Document", "Verified", "✓"],
        ].map(([name, status, icon]) => (
          <div className="document-card" key={name}>
            <div className="document-icon">{icon}</div>
            <h3>{name}</h3>
            <p>{status}</p>
            <span className={`status-badge ${status === "Verified" ? "success" : "warning"}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  const renderPayments = () => (
    <>
      <div className="page-title">
        <div className="section-label">DIRECT BENEFIT TRANSFER</div>
        <h1>DBT & Payments</h1>
        <p>Track scholarship payments and disbursement status.</p>
      </div>

      <div className="payment-card">
        <div className="payment-amount">
          <span>Total scholarship received</span>
          <strong>₹24,000</strong>
          <small>Previous successful DBT payment</small>
        </div>

        <div className="timeline">
          <div className="timeline-item done">
            <span>✓</span>
            <div>
              <strong>Previous payment received</strong>
              <small>₹24,000 • Completed</small>
            </div>
          </div>

          <div className="timeline-item current">
            <span>!</span>
            <div>
              <strong>Current scholarship payment</strong>
              <small>Waiting for verification and sanction</small>
            </div>
          </div>

          <div className="timeline-item">
            <span>3</span>
            <div>
              <strong>DBT Disbursement</strong>
              <small>Will update after sanction</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderPage = () => {
    if (activePage === "Dashboard") return renderDashboard();
    if (activePage === "Scholarships") return renderScholarships();
    if (activePage === "My Applications") return renderApplications();
    if (activePage === "Scholarship Passport") return renderPassport();
    if (activePage === "Verification") return renderVerification();
    if (activePage === "Document Wallet") return renderDocuments();
    if (activePage === "DBT & Payments") return renderPayments();

    return renderDashboard();
  };

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">S</div>

          <div>
            <strong>ScholarSathi</strong>
            <span>Unified Scholarship Platform</span>
          </div>
        </div>

        <div className="portal-label">
          MoTA • STUDENT PORTAL
        </div>

        <nav>
          {menuItems.map(([name, icon]) => (
            <button
              key={name}
              className={`nav-item ${activePage === name ? "active" : ""}`}
              onClick={() => setActivePage(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="admin-demo">
            ⚙ Prototype Mode
          </button>

          <div className="help-box">
            <strong>Need help?</strong>
            <span>Ask JAGO about your scholarship.</span>
            <button>Open JAGO ✦</button>
          </div>
        </div>
      </aside>

      {/* MAIN */}

      <main className="main">

        <header className="topbar">
          <div>
            <span>MoTA</span>
            <b>/</b>
            <strong>{activePage}</strong>
          </div>

          <div className="top-actions">
            <button className="language">EN ▾</button>

            <button className="jago-top">
              ✦ JAGO
            </button>

            <div className="user-chip">
              <div>HT</div>

              <span>
                Himanshi
                <small> Student</small>
              </span>
            </div>
          </div>
        </header>

        <div className="demo-banner">
          <strong>DEMO PROTOTYPE</strong>
          <span>
            This prototype uses synthetic student data and mock verification.
          </span>
        </div>

        <div className="content">
          {renderPage()}
        </div>

      </main>

      {/* JAGO AI CHATBOT */}

      <JagoChat />

    </div>
  );
}

export default App;