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
    header.classList.toggle('sticky', window.scrollY > 100);

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

ScrollReveal().reveal('.home-content, .heading, .experience-title', { origin: 'top' });
ScrollReveal().reveal(
    '.home-img, .experience-container, .portfolio-box, .contact form',
    { origin: 'bottom' }
);
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*========================= Typed.js (Animasi Teks Halaman Home) ======================*/

if (document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Administrator', 'Web Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
}


/*========================= modal lihat detail project ======================*/

const closeModal = document.querySelector(".close-modal");

// Buat data semua project
const projects = {
    1: {
        title: "Kredit Poin Siswa",

        images: [
            {
                title : "Dashboard Administrator",
                src : "project/sips/sips.webp"
            },
            {
                title : "Login",
                src : "project/sips/login.webp"
            },
            {
                title : "Daftar Siswa",
                src : "project/sips/daftar_siswa.webp"
            },
            {
                title : "Daftar Wali Kelas",
                src : "project/sips/wali_kelas.webp"
            },
            {
                title : "Daftar Kelas",
                src : "project/sips/kelas.webp"
            },
            {
                title : "Daftar Pelanggaran",
                src : "project/sips/pelanggaran.webp"
            },
            {
                title : "Daftar Poin Pelanggaran",
                src : "project/sips/poin_pelanggaran.webp"
            },
            {
                title : "Daftar Prestasi",
                src : "project/sips/Prestasi.webp"
            },
            {
                title : "Daftar Poin Prestasi",
                src : "project/sips/Poin_Prestasi.webp"
            },
            {
                title : "Laporan Poin Siswa",
                src : "project/sips/Laporan.webp"
            },
            {
                title : "Dashboard Wali Kelas",
                src : "project/sips/dashboard_wali.webp"
            },
            {
                title : "Daftar Siswa Login Wali Kelas",
                src : "project/sips/siswa_wali.webp"
            },
            {
                title : "Daftar Prestasi Login Wali Kelas",
                src : "project/sips/prestasi_wali.webp"
            },
            {
                title : "Input Poin Prestasi Login Wali Kelas",
                src : "project/sips/poin_wali.webp"
            },
            {
                title : "Dashboard Guru BK",
                src : "project/sips/dashboard_bk.webp"
            },
            {
                title : "Daftar Siswa Login Guru BK",
                src : "project/sips/siswa_bk.webp"
            },
            {
                title : "Daftar Pelanggaran Login Guru BK",
                src : "project/sips/pelanggaran_bk.webp"
            },
            {
                title : "Input Poin Pelanggaran Login Guru BK",
                src : "project/sips/poin_bk.webp"
            },
            
        ], 
        description: "Aplikasi website untuk mengelola data pelanggaran dan prestasi siswa secara real-time.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Django",
            "SQLite"
        ],

        features: [
            "Login Multi User (Administrator, Guru BK, Wali Kelas)",
            "Dashboard statistik pelanggaran dan prestasi siswa",
            "Manajemen data siswa, guru, dan wali kelas",
            "Hak akses Wali Kelas hanya untuk siswa di bawah wali asuhnya",
            "Wali Kelas hanya dapat menambahkan poin prestasi kepada siswa bimbingannya",
            "Guru BK dapat mengelola poin pelanggaran seluruh siswa",
            "Riwayat pelanggaran dan prestasi setiap siswa",
            "Cetak laporan poin pelanggaran dan prestasi"
        ],

        github: "#",
        demo: "#"
    },

    2: {
        title: "Toko Elektronik",

        images: [
            {
                title: "Toko Elektronik",
                src: "project/toko/toko.webp"
            },

            {
                title: "Daftar Produk",
                src: "project/toko/daftar_produk.webp"
            },

            {
                title: "Tentang Toko",
                src: "project/toko/about.webp"
            },
        ],

        description: "Website toko elektronik dengan fitur katalog produk, keranjang belanja, dan pembayaran.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Login",
            "Keranjang",
            "Checkout",
            "Pencarian Produk"
        ],

        github: "#",
        demo: "#"
    },

    3: {
        title: "Pembayaran SPP Santri",
        images: [
            {
                title: "Dashboard Administrator",
                src: "project/pondok/sumbangan_pondok.webp"
            },

            {
                title: "Daftar Nama Santri",
                src: "project/pondok/daftar_santri.webp"
            },

            {
                title: "Daftar Nama Wali Santri",
                src: "project/pondok/daftar_wali.webp"
            },

            {
                title: "Daftar Kamar Pondok Pesantren",
                src: "project/pondok/daftar_kamar.webp"
            },

            {
                title: "Input Pembayaran SPP Santri",
                src: "project/pondok/pembayaran.webp"
            },

            {
                title: "Tagihan SPP Per Tahun",
                src: "project/pondok/nominal_spp.webp"
            },

            {
                title: "Dashboard Wali Santri",
                src: "project/pondok/dashboard_wali.webp"
            },

            {
                title: "Tagihan SPP Wali Santri ",
                src: "project/pondok/tagihan_spp.webp"
            },

            {
                title: "Login",
                src: "project/pondok/login.webp"
            },

            {
                title: "Metode Pembayaran Menggunakan Midtrans",
                src: "project/pondok/midtrans.webp"
            },
        ],

        description: "Website Sistem Pembayaran SPP Pondok Pesantren yang memudahkan pengelolaan tagihan dan pembayaran SPP secara online. Sistem menyediakan akses khusus bagi administrator dan wali santri, serta terintegrasi dengan Midtrans untuk proses pembayaran yang aman dan praktis.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Midtrans",
            "MySQL",
            "Bootstrap",
            "Django"
        ],

        features: [
            "Login Multi User (Administrator dan Wali Santri)",
            "Administrator dapat membuat akun login untuk setiap wali santri",
            "Wali santri hanya dapat melihat data pembayaran anaknya sendiri",
            "Dashboard wali santri menampilkan tagihan SPP yang belum dibayar",
            "Riwayat pembayaran SPP setiap santri",
            "Pembayaran SPP secara online menggunakan Midtrans",
            "Status pembayaran diperbarui secara otomatis setelah transaksi berhasil",
            "Manajemen data santri, wali santri, dan tagihan pembayaran oleh administrator"
        ],

        github: "#",
        demo: "#"
    }
};


