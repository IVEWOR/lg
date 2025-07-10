"use client";

import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white z-10 relative">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: July 10, 2025</p>

      <section className="space-y-6 text-color">
        <p>
          By using <strong>linkgraph.net</strong> (“we,” “our,” or “us”), you
          agree to comply with and be bound by the following terms. If you do
          not agree, please do not use our services.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Use of the Website</h2>
          <p>
            You agree to use this site only for lawful purposes and not to
            engage in any activity that disrupts or interferes with the proper
            functioning of the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Intellectual Property
          </h2>
          <p>
            All content on linkgraph.net—including text, images, graphics,
            logos, and code—is our property or licensed to us. You may not copy,
            modify, distribute, or use any content without written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Disclaimers</h2>
          <p>
            All information is provided “as is” without warranties of any kind.
            We make no guarantees of accuracy, reliability, or fitness for a
            particular purpose.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p>
            We are not liable for any damages—direct or indirect—that may result
            from your use of the website or services, including loss of data,
            profit, or business opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Third-Party Links</h2>
          <p>
            We may link to external sites. We are not responsible for their
            content or practices and do not endorse them.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the site
            at any time, without notice, for violating these terms or for any
            other reason.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Changes will be posted here
            with the updated date. Continued use of the site means you accept
            the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be
            subject to the jurisdiction of the courts in Karnal, Haryana.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms of Service, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@linkgraph.net
          </p>
        </div>
      </section>
    </div>
  );
}
