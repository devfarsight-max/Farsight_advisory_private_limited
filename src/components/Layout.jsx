import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Link2, ShieldCheck } from "lucide-react";
import { nav, services } from "../data/content";
import { Button, Container } from "./UI";
export const Logo = ({ footer = false }) => (
  <Link
    to="/"
    className={`logo ${footer ? "footer-logo" : ""}`}
    aria-label="Farsight Advisory home"
  >
    <img src="/images/farsight-logo-clean.png" alt="Farsight Advisory" />
  </Link>
);
export function Navbar() {
  const [open, setOpen] = useState(false),
    [solid, setSolid] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc]);
  useEffect(() => {
    const f = () => setSolid(scrollY > 20);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`nav ${solid ? "solid" : ""}`}>
      <Container className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map(([n, p]) => (
            <NavLink key={p} to={p}>
              {n}
            </NavLink>
          ))}
        </nav>
        <div className="nav-cta">
          <Button to="/contact">Let's Talk</Button>
        </div>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile"
          >
            {nav.map(([n, p], i) => (
              <motion.div
                key={p}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink to={p}>
                  {n}
                  <ArrowUpRight />
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <Logo footer />
            <p className="footer-copy">
              Strategic perspective for clearer decisions, stronger businesses
              and sustainable growth.
            </p>
            <Link className="razorpay-note" to="/payments">
              <ShieldCheck size={17} /> Secure payments via Razorpay
            </Link>
          </div>
          <div>
            <h3>Navigate</h3>
            {nav.map(([n, p]) => (
              <Link key={p} to={p}>
                {n}
              </Link>
            ))}
          </div>
          <div>
            <h3>Advisory</h3>
            {services.slice(0, 4).map((s) => (
              <Link key={s.title} to="/services">
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Connect</h3>
            <a href="mailto:info@farsightadvisory.in">
              Gmail: info@farsightadvisory.in
            </a>
            <a href="tel:+919650477703">Contact Number: +91 9650477703</a>
            <p>
              Address: VDS TOWER -04 C-23, OFFICE NO- 301 Anjuman House, Sector 63,
              Noida, Uttar Pradesh, 201309
            </p>
            <a href="#" aria-label="Social profile placeholder">
              <Link2 size={19} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Farsight Advisory Private Limited.
          </span>
          <span>
            <Link to="/privacy-policy">Privacy Policy</Link> ·{" "}
            <Link to="/refund-policy">Refund Policy</Link> ·{" "}
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
