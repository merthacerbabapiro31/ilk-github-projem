document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll (Navigasyon için)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Boztech Bilişim Güvenlik Sistemleri - Site Hazır");
});
