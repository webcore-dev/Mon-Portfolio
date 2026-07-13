import './style.css';

// ======= ACTIVE LINK ======== //
const activeLinks = document.querySelectorAll('nav .active-link');
const mobileActiveLinks = document.querySelectorAll('.mobile-active-link');
const pageSection = document.querySelectorAll('.page-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    pageSection.forEach((pages, index) => {
        const sectionTop = pages.offsetTop;
        const sectionHeight = pages.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

            activeLinks.forEach(navLinks => {
                navLinks.classList.remove('text-white');
                navLinks.classList.remove('bg-indigo-600');
            });

            mobileActiveLinks.forEach(navLinks => {
                navLinks.classList.remove('text-white');
                navLinks.classList.remove('bg-indigo-600');
            });

            activeLinks[index].classList.remove('text-indigo-900');
            activeLinks[index].classList.remove('dark:text-indigo-600');
            activeLinks[index].classList.remove('hover:bg-indigo-50');
            activeLinks[index].classList.remove('dark:hover:bg-slate-900');
            activeLinks[index].classList.remove('hover:border-indigo-100');
            activeLinks[index].classList.remove('dark:hover:border-dark-header-border');
            activeLinks[index].classList.add('bg-indigo-600');
            activeLinks[index].classList.add('text-white');

            mobileActiveLinks[index].classList.remove('text-indigo-900');
            mobileActiveLinks[index].classList.remove('dark:text-indigo-600');
            mobileActiveLinks[index].classList.remove('hover:bg-indigo-50');
            mobileActiveLinks[index].classList.remove('dark:hover:bg-slate-900');
            mobileActiveLinks[index].classList.remove('hover:border-indigo-100');
            mobileActiveLinks[index].classList.remove('dark:hover:border-dark-header-border');
            mobileActiveLinks[index].classList.add('bg-indigo-600');
            mobileActiveLinks[index].classList.add('text-white');
        } else {

            activeLinks[0].classList.add('text-white');
            activeLinks[0].classList.add('bg-indigo-600');
            activeLinks[0].classList.remove('dark:text-indigo-600');
            activeLinks[0].classList.remove('hover:bg-indigo-50');
            activeLinks[0].classList.remove('dark:hover:bg-slate-900');
            activeLinks[0].classList.remove('hover:border-indigo-100');
            activeLinks[0].classList.remove('dark:hover:border-dark-header-border');

            mobileActiveLinks[0].classList.add('text-white');
            mobileActiveLinks[0].classList.add('bg-indigo-600');
            mobileActiveLinks[0].classList.remove('dark:text-indigo-600');
            mobileActiveLinks[0].classList.remove('hover:bg-indigo-50');
            mobileActiveLinks[0].classList.remove('dark:hover:bg-slate-900');
            mobileActiveLinks[0].classList.remove('hover:border-indigo-100');
            mobileActiveLinks[0].classList.remove('dark:hover:border-dark-header-border');

            activeLinks[index].classList.add('text-indigo-900');
            activeLinks[index].classList.add('dark:text-indigo-600');
            activeLinks[index].classList.add('hover:bg-indigo-50');
            activeLinks[index].classList.add('dark:hover:bg-slate-900');
            activeLinks[index].classList.add('hover:border-indigo-100');
            activeLinks[index].classList.add('dark:hover:border-dark-header-border');
            activeLinks[index].classList.remove('bg-indigo-600');
            activeLinks[index].classList.remove('text-white');

            mobileActiveLinks[index].classList.add('text-indigo-900');
            mobileActiveLinks[index].classList.add('dark:text-indigo-600');
            mobileActiveLinks[index].classList.add('hover:bg-indigo-50');
            mobileActiveLinks[index].classList.add('dark:hover:bg-slate-900');
            mobileActiveLinks[index].classList.add('hover:border-indigo-100');
            mobileActiveLinks[index].classList.add('dark:hover:border-dark-header-border');
            mobileActiveLinks[index].classList.remove('bg-indigo-600');
            mobileActiveLinks[index].classList.remove('text-white');
        };
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

const isDark = document.documentElement.classList.contains('dark');

if (isDark) {
    darkButtonIcon.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.replace('bg-grid', 'bg-grid-dark');
} else {
    darkButtonIcon.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.replace('bg-grid-dark', 'bg-grid');
}


// ======= LE CLICK ======== //

darkButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (isDark) {
        darkButtonIcon.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.replace('bg-grid', 'bg-grid-dark');
    } else {
        darkButtonIcon.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.replace('bg-grid-dark', 'bg-grid');
    }
});

// ====== MOBILE MENU ====== //

const mobileMenu = document.querySelector('#mobile-menu');
const bgMobileMenu = document.querySelector('#bg-mobile-menu');
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenuButtonIcon = document.querySelector('#mobile-menu-button i');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-y-22');
    bgMobileMenu.classList.toggle('backdrop-blur-md');
    bgMobileMenu.classList.toggle('z-50');
    const isOpen = mobileMenu.classList.contains('translate-y-22');
    mobileMenuButtonIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});