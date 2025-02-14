document.addEventListener('DOMContentLoaded', function() {
    // Solo mantener la animación de confetti
    setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 60,
            origin: { x: 0.5, y: 0.5 }
        });
    }, 2000);
});