// Ambil semua elemen modal
const modal = document.querySelector(".project-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

const modalTech = document.getElementById("modal-tech");
const modalFeature = document.getElementById("modal-feature");

const githubBtn = document.getElementById("modal-github");
const demoBtn = document.getElementById("modal-demo");

const closeBtn = document.querySelector(".close-modal");

const projectDetail = document.querySelector(".project-detail");

const imagePreview = document.querySelector(".image-preview");

const previewImage = document.getElementById("preview-image");

const viewImageBtn = document.querySelector(".view-image-btn");

const backPreview = document.querySelector(".back-preview");

const currentImageText = document.getElementById("current-image");
const totalImageText = document.getElementById("total-image");

const imageTitle = document.getElementById("image-title");

let currentProject = null;
let currentImageIndex = 0;


// Event klik "Lihat Detail"
document.querySelectorAll(".detail-project").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.dataset.project;

        const project = projects[id];

        currentProject = project;
        currentImageIndex = 0;

        modalImage.src = project.images[0].src;
        previewImage.src = project.images[0].src;

        imageTitle.textContent = project.images[0].title;

        currentImageText.textContent = 1;
        totalImageText.textContent = project.images.length;

        modalTitle.textContent = project.title;

        modalDescription.textContent = project.description;

        modalTech.innerHTML = "";

        project.tech.forEach(item => {
            modalTech.innerHTML += `<span>${item}</span>`;
        });

        modalFeature.innerHTML = "";

        project.features.forEach(item => {
            modalFeature.innerHTML += `<p>✔ ${item}</p>`;
        });

        githubBtn.href = project.github;

        demoBtn.href = project.demo;

        modal.classList.add("active");

    });

});

function updateImage(){

    previewImage.src =
        currentProject.images[currentImageIndex].src;

    imageTitle.textContent =
        currentProject.images[currentImageIndex].title;

    currentImageText.textContent =
        currentImageIndex + 1;

    totalImageText.textContent =
        currentProject.images.length;
}


// tombol tutup
closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

    // Kembali ke tampilan detail
    imagePreview.classList.remove("active");
    projectDetail.classList.remove("hide");

    currentImageIndex = 0;
    currentProject = null;

});


// klik area luar untuk menutup modal 
modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

        imagePreview.classList.remove("active");
        projectDetail.classList.remove("hide");

        currentImageIndex = 0;
        currentProject = null;

    }

});


// lihat gambar
const prevBtn = document.querySelector(".prev-image");
const nextBtn = document.querySelector(".next-image");

viewImageBtn.addEventListener("click",()=>{

    projectDetail.classList.add("hide");

    imagePreview.classList.add("active");

    updateImage();

});

backPreview.addEventListener("click",()=>{

    imagePreview.classList.remove("active");

    projectDetail.classList.remove("hide");

});

nextBtn.addEventListener("click",()=>{


    if(!currentProject){
        console.log("currentProject null");
        return;
    }

    currentImageIndex++;

    console.log("index:", currentImageIndex);

    if(currentImageIndex >= currentProject.images.length){
        currentImageIndex = 0;
    }


    updateImage();

});

prevBtn.addEventListener("click",()=>{

    if(!currentProject) return;

    currentImageIndex--;

    if(currentImageIndex < 0){
        currentImageIndex = currentProject.images.length - 1;
    }

    updateImage();

});


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

