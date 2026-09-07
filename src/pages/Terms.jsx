import {Container,PageHero} from '../components/UI';

const Email = () => <a href="mailto:info@farsightadvisory.in">info@farsightadvisory.in</a>;

export default function Terms(){
  return <>
    <PageHero eyebrow="Legal" title="Terms & Conditions" text="The terms that apply when you use this website or engage Farsight Advisory."/>
    <section className="section"><Container className="legal terms-policy">
      <p className="legal-updated">Last updated: September 07, 2026</p>

      <h2>About Us</h2>
      <p>Welcome to <a href="https://farsightadvisory.in"><strong>farsightadvisory.in</strong></a></p>
      <p>Farsight Advisory Private Limited is an online business registration portal catering to new startups and MSMEs in India. Farsight Advisory Private Limited offers a comprehensive array of solutions, including company incorporation, GST registration, FSSAI registration, import-export code acquisition, business plan preparation, assistance in safeguarding intellectual property and brand through trademark, copyright, and patent services, securing ISO certification, and providing legal and financial consultancy for MSMEs.</p>

      <h2>Purpose</h2>
      <p><strong>Farsight Advisory Private Limited</strong> is committed to protecting any personal information that we may receive. We believe it is important for you to know how we treat the information when you engage with us. The information we collect will be used to fulfill the required services.</p>

      <h2>Applicability</h2>
      <p>These Terms & Conditions apply solely to our online activities and are applicable to visitors of the <strong>Farsight Advisory Private Limited</strong> website regarding the information they share and/or collect.</p>

      <h2>Information Collected</h2>
      <p>We collect both directly provided personal information (e.g., name, phone, email, business details) and information that is passively or automatically collected (e.g., IP address, browser type, operating system, visited pages).</p>
      <p>This may extend to service usage history, subscriptions, agreements, and payment transactions.</p>

      <h2>How We May Use The User Information</h2>
      <ul>
        <li>Communicate regarding feedback, follow-ups, and queries submitted.</li>
        <li>Fulfill service requests and share relevant product or service information.</li>
        <li>Provide technical support.</li>
        <li>Enforce our policies, terms of service, and legal requirements.</li>
        <li>Conduct market research, analysis, and statistical studies on service usage.</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p>You may withdraw your consent anytime by contacting us at <Email/>.</p>

      <h2>Security And Data Processing</h2>
      <p>We maintain strict security procedures to safeguard personal information, but absolute security cannot be guaranteed. By providing your information, you acknowledge and accept this inherent risk.</p>

      <h2>User Obligations</h2>
      <p>You are prohibited from copying, distributing, modifying, reverse-engineering, or reproducing website content without permission. Unauthorized commercial or non-commercial use is strictly prohibited.</p>

      <h2>Acceptance Of The Policy</h2>
      <p>By using this website, signing up, or sharing information, you accept these Terms & Conditions unconditionally. If you disagree, please discontinue use.</p>

      <h2>Governing Law And Jurisdiction</h2>
      <p>These Terms are governed by the laws of India. Disputes shall be resolved amicably, failing which arbitration will be conducted under the Arbitration and Conciliation Act, 1996, in Noida, in English, and the award shall be final and binding.</p>

      <h2>Updates</h2>
      <p>We may revise these Terms & Conditions from time to time. Your continued use of the website implies acceptance of the updated terms.</p>

      <h2>Links To Other Websites</h2>
      <p>Our Service may link to third-party sites. We are not responsible for their policies or practices and strongly encourage reviewing their terms.</p>

      <h2>Refund Policy</h2>
      <p>Refunds are subject to service assessment and documented agreements. The Service Provider and Receiver must mutually agree on refunds.</p>
      <h3>Refund Process</h3>
      <p>Refund terms will be emailed. Service Receivers must provide bank account details for processing. Refunds are typically completed within 45 working days after required documents are received.</p>

      <h2>Grievance Resolution</h2>
      <p>For service-related queries, email <Email/> with your company, service availed, and contact details.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms & Conditions, contact us at <Email/>.</p>
    </Container></section>
  </>;
}
