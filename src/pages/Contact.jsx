import {Mail,Phone,MapPin} from 'lucide-react';
import {Container,PageHero,Reveal,SectionHeading} from '../components/UI';

export default function Contact(){
  return <>
    <PageHero eyebrow="Contact" title="Get in touch." text="Contact Farsight Advisory Private Limited by email or phone, or find our office details below."/>
    <section className="section">
      <Container className="contact-grid">
        <div>
          <SectionHeading eyebrow="Contact information" title="Farsight Advisory Private Limited"/>
          <p>For enquiries about our services, engagements or payments, reach us using the details below.</p>
        </div>
        <Reveal className="contact-information">
          <div className="contact-points">
            <div><Mail aria-hidden="true"/><span><small>Email</small><a href="mailto:info@farsightadvisory.in">info@farsightadvisory.in</a></span></div>
            <div><Phone aria-hidden="true"/><span><small>Phone</small><a href="tel:+919650477703">9650477703</a></span></div>
            <div><MapPin aria-hidden="true"/><span><small>Office</small><address>VDS TOWER -04 C-23, OFFICE NO- 301 Anjuman House, Sector 63, Noida, Uttar Pradesh, 201309</address></span></div>
          </div>
        </Reveal>
      </Container>
    </section>
  </>;
}
