const cardContainer = document.getElementById('card-container');
const addCardBtn = document.getElementById('add-card-btn');


function createCard(imageSrc, price, delivery, rate) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${imageSrc}" alt="Clothing Item">
        <div class="details">
            <div class="price">${price}</div>
            <div class="delivery">Delivery by: ${delivery}</div>
            <div class="rate">Rate per day: ${rate}</div>
            <button class="rent-btn" onclick="openRentPage()">Rent Now</button>
        </div>
    `;

    return card;
}


addCardBtn.addEventListener('click', () => {
    const imgSrc = prompt('Enter image URL:');
    const price = prompt('Enter rental price:');
    const delivery = prompt('Enter delivery date:');
    const rate = prompt('Enter rate per day:');
    
    if (imgSrc && price && delivery && rate) {
        const card = createCard(imgSrc, price, delivery, rate);
        cardContainer.appendChild(card);
    }
});


function openRentPage() {
    window.location.href = 'rent.html'; 
}
