document.documentElement.classList.add('js');

/* =========================================================
   AI SEO COPILOT DEMO CHAT
   ========================================================= */

const copilotAnswers = [

  {
    match: /schema|technical|crawl|llms|bot/i,

    text:
      `Schema check complete:

✓ Organization schema found
✗ Product schema missing on 12 pages
✗ GPTBot blocked in robots.txt

→ These issues may be limiting your AI visibility.`
  },


  {
    match: /win|prompt|rank|where/i,

    text:
      `You currently win 4 of 25 tracked prompts:

• “best AI SEO tool for agencies” — #1 in Perplexity
• “GEO agency for SaaS” — #2 in ChatGPT
• 2 more in Google AI Overviews

Biggest opportunity:
comparison prompts, where you are missing entirely.`
  },


  {
    match: /plan|30|roadmap|fix/i,

    text:
      `30-day plan:

Week 1 — Unblock AI crawlers, add Product + FAQ schema
Week 2 — Publish 2 comparison pages
Week 3 — Pitch 5 category listicles
Week 4 — Re-test 25 prompts and report gains

Your team can start with the technical fixes first.`
  },


  {
    match: /price|cost/i,

    text:
      `Plans start at $499/month for tracking and audits.

Most growing teams choose Growth at $1,299/month.

Yearly billing saves 20%.`
  }

];


function getCopilotReply(question) {

  const answer = copilotAnswers.find(item =>
    item.match.test(question)
  );

  if (answer) {
    return answer.text;
  }

  return `
Good question.

For "${question.slice(0, 60)}", I would start by checking which sources AI engines cite today.

Then close the biggest citation and content gaps with structured content and trusted mentions.
  `.trim();

}


function createCopilotAvatar() {

  return `
    <div class="copilot-avatar">

      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>
        <path d="M19 15l.8 1.9 1.9.8-1.9.8L19 20.4l-.8-1.9-1.9-.8 1.9-.8z"/>
      </svg>

    </div>
  `;

}


function createTypingIndicator() {

  return `
    <div class="copilot-typing">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

}


function addCopilotMessage(question) {

  const chatBody = document.getElementById("chatBody");

  if (!chatBody) return;

  if (!question || !question.trim()) return;

  const cleanQuestion = question.trim();

  /* -------------------------
     USER MESSAGE
     ------------------------- */

  const userMessage = document.createElement("div");

  userMessage.className = "copilot-user-message";

  userMessage.textContent = cleanQuestion;

  chatBody.appendChild(userMessage);


  /* -------------------------
     AI ROW
     ------------------------- */

  const aiRow = document.createElement("div");

  aiRow.className = "copilot-ai-row";

  aiRow.innerHTML = `
    ${createCopilotAvatar()}

    <div class="copilot-ai-message">
      ${createTypingIndicator()}
    </div>
  `;

  chatBody.appendChild(aiRow);


  /* Scroll bottom */

  chatBody.scrollTop = chatBody.scrollHeight;


  /* -------------------------
     FIND ANSWER
     ------------------------- */

  const aiMessage =
    aiRow.querySelector(".copilot-ai-message");

  const response =
    getCopilotReply(cleanQuestion);


  /* -------------------------
     TYPE RESPONSE
     ------------------------- */

  setTimeout(() => {

    aiMessage.textContent = "";

    let index = 0;

    function typeText() {

      index += 2;

      aiMessage.textContent =
        response.slice(0, index);

      chatBody.scrollTop =
        chatBody.scrollHeight;

      if (index < response.length) {

        setTimeout(typeText, 16);

      }

    }

    typeText();

  }, 700);

}


/* =========================================================
   FORM
   ========================================================= */

const copilotForm =
  document.getElementById("chatForm");

const copilotInput =
  document.getElementById("chatInput");


if (copilotForm && copilotInput) {

  copilotForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const question =
      copilotInput.value.trim();

    if (!question) return;

    addCopilotMessage(question);

    copilotInput.value = "";

    copilotInput.focus();

  });

}


/* =========================================================
   SUGGESTION BUTTONS
   ========================================================= */

const copilotSuggestions =
  document.querySelectorAll(
    "#chatSuggest button"
  );


copilotSuggestions.forEach(button => {

  button.addEventListener("click", function () {

    const question =
      this.textContent.trim();

    addCopilotMessage(question);

  });

});

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onView = (els, fn, opt = { threshold: .15, rootMargin: '0px 0px -40px 0px' }) => {
    if (!('IntersectionObserver' in window)) return els.forEach(fn);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); } }), opt);
    els.forEach(el => io.observe(el));
  };

  /* ---------- Nav: scroll state, progress, menu, dropdown ---------- */
  const nav = $('#nav'), burger = $('.nav__burger'), drop = $('.nav__drop'), dropBtn = $('.nav__drop > button');
  const progress = $('.progress'), totop = $('.totop');
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('scrolled', y > 20);
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    totop.classList.toggle('show', y > 800);
    stackScale();
  };
  addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
  totop.addEventListener('click', () => scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' }));
  const setMenu = open => { nav.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('menu-open')));
  $$('.nav__panel a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  const setDrop = open => { drop.classList.toggle('open', open); dropBtn.setAttribute('aria-expanded', open); };
  dropBtn.addEventListener('click', e => { e.stopPropagation(); setDrop(!drop.classList.contains('open')); });
  if (matchMedia('(hover:hover) and (min-width:961px)').matches) {
    drop.addEventListener('mouseenter', () => setDrop(true));
    drop.addEventListener('mouseleave', () => setDrop(false));
  }
  document.addEventListener('click', e => { if (!drop.contains(e.target)) setDrop(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setDrop(false); setMenu(false); } });

  /* ---------- Split headlines into words for the slide-up reveal ---------- */
  $$('[data-words]').forEach(h => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(' '); return; }
            const w = document.createElement('span'); w.className = 'w';
            const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', i++);
            w.append(s); frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'svg') walk(n);
      });
    };
    walk(h);
    h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim());
  });

  /* ---------- Reveal on scroll ---------- */
  const reveal = $$('[data-r], [data-words], [data-anim], .report');
  if (calm) reveal.forEach(el => el.classList.add('in'));
  else onView(reveal, el => el.classList.add('in'));

  /* ---------- Count-up numbers ---------- */
  if (!calm) onView($$('[data-count]'), el => {
    const end = +el.dataset.count, t0 = performance.now();
    const tick = t => { const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US'); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, { threshold: .6 });

  /* ---------- Marquees: repeat items until one set is wider than the
     screen, then duplicate that set so the -50% loop is seamless ---------- */
  $$('[data-loop]').forEach(track => {
    const originals = [...track.children];
    const addCopy = () => originals.forEach(c => {
      const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true');
      $$('a', k).forEach(a => a.tabIndex = -1); track.append(k);
    });
    let guard = 0;
    while (track.scrollWidth < Math.max(innerWidth, 1400) && guard++ < 10) addCopy();
    [...track.children].forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); $$('a', k).forEach(a => a.tabIndex = -1); track.append(k); });
  });

  /* ---------- Spotlight cards follow the mouse ---------- */
  $$('.spot').forEach(card => card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));

  /* ---------- Problem: drag-to-compare ---------- */
  const cmp = $('#compare'), range = $('input', cmp);
  const setPos = v => cmp.style.setProperty('--pos', `${v}%`);
  range.addEventListener('input', () => setPos(range.value));
  if (!calm) onView([cmp], () => {          // little intro sweep so people notice it slides
    let v = 50; const steps = [78, 22, 50]; let k = 0;
    const go = () => { if (k >= steps.length) return; const target = steps[k++], from = v, t0 = performance.now();
      const tick = t => { const p = Math.min((t - t0) / 700, 1), e = 1 - Math.pow(1 - p, 3); v = from + (target - from) * e; setPos(v); range.value = v; if (p < 1) requestAnimationFrame(tick); else setTimeout(go, 120); };
      requestAnimationFrame(tick); };
    setTimeout(go, 500);
  }, { threshold: .5 });

  /* ---------- Results slider: arrows, drag, progress bar ---------- */
  $$('[data-slider]').forEach(sl => {
    const track = $('.slider__track', sl), bar = $('.slider__bar span', sl);
    const step = () => (track.children[1]?.offsetLeft || track.clientWidth) - track.children[0].offsetLeft;
    const upd = () => { const max = track.scrollWidth - track.clientWidth; const vis = track.clientWidth / track.scrollWidth;
      bar.style.width = `${vis * 100}%`; bar.style.transform = `translateX(${max > 0 ? (track.scrollLeft / max) * (1 / vis - 1) * 100 : 0}%)`; };
    const go = dir => { const max = track.scrollWidth - track.clientWidth; let x = track.scrollLeft + dir * step();
      if (x > max + 5) x = 0; if (x < -5) x = max; track.scrollTo({ left: x, behavior: calm ? 'auto' : 'smooth' }); };
    $('[data-prev]', sl).addEventListener('click', () => go(-1));
    $('[data-next]', sl).addEventListener('click', () => go(1));
    track.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
    track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); });
    let down = false, moved = false, sx = 0, sl0 = 0;
    track.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl0 = track.scrollLeft; });
    addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (!moved && Math.abs(dx) > 6) { moved = true; sl.classList.add('drag'); } if (moved) track.scrollLeft = sl0 - dx; });
    addEventListener('pointerup', () => { if (!down) return; down = false; if (!moved) return; sl.classList.remove('drag');
      const i = Math.round(track.scrollLeft / step()); track.scrollTo({ left: i * step(), behavior: 'smooth' }); });
    track.addEventListener('click', e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  });

  /* ---------- Process: stacked cards shrink as the next one slides over ---------- */
  const cards = $$('.stack__card');
  function stackScale() {
    if (calm || innerWidth < 641) return;
    cards.forEach((c, i) => {
      const next = cards[i + 1]; if (!next) return;
      const gap = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
      const p = Math.min(Math.max(1 - gap / c.offsetHeight, 0), 1);
      c.style.transform = `scale(${1 - p * .06})`; c.style.filter = `brightness(${1 - p * .05})`;
    });
  }

  /* ---------- Testimonials: sliding quotes, autoplay, swipe ---------- */
  const qs = $('#quotes'), qTrack = $('.quotes__track', qs), people = $$('.person', qs);
  let qi = 0, qTimer;
  const showQ = i => { qi = (i + people.length) % people.length; qTrack.style.transform = `translateX(-${qi * 100}%)`;
    people.forEach((p, n) => { p.classList.remove('on'); if (n === qi) { void p.offsetWidth; p.classList.add('on'); } p.setAttribute('aria-pressed', n === qi); });
    $$('.quote', qs).forEach((q, n) => q.setAttribute('aria-hidden', n !== qi)); };
  const auto = () => { clearInterval(qTimer); if (!calm && !qs.classList.contains('paused')) qTimer = setInterval(() => showQ(qi + 1), 7000); };
  people.forEach(p => p.addEventListener('click', () => { showQ(+p.dataset.q); auto(); }));
  qs.addEventListener('pointerenter', () => { qs.classList.add('paused'); clearInterval(qTimer); });
  qs.addEventListener('pointerleave', () => { qs.classList.remove('paused'); auto(); });
  let tx = null;
  $('.quotes__viewport', qs).addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  $('.quotes__viewport', qs).addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) { showQ(qi + (dx < 0 ? 1 : -1)); auto(); } tx = null; });
  showQ(0); auto();

  /* ---------- Blog: floating image follows the cursor ---------- */
  $$('.post').forEach(p => p.addEventListener('pointermove', e => {
    const r = p.getBoundingClientRect(), img = $('.post__img', p);
    img.style.setProperty('--px', `${e.clientX - r.left - img.offsetWidth / 2}px`);
    img.style.setProperty('--py', `${e.clientY - r.top - img.offsetHeight - 20}px`);
  }));

  /* ---------- FAQ: smooth accordion, one open at a time ---------- */
  const items = $$('.acc details');
  const animate = (d, open) => {
    if (calm || !d.animate) { d.open = open; return; }
    const sum = $('summary', d), h0 = d.offsetHeight; if (open) d.open = true;
    const h1 = open ? d.scrollHeight : sum.offsetHeight;
    d.animate({ height: [`${h0}px`, `${h1}px`] }, { duration: 420, easing: 'cubic-bezier(.22,.61,.36,1)' }).onfinish = () => { d.open = open; };
  };
  items.forEach(d => $('summary', d).addEventListener('click', e => {
    e.preventDefault(); const opening = !d.open;
    if (opening) items.forEach(o => { if (o !== d && o.open) animate(o, false); });
    animate(d, opening);
  }));

  $('#year').textContent = new Date().getFullYear();
  onScroll();
})();

(() => {
  const $ = (q, r = document) => r.querySelector(q), $$ = (q, r = document) => [...r.querySelectorAll(q)];
  const toast = $('#toast'); let tt;
  const say = m => { toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 2600); };
  const modal = $('#auditModal');
  const step = n => $$('.mstep', modal).forEach(e => e.classList.toggle('on', e.dataset.step === n));
  const close = () => { modal.classList.remove('open'); clearInterval(timer); };
  let timer, site = '', code = '';

  /* ---- internal links: jump to section on this page instead of leaving it ---- */
  const map = { '/pricing/':'#pricing','/blog/':'#blog','/case-studies/':'#results','/about/':'#why','/contact/':'#faq','/ai-seo-services/':'#services' };
  document.addEventListener('click', e => {
    const a = e.target.closest('a'); if (!a) return;
    const h = a.getAttribute('href') || '';
    if (h.startsWith('mailto:')) return;
    if (h.startsWith('/free-ai-seo-audit')) { e.preventDefault(); open(''); return; }
    if (h === '#' ) { e.preventDefault(); return; }
    if (h.startsWith('#')) return;
    if (h.startsWith('/')) {
      e.preventDefault();
      const t = map[h] || (/seo|geo|aeo|overview|ai-mode|ai-platform|google-ai|optimization|monitoring/.test(h) ? '#services' : null);
      if (t && $(t)) $(t).scrollIntoView({ behavior: 'smooth' }); else say('This page isn\'t built yet');
    }
  });

  /* ---- audit flow ---- */
  function open(url) {
    site = (url || '').trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '') || 'your site';
    $('#mSite').textContent = $('#mSite2').textContent = site;
    modal.classList.add('open'); step('scan'); runScan();
  }
  function runScan() {
    const msgs = ['Asking ChatGPT about your brand…', 'Checking Gemini…', 'Checking Perplexity…', 'Reading Google AI Overviews…', 'Crawling your site…'];
    let p = 0; $('#mBar').style.width = '0';
    clearInterval(timer);
    timer = setInterval(() => {
      p += 7 + Math.random() * 9; $('#mBar').style.width = Math.min(p, 100) + '%';
      $('#mMsg').textContent = msgs[Math.min(Math.floor(p / 21), 4)];
      if (p >= 100) { clearInterval(timer); setTimeout(showResult, 300); }
    }, 350);
  }
  function showResult() {
    let h = 0; for (const c of site) h = (h * 31 + c.charCodeAt(0)) % 997;
    const score = 22 + (h % 30);
    $('#mScore').textContent = score;
    const rows = [['ChatGPT', 'Mentioned in ' + (2 + h % 6) + ' of 20 prompts', ''], ['Gemini', 'Not mentioned', 'bad'],
                  ['Perplexity', 'Cited ' + (1 + h % 3) + ' times', ''], ['Google AI Overviews', 'Cited in 1 of 15 queries', ''],
                  ['Top competitors named instead', '3 brands found', ''], ['Technical AI-crawler issues', '4 issues found', 'bad'], ['Priority fixes', 'Top 10 ready', '']];
    $('#mRows').innerHTML = rows.map((r, i) => `<div class="mrow ${i > 1 ? 'locked' : ''}"><span>${r[0]}</span><span class="${r[2]}">${r[1]}</span></div>`).join('');
    step('result');
  }
  $('#mUnlock').addEventListener('click', () => step('details'));

  const ok = m => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m);
  let user = {};
  $('#mDetails').addEventListener('submit', e => {
    e.preventDefault(); const f = new FormData(e.target);
    user = { name: (f.get('name') || '').trim(), email: (f.get('email') || '').trim(), company: (f.get('company') || '').trim() };
    if (!user.name) return $('#mErr1').textContent = 'Please enter your name.';
    if (!ok(user.email)) return $('#mErr1').textContent = 'Please enter a valid email address.';
    $('#mErr1').textContent = '';
    code = String(Math.floor(100000 + Math.random() * 900000));
    // TODO (backend): POST user to your server, which emails the code (e.g. via SMTP/Resend) and stores it.
    $('#mMail').textContent = user.email;
    $('#mDemo').textContent = 'Demo mode (no mail server connected yet): your code is ' + code;
    step('verify');
  });
  $('#mVerify').addEventListener('submit', e => {
    e.preventDefault();
    if (new FormData(e.target).get('code').trim() !== code) return $('#mErr2').textContent = 'That code is incorrect. Please try again.';
    $('#mErr2').textContent = ''; $('#mName').textContent = user.name.split(' ')[0];
    step('done');
  });

  /* ---- hero form: open the audit instead of navigating away ---- */
  $('form.audit').addEventListener('submit', e => { e.preventDefault(); open($('#url').value); });

  $$('[data-close]').forEach(b => b.addEventListener('click', close));
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

(() => {
  const wheel = document.getElementById('wheel'); if (!wheel) return;
  const segs = [...wheel.querySelectorAll('.seg')];
  const core = wheel.querySelector('.wheel__core');
  const on = seg => { wheel.classList.add('paused'); segs.forEach(x => x.classList.toggle('hot', x === seg)); };
  const off = () => { wheel.classList.remove('paused'); segs.forEach(x => x.classList.remove('hot')); };
  segs.forEach(seg => { const path = seg.querySelector('path'); path.addEventListener('pointerenter', () => on(seg)); path.addEventListener('pointerleave', off); });
  core.addEventListener('pointerenter', () => wheel.classList.add('paused'));
  core.addEventListener('pointerleave', off);
})();