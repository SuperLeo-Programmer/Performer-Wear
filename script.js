document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    const products = [
        { name: 'Black Shirt', imgSrc:"images/1.jpg", price: '₹1', ratePerDay: '₹0.1', deliveryDate: '3 days' },
        { name: 'Yellow',  imgSrc:"images/3.jpg", price: '₹50', ratePerDay: '₹5', deliveryDate: '2 days' },
        // Additional sample products
        { name: 'Blue',  imgSrc:"images/2jpg.jpg", price: '₹60', ratePerDay: '₹6', deliveryDate: '1 day' },
        { name: 'Green',  imgSrc:"images/4.jpg", price: '₹70', ratePerDay: '₹7', deliveryDate: '5 days' },
    ];

    function addProductCard(product) {
        const card = `
            <div class="col-md-3">
                <div class="card product-card">
                    <img src="${product.imgSrc}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                        <p class="card-text">Rate per day: ${product.ratePerDay}</p>
                        <p class="card-text">Delivery by: ${product.deliveryDate}</p>
                        <a href="rent.html" class="btn btn-primary">Rent Now</a>
                    </div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', card);
    }

    document.getElementById('add-product-btn').addEventListener('click', function() {
        Swal.fire({
            title: 'Add New Product',
            html:
                '<input id="product-name" class="swal2-input" placeholder="Product Name">' +
                '<input id="product-price" class="swal2-input" placeholder="Price">' +
                '<input id="rate-per-day" class="swal2-input" placeholder="Rate per Day">' +
                '<input id="delivery-date" class="swal2-input" placeholder="Delivery Date (days)">' +
                '<input id="img-src" class="swal2-input" placeholder="Image URL">',
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('product-name').value;
                const price = document.getElementById('product-price').value;
                const ratePerDay = document.getElementById('rate-per-day').value;
                const deliveryDate = document.getElementById('delivery-date').value;
                const imgSrc = document.getElementById('img-src').value;

                if (name && price && ratePerDay && deliveryDate && imgSrc) {
                    const newProduct = {
                        name,
                        price,
                        ratePerDay,
                        deliveryDate: `${deliveryDate} days`,
                        imgSrc
                    };
                    addProductCard(newProduct);
                }
            }
        });
    });

    products.forEach(addProductCard);
});

function confirmRental() {
    Swal.fire({
        title: 'Confirm Rental',
        text: 'Are you sure you want to confirm this rental?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, confirm it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Confirmed!',
                'Your rental has been confirmed.',
                'success'
            );
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById('product-container');
    const products = [
        { name: 'Dress A',  imgSrc:"images/3.jpg", price: '₹40', ratePerDay: '₹4', deliveryDate: '3 days' },
        { name: 'Dress B',  imgSrc:"images/3.jpg", price: '₹50', ratePerDay: '₹5', deliveryDate: '2 days' },
        // Add more sample products if needed
    ];

    

    document.getElementById('add-product-btn').addEventListener('click', function() {
        Swal.fire({
            title: 'Add New Product',
            html:
                '<input id="product-name" class="swal2-input" placeholder="Product Name">' +
                '<input id="product-price" class="swal2-input" placeholder="Price">' +
                '<input id="rate-per-day" class="swal2-input" placeholder="Rate per Day">' +
                '<input id="delivery-date" class="swal2-input" placeholder="Delivery Date (days)">' +
                '<input id="img-src" class="swal2-input" placeholder="Image URL">',
            focusConfirm: false,
            preConfirm: () => {
                const name = document.getElementById('product-name').value;
                const price = document.getElementById('product-price').value;
                const ratePerDay = document.getElementById('rate-per-day').value;
                const deliveryDate = document.getElementById('delivery-date').value;
                const imgSrc = document.getElementById('img-src').value;

                if (name && price && ratePerDay && deliveryDate && imgSrc) {
                    const newProduct = {
                        name,
                        price,
                        ratePerDay,
                        deliveryDate: `₹{deliveryDate} days`,
                        imgSrc
                    };
                    addProductCard(newProduct);
                }
            }
        });
    });

    products.forEach(addProductCard);
});


function addProductCard(product) {
    const card = `
        <div class="col-md-3">
            <div class="card product-card">
                <img src="${product.imgSrc}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                    <p class="card-text">Rate per day: ${product.ratePerDay}</p>
                    <p class="card-text">Delivery by: ${product.deliveryDate}</p>
                    <a href="rent.html" class="btn btn-primary">Rent Now</a>
                </div>
            </div>
        </div>
    `;
    productContainer.insertAdjacentHTML('beforeend', card);
}

// Function to trigger SweetAlert for adding a new product
function showAddProductAlert() {
    Swal.fire({
        title: 'Add New Product',
        html:
            '<input id="product-name" class="swal2-input" placeholder="Product Name">' +
            '<input id="product-price" class="swal2-input" placeholder="Price">' +
            '<input id="rate-per-day" class="swal2-input" placeholder="Rate per Day">' +
            '<input id="delivery-date" class="swal2-input" placeholder="Delivery Date (days)">' +
            '<input id="img-src" class="swal2-input" placeholder="Image URL">',
        focusConfirm: false,
        preConfirm: () => {
            const name = document.getElementById('product-name').value;
            const price = document.getElementById('product-price').value;
            const ratePerDay = document.getElementById('rate-per-day').value;
            const deliveryDate = document.getElementById('delivery-date').value;
            const imgSrc = document.getElementById('img-src').value;

            if (name && price && ratePerDay && deliveryDate && imgSrc) {
                const newProduct = {
                    name,
                    price,
                    ratePerDay,
                    deliveryDate: `₹{deliveryDate} days`,
                    imgSrc
                };
                addProductCard(newProduct);
            }
        }
    });
}

document.getElementById('add-product-btn').addEventListener('click', showAddProductAlert);

products.forEach(addProductCard);

// Expose the function to be used in HTML onclick
window.showAddProductAlert = showAddProductAlert;
