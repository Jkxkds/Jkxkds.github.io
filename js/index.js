document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flags_item');
    const sections = document.querySelectorAll('.section');

    const formularioLinks = {
        movil: document.querySelector('.movil .pagina6_mov h1 a'),
        tablet: document.querySelector('.tablet .pagina6_tablet h1 a'),
        desk: document.querySelector('.desktop .pagina6_desk h1 a')
    };

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

    const updateBackgroundImagesAndLink = () => {
        const deviceType = getDeviceType();
        const formularioLink = formularioLinks[deviceType];

        flags.forEach(flag => {
            flag.addEventListener('click', () => {
                const language = flag.getAttribute('data-language');
                
                sections.forEach((section, index) => {
                    const imagePath = `../img/img_${deviceType}/${language}/${index + 1}.jpg`;
                    section.style.backgroundImage = `url(${imagePath})`;
                });

                if (language === 'It') {
                    formularioLink.textContent = 'Vai al modulo';
                    formularioLink.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdIwnenuPfS242dE8VldHidVZJ5iaQH0AY79xC1m8OKYWMQAw/viewform?usp=sf_link';
                } else if (language === 'Br') {
                    formularioLink.textContent = 'Vai pra formulario';
                    formularioLink.href = 'https://docs.google.com/forms/d/e/1FAIpQLScSfclxl4MeztBwA0JgZqrhwg83Y4rNxrWfyy6Wqd8oHIMKkw/viewform?usp=sf_link';
                } else {
                    formularioLink.textContent = 'Ir al formulario';
                    formularioLink.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdJx66rB3vtJMKXYHPyPRCBMeZA-tvxSbqVIu3LMLBu0FAd6Q/viewform?usp=sf_link';
                }
            });
        });
    };

    updateBackgroundImagesAndLink();

    window.addEventListener('resize', () => {
        updateBackgroundImagesAndLink();
    });
});
