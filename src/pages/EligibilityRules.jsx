import React from 'react';
import './EligibilityRules.css';
import { FaWeight, FaHeartbeat, FaIdBadge, FaSyringe, FaBaby, FaBan, FaHeart, FaPills } from 'react-icons/fa';

const rules = [
  { icon: <FaWeight />, title: "Weight", text: "At least 110 pounds (50 kg)." },
  { icon: <FaHeartbeat />, title: "Health", text: "Must be in good health. Eat well before donating." },
  { icon: <FaIdBadge />, title: "ID Required", text: "A photo ID is mandatory." },
  { icon: <FaSyringe />, title: "Allergy Shots", text: "Acceptable." },
  {
    icon: <FaPills />, title: "Antibiotics", text:
      "UTI: acceptable. Others: wait 48 hrs after last dose. Injected: wait 2 weeks."
  },
  { icon: <FaHeart />, title: "Heart Conditions", text: "Allowed after 6–12 months if stable." },
  { icon: <FaBaby />, title: "Pregnancy", text: "Eligible 6 weeks post-delivery. Breastfeeding allowed." },
  {
    icon: <FaSyringe />, title: "Donation Frequency", text:
      "Whole blood: 56 days. Double red cells: 112 days."
  },
  {
    icon: <FaBan />, title: "Not Eligible", text:
      "Leukemia, Hepatitis B/C, HIV, Lymphoma."
  },
];

const EligibilityRules = () => {
  return (
    <div className="eligibility-container">
      <h1 className="eligibility-title">Blood Donation Eligibility Rules</h1>
      <p className="eligibility-intro">Please review the criteria below before donating blood:</p>
      <div className="card-grid">
        {rules.map((rule, index) => (
          <div className="card" key={index}>
            <div className="icon">{rule.icon}</div>
            <h3>{rule.title}</h3>
            <p>{rule.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityRules;
