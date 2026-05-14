import { Metadata } from "next";
import PremiumLegalLayout from "@/components/PremiumLegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Aniza Accounting & Bookkeeping",
  description: "Detailed information on how we use cookies to enhance your experience and optimize our accounting portfolio website.",
};

export default function CookiePolicy() {
  const sections = [
    { id: "what-are-cookies", title: "1. What Are Cookies?" },
    { id: "how-we-use", title: "2. How We Use Cookies" },
    { id: "types", title: "3. Types of Cookies We Use" },
    { id: "third-party", title: "4. Third-Party Cookies" },
    { id: "control", title: "5. Controlling Cookies" },
    { id: "updates", title: "6. Policy Updates" },
    { id: "contact", title: "7. Contact & Inquiries" },
  ];

  return (
    <PremiumLegalLayout 
      title="Cookie Policy" 
      description="Transparent information about the digital technologies we use to provide a seamless, high-performance user experience."
      lastUpdated="May 13, 2026"
      sections={sections}
    >
      <section id="what-are-cookies">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small, encrypted text files that are stored on your computer or mobile device when you visit most professional websites. They are essential for modern web functionality, allowing a website to remember your preferences and recognize you on return visits.
        </p>
      </section>

      <section id="how-we-use">
        <h2>2. How We Use Cookies</h2>
        <p>
          At <strong>Aniza Accounting & Bookkeeping</strong>, we use cookies to improve the efficiency and security of our platform. Specifically, cookies help us:
        </p>
        <ul>
          <li><strong>Optimize Performance:</strong> Ensuring the website loads quickly and functions smoothly across all devices.</li>
          <li><strong>Security & Authentication:</strong> Protecting your interactions and preventing fraudulent activity.</li>
          <li><strong>User Experience:</strong> Remembering your preferences and providing personalized service during your visit.</li>
          <li><strong>Analytics:</strong> Understanding how visitors interact with our portfolio so we can improve our content and layout.</li>
        </ul>
      </section>

      <section id="types">
        <h2>3. Types of Cookies We Use</h2>
        <p>Our website utilizes the following categories of cookies:</p>
        <ul>
          <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features. Without these, certain parts of the site will not function.</li>
          <li><strong>Performance & Analytics Cookies:</strong> We use tools like Google Analytics to collect anonymous information about how visitors use the site. This data helps us optimize the user journey.</li>
          <li><strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as language or region) and provide enhanced, more personal features.</li>
        </ul>
      </section>

      <section id="third-party">
        <h2>4. Third-Party Cookies</h2>
        <p>
          In addition to our first-party cookies, we also utilize third-party cookies from trusted partners:
        </p>
        <ul>
          <li><strong>Fiverr:</strong> Used to track service referrals and ensure a smooth transition when you engage our services on their platform.</li>
          <li><strong>Video Hosting (YouTube/Vimeo):</strong> These platforms may set cookies to enable video playback of our introduction and promotional content.</li>
          <li><strong>Google Analytics:</strong> To help us measure traffic and usage statistics.</li>
        </ul>
      </section>

      <section id="control">
        <h2>5. Controlling Cookies</h2>
        <p>
          You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline them if you prefer. However, please be aware that disabling cookies may limit your ability to use certain features of this website, such as viewing embedded videos or seamlessly navigating to service pages.
        </p>
      </section>

      <section id="updates">
        <h2>6. Policy Updates</h2>
        <p>
          We may update our Cookie Policy from time to time to reflect changes in the technologies we use or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
        </p>
      </section>

      <section id="contact">
        <h2>7. Contact & Inquiries</h2>
        <p>
          If you have any questions about our use of cookies or other tracking technologies, please contact us through the website's contact form.
        </p>
      </section>
    </PremiumLegalLayout>
  );
}
