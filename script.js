// script.js - Main functionality for the e-commerce website

// DOM Elements
let productsGrid = document.getElementById('products-grid');
let cartItemsContainer = document.getElementById('cart-items');
let cartEmpty = document.getElementById('cart-empty');
let cartCount = document.querySelectorAll('.cart-count');
let cartSubtotal = document.getElementById('cart-subtotal');
let cartShipping = document.getElementById('cart-shipping');
let cartTax = document.getElementById('cart-tax');
let cartTotal = document.getElementById('cart-total');
let checkoutBtn = document.getElementById('checkout-btn');
let categoryFilter = document.getElementById('category-filter');
let sortBy = document.getElementById('sort-by');
let searchInput = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');
let menuToggle = document.getElementById('menu-toggle');
let productModal = document.getElementById('product-modal');
let modalClose = document.getElementById('modal-close');
let modalBody = document.getElementById('modal-body');
let cartNotification = document.getElementById('cart-notification');
let categoryCards = document.querySelectorAll('.category-card');

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load products on home page
    if (productsGrid) {
        displayProducts(shoes);
        setupCategoryFilters();
        setupNewArrivals();
    }
    
    // Load cart on cart page
    if (cartItemsContainer) {
        displayCartItems();
        updateCartSummary();
    }
    
    // Update cart count
    updateCartCount();
    
    // Setup event listeners
    setupEventListeners();
});

// Display products in the grid
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        document.getElementById('products-empty').style.display = 'block';
        return;
    }
    
    document.getElementById('products-empty').style.display = 'none';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="btn-view-details" data-id="${product.id}">View Details</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to the buttons
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.btn-view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Setup category filters
function setupCategoryFilters() {
    // Category cards filter
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            categoryFilter.value = category;
            filterAndSortProducts();
        });
    });
    
    // Category dropdown filter
    categoryFilter.addEventListener('change', filterAndSortProducts);
    
    // Sort dropdown
    sortBy.addEventListener('change', filterAndSortProducts);
    
    // Search functionality
    searchBtn.addEventListener('click', filterAndSortProducts);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterAndSortProducts();
        }
    });
}

// Filter and sort products
function filterAndSortProducts() {
    let filteredProducts = [...shoes];
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const sortOption = sortBy.value;
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort products
    switch(sortOption) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Default sorting (by id)
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    displayProducts(filteredProducts);
}

// Setup new arrivals section
function setupNewArrivals() {
    const newArrivalsGrid = document.querySelector('.new-arrivals-grid');
    if (!newArrivalsGrid) return;
    
    // Get the latest 3 products
    const newArrivals = [...shoes].slice(-3);
    
    newArrivalsGrid.innerHTML = '';
    
    newArrivals.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="btn-view-details" data-id="${product.id}">View Details</button>
                </div>
            </div>
        `;
        
        newArrivalsGrid.appendChild(productCard);
    });
    
    // Add event listeners to the buttons in new arrivals
    newArrivalsGrid.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    newArrivalsGrid.querySelectorAll('.btn-view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Show product details in modal
function showProductDetails(productId) {
    const product = shoes.find(p => p.id === productId);
    if (!product) return;
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <div class="product-brand">${product.brand}</div>
                <h2>${product.name}</h2>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-category">${product.category}</div>
                <p class="product-description">${product.description}</p>
                <div class="modal-actions">
                    <button class="btn btn-primary btn-add-to-cart-modal" data-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-secondary" id="close-modal-btn">Continue Shopping</button>
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'flex';
    
    // Add event listener to modal add to cart button
    const addToCartBtn = document.querySelector('.btn-add-to-cart-modal');
    addToCartBtn.addEventListener('click', function() {
        addToCart(productId);
        productModal.style.display = 'none';
    });
    
    // Add event listener to close modal button
    const closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.addEventListener('click', function() {
        productModal.style.display = 'none';
    });
}

// Add product to cart
function addToCart(productId) {
    const product = shoes.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showCartNotification();
    
    // If on cart page, update cart display
    if (cartItemsContainer) {
        displayCartItems();
        updateCartSummary();
    }
}

// Display cart items
function displayCartItems() {
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-brand">${item.brand}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to quantity controls
    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeCartItem(productId);
        });
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    cart[itemIndex].quantity += change;
    
    // Remove item if quantity reaches 0
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update display
    displayCartItems();
    updateCartSummary();
    updateCartCount();
}

// Remove item from cart
function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update display
    displayCartItems();
    updateCartSummary();
    updateCartCount();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 150 || subtotal === 0 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Enable/disable checkout button
    checkoutBtn.disabled = cart.length === 0;
}

// Update cart count in navbar
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCount.forEach(countElement => {
        countElement.textContent = totalItems;
    });
}

// Show cart notification
function showCartNotification() {
    cartNotification.style.display = 'flex';
    
    setTimeout(() => {
        cartNotification.style.display = 'none';
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            productModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) return;
            
            alert('Thank you for your order! This is a demo store, so no actual payment will be processed.');
            
            // Clear cart
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update display
            displayCartItems();
            updateCartSummary();
            updateCartCount();
        });
    }
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
            this.reset();
        });
    });
}