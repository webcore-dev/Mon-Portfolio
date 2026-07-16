import './style.css';

// ======= ACTIVE LINK ======== //
const activeLinks = document.querySelectorAll('nav .active-link');
const mobileActiveLinks = document.querySelectorAll('.mobile-active-link');
const pageSection = document.querySelectorAll('.page-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (!pageSection || pageSection.length === 0) return;

    pageSection.forEach((pages, index) => {
        const sectionTop = pages.offsetTop;
        const sectionHeight = pages.offsetHeight;

        const inView = (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight);

        // Ensure corresponding nav items exist
        const topLink = activeLinks && activeLinks[index];
        const topMobileLink = mobileActiveLinks && mobileActiveLinks[index];

        if (inView) {
            activeLinks.forEach(navLinks => {
                navLinks.classList.remove('text-white');
                navLinks.classList.remove('bg-indigo-600');
            });

            mobileActiveLinks.forEach(navLinks => {
                navLinks.classList.remove('text-white');
                navLinks.classList.remove('bg-indigo-600');
            });

            if (topLink) {
                topLink.classList.remove('text-indigo-900');
                topLink.classList.remove('dark:text-indigo-600');
                topLink.classList.remove('hover:bg-indigo-50');
                topLink.classList.remove('dark:hover:bg-slate-900');
                topLink.classList.remove('hover:border-indigo-100');
                topLink.classList.remove('dark:hover:border-dark-header-border');
                topLink.classList.add('bg-indigo-600');
                topLink.classList.add('text-white');
            }

            if (topMobileLink) {
                topMobileLink.classList.remove('text-indigo-900');
                topMobileLink.classList.remove('dark:text-indigo-600');
                topMobileLink.classList.remove('hover:bg-indigo-50');
                topMobileLink.classList.remove('dark:hover:bg-slate-900');
                topMobileLink.classList.remove('hover:border-indigo-100');
                topMobileLink.classList.remove('dark:hover:border-dark-header-border');
                topMobileLink.classList.add('bg-indigo-600');
                topMobileLink.classList.add('text-white');
            }
        } else {
            // Reset to first link as fallback if available
            if (activeLinks && activeLinks[0]) {
                activeLinks[0].classList.add('text-white');
                activeLinks[0].classList.add('bg-indigo-600');
                activeLinks[0].classList.remove('dark:text-indigo-600');
                activeLinks[0].classList.remove('hover:bg-indigo-50');
                activeLinks[0].classList.remove('dark:hover:bg-slate-900');
                activeLinks[0].classList.remove('hover:border-indigo-100');
                activeLinks[0].classList.remove('dark:hover:border-dark-header-border');
            }

            if (mobileActiveLinks && mobileActiveLinks[0]) {
                mobileActiveLinks[0].classList.add('text-white');
                mobileActiveLinks[0].classList.add('bg-indigo-600');
                mobileActiveLinks[0].classList.remove('dark:text-indigo-600');
                mobileActiveLinks[0].classList.remove('hover:bg-indigo-50');
                mobileActiveLinks[0].classList.remove('dark:hover:bg-slate-900');
                mobileActiveLinks[0].classList.remove('hover:border-indigo-100');
                mobileActiveLinks[0].classList.remove('dark:hover:border-dark-header-border');
            }

            if (topLink) {
                topLink.classList.add('text-indigo-900');
                topLink.classList.add('dark:text-indigo-600');
                topLink.classList.add('hover:bg-indigo-50');
                topLink.classList.add('dark:hover:bg-slate-900');
                topLink.classList.add('hover:border-indigo-100');
                topLink.classList.add('dark:hover:border-dark-header-border');
                topLink.classList.remove('bg-indigo-600');
                topLink.classList.remove('text-white');
            }

            if (topMobileLink) {
                topMobileLink.classList.add('text-indigo-900');
                topMobileLink.classList.add('dark:text-indigo-600');
                topMobileLink.classList.add('hover:bg-indigo-50');
                topMobileLink.classList.add('dark:hover:bg-slate-900');
                topMobileLink.classList.add('hover:border-indigo-100');
                topMobileLink.classList.add('dark:hover:border-dark-header-border');
                topMobileLink.classList.remove('bg-indigo-600');
                topMobileLink.classList.remove('text-white');
            }
        }
    });
});


// ======= DARK BUTTON ======== //

const darkButton = document.querySelector('#dark-button');
const darkButtonIcon = document.querySelector('#dark-button i');

// ======= SAUVEGARDE DE THEME ======== //
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

let isDark = document.documentElement.classList.contains('dark');

if (isDark) {
    if (darkButtonIcon) darkButtonIcon.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.replace('bg-grid', 'bg-grid-dark');
} else {
    if (darkButtonIcon) darkButtonIcon.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.replace('bg-grid-dark', 'bg-grid');
}


// ======= LE CLICK ======== //
if (darkButton) {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if (darkButtonIcon) {
            if (isDark) darkButtonIcon.classList.replace('fa-moon', 'fa-sun');
            else darkButtonIcon.classList.replace('fa-sun', 'fa-moon');
        }

        document.body.classList.toggle('bg-grid-dark');
        document.body.classList.toggle('bg-grid');

        // update aria-pressed state
        darkButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    };

    darkButton.addEventListener('click', toggleTheme);
    darkButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// ====== MOBILE MENU ====== //
const mobileMenu = document.querySelector('#mobile-menu');
const bgMobileMenu = document.querySelector('#bg-mobile-menu');
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenuButtonIcon = document.querySelector('#mobile-menu-button i');

if (mobileMenuButton) {
    const toggleMobileMenu = () => {
        if (mobileMenu) mobileMenu.classList.toggle('translate-y-22');
        if (bgMobileMenu) {
            bgMobileMenu.classList.toggle('backdrop-blur-md');
            bgMobileMenu.classList.toggle('z-50');
        }
        const isOpen = mobileMenu ? mobileMenu.classList.contains('translate-y-22') : false;
        if (mobileMenuButtonIcon) mobileMenuButtonIcon.className = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
        mobileMenuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (mobileMenu) mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    };

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    mobileMenuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });
}

// ======= ANIMATION ON SCROLL ====== //
const showFadeLeft = document.querySelectorAll('.show-fade-left');
const showFadeRight = document.querySelectorAll('.show-fade-right');
const showFadeUp = document.querySelectorAll('.show-fade-up');
const showFadeDown = document.querySelectorAll('.show-fade-down');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('show-fade-left')) {
                entry.target.classList.add('show-left');
            }
            if (entry.target.classList.contains('show-fade-right')) {
                entry.target.classList.add('show-right');
            }
            if (entry.target.classList.contains('show-fade-up')) {
                entry.target.classList.add('show-up');
            }
            if (entry.target.classList.contains('show-fade-down')) {
                entry.target.classList.add('show-down');
            }
        }
    });
});

[...showFadeLeft].forEach(scrollLeft => {
    observer.observe(scrollLeft);
});
[...showFadeRight].forEach(scrollRight => {
    observer.observe(scrollRight);
});
[...showFadeUp].forEach(scrollUp => {
    observer.observe(scrollUp);
});
[...showFadeDown].forEach(scrollDown => {
    observer.observe(scrollDown);
});