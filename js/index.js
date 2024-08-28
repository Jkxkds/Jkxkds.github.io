document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flags_item');
    const sections = document.querySelectorAll('.section');
    const formulario = document.querySelector('.formulario');

    const getDeviceType = () => {
        const width = window.innerWidth;
        if (width >= 721) {
            return 'desk';
        } else if (width >= 561) {
            return 'tablet';
        } else {
            return 'movil';
        }
    };

    const updateBackgroundImages = () => {
        const deviceType = getDeviceType();
        flags.forEach(flag => {
            flag.addEventListener('click', () => {
                const language = flag.getAttribute('data-language');
                sections.forEach((section, index) => {
                    const imagePath = `../img/img_${deviceType}/${language}/${index + 1}.jpg`;
                    section.style.backgroundImage = `url(${imagePath})`;
                });
            });
        });
    };

    updateBackgroundImages();

    // Actualiza el tipo de dispositivo si la ventana se redimensiona
    window.addEventListener('resize', () => {
        updateBackgroundImages();
    });
});
