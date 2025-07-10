"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white z-10 relative ">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: July 10, 2025</p>

      <section className="space-y-6 text-color">
        <p>
          Welcome to <strong>linkgraph.net</strong>. Your privacy is important
          to us. This Privacy Policy explains how we collect, use, and protect
          your personal information when you use our website and services.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            <strong>Personal Information:</strong> We collect information like
            your name, email, and contact details if you submit them through
            forms.
          </p>
          <p>
            <strong>Non-Personal Information:</strong> We automatically collect
            browser info, device type, IP address, and usage data via cookies
            and analytics tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and improve our services</li>
            <li>To respond to inquiries or support requests</li>
            <li>To send updates or newsletters (if opted-in)</li>
            <li>To monitor and analyze usage trends</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
          <p>
            We use cookies to improve user experience and collect usage data.
            You can disable cookies in your browser, but some features may not
            function properly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>We do not sell or share your data except:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>When required by law</li>
            <li>
              With trusted partners who help operate the website (under
              confidentiality agreements)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We use industry-standard practices to protect your data. However, no
            method of online transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data by
            contacting us at:
          </p>
          <p>
            <strong>Email:</strong> support@linkgraph.net
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. External Links</h2>
          <p>
            We may link to external websites. We are not responsible for their
            content or privacy practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            {"8. Children's Privacy"}
          </h2>
          <p>
            We do not knowingly collect data from children under 13. If you
            believe a child has submitted personal information, please contact
            us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy. All changes will be posted on this page
            with an updated date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>If you have questions or concerns, reach out to us at:</p>
          <p>
            <strong>Email:</strong> support@linkgraph.net
          </p>
        </div>
      </section>
    </div>
  );
}
