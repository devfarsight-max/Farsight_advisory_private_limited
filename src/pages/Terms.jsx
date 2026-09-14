import {Container,PageHero} from '../components/UI';
import blocks from '../data/terms.json';

export default function Terms(){
  return <>
    <PageHero eyebrow="Legal" title="Terms & Conditions" text="General terms and conditions and specific terms for Razorpay services."/>
    <section className="section"><Container className="legal terms-policy supplied-terms">
      {blocks.map(({tag:Tag,text,lines},index)=>Tag === 'undertaking'
        ? <GamingUndertaking key={index} lines={lines}/>
        : Tag === 'pre' && text.startsWith('Particulars')
        ? <DigitalInvoicingFeatures key={index}/>
        : text.startsWith('PARTICULARS SETTLEMENT TIMELINES')
        ? <SettlementTimelines key={index} text={text}/>
        : <Tag key={index}>{text}</Tag>)}
      <div className="terms-nodal-links">
        <p><strong>E-MAIL:</strong><a href="mailto:nodal-officer@razorpay.com">nodal-officer@razorpay.com</a></p>
        <p><strong>GRIEVANCES PORTAL:</strong><a href="https://razorpay.com/grievances/">https://razorpay.com/grievances/</a></p>
      </div>
      <section className="terms-acceptance" aria-labelledby="terms-acceptance-heading">
        <h2 id="terms-acceptance-heading">Acceptance Details</h2>
        <table aria-labelledby="terms-acceptance-heading">
          <tbody>
            <tr><th scope="row">Owner Id</th><td>TaFiue8rW5FObC</td></tr>
            <tr><th scope="row">Owner Name</th><td>FARSIGHT ADVISORY PRIVATE LIMITED</td></tr>
            <tr><th scope="row">IP Address</th><td>10.26.133.60</td></tr>
            <tr><th scope="row">Date Of Acceptance</th><td>2026-09-11 14:46:12 IST</td></tr>
            <tr><th scope="row">Signatory Name</th><td>AMAN KUMAR</td></tr>
            <tr><th scope="row">Contact Number</th><td>+918384010531</td></tr>
            <tr><th scope="row">Email</th><td>sharmasurbhi9537@gmail.com</td></tr>
          </tbody>
        </table>
      </section>
    </Container></section>
  </>;
}

function GamingUndertaking({lines}){
  return <section className="gaming-undertaking" aria-labelledby="gaming-undertaking-heading">
    <h3 id="gaming-undertaking-heading">{lines[0]}</h3>
    {lines.slice(1).map((line,index)=>{
      const position=index+1;
      const emphasized=position<=8||position>=19;
      return <p key={position} className={emphasized?'undertaking-label':undefined}>
        {position===9?<><strong>Subject:</strong>{line.slice('Subject:'.length)}</>:line}
      </p>;
    })}
  </section>;
}

function SettlementTimelines({text}){
  const notes = text.slice(text.indexOf("* 'T'"));
  const secondNote = notes.indexOf('* The above');
  const paragraph = notes.indexOf('Merchant agrees');
  return <>
    <table className="settlement-table">
      <caption className="sr-only">Settlement timelines</caption>
      <thead><tr><th scope="col">PARTICULARS</th><th scope="col">SETTLEMENT TIMELINES (as per bank working days)</th></tr></thead>
      <tbody>
        <tr><th scope="row">DC EMI</th><td>T+2 days</td></tr>
        <tr><th scope="row">CC EMI</th><td>T+1 day</td></tr>
        <tr><th scope="row">NBFC EMI</th><td>T+2 day</td></tr>
        <tr><th scope="row">Brand EMI</th><td>T+1 day</td></tr>
        <tr><th scope="row">BNPL</th><td>T+1 day</td></tr>
      </tbody>
    </table>
    <p>{notes.slice(0,secondNote).trim()}</p>
    <p>{notes.slice(secondNote,paragraph).trim()}</p>
    <p>{notes.slice(paragraph)}</p>
  </>;
}

function DigitalInvoicingFeatures(){
  return <div className="invoicing-table-scroll" role="region" aria-label="Digital invoicing service features" tabIndex={0}>
    <table className="invoicing-table">
      <caption className="sr-only">Digital Invoicing Service Features</caption>
      <colgroup><col/><col/><col/><col/><col/></colgroup>
      <thead><tr><th scope="col">Particulars</th><th scope="col">S. No.</th><th scope="col">Feature</th><th scope="col">Remark</th><th scope="col">Quantity</th></tr></thead>
      <tbody>
        <tr><th scope="rowgroup" rowSpan={8}>Digital Billing Features</th><td>1</td><td>Digital Invoicing - BillMe Digi Printer (Windows OS)</td><td></td><td></td></tr>
        <tr><td>2</td><td>Customer data collection (BillMe Digi Printer)</td><td>UI type 3</td><td></td></tr>
        <tr><td>3</td><td>Digital bill complaint Management</td><td></td><td>100 Complaints</td></tr>
        <tr><td>4</td><td>Banner in bill (Single image, Carousel or GIF)</td><td>Coupons can be sent on the images</td><td>Single Image Only</td></tr>
        <tr><td>5</td><td>Ad below bill (Single image, Carousel, GIF, YouTube video or MP4 video)</td><td>Coupons can be sent on the images</td><td>Single Image Only</td></tr>
        <tr><td>6</td><td>Social media buttons of your brands</td><td></td><td></td></tr>
        <tr><td>7</td><td>Star rating feedback</td><td></td><td></td></tr>
        <tr><td>8</td><td>User Access (unlimited users)</td><td></td><td></td></tr>
      </tbody>
      <tbody>
        <tr><th scope="row">CRM</th><td>1</td><td>SMS campaign builder with scheduler</td><td>5 Templates Pre-Registered under BillMe / Razorpay Name</td><td>100</td></tr>
        <tr><th scope="row">Report Exports</th><td>1</td><td>Daily Sales Report</td><td></td><td></td></tr>
        <tr><th scope="row">User Bills</th><td>1</td><td>user.billme.co.in</td><td></td><td></td></tr>
      </tbody>
    </table>
  </div>;
}
