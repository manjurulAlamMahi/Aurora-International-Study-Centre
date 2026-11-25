/* Shared header & footer — edit menu here once, every page updates.
   Links marked data-soon show a "coming soon" toast (demo only). */
(function () {
  const S = 'href="#" data-soon';

  const promoTiles = (lastLabel, lastIcon) => `
    <div class="mega-tiles">
      <a class="mega-tile" ${S}><i class="bi bi-journal-richtext"></i>Order a Prospectus</a>
      <a class="mega-tile" href="about.html"><i class="bi bi-stars"></i>Why Choose Aurora</a>
      <a class="mega-tile" ${S}><i class="bi bi-camera-video"></i>Campus Tours</a>
      <a class="mega-tile" ${S}><i class="bi ${lastIcon}"></i>${lastLabel}</a>
    </div>`;

  const link = (label, href) =>
    `<a class="mega-link" ${href ? `href="${href}"` : S}><i class="bi bi-chevron-right"></i>${label}</a>`;

  const header = `
  <div class="topbar d-none d-md-block">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <a href="tel:+8801700000000"><i class="bi bi-telephone me-1"></i> +880 1700-000000</a><span class="sep">|</span>
        <a href="mailto:info@example.com"><i class="bi bi-envelope me-1"></i> info@example.com</a>
      </div>
      <div>
        <a ${S}>Student Login</a><span class="sep">|</span>
        <a ${S}>Staff Login</a><span class="sep">|</span>
        <a ${S}>Webmail</a>
      </div>
    </div>
  </div>
  <header class="site-header" id="siteHeader">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="brand navbar-brand" href="index.html">
          <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
          <span class="brand-text"><strong>Aurora</strong><small>International Study Centre</small></span>
        </a>
        <div class="d-flex align-items-center gap-2 d-lg-none">
          <button class="icon-btn" data-search-open aria-label="Search"><i class="bi bi-search"></i></button>
          <button class="icon-btn" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Menu"><i class="bi bi-list fs-5"></i></button>
        </div>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav mx-auto align-items-lg-center">
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-nav="foundation">Foundation</a>
              <div class="dropdown-menu mega-menu">
                <div class="row g-4">
                  <div class="col-lg-3">${promoTiles('Undergraduate Courses', 'bi-book')}</div>
                  <div class="col-lg-2 col-6">
                    <h6>O' Level Equivalent</h6>
                    ${link('Foundation in Business')}${link('Foundation in Sports')}
                    <h6 class="mt-3">A' Level Equivalent</h6>
                    ${link('National Diploma in IT')}${link('National Diploma in Business')}${link('National Diploma in Sports')}
                  </div>
                  <div class="col-lg-2 col-6">
                    <h6>HND (Uni Year 2)</h6>
                    ${link('HND in Computing', 'course.html')}${link('HND in Business')}${link('HND in English Law')}${link('HND in Sports Science')}
                  </div>
                  <div class="col-lg-2 col-6">
                    <h6>Language Programme</h6>
                    ${link('English for Excellence')}${link('IELTS Preparation')}${link('English for Employment')}${link('Spoken English')}
                  </div>
                  <div class="col-lg-3">
                    <a class="mega-promo" href="contact.html">
                      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=70" alt="" loading="lazy">
                      <span class="overlay"><span class="badge rounded-pill">Admissions Open</span>
                        <strong class="display-font fs-5">Spring 2027 Intake</strong><small>Apply before 15 January →</small></span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-nav="undergraduate">Undergraduate</a>
              <div class="dropdown-menu mega-menu">
                <div class="row g-4">
                  <div class="col-lg-3">${promoTiles('Foundation Courses', 'bi-layers')}</div>
                  <div class="col-lg-3 col-6">
                    <h6>Undergraduate Degrees</h6>
                    ${link('BSc (Hons) Computing', 'course.html')}${link('BA (Hons) Business Management')}${link('LLB (Hons) Law')}${link('BSc (Hons) Sport Science')}
                  </div>
                  <div class="col-lg-3 col-6">
                    <h6>Study Options</h6>
                    ${link('Full-time')}${link('Part-time / Evening')}${link('Top-up Degrees')}${link('Scholarships')}
                  </div>
                  <div class="col-lg-3">
                    <a class="mega-promo" ${S}>
                      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=70" alt="" loading="lazy">
                      <span class="overlay"><span class="badge rounded-pill">Blog</span>
                        <strong class="display-font fs-5">5 tips for your first semester</strong><small>Read more →</small></span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-nav="postgraduate">Postgraduate</a>
              <div class="dropdown-menu mega-menu">
                <div class="row g-4">
                  <div class="col-lg-3">${promoTiles('Undergraduate Courses', 'bi-book')}</div>
                  <div class="col-lg-3 col-6">
                    <h6>Postgraduate Degrees</h6>
                    ${link('UK MBA')}${link('LLM in Commercial Law')}${link('MSc Data Analytics')}
                  </div>
                  <div class="col-lg-3 col-6">
                    <h6>Research & Support</h6>
                    ${link('Entry Requirements')}${link('Fees & Funding')}${link('Career Guidance')}
                  </div>
                  <div class="col-lg-3">
                    <a class="mega-promo" ${S}>
                      <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&q=70" alt="" loading="lazy">
                      <span class="overlay"><span class="badge rounded-pill">News</span>
                        <strong class="display-font fs-5">MBA cohort visits partner campus</strong><small>Read more →</small></span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="about.html" data-nav="about">Why Aurora</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Student Hub</a>
              <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Students</h6></li>
                <li><a class="dropdown-item" ${S}><i class="bi bi-calendar3 me-2"></i>Class Schedules</a></li>
                <li><a class="dropdown-item" ${S}><i class="bi bi-people me-2"></i>Our Talent Pool</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><h6 class="dropdown-header">Students & Staff</h6></li>
                <li><a class="dropdown-item" ${S}><i class="bi bi-box-arrow-in-right me-2"></i>Student Login</a></li>
                <li><a class="dropdown-item" ${S}><i class="bi bi-person-badge me-2"></i>Staff Login</a></li>
                <li><a class="dropdown-item" ${S}><i class="bi bi-envelope-paper me-2"></i>Webmail</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="contact.html" data-nav="contact">Contact</a></li>
          </ul>
          <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <button class="icon-btn d-none d-lg-inline-grid" data-search-open aria-label="Search"><i class="bi bi-search"></i></button>
            <a href="contact.html" class="btn btn-brand btn-sm px-4 py-2">Apply Now</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div class="search-overlay" id="searchOverlay">
    <button class="icon-btn close" data-search-close aria-label="Close"><i class="bi bi-x-lg"></i></button>
    <form onsubmit="event.preventDefault()"><input type="text" placeholder="Search courses, news, pages…" aria-label="Search"></form>
  </div>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <a class="brand mb-4" href="index.html">
            <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-text"><strong>Aurora</strong><small>International Study Centre</small></span>
          </a>
          <ul class="list-unstyled footer-contact mt-4">
            <li><i class="bi bi-geo-alt"></i><span>House 00, Road 00, Demo Area,<br>Dhaka 1200, Bangladesh</span></li>
            <li><i class="bi bi-telephone"></i><span>+880 1700-000000, +880 1700-000001</span></li>
            <li><i class="bi bi-envelope"></i><span>info@example.com</span></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Study</h6>
          <ul class="list-unstyled footer-links">
            <li><a ${S}>Foundation</a></li><li><a ${S}>Undergraduate</a></li>
            <li><a ${S}>Postgraduate</a></li><li><a ${S}>Language Courses</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h6>Aurora</h6>
          <ul class="list-unstyled footer-links">
            <li><a href="about.html">About Us</a></li><li><a ${S}>News & Events</a></li>
            <li><a ${S}>Careers</a></li><li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h6>Follow Aurora International</h6>
          <div class="social mb-4">
            <a ${S} aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a ${S} aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a ${S} aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a ${S} aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
          <p class="mb-2 small">Get admission updates in your inbox</p>
          <form class="newsletter d-flex" onsubmit="event.preventDefault(); window.showSoon && window.showSoon('Thanks! (demo form)')">
            <input type="email" class="form-control" placeholder="Your email" required>
            <button class="btn btn-gold px-3"><i class="bi bi-send"></i></button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© <span data-year></span> Aurora International Study Centre. All rights reserved.</span>
        <span>In academic collaboration with Westbridge University &amp; Kingsford Awards (demo).</span>
      </div>
    </div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
  <div class="soon-toast" id="soonToast"><div class="inner"><i class="bi bi-hourglass-split"></i><span>This page will be available in the full version.</span></div></div>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // highlight current nav item
  const page = document.body.dataset.page;
  if (page) document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add('active'));
})();
