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



/*========================= Animasi Ketik Role Text (Home) ======================*/

(function() {
    const roles = ["Web Development", "Administrator", "Data Analyst",];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer = null;
    const target = document.getElementById("role-text");

    if (!target || target.dataset.typing === "true") return;
    target.dataset.typing = "true";

    function typeLoop() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            target.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            target.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 45 : 110;

        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 400;
        }

        timer = setTimeout(typeLoop, speed);
    }

    timer = setTimeout(typeLoop, 1000);
})();

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
            "Login multi user (Administrator, Guru BK, Wali Kelas)",
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
        title: "Sistem Informasi Sekolah & PPDB",

        images: [
            {
                title: "Beranda Website",
                src: "project/sekolah/beranda.webp"
            },

            {
                title: "Sambutan Kepala Sekolah",
                src: "project/sekolah/sambutan-kepsek.webp"
            },

            {
                title: "Program Unggulan Sekolah",
                src: "project/sekolah/program-unggul.webp"
            },

            {
                title: "Berita  & Artikel Sekolah",
                src: "project/sekolah/berita.webp"
            },
            {
                title: "Galeri Sekolah",
                src: "project/sekolah/galeri.webp"
            },
            {
                title: "Extrakulikuler Sekolah",
                src: "project/sekolah/extra.webp"
            },
            {
                title: "Fasilitas Sekolah",
                src: "project/sekolah/fasilitas.webp"
            },
            {
                title: "Testimoni Sekolah",
                src: "project/sekolah/testi.webp"
            },
            {
                title: "PPDB Sekolah",
                src: "project/sekolah/ppdb.webp"
            },
            {
                title: "Staf Pengajar Sekolah",
                src: "project/sekolah/pengajar.webp"
            },
            {
                title: "Sejarah Sekolah",
                src: "project/sekolah/sejarah.webp"
            },
            {
                title: "Struktur Sekolah",
                src: "project/sekolah/struktur.webp"
            },
            {
                title: "Wakasek Sekolah",
                src: "project/sekolah/wakasek.webp"
            },
            {
                title: "Agenda Tahunan Sekolah",
                src: "project/sekolah/agenda.webp"
            },
            {
                title: "Kontak Sekolah",
                src: "project/sekolah/kontak.webp"
            },
            {
                title: "Pengumuman Kelulusan Siswa",
                src: "project/sekolah/lulus.webp"
            },
            {
                title: "Login PPDB Siswa",
                src: "project/sekolah/login-ppdb.webp"
            },
            {
                title: "Login Siswa PPDB",
                src: "project/sekolah/pengumuman.webp"
            },
            {
                title: "Dashboard Admin Sekolah",
                src: "project/sekolah/admin-dashboard.webp"
            },
            {
                title: "manajemen Guru & Kependidikan & Unit Kerja",
                src: "project/sekolah/admin_guru.webp"
            },
            {
                title: "Manajemen Siswa Pendaftar PPDB",
                src: "project/sekolah/admin-pendaftar.webp"
            },
            {
                title: "Manajemen Berita & Artikel",
                src: "project/sekolah/admin-berita.webp"
            },
            {
                title: "Manajemen Fasilitas Sekolah",
                src: "project/sekolah/admin-fasilitas.webp"
            },
            {
                title: "Manajemen Progrram Unggulan",
                src: "project/sekolah/admin-unggulan.webp"
            },
            {
                title: "Manajemen Agenda Sekolah",
                src: "project/sekolah/admin-agenda.webp"
            },
            {
                title: "Manajemen Ektrakulikuler Sekolah",
                src: "project/sekolah/admin-extra.webp"
            },
            {
                title: "Manajemen Galeri Sekolah",
                src: "project/sekolah/admin-galeri.webp"
            },
            {
                title: "Manajemen Galeri Sekolah",
                src: "project/sekolah/admin-galeri.webp"
            },
            {
                title: "Manajemen Testimoni Alumni",
                src: "project/sekolah/admin-testi.webp"
            },
            {
                title: "Manajemen Pesan Masuk",
                src: "project/sekolah/admin-pesan.webp"
            },
            {
                title: "Manajemen Pengumuman Kelulusan Siswa",
                src: "project/sekolah/admin-kelulusan.webp"
            },
        ],

        description: "Website informasi dan layanan digital sekolah yang menyediakan informasi Jajaran Guru, Staf Sekolah, Wakasek Sekolah, profil sekolah, agenda Tahunan, fasilitas Sekolah, berita & Artikel, ekstrakurikuler Siswa, galeri Siswa, kelulusan Siswa, serta layanan Penerimaan Peserta Didik Baru (PPDB) secara online.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Laravel",
            "MySQL",
            "AdminLTE",
        ],

        features: [
            "Admin Panel",
            "Menampilkan informasi sekolah, sambutan kepsek, Sejarah sekolah, Visi Misi, dan Identitas sekolah.",
            "Informasi mengenai struktur yang ada di lingkungan sekolah, seperti tenaga pendidik dan kependidikan.",
            "Menyediakan berbagai informasi mengenai sekolah, meliputi agenda dan kegiatan, fasilitas dan sarana prasarana, berita dan artikel, kegiatan ekstrakurikuler, galeri dokumentasi, informasi kontak.",
            "Pengumuman kelulusan untuk siswa kelas 3 yang bisa di akses oleh siswa dan orang tua siswa.",
            "Menyediakan layanan Penerimaan Peserta Didik Baru secara online, sehingga calon siswa dapat melakukan pendaftaran tanpa harus datang langsung ke sekolah.",
            "Calon siswa mengisi formulir pendaftaran secara online dengan memasukkan data diri dan informasi yang diperlukan dalam proses penerimaan siswa baru.",
            "Calon siswa membuat akun untuk mengakses informasi pendaftaran serta memantau status diterima atau ditolaknya pendaftaran mereka secara langsung.",
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

/*========================= Animasi Progress Bar Bidang Keahlian ======================*/

const keahlianBars = document.querySelectorAll('.keahlian-fill');

keahlianBars.forEach((bar) => {
    const target = bar.style.width;

    bar.style.transition = "none";
    bar.style.width = "0%";

    // paksa reflow supaya browser "menyadari" width sudah 0% dulu
    void bar.offsetWidth;

    bar.style.transition = "width 1s ease-out";
    bar.style.width = target;
});

/*========================= Animasi Progress Circle Keahlian Profesional ======================*/

const keahlianCircles = document.querySelectorAll('.keahlian-circle-fill');

keahlianCircles.forEach((circle) => {
    const percent = parseInt(circle.getAttribute("data-percent"), 10);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.transition = "none";
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const offset = circumference - (circumference * percent / 100);
            circle.style.transition = "stroke-dashoffset 1s ease-out";
            circle.style.strokeDashoffset = `${offset}`;
        });
    });
});

/*========================= 3D Tilt Effect Mockup Card ======================*/

const mockupCard = document.querySelector('.mockup-card');

if (mockupCard) {
    mockupCard.addEventListener('mousemove', (e) => {
        const rect = mockupCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;

        mockupCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    mockupCard.addEventListener('mouseleave', () => {
        mockupCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

// filter tab Pengalaman
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.pengalaman-filter-btn');
    const kerjaGroup = document.getElementById('pengalaman-kerja');
    const organisasiGroup = document.getElementById('pengalaman-organisasi');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            if (filter === 'semua') {
                kerjaGroup.style.display = 'block';
                organisasiGroup.style.display = 'block';
            } else if (filter === 'kerja') {
                kerjaGroup.style.display = 'block';
                organisasiGroup.style.display = 'none';
            } else if (filter === 'organisasi') {
                kerjaGroup.style.display = 'none';
                organisasiGroup.style.display = 'block';
            }
        });
    });
});




