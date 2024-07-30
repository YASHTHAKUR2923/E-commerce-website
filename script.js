document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Product 1',
            image: 'product1.jpg',
            description: 'This is a great product.',
            price: '$10.00'
        },
        {
            name: 'Product 2',
            image: 'product2.jpg',
            description: 'This is another great product.',
            price: '$20.00'
        },
        {
            name: 'Product 3',
            image: 'product3.jpg',
            description: 'This product is also great.',
            price: '$30.00'
        }
    ];

    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        
        productGrid.appendChild(productDiv);
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}