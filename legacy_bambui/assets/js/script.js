/**
 * script.js - Core logic for Bambuí em Destaque
 */

document.addEventListener('DOMContentLoaded', () => {
    initCookieBanner();
    initStickyNav();
    initSmoothScroll();
    initBackToTop();
    initNewsletter();
});

/**
 * Back to Top Logic
 */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Newsletter Logic
 */
function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        
        // Mock success message
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Inscrito!';
        btn.style.backgroundColor = '#25d366';
        form.querySelector('input').value = '';
        form.querySelector('input').disabled = true;

        setTimeout(() => {
            alert('Obrigado por se inscrever! Você receberá as notícias de Bambuí em breve.');
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            form.querySelector('input').disabled = false;
        }, 2000);
    });
}

/**
 * LGPD Cookie Consent Logic
 */
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('btn-accept-cookies');
    const rejectBtn = document.getElementById('btn-reject-cookies');

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-consent');

    if (!cookieChoice) {
        // Show banner after a short delay
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        hideBanner();
        // Here you would normally trigger the loading of non-essential scripts (analytics, etc.)
        console.log('Cookies accepted by user.');
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'rejected');
        hideBanner();
        console.log('Cookies rejected by user.');
    });

    function hideBanner() {
        banner.classList.remove('show');
    }
}

/**
 * Sticky Navigation Enhancements
 */
function initStickyNav() {
    const nav = document.querySelector('.main-nav');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

/**
 * Smooth Scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Accessibility: Keyboard Navigation Helper
 * Ensuring that the focus is visible and works well
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
});
