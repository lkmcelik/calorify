// Calorify site. Everything works without this file; it only adds two touches.

(function () {
    'use strict';

    var canObserve = 'IntersectionObserver' in window;

    // The closing ring at the end of the home page draws when it scrolls into view.
    // Without JavaScript, or with reduced motion, the ring is already full (see style.css).
    var finale = document.querySelector('.finale');
    if (finale) {
        if (canObserve) {
            var ringObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        finale.classList.add('is-drawn');
                        ringObserver.disconnect();
                    }
                });
            }, { threshold: 0.35 });
            ringObserver.observe(finale);
        } else {
            finale.classList.add('is-drawn');
        }
    }

    // Legal pages: mark the table-of-contents link for the section being read.
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc-list a[href^="#"]'));
    if (tocLinks.length && canObserve) {
        var linkFor = {};
        tocLinks.forEach(function (link) {
            linkFor[link.getAttribute('href').slice(1)] = link;
        });

        var setActive = function (id) {
            tocLinks.forEach(function (link) {
                var isActive = link === linkFor[id];
                link.classList.toggle('is-active', isActive);
                if (isActive) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        };

        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && linkFor[entry.target.id]) {
                    setActive(entry.target.id);
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px' });

        document.querySelectorAll('.legal-content section[id]').forEach(function (section) {
            sectionObserver.observe(section);
        });
    }
})();
