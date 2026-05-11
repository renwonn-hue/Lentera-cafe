// --- 1. Preloader (Loading Bar Animation) ---
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    // Memberikan sedikit delay agar animasi loading bar selesai terlihat
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 2000); // 2 detik loading screen
});

// --- 2. Navbar Sticky & Blur Effect on Scroll ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- 3. Mobile Menu Toggle (Hamburger) ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Ubah icon burger ke 'X' saat diklik
    const icon = hamburger.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Tutup menu mobile saat link di-klik
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// --- 4. Scroll Reveal Animation (Intersection Observer) ---
// Membuat efek elemen muncul perlahan dari bawah saat halaman di-scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // Memicu animasi ketika 15% elemen terlihat
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            // Jika tidak ingin animasi berulang saat scroll ke atas, uncomment baris bawah ini:
            // observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});