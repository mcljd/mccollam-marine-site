/* ============================================================
   McCollam Marine — interaction layer
   ============================================================ */
(function () {
  'use strict';
  /* Mark that JS is running. CSS only hides reveal elements under html.js,
     so if this script never runs the page stays fully visible. */
  document.documentElement.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Header state on scroll ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav ---- */
  var burger = document.querySelector('.burger');
  var mnav = document.querySelector('.mobile-nav');
  var scrim = document.querySelector('.scrim');
  function closeNav() {
    if (!burger) return;
    burger.classList.remove('open');
    mnav.classList.remove('open');
    scrim.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (burger) {
    burger.addEventListener('click', function () {
      var open = burger.classList.toggle('open');
      mnav.classList.toggle('open', open);
      scrim.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    scrim.addEventListener('click', closeNav);
    mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Animated stat counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    if (reduce) { el.textContent = prefix + target + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- Hero parallax ---- */
  var heroMedia = document.querySelector('.hero-media');
  if (heroMedia && !reduce) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight) heroMedia.style.transform = 'translateY(' + (y * 0.18) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---- Self-drawing blueprint hull ---- */
  var paths = document.querySelectorAll('.draw');
  paths.forEach(function (p) {
    try {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = reduce ? 0 : len;
    } catch (e) {}
  });
  var hero = document.querySelector('.hero');
  if (hero && !reduce && 'IntersectionObserver' in window) {
    // kick off the draw shortly after load
    window.addEventListener('load', function () {
      setTimeout(function () {
        paths.forEach(function (p) {
          p.style.transition = 'stroke-dashoffset 2.4s ' + 'cubic-bezier(.22,.61,.36,1)';
          p.style.strokeDashoffset = '0';
        });
      }, 350);
    });
  }

  /* ---- Footer year ---- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
