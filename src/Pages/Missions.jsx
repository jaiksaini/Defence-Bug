import React from "react";
import "./Css/Missions.css"; // Assuming you have a CSS file for styles
import email from "../assets/email-authentication.png"
import rca from "../assets/rca.png"
import compliance from "../assets/compliance.png"
import gap from "../assets/gap-analysis.png"
import vapt from "../assets/vapt.png"
import security from "../assets/security-awareness.png"
import risk from "../assets/risk-assessment.png"
import red from "../assets/red-teaming.png"

const Missions = () => {
  return (
    <div>
      <section class="mission">
        <div class="container">
          <h2 class="mission-title">MISSION</h2>
          <p class="mission-text">
            Mission to secure global infrastructure from identified &
            unidentified threats.
          </p>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="features-gridlines">
            <div class="gridline"></div>
            <div class="gridline"></div>
            <div class="gridline"></div>
            <div class="gridline"></div>
            <div class="gridline"></div>
            <div class="gridline-horizontal"></div>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <img
                src={security}
                alt="Security Awareness Training"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Security Awareness Training</h3>
            </div>

            <div class="feature-card">
              <img
                src={email}
                alt="Email Authentication"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Email Authentication</h3>
            </div>

            <div class="feature-card">
              <img src={rca} alt="RCA" class="feature-icon" />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">RCA</h3>
            </div>

            <div class="feature-card">
              <img
                src={risk}
                alt="Risk Assessment"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Risk Assessment</h3>
            </div>

            <div class="feature-card">
              <img
                src={gap}
                alt="Gap Analysis"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Gap Analysis</h3>
            </div>

            <div class="feature-card">
              <img
                src={compliance}
                alt="Compliance"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Compliance</h3>
            </div>

            <div class="feature-card">
              <img
                src={red}
                alt="Red Teaming"
                class="feature-icon"
              />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">Red Teaming</h3>
            </div>

            <div class="feature-card">
              <img src={vapt} alt="VAPT" class="feature-icon" />
              <div class="feature-pseudo"></div>
              <h3 class="feature-title">VAPT</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Missions;
