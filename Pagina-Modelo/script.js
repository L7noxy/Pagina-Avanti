document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const totalImages = 10;
    const visibleImages = 5;
    const itemWidth = 200;
    const itemGap = 10;

    let currentIndex = 0;



    function updateCarousel() {
        const offset = currentIndex * (itemWidth + itemGap);
        track.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > totalImages - visibleImages) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - visibleImages;
        }
        updateCarousel();
    });


});


function mostrarPesquisa() {
    const inputElement = document.getElementById("searchInput");
    const textoPesquisado = inputElement.value;

    if (textoPesquisado.trim() !== "") {
        alert("Você pesquisou: \"" + textoPesquisado + "\"");
    } else {
        alert("Por favor, digite algo para pesquisar.");
    }

    inputElement.value = "";
}