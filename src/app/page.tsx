const PITCHIQ_URL = "https://pitchiq.predictivesports.io";

function BrandMark() {
  return (
    <svg
      className="mark"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path className="arc" d="M3 24 Q11 19 26 6" strokeWidth="1.5" strokeLinecap="round" />
      <circle className="node" cx="3" cy="24" r="2.6" strokeWidth="1.5" />
      <circle className="node" cx="13.5" cy="16.5" r="2.6" strokeWidth="1.5" />
      <circle className="lead" cx="26" cy="6" r="3.6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="ambient" />

      <div className="site">
        {/* ============================ NAV ============================ */}
        <nav className="nav">
          <div className="nav-inner">
            <a className="brand" href="#top" aria-label="Predictive Sports home">
              <BrandMark />
              <span className="name">
                <b>Predictive</b> <span>Sports</span>
              </span>
            </a>
            <div className="nav-links">
              <a href="#approach">Approach</a>
              <a href="#products">Products</a>
              <a href="#company">Company</a>
            </div>
            <a className="nav-cta" href="#contact">
              Get in touch
            </a>
          </div>
        </nav>

        {/* ============================ HERO ============================ */}
        <header className="hero" id="top">
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="tick" />
                Decision intelligence · Sport
              </span>
              <h1 className="display">
                Think one
                <br />
                play <span className="grad">ahead.</span>
              </h1>
              <p className="lead">
                Predictive Sports builds tools that turn real game data into clear,
                in-the-moment decisions — for the athletes and coaches who live by
                the next play.
              </p>
              <div className="hero-cta">
                <a className="btn-primary" href="#products">
                  See our work
                  <ArrowIcon />
                </a>
                <a className="btn-ghost" href="#approach">
                  How we think
                </a>
              </div>
              <div className="hero-note">
                <span className="dotline" />
                <span>Built by people who&apos;ve played and coached the game</span>
              </div>
            </div>
          </div>
        </header>

        {/* ============================ APPROACH ============================ */}
        <section className="section" id="approach">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow muted">
                <span className="tick" />
                How we think
              </span>
              <h2 className="h2">
                Data is only useful the
                <br />
                moment before a decision.
              </h2>
              <p className="lead">
                Most sports analytics tell you what already happened. We build for
                the seconds that matter — when someone has to choose, and the right
                read wins the moment.
              </p>
            </div>

            <div className="principles">
              <div className="principle">
                <div className="pidx">01</div>
                <h3>Read, don&apos;t report</h3>
                <p>
                  Dashboards look backward. Our tools surface the one read that
                  changes the next play — fast enough to act on, simple enough to
                  trust.
                </p>
              </div>
              <div className="principle">
                <div className="pidx">02</div>
                <h3>Grounded in real games</h3>
                <p>
                  Every recommendation traces back to actual play-by-play data and
                  tendencies — not a black box. Athletes see why, not just what.
                </p>
              </div>
              <div className="principle">
                <div className="pidx">03</div>
                <h3>Built for game day</h3>
                <p>
                  Designed with the people who use it — athletes, coaches, and
                  analysts. If it doesn&apos;t work in the flow of the game, it
                  doesn&apos;t ship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="divider" />
        </div>

        {/* ============================ PRODUCTS ============================ */}
        <section className="section" id="products">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">
                <span className="tick" />
                What we make
              </span>
              <h2 className="h2">Our products.</h2>
              <p className="lead">
                One focused tool today, with more on the way — each built on the
                same idea: the right call, at the right moment.
              </p>
            </div>

            <div className="products">
              {/* Flagship: PitchIQ */}
              <article className="product-card flagship">
                <div className="product-info">
                  <span className="product-tag">Flagship · Live</span>
                  <h3 className="pname">PitchIQ</h3>
                  <p className="pdesc">
                    Our first app — a baseball training tool that helps catchers and
                    pitchers think one pitch ahead, reading the count, the zone, and
                    the hitter to call the smarter pitch.
                  </p>
                  <div className="product-meta">
                    <div className="pm">
                      <span className="k">Platform</span>
                      <span className="v">iPhone &amp; iPad</span>
                    </div>
                    <div className="pm">
                      <span className="k">For</span>
                      <span className="v">Catchers · Pitchers · Coaches</span>
                    </div>
                    <div className="pm">
                      <span className="k">Status</span>
                      <span className="v">Coming soon</span>
                    </div>
                  </div>
                  <a className="product-link" href={PITCHIQ_URL}>
                    Explore PitchIQ
                    <ArrowIcon />
                  </a>
                </div>
              </article>

              {/* What's next */}
              <div className="next-card">
                <div className="nc-copy">
                  <span className="nc-eyebrow">In development</span>
                  <h3>More of the game, decoded.</h3>
                  <p>
                    We&apos;re extending the same decision engine to new sports and
                    new moments — wherever a split-second read changes the outcome.
                    Want early access?
                  </p>
                </div>
                <div className="nc-slot">[ next product — TBA ]</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ COMPANY ============================ */}
        <section className="section" id="company">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow muted">
                <span className="tick" />
                The company
              </span>
              <h2 className="h2">
                A small studio with
                <br />
                a long obsession.
              </h2>
              <p className="lead">
                Predictive Sports is a focused team of engineers, designers, and
                athletes building decision tools for the games we grew up on. We
                ship slowly, listen to the people who play and coach, and care about
                getting the call right.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ CONTACT ============================ */}
        <section className="section" id="contact" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="contact-card">
              <span className="eyebrow">
                <span className="tick" />
                Get in touch
              </span>
              <h2 className="h2">
                Coaching a team? Building something?
                <br />
                Let&apos;s talk.
              </h2>
              <p className="lead">
                Whether you want early access to what&apos;s next, a partnership, or
                just to trade notes on the game — we read every message.
              </p>
              <a className="contact-email" href="mailto:hello@predictivesports.io">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                hello@predictivesports.io
              </a>
              <p className="contact-sub">
                Based in the U.S. · Working with teams everywhere
              </p>
            </div>
          </div>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="footer">
          <div className="wrap">
            <div className="footer-grid">
              <div>
                <a className="brand" href="#top" aria-label="Predictive Sports home">
                  <BrandMark />
                  <span className="name">
                    <b>Predictive</b> <span>Sports</span>
                  </span>
                </a>
                <p className="fdesc">
                  Decision-intelligence tools for sport. Read the game, make the
                  call.
                </p>
              </div>
              <div className="footer-cols">
                <div className="footer-col">
                  <h5>Products</h5>
                  <a href={PITCHIQ_URL}>PitchIQ</a>
                  <a href="#products">What&apos;s next</a>
                </div>
                <div className="footer-col">
                  <h5>Company</h5>
                  <a href="#approach">Approach</a>
                  <a href="#company">About</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className="footer-col">
                  <h5>Connect</h5>
                  <a href="mailto:hello@predictivesports.io">Email</a>
                </div>
              </div>
            </div>
            <div className="footer-base">
              <span>© 2026 Predictive Sports. All rights reserved.</span>
              <span>Read the game. Make the call.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
