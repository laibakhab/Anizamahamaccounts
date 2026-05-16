import { Metadata } from "next";
import PremiumLegalLayout from "@/components/PremiumLegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Aniza Accounting & Bookkeeping",
  description: "Professional terms and conditions for engaging Aniza Accounting & Bookkeeping services.",
};

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Description of Services" },
    { id: "engagement", title: "3. Professional Engagement" },
    { id: "responsibilities", title: "4. Client Responsibilities" },
    { id: "ip", title: "5. Intellectual Property" },
    { id: "disclaimer", title: "6. Professional Disclaimer" },
    { id: "limitation", title: "7. Limitation of Liability" },
    { id: "third-party", title: "8. Third-Party Platforms" },
    { id: "changes", title: "9. Modifications to Terms" },
  ];

  return (
    <PremiumLegalLayout 
      title="Terms of Service" 
      description="Clear, professional guidelines governing the use of our website and the engagement of our accounting services."
      lastUpdated="May 13, 2026"
      sections={sections}
    >
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and navigating this website, you agree to comply with and be bound by the following Terms of Service. These terms govern your relationship with <strong>Aniza Accounting & Bookkeeping</strong> in relation to this website and any preliminary professional inquiries.
        </p>
      </section>

      <section id="services">
        <h2>2. Description of Services</h2>
        <p>
          Aniza provides high-level accounting, bookkeeping, and financial consultancy services, including but not limited to:
        </p>
        <ul>
          <li>Comprehensive bookkeeping and payroll management.</li>
          <li>Bank and credit card reconciliation.</li>
          <li>Preparation of financial statements and tax consulting.</li>
          <li>Expert support for software including QuickBooks, Xero, MS Excel, and Zoho.</li>
        </ul>
      </section>

      <section id="engagement">
        <h2>3. Professional Engagement</h2>
        <p>
          The information on this website is intended for portfolio and informational purposes. Accessing this website or submitting a contact form does not constitute a formal accountant-client relationship. A professional engagement is only established upon the acceptance of a specific written proposal and the execution of a service agreement.
        </p>
      </section>

      <section id="responsibilities">
        <h2>4. Client Responsibilities</h2>
        <p>
          When inquiring about services, you agree to provide accurate and complete information regarding your business and financial requirements. You are responsible for ensuring that all data shared for the purpose of accounting services is legitimate and compliant with your local jurisdiction's financial regulations.
        </p>
      </section>

      <section id="ip">
        <h2>5. Intellectual Property</h2>
        <p>
          All content featured on this website—including text, graphics, logos, and service descriptions—is the exclusive property of <strong>Aniza Accounting & Bookkeeping</strong>. Unauthorized reproduction, distribution, or modification of any material is strictly prohibited.
        </p>
      </section>

      <section id="disclaimer">
        <h2>6. Professional Disclaimer</h2>
        <p>
          The content provided on this website is for general informational purposes only and does not constitute financial, tax, or legal advice. While Aniza is a certified professional, the application of accounting principles depends on individual circumstances. You should consult with a professional regarding your specific financial situation before making major decisions.
        </p>
      </section>

      <section id="limitation">
        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall Aniza Accounting & Bookkeeping be liable for any indirect, consequential, or incidental damages arising out of the use of this website or the information contained herein. We strive for 100% accuracy, but we do not warrant that the website is free from technical errors or omissions.
        </p>
      </section>

      <section id="third-party">
        <h2>8. Third-Party Links</h2>
        <p>
          This website may contain links to external professional platforms or software providers. We are not responsible for the content, availability, or terms of service of these third-party sites. Your interactions with such platforms are governed by their respective legal agreements.
        </p>
      </section>

      <section id="changes">
        <h2>9. Modifications to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time to reflect changes in our professional practice or legal requirements. Continued use of the website following such changes signifies your agreement to the updated terms.
        </p>
      </section>
    </PremiumLegalLayout>
  );
}
