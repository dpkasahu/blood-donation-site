import React from 'react';
import './EligibilityRules.css';

const EligibilityRules = () => {
  return (
    <div className="eligibility-container">
      <h1>Blood Donation Eligibility Rules</h1>
      <p>To ensure the safety of both donors and recipients, please read the following eligibility criteria:</p>
      <ul className="eligibility-list">
        <li><strong>Weight:</strong> At least 110 pounds (50 kg).</li>
        <li><strong>Health:</strong> You must be in good health and feeling well on the day of donation. Eat a full meal within 4 hours of donating, avoiding fried, fatty foods and whole dairy products.</li>
        <li><strong>I.D. required to donate:</strong> A photo ID is required. Contact the blood center for religious exceptions.</li>
        <li><strong>Allergy shots:</strong> Acceptable.</li>
        <li><strong>Antibiotics:</strong> 
          <ul>
            <li>For UTI (women): acceptable.</li>
            <li>Other: 48 hrs after final dose and if infection has cleared.</li>
            <li>If injected: wait 2 weeks.</li>
          </ul>
        </li>
        <li><strong>Autologous donation:</strong> 3 months after surgery.</li>
        <li><strong>Blood donation frequency:</strong>
          <ul>
            <li>Whole blood: after 56 days.</li>
            <li>Double red cells: after 112 days.</li>
          </ul>
        </li>
        <li><strong>COVID-19:</strong> Eligible 10 days after recovery. Vaccination does not prevent donation.</li>
        <li><strong>Heart Conditions:</strong> Allowed after 6–12 months if stable and no restrictions.</li>
        <li><strong>Pregnancy:</strong> Eligible 6 weeks post-delivery. Breastfeeding is fine.</li>
        <li><strong>NOT eligible if:</strong> Leukemia, Hepatitis B/C, HIV, Lymphoma.</li>
        {/* You can continue listing more conditions here similarly */}
      </ul>
    </div>
  );
};

export default EligibilityRules;
