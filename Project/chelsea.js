// ===== Fungsi Menghasilkan Warna Acak =====
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// ===== Efek Gradien Bergerak di Background =====
function changeBackgroundColor() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const body = document.body;
    body.style.transition = 'background 3s ease';
    body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

// ===== Animasi Teks Sambutan =====
function showWelcomeMessage() {
    const header = document.querySelector('header');
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.textContent = "✨ Selamat datang di portofolio saya! ✨";
    header.appendChild(welcomeDiv);

    // animasi fade-in
    welcomeDiv.style.opacity = 0;
    welcomeDiv.style.transition = 'opacity 2s ease';
    setTimeout(() => {
        welcomeDiv.style.opacity = 1;
    }, 300);
}

// ===== Efek Hover Foto Profil dengan Animasi Glow =====
function addProfileHoverEffect() {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transition = 'transform 0.4s, box-shadow 0.4s';
            profileImg.style.transform = 'scale(1.1) rotate(2deg)';
            profileImg.style.boxShadow = '0 0 35px rgba(255, 223, 0, 0.7)';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1.0) rotate(0deg)';
            profileImg.style.boxShadow = '0 0 15px rgba(102, 204, 255, 0.4)';
        });
    }
}

// ===== Animasi Table Experience saat Scroll =====
function animateExperienceOnScroll() {
    const table = document.querySelector('.experience table');
    if (!table) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                table.style.opacity = 1;
                table.style.transform = 'translateY(0)';
            }
        });
    });
    observer.observe(table);
}

// ===== Tombol Mode Gelap/Terang =====
function createThemeToggle() {
    const button = document.createElement('button');
    button.textContent = "🌙 Ganti Tema";
    button.className = "theme-toggle";
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        button.textContent = document.body.classList.contains('light-mode')
            ? "☀️ Mode Terang"
            : "🌙 Mode Gelap";
    });
}

// ===== Jalankan Semua Saat Halaman Dimuat =====
window.onload = function () {
    changeBackgroundColor();
    showWelcomeMessage();
    addProfileHoverEffect();
    animateExperienceOnScroll();
    createThemeToggle();

    // Ubah warna latar belakang setiap 10 detik otomatis
    setInterval(changeBackgroundColor, 10000);
};
