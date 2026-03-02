// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll fade-in animation
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});
// ========== MUSIC PLAYER (AUTO-PLAY) ==========
const bgMusic = document.getElementById('bg-music');
if (bgMusic) {
    bgMusic.volume = 0.4;

    const startMusic = () => {
        bgMusic.play().then(() => {
            // Successfully started playing
            document.removeEventListener('click', startMusic);
            document.removeEventListener('scroll', startMusic);
            document.removeEventListener('touchstart', startMusic);
        }).catch(err => {
            console.log("Waiting for user interaction to play music...");
        });
    };

    // Try to play immediately (might work if browser allows it natively)
    startMusic();

    // Fallback: start on these events
    document.addEventListener('click', startMusic);
    document.addEventListener('scroll', startMusic);
    document.addEventListener('touchstart', startMusic);
}
