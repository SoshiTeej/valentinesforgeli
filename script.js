// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto-advance carousel
setInterval(() => {
    changeSlide(1);
}, 10000);

// Envelope functionality
function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const music = document.getElementById('bgMusic');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0; 
    }
}

// No button movement
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Yes button handler
function handleYes() {
    alert('Hehe Di ka talaga makakahindi saakin :P');
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrate {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(celebration);
    
    setTimeout(() => celebration.remove(), 2000);
}