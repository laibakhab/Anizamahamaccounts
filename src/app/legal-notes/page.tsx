import { Metadata } from "next";
import PremiumLegalLayout from "@/components/PremiumLegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notes | Aniza Accounting & Bookkeeping",
  description: "Official legal documentation and professional disclaimers for Aniza Accounting & Bookkeeping portfolio website.",
};

export default function LegalNotes() {
  const sections = [
    { id: "disclaimer", title: "1. Disclaimer" },
    { id: "intellectual-property", title: "2. Intellectual Property" },
    { id: "liability", title: "3. Limitation of Liability" },
    { id: "external-links", title: "4. External Links" },
    { id: "contact", title: "5. Contact" },
  ];

  return (
    <PremiumLegalLayout 
      title="Legal Notes" 
      description="Professional disclaimers and legal information regarding the use of this portfolio website."
      lastUpdated="May 21, 2026"
      sections={sections}
    >
      <section id="disclaimer">
        <h2>1. Disclaimer</h2>
        <p>
          This website serves as a <strong>personal professional portfolio and demonstration</strong> of accounting and bookkeeping services provided by Aniza Maham.
        </p>
        <p>
          While every effort is made to ensure the accuracy of the information presented, all content is provided for informational purposes only. It does not constitute formal financial, legal, or tax advice. Visitors should seek professional consultation before making financial decisions based on the content of this site.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>2. Intellectual Property</h2>
        <p>
          Unless otherwise stated, all original content, design elements, graphics, and code on this website are the <strong>exclusive intellectual property</strong> of the website owner.
        </p>
        <p>
          Any third-party logos, trademarks, or service marks (such as QuickBooks, Xero, or Zoho) used on this site remain the property of their respective owners and are used here for illustrative purposes to demonstrate software proficiency.
        </p>
      </section>

      <section id="liability">
        <h2>3. Limitation of Liability</h2>
        <p>
          The website owner shall <strong>not be held responsible or liable</strong> for any loss, damage, or inconvenience caused by the use of this website or reliance on its content. 
        </p>
        <p>
          Use of this website is at the visitor&apos;s own risk. We do not guarantee that the website will be error-free, uninterrupted, or free of viruses or other harmful components.
        </p>
      </section>

      <section id="external-links">
        <h2>4. External Links</h2>
        <p>
          This website may contain links to external third-party websites for your convenience. These external sites are <strong>not under our control</strong>, and we take no responsibility for their content, privacy policies, or practices.
        </p>
        <p>
          Linking to an external site does not imply endorsement of that site or its products/services.
        </p>
      </section>

      <section id="contact">
        <h2>5. Contact</h2>
        <p>
          If you have any questions, concerns, or legal inquiries regarding this website or its content, please feel free to reach out.
        </p>
        <p>
          You can submit your inquiry through the <Link href="/#contact"><strong>Contact Page</strong></Link> or email directly for a professional response.
        </p>
      </section>
    </PremiumLegalLayout>
  );
}
