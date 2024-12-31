/*========================= Navbar Hamburger ===================================*/

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// Pastikan elemen ada
if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        const isMenuOpen = navbar.classList.contains("active");

        // Toggle menu aktif/non-aktif
        navbar.classList.toggle("active");
        navbar.classList.toggle("hidden", isMenuOpen);

        // Ganti ikon antara hamburger dan X
        menuIcon.classList.toggle("fa-bars", isMenuOpen);
        menuIcon.classList.toggle("fa-xmark", !isMenuOpen);
    });

    document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
            navbar.classList.remove("active");
            navbar.classList.add("hidden");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-xmark");
        }
    });
}


// Reset menu navbar saat halaman di-load
window.addEventListener("load", () => {
    navbar.classList.remove("active");
    navbar.classList.add("hidden");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
});


/*========================= Highlight Navbar Saat Scroll ============================*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    // Highlight menu link saat scroll
    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Tutup menu burger saat scroll (opsional)
    if (navbar.classList.contains('active')) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
        navbar.classList.add('hidden');
    }
});

/*========================= ScrollReveal Animations ==================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
    '.home-img, .services-container, .portfolio-box, .contact form',
    { origin: 'bottom' }
);
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*========================= Typed.js (Animasi Teks Halaman Home) ======================*/

if (document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Youtuber', 'Web Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
}


/*========================= animasi lingkaran mene skills atau keahlian ======================*/

const circles = document.querySelectorAll('.circle');

circles.forEach((elem) => {
    // Ambil atribut data
    const dots = parseInt(elem.getAttribute("data-dots"), 10); // Total titik
    const marked = parseInt(elem.getAttribute("data-percent"), 10); // Persentase aktif
    const percent = Math.floor(dots * marked / 100); // Hitung jumlah titik aktif
    const rotate = 360 / dots; // Derajat rotasi setiap titik
    let points = "";

    // Generate titik-titik
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    // Tambahkan titik ke dalam elemen lingkaran
    elem.innerHTML = points;

    // Tambahkan kelas 'marked' ke titik yang aktif
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

