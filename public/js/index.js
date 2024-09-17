const container_products = document.getElementById('container-products')
fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then(json => {
            json.forEach(product => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <div> <img src="${product.image}" alt="title.png"> </div>
                    <h4>${product.title}</h4>
                    <p> <span>${product.price}</span> <span>${product.rating.rate} <i class="fa-solid fa-star"></i></span></p> 
                    <button><i class="fa-solid fa-cart-plus"></i></button>`;
                container_products.appendChild(article);
            });
        }
    )


const scrollCategories = () => {
    const scrollContainer = document.querySelector('.main__section__filtres__categories');

    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
        isDragging = true;
        startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
        scrollLeft = scrollContainer.scrollLeft;
    };

    const stopDragging = () => {
        if (!isDragging) return;
        isDragging = false;
    };

    const handleDragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
        const walk = (x - startX) * 1; // Ajusta la velocidad del scroll aquí
        scrollContainer.scrollLeft = scrollLeft - walk;
    };

    // Event listeners for the mouse
    scrollContainer.addEventListener('mousedown', startDragging);
    scrollContainer.addEventListener('mouseleave', stopDragging);
    scrollContainer.addEventListener('mouseup', stopDragging);
    scrollContainer.addEventListener('mousemove', handleDragging);

    // Event listeners for the touch
    scrollContainer.addEventListener('touchstart', startDragging);
    scrollContainer.addEventListener('touchend', stopDragging);
    scrollContainer.addEventListener('touchmove', handleDragging);

    // Event listeners por event of links
    scrollContainer.addEventListener('dragstart', (e) => {
        e.preventDefault()
    });
    scrollContainer.addEventListener('dragover', (e) => {
        e.preventDefault()
    });
    scrollContainer.addEventListener('drop', (e) => {
        e.preventDefault()
    });
    scrollContainer.addEventListener('dragend', (e) => {
        e.preventDefault()
    });
}

document.addEventListener('DOMContentLoaded', () => {
    scrollCategories();
});