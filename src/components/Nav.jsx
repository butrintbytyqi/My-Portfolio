import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../data/nav';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__name" onClick={() => setOpen(false)}>
          Butrint Bytyqi
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mono-label nav__link ${active === item.id ? 'nav__link--active' : ''}`}
            >
              {item.label}
              {active === item.id && (
                <motion.span layoutId="nav-underline" className="nav__underline" />
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mono-label nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-nav" className={`nav__overlay ${open ? 'nav__overlay--open' : ''}`}>
        <nav aria-label="Sections">
          <ol className="container nav__overlay-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__overlay-item">
                <span className="mono-label nav__overlay-number" aria-hidden="true">
                  {item.number}
                </span>
                <a
                  href={`#${item.id}`}
                  className="nav__overlay-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
