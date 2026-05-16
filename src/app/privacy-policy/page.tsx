import { Metadata } from "next";
import PremiumLegalLayout from "@/components/PremiumLegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Aniza Accounting & Bookkeeping",
  description: "Learn how Aniza Accounting & Bookkeeping handles your sensitive financial data and personal information with the highest professional standards.",
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "data-collection", title: "2. Information We Collect" },
    { id: "financial-data", title: "3. Professional Handling of Financial Data" },
    { id: "purpose", title: "4. Purpose of Data Processing" },
    { id: "security", title: "5. Security & Protection" },
    { id: "third-parties", title: "6. Third-Party Platforms" },
    { id: "retention", title: "7. Data Retention" },
    { id: "rights", title: "8. Your Privacy Rights" },
    { id: "contact", title: "9. Contact Information" },
  ];

  return (
    <PremiumLegalLayout 
      title="Privacy Policy" 
      description="Our commitment to protecting your professional and personal information through industry-leading security practices."
      lastUpdated="May 13, 2026"
      sections={sections}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          At <strong>Aniza Accounting & Bookkeeping</strong>, we recognize that trust is the foundation of every professional relationship. As a certified accounting practice, the privacy and security of your financial and personal data are our highest priorities. This policy outlines our standards for collecting, processing, and safeguarding your information in compliance with international data protection regulations.
        </p>
      </section>

      <section id="data-collection">
        <h2>2. Information We Collect</h2>
        <p>In the course of providing accounting and bookkeeping services, we may collect:</p>
        <ul>
          <li><strong>Identity Data:</strong> Full name, business legal name, and professional credentials.</li>
          <li><strong>Contact Data:</strong> Business email address, phone number, and physical office address.</li>
          <li><strong>Technical Data:</strong> IP addresses, browser types, and usage patterns collected via our website interface.</li>
          <li><strong>Communication Data:</strong> Detailed records of all professional correspondence, including inquiries submitted through our contact forms.</li>
        </ul>
      </section>

      <section id="financial-data">
        <h2>3. Professional Handling of Financial Data</h2>
        <p>
          While this website serves as a portfolio, any financial records shared during professional engagements (such as bank statements, invoices, or payroll data) are handled exclusively within secured accounting environments.
        </p>
        <p>
          We utilize industry-standard software including <strong>QuickBooks, Xero, MS Excel, and Zoho</strong>, which employ their own enterprise-grade encryption and security protocols.
        </p>
      </section>

      <section id="purpose">
        <h2>4. Purpose of Data Processing</h2>
        <p>We process your information for strictly professional purposes:</p>
        <ul>
          <li>To facilitate consultations and provide accurate service quotations.</li>
          <li>To perform agreed-upon bookkeeping, payroll, and financial reporting tasks.</li>
          <li>To ensure compliance with tax regulations and accounting standards (IFRS/GAAP).</li>
          <li>To manage our professional relationship and coordinate services.</li>
        </ul>
      </section>

      <section id="security">
        <h2>5. Security & Protection</h2>
        <p>
          We implement rigorous technical and organizational measures to prevent unauthorized access or disclosure. This includes:
        </p>
        <ul>
          <li>Encrypted data transmission for all website communications (SSL/TLS).</li>
          <li>Multi-factor authentication (MFA) on all professional accounting software access points.</li>
          <li>Regular audits of local and cloud-based storage environments.</li>
        </ul>
      </section>

      <section id="third-parties">
        <h2>6. Third-Party Platforms</h2>
        <p>
          We utilize Google Analytics for website performance monitoring and social media integrations for professional verification. When engaging in services through third-party accounting software, your data is protected by their respective enterprise-grade security protocols.
        </p>
      </section>

      <section id="retention">
        <h2>7. Data Retention</h2>
        <p>
          We retain your personal and financial data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>
      </section>

      <section id="rights">
        <h2>8. Your Privacy Rights</h2>
        <p>
          Under applicable data protection laws, you have the right to request access to your data, demand corrections of inaccuracies, or request the deletion of your personal information (subject to legal retention requirements).
        </p>
      </section>

      <section id="contact">
        <h2>9. Contact Information</h2>
        <p>
          For any inquiries regarding this Privacy Policy or the handling of your data, please reach out via the <strong>Contact Form</strong> on this website.
        </p>
      </section>
    </PremiumLegalLayout>
  );
}
