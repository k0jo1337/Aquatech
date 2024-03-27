document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.w-100');

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('zoomed-image')) {
                image.classList.remove('zoomed-image');
              } else {
                image.classList.add('zoomed-image');
              }
            });
        });
    });
