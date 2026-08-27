import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Container=({children,className=''})=><div className={`container ${className}`}>{children}</div>;
export function Reveal({children,className=''}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.65,ease:[.2,.8,.2,1]}}>{children}</motion.div>}
export const Eyebrow=({children})=><p className="eyebrow"><span/> {children}</p>;
export function SectionHeading({eyebrow,title,text,light=false}){return <Reveal className={`section-heading ${light?'light':''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text&&<p>{text}</p>}</Reveal>}
export function Button({to,children,variant='primary'}){return <motion.div whileHover={{y:-2}} whileTap={{scale:.98}}><Link className={`button ${variant}`} to={to}>{children}<ArrowUpRight size={17}/></Link></motion.div>}
export function PageHero({eyebrow,title,text}){return <section className="page-hero"><Container><Reveal><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></Reveal></Container><div className="hero-grid"/></section>}
export function CTA(){return <section className="cta"><Container><Reveal className="cta-inner"><div><Eyebrow>Start a conversation</Eyebrow><h2>Bring clarity to your next important decision.</h2></div><Button to="/contact" variant="light">Talk to Farsight</Button></Reveal></Container></section>}
