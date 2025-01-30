document.addEventListener("DOMContentLoaded", function() {
    let carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    // Função para mostrar um item específico
    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    // Função para mostrar o próximo item do carrossel
    function showNextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    // Função para mostrar o item anterior do carrossel
    function showPrevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    }

    // Mostrar o primeiro item do carrossel inicialmente
    showItem(currentIndex);

    // Adicionar evento de clique para os botões de navegação
    document.querySelector(".prev").addEventListener("click", showPrevItem);
    document.querySelector(".next").addEventListener("click", showNextItem);
});
