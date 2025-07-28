// Sample product data
const sampleProducts = [
    {
        id: 1,
        name: "iPhone 15 Pro Max 256GB",
        category: "Electronics",
        image: "/api/placeholder/300/300",
        platform: "Amazon",
        price: 134900,
        originalPrice: 144900,
        rating: 4.4,
        reviewCount: 2847,
        availability: "In Stock",
        deliveryTime: "1-2 days",
        description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system",
        specifications: {
            "Display": "6.7-inch Super Retina XDR",
            "Processor": "A17 Pro chip",
            "Storage": "256GB",
            "Camera": "48MP Main, 12MP Ultra Wide",
            "Battery": "Up to 29 hours video playback"
        },
        url: "https://amazon.in/iphone-15-pro-max"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max 256GB",
        category: "Electronics", 
        image: "/api/placeholder/300/300",
        platform: "Flipkart",
        price: 132999,
        originalPrice: 144900,
        rating: 4.3,
        reviewCount: 1543,
        availability: "In Stock",
        deliveryTime: "2-3 days",
        description: "iPhone 15 Pro Max with bank offers and exchange deals",
        specifications: {
            "Display": "6.7-inch Super Retina XDR",
            "Processor": "A17 Pro chip", 
            "Storage": "256GB",
            "Camera": "48MP Main, 12MP Ultra Wide",
            "Battery": "Up to 29 hours video playback"
        },
        url: "https://flipkart.com/iphone-15-pro-max"
    },
    {
        id: 3,
        name: "Nike Air Force 1 '07",
        category: "Fashion",
        image: "/api/placeholder/300/300", 
        platform: "Myntra",
        price: 7495,
        originalPrice: 8495,
        rating: 4.2,
        reviewCount: 856,
        availability: "In Stock",
        deliveryTime: "3-4 days",
        description: "Classic Nike Air Force 1 sneakers in white leather",
        specifications: {
            "Material": "Leather upper",
            "Sole": "Rubber outsole",
            "Closure": "Lace-up",
            "Color": "White",
            "Sizes": "UK 6-12 available"
        },
        url: "https://myntra.com/nike-air-force-1"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24 Ultra 512GB",
        category: "Electronics",
        image: "/api/placeholder/300/300",
        platform: "Amazon", 
        price: 129999,
        originalPrice: 139999,
        rating: 4.5,
        reviewCount: 3241,
        availability: "In Stock",
        deliveryTime: "Same day",
        description: "Samsung's flagship with S Pen, 200MP camera, and AI features",
        specifications: {
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Processor": "Snapdragon 8 Gen 3",
            "Storage": "512GB",
            "Camera": "200MP Main, 50MP Ultra Wide", 
            "Battery": "5000mAh with 45W charging"
        },
        url: "https://amazon.in/samsung-galaxy-s24-ultra"
    },
    {
        id: 5,
        name: "Adidas Ultraboost 22",
        category: "Fashion",
        image: "/api/placeholder/300/300",
        platform: "Meesho",
        price: 4999,
        originalPrice: 16999,
        rating: 3.8,
        reviewCount: 432,
        availability: "Limited Stock",
        deliveryTime: "5-7 days", 
        description: "Premium running shoes with Boost midsole technology",
        specifications: {
            "Material": "Primeknit upper",
            "Technology": "Boost midsole",
            "Closure": "Lace-up",
            "Color": "Core Black",
            "Sizes": "UK 7-11 available"
        },
        url: "https://meesho.com/adidas-ultraboost-22"
    },
    {
        id: 6,
        name: "MacBook Air M2 256GB",
        category: "Electronics",
        image: "/api/placeholder/300/300",
        platform: "Flipkart",
        price: 114900,
        originalPrice: 119900,
        rating: 4.6,
        reviewCount: 1876,
        availability: "In Stock", 
        deliveryTime: "1-2 days",
        description: "Ultra-thin laptop powered by Apple M2 chip",
        specifications: {
            "Display": "13.6-inch Liquid Retina",
            "Processor": "Apple M2 chip",
            "Storage": "256GB SSD",
            "Memory": "8GB unified memory",
            "Battery": "Up to 18 hours"
        },
        url: "https://flipkart.com/macbook-air-m2"
    },
    {
        id: 7,
        name: "Levi's 511 Slim Jeans",
        category: "Fashion",
        image: "/api/placeholder/300/300",
        platform: "Myntra",
        price: 2999,
        originalPrice: 3999,
        rating: 4.1,
        reviewCount: 1245,
        availability: "In Stock",
        deliveryTime: "2-3 days",
        description: "Classic slim-fit jeans in dark wash denim",
        specifications: {
            "Fit": "Slim",
            "Material": "98% Cotton, 2% Elastane",
            "Wash": "Dark Blue",
            "Sizes": "28-38 waist available", 
            "Care": "Machine washable"
        },
        url: "https://myntra.com/levis-511-slim-jeans"
    },
    {
        id: 8,
        name: "OnePlus 12 256GB",
        category: "Electronics",
        image: "/api/placeholder/300/300",
        platform: "Amazon",
        price: 64999,
        originalPrice: 69999,
        rating: 4.3,
        reviewCount: 2156,
        availability: "In Stock",
        deliveryTime: "Same day",
        description: "Flagship OnePlus phone with Hasselblad camera system",
        specifications: {
            "Display": "6.82-inch LTPO AMOLED",
            "Processor": "Snapdragon 8 Gen 3", 
            "Storage": "256GB",
            "Camera": "50MP Triple camera setup",
            "Battery": "5400mAh with 100W charging"
        },
        url: "https://amazon.in/oneplus-12-256gb"
    }
];

const platformColors = {
    "Amazon": "#ff9900",
    "Flipkart": "#047bd6", 
    "Myntra": "#ff3e6c",
    "Meesho": "#9c1a96"
};

// Application state
let currentView = 'cards';
let filteredProducts = [...sampleProducts];
let savedProducts = [];
let currentFilters = {
    minPrice: 0,
    maxPrice: 150000,
    rating: null,
    platforms: ['Amazon', 'Flipkart', 'Myntra', 'Meesho'],
    deliveryTimes: [],
    availability: ['In Stock', 'Limited Stock']
};

// Global variables for elements
let elements = {};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeElements();
    initializeApp();
});

function initializeElements() {
    elements = {
        navBtns: document.querySelectorAll('.nav-btn'),
        sections: document.querySelectorAll('.section'),
        searchBtn: document.getElementById('searchBtn'),
        productUrl: document.getElementById('productUrl'),
        imageUpload: document.getElementById('imageUpload'),
        fileInput: document.getElementById('fileInput'),
        filterToggle: document.getElementById('filterToggle'),
        filterPanel: document.getElementById('filterPanel'),
        viewBtns: document.querySelectorAll('.view-btn'),
        productsGrid: document.getElementById('productsGrid'),
        productsTable: document.getElementById('productsTable'),
        productsTableBody: document.getElementById('productsTableBody'),
        dashboardView: document.getElementById('dashboardView'),
        loadingState: document.getElementById('loadingState'),
        resultsCount: document.getElementById('resultsCount'),
        sortSelect: document.getElementById('sortSelect'),
        minPrice: document.getElementById('minPrice'),
        maxPrice: document.getElementById('maxPrice'),
        minPriceDisplay: document.getElementById('minPriceDisplay'),
        maxPriceDisplay: document.getElementById('maxPriceDisplay'),
        clearFilters: document.getElementById('clearFilters'),
        applyFilters: document.getElementById('applyFilters'),
        tooltip: document.getElementById('tooltip'),
        toastContainer: document.getElementById('toastContainer')
    };
    console.log('Elements initialized:', elements);
}

function initializeApp() {
    console.log('Setting up event listeners...');
    setupEventListeners();
    renderProducts();
    updateResultsCount();
    initializePriceSliders();
    
    // Show results section by default
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.style.display = 'block';
    }
    console.log('App initialized successfully');
}

function setupEventListeners() {
    // Navigation
    if (elements.navBtns) {
        elements.navBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Nav button clicked:', btn.dataset.section);
                switchSection(btn.dataset.section);
            });
        });
    }

    // Search functionality
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Search button clicked');
            handleSearch();
        });
    }
    
    if (elements.productUrl) {
        elements.productUrl.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }

    // Image upload
    if (elements.imageUpload) {
        elements.imageUpload.addEventListener('click', function(e) {
            e.preventDefault();
            if (elements.fileInput) {
                elements.fileInput.click();
            }
        });
        
        elements.imageUpload.addEventListener('dragover', handleDragOver);
        elements.imageUpload.addEventListener('drop', handleDrop);
    }
    
    if (elements.fileInput) {
        elements.fileInput.addEventListener('change', handleFileSelect);
    }

    // Filter panel  
    if (elements.filterToggle) {
        elements.filterToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Filter toggle clicked');
            toggleFilterPanel();
        });
    }
    
    if (elements.clearFilters) {
        elements.clearFilters.addEventListener('click', function(e) {
            e.preventDefault();
            clearAllFilters();
        });
    }
    
    if (elements.applyFilters) {
        elements.applyFilters.addEventListener('click', function(e) {
            e.preventDefault();
            applyFilters();
        });
    }

    // View switching
    if (elements.viewBtns) {
        elements.viewBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('View button clicked:', btn.dataset.view);
                switchView(btn.dataset.view);
            });
        });
    }

    // Sorting
    if (elements.sortSelect) {
        elements.sortSelect.addEventListener('change', handleSort);
    }

    // Price sliders
    if (elements.minPrice) {
        elements.minPrice.addEventListener('input', updatePriceDisplay);
    }
    if (elements.maxPrice) {
        elements.maxPrice.addEventListener('input', updatePriceDisplay);
    }

    // Filter inputs
    const setupFilterListeners = () => {
        const ratingInputs = document.querySelectorAll('input[name="rating"]');
        const platformInputs = document.querySelectorAll('input[name="platform"]');
        const deliveryInputs = document.querySelectorAll('input[name="delivery"]');
        const availabilityInputs = document.querySelectorAll('input[name="availability"]');
        
        ratingInputs.forEach(input => input.addEventListener('change', updateFilters));
        platformInputs.forEach(input => input.addEventListener('change', updateFilters));
        deliveryInputs.forEach(input => input.addEventListener('change', updateFilters));
        availabilityInputs.forEach(input => input.addEventListener('change', updateFilters));
    };
    
    setupFilterListeners();

    // Tooltips
    document.addEventListener('mouseover', handleTooltip);
    document.addEventListener('mouseout', hideTooltip);
}

function switchSection(sectionName) {
    console.log('Switching to section:', sectionName);
    
    // Update nav buttons
    if (elements.navBtns) {
        elements.navBtns.forEach(btn => {
            btn.classList.toggle('nav-btn--active', btn.dataset.section === sectionName);
        });
    }

    // Update sections
    if (elements.sections) {
        elements.sections.forEach(section => {
            section.classList.toggle('section--active', section.id === `${sectionName}-section`);
        });
    }

    // Load saved comparisons if switching to saved section
    if (sectionName === 'saved') {
        renderSavedComparisons();
    }
}

function handleSearch() {
    const url = elements.productUrl ? elements.productUrl.value.trim() : '';
    console.log('Handling search with URL:', url);
    
    if (!url) {
        showToast('Please enter a product URL', 'error');
        return;
    }

    // Show loading state
    const searchBtn = elements.searchBtn;
    if (searchBtn) {
        searchBtn.classList.add('loading');
        const textEl = searchBtn.querySelector('.search-btn__text');
        const loadingEl = searchBtn.querySelector('.search-btn__loading');
        if (textEl) textEl.classList.add('hidden');
        if (loadingEl) loadingEl.classList.remove('hidden');
    }
    
    if (elements.loadingState) elements.loadingState.classList.remove('hidden');
    if (elements.productsGrid) elements.productsGrid.classList.add('hidden');

    // Simulate API call
    setTimeout(() => {
        if (searchBtn) {
            searchBtn.classList.remove('loading');
            const textEl = searchBtn.querySelector('.search-btn__text');
            const loadingEl = searchBtn.querySelector('.search-btn__loading');
            if (textEl) textEl.classList.remove('hidden');
            if (loadingEl) loadingEl.classList.add('hidden');
        }
        
        if (elements.loadingState) elements.loadingState.classList.add('hidden');
        if (elements.productsGrid) elements.productsGrid.classList.remove('hidden');
        
        showToast('Products found and comparison updated!', 'success');
        
        // Reset search input
        if (elements.productUrl) elements.productUrl.value = '';
    }, 2000);
}

function handleDragOver(e) {
    e.preventDefault();
    if (elements.imageUpload) {
        elements.imageUpload.style.borderColor = 'var(--color-primary)';
        elements.imageUpload.style.background = 'var(--color-bg-1)';
    }
}

function handleDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFileUpload(files[0]);
    }
    resetImageUploadStyle();
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleFileUpload(files[0]);
    }
}

function handleFileUpload(file) {
    if (!file.type.startsWith('image/')) {
        showToast('Please upload a valid image file', 'error');
        return;
    }

    showToast('Image uploaded! Searching for similar products...', 'success');
    
    // Simulate image processing
    if (elements.loadingState) elements.loadingState.classList.remove('hidden');
    if (elements.productsGrid) elements.productsGrid.classList.add('hidden');
    
    setTimeout(() => {
        if (elements.loadingState) elements.loadingState.classList.add('hidden');
        if (elements.productsGrid) elements.productsGrid.classList.remove('hidden');
        showToast('Similar products found!', 'success');
    }, 3000);
}

function resetImageUploadStyle() {
    if (elements.imageUpload) {
        elements.imageUpload.style.borderColor = '';
        elements.imageUpload.style.background = '';
    }
}

function toggleFilterPanel() {
    console.log('Toggling filter panel');
    if (elements.filterPanel) {
        elements.filterPanel.classList.toggle('show');
    }
    if (elements.filterToggle) {
        elements.filterToggle.classList.toggle('btn--primary');
    }
}

function switchView(view) {
    console.log('Switching to view:', view);
    currentView = view;
    
    // Update view buttons
    if (elements.viewBtns) {
        elements.viewBtns.forEach(btn => {
            btn.classList.toggle('view-btn--active', btn.dataset.view === view);
        });
    }

    // Show/hide views
    if (elements.productsGrid) {
        elements.productsGrid.classList.toggle('hidden', view !== 'cards');
    }
    if (elements.productsTable) {
        elements.productsTable.classList.toggle('hidden', view !== 'table');
    }
    if (elements.dashboardView) {
        elements.dashboardView.classList.toggle('hidden', view !== 'dashboard');
    }

    // Render appropriate view
    if (view === 'table') {
        renderTableView();
    } else if (view === 'dashboard') {
        renderDashboardView();
    }
}

function handleSort() {
    const sortValue = elements.sortSelect ? elements.sortSelect.value : 'bestMatch';
    console.log('Sorting by:', sortValue);
    
    switch (sortValue) {
        case 'priceLowHigh':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'priceHighLow':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'ratingHighLow':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'deliveryFastest':
            const deliveryOrder = ['Same day', '1-2 days', '2-3 days', '3-4 days', '3-5 days', '5-7 days'];
            filteredProducts.sort((a, b) => {
                return deliveryOrder.indexOf(a.deliveryTime) - deliveryOrder.indexOf(b.deliveryTime);
            });
            break;
        default:
            // Best match - restore original order
            filteredProducts = [...sampleProducts].filter(product => 
                filteredProducts.some(fp => fp.id === product.id)
            );
    }
    
    renderProducts();
}

function initializePriceSliders() {
    updatePriceDisplay();
}

function updatePriceDisplay() {
    const minVal = elements.minPrice ? parseInt(elements.minPrice.value) : 0;
    const maxVal = elements.maxPrice ? parseInt(elements.maxPrice.value) : 150000;
    
    if (elements.minPriceDisplay) {
        elements.minPriceDisplay.textContent = `₹${formatPrice(minVal)}`;
    }
    if (elements.maxPriceDisplay) {
        elements.maxPriceDisplay.textContent = `₹${formatPrice(maxVal)}`;
    }
    
    currentFilters.minPrice = minVal;
    currentFilters.maxPrice = maxVal;
}

function updateFilters() {
    // Rating filter
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    currentFilters.rating = ratingInput ? parseFloat(ratingInput.value) : null;
    
    // Platform filter
    currentFilters.platforms = Array.from(document.querySelectorAll('input[name="platform"]:checked'))
        .map(input => input.value);
    
    // Delivery filter
    currentFilters.deliveryTimes = Array.from(document.querySelectorAll('input[name="delivery"]:checked'))
        .map(input => input.value);
    
    // Availability filter
    currentFilters.availability = Array.from(document.querySelectorAll('input[name="availability"]:checked'))
        .map(input => input.value);
}

function applyFilters() {
    console.log('Applying filters...');
    updateFilters();
    
    filteredProducts = sampleProducts.filter(product => {
        // Price filter
        if (product.price < currentFilters.minPrice || product.price > currentFilters.maxPrice) {
            return false;
        }
        
        // Rating filter
        if (currentFilters.rating && product.rating < currentFilters.rating) {
            return false;
        }
        
        // Platform filter
        if (!currentFilters.platforms.includes(product.platform)) {
            return false;
        }
        
        // Delivery filter
        if (currentFilters.deliveryTimes.length > 0 && 
            !currentFilters.deliveryTimes.includes(product.deliveryTime)) {
            return false;
        }
        
        // Availability filter
        if (!currentFilters.availability.includes(product.availability)) {
            return false;
        }
        
        return true;
    });
    
    renderProducts();
    updateResultsCount();
    showToast('Filters applied successfully!', 'success');
    
    // Hide filter panel on mobile
    if (window.innerWidth <= 1024) {
        toggleFilterPanel();
    }
}

function clearAllFilters() {
    console.log('Clearing all filters...');
    
    // Reset filter inputs
    document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="platform"]').forEach(input => input.checked = true);
    document.querySelectorAll('input[name="delivery"]').forEach(input => input.checked = false);
    document.querySelectorAll('input[name="availability"]').forEach(input => {
        input.checked = input.value === 'In Stock' || input.value === 'Limited Stock';
    });
    
    // Reset price sliders
    if (elements.minPrice) elements.minPrice.value = 0;
    if (elements.maxPrice) elements.maxPrice.value = 150000;
    updatePriceDisplay();
    
    // Reset filters and render
    currentFilters = {
        minPrice: 0,
        maxPrice: 150000,
        rating: null,
        platforms: ['Amazon', 'Flipkart', 'Myntra', 'Meesho'],
        deliveryTimes: [],
        availability: ['In Stock', 'Limited Stock']
    };
    
    filteredProducts = [...sampleProducts];
    renderProducts();
    updateResultsCount();
    showToast('All filters cleared!', 'success');
}

function renderProducts() {
    if (currentView === 'cards') {
        renderCardsView();
    } else if (currentView === 'table') {
        renderTableView();
    } else if (currentView === 'dashboard') {
        renderDashboardView();
    }
}

function renderCardsView() {
    const grid = elements.productsGrid;
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="21 21l-4.35-4.35"></path>
                </svg>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const discount = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    const bestPrice = isLowestPrice(product);
    const highestRated = isHighestRated(product);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-card__image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
            ${bestPrice ? '<div class="product-badge product-badge--best-price">Best Price</div>' : ''}
            ${highestRated ? '<div class="product-badge product-badge--highest-rated">Top Rated</div>' : ''}
            <button class="save-btn" data-product-id="${product.id}" data-tooltip="Save for later">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </div>
        <div class="product-card__content">
            <div class="product-card__header">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-platform platform-badge platform-badge--${product.platform.toLowerCase()}">
                    ${product.platform}
                </span>
            </div>
            
            <div class="product-pricing">
                <div class="product-price" data-tooltip="Current price on ${product.platform}">
                    ₹${formatPrice(product.price)}
                    ${product.originalPrice ? `
                        <span class="product-original-price">₹${formatPrice(product.originalPrice)}</span>
                        <span class="product-discount">${discount}% OFF</span>
                    ` : ''}
                </div>
            </div>
            
            <div class="product-rating" data-tooltip="Based on ${product.reviewCount} reviews">
                <span class="rating-stars">${generateStars(product.rating)}</span>
                <span class="rating-value">${product.rating}</span>
                <span class="rating-count">(${product.reviewCount})</span>
            </div>
            
            <div class="product-info">
                <div class="availability">
                    <span class="availability-dot ${getAvailabilityClass(product.availability)}"></span>
                    ${product.availability}
                </div>
                <div class="delivery-time" data-tooltip="Estimated delivery time">
                    ${product.deliveryTime}
                </div>
            </div>
            
            <div class="product-actions">
                <button class="btn btn--outline btn--expand" data-product-id="${product.id}" data-action="details">
                    View Details
                </button>
                <button class="btn btn--primary" data-product-url="${product.url}" data-action="buy">
                    Buy Now
                </button>
            </div>
        </div>
        <div class="product-details" id="details-${product.id}">
            <div class="details-tabs">
                <button class="tab-btn tab-btn--active" data-product-id="${product.id}" data-tab="specs">Specs</button>
                <button class="tab-btn" data-product-id="${product.id}" data-tab="reviews">Reviews</button>
                <button class="tab-btn" data-product-id="${product.id}" data-tab="delivery">Delivery</button>
            </div>
            <div class="tab-content active" id="specs-${product.id}">
                <ul class="specs-list">
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <li>
                            <span class="spec-label">${key}</span>
                            <span>${value}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="tab-content" id="reviews-${product.id}">
                <p>Average rating: ${product.rating}/5 based on ${product.reviewCount} reviews</p>
                <p>${product.description}</p>
            </div>
            <div class="tab-content" id="delivery-${product.id}">
                <p><strong>Delivery Time:</strong> ${product.deliveryTime}</p>
                <p><strong>Platform:</strong> ${product.platform}</p>
                <p><strong>Availability:</strong> ${product.availability}</p>
            </div>
        </div>
    `;
    
    // Add event listeners to the card elements
    const saveBtn = card.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSaveProduct(parseInt(this.dataset.productId));
        });
    }
    
    const detailsBtn = card.querySelector('[data-action="details"]');
    if (detailsBtn) {
        detailsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleProductDetails(parseInt(this.dataset.productId));
        });
    }
    
    const buyBtn = card.querySelector('[data-action="buy"]');
    if (buyBtn) {
        buyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            buyProduct(this.dataset.productUrl);
        });
    }
    
    const tabBtns = card.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(parseInt(this.dataset.productId), this.dataset.tab);
        });
    });
    
    return card;
}

function renderTableView() {
    const tbody = elements.productsTableBody;
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center" style="padding: var(--space-32);">
                    <div class="empty-state">
                        <h3>No products found</h3>
                        <p>Try adjusting your filters or search criteria</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        const discount = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        
        row.innerHTML = `
            <td>
                <div class="table-product">
                    <div class="table-product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="table-product-info">
                        <h4>${product.name}</h4>
                        <div class="table-product-category">${product.category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="platform-badge platform-badge--${product.platform.toLowerCase()}">
                    ${product.platform}
                </span>
            </td>
            <td>
                <div class="table-price">
                    <div class="table-price-current">₹${formatPrice(product.price)}</div>
                    ${product.originalPrice ? `
                        <div class="table-price-original">₹${formatPrice(product.originalPrice)}</div>
                        <div style="color: var(--color-success); font-size: var(--font-size-xs);">${discount}% OFF</div>
                    ` : ''}
                </div>
            </td>
            <td>
                <div class="table-rating">
                    <span class="rating-stars">${generateStars(product.rating)}</span>
                    <span>${product.rating}</span>
                </div>
            </td>
            <td>${product.deliveryTime}</td>
            <td>
                <div class="table-actions">
                    <button class="btn btn--outline btn--sm table-save-btn" data-product-id="${product.id}">Save</button>
                    <button class="btn btn--primary btn--sm table-buy-btn" data-product-url="${product.url}">Buy</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listeners
        const saveBtn = row.querySelector('.table-save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleSaveProduct(parseInt(this.dataset.productId));
            });
        }
        
        const buyBtn = row.querySelector('.table-buy-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                buyProduct(this.dataset.productUrl);
            });
        }
    });
}

function renderDashboardView() {
    updateDashboardStats();
    
    // Small delay to ensure DOM is ready for charts
    setTimeout(() => {
        renderCharts();
    }, 100);
}

function updateDashboardStats() {
    if (filteredProducts.length === 0) return;
    
    // Lowest price
    const lowestPriceProduct = filteredProducts.reduce((min, product) => 
        product.price < min.price ? product : min
    );
    const lowestPriceEl = document.getElementById('lowestPrice');
    if (lowestPriceEl) {
        lowestPriceEl.textContent = `₹${formatPrice(lowestPriceProduct.price)}`;
    }
    
    // Highest rated
    const highestRatedProduct = filteredProducts.reduce((max, product) => 
        product.rating > max.rating ? product : max
    );
    const highestRatedEl = document.getElementById('highestRated');
    if (highestRatedEl) {
        highestRatedEl.textContent = `${highestRatedProduct.rating}★`;
    }
    
    // Best value (highest discount)
    const bestValueProduct = filteredProducts.reduce((best, product) => {
        const currentDiscount = product.originalPrice ? 
            ((product.originalPrice - product.price) / product.originalPrice) * 100 : 0;
        const bestDiscount = best.originalPrice ? 
            ((best.originalPrice - best.price) / best.originalPrice) * 100 : 0;
        return currentDiscount > bestDiscount ? product : best;
    });
    const bestDiscount = bestValueProduct.originalPrice ? 
        Math.round(((bestValueProduct.originalPrice - bestValueProduct.price) / bestValueProduct.originalPrice) * 100) : 0;
    const bestValueEl = document.getElementById('bestValue');
    if (bestValueEl) {
        bestValueEl.textContent = `${bestDiscount}% OFF`;
    }
    
    // Fastest delivery
    const deliveryOrder = ['Same day', '1-2 days', '2-3 days', '3-4 days', '3-5 days', '5-7 days'];
    const fastestDeliveryProduct = filteredProducts.reduce((fastest, product) => 
        deliveryOrder.indexOf(product.deliveryTime) < deliveryOrder.indexOf(fastest.deliveryTime) ? product : fastest
    );
    const fastestDeliveryEl = document.getElementById('fastestDelivery');
    if (fastestDeliveryEl) {
        fastestDeliveryEl.textContent = fastestDeliveryProduct.deliveryTime;
    }
}

function renderCharts() {
    renderPriceChart();
    renderRatingChart();
}

function renderPriceChart() {
    const canvas = document.getElementById('priceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const platformData = {};
    
    filteredProducts.forEach(product => {
        if (!platformData[product.platform]) {
            platformData[product.platform] = [];
        }
        platformData[product.platform].push(product.price);
    });
    
    const labels = Object.keys(platformData);
    const avgPrices = labels.map(platform => {
        const prices = platformData[platform];
        return prices.reduce((sum, price) => sum + price, 0) / prices.length;
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Price (₹)',
                data: avgPrices,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + formatPrice(value);
                        }
                    }
                }
            }
        }
    });
}

function renderRatingChart() {
    const canvas = document.getElementById('ratingChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const ratingRanges = {
        '4.5+': 0,
        '4.0-4.5': 0,
        '3.5-4.0': 0,
        '3.0-3.5': 0,
        'Below 3.0': 0
    };
    
    filteredProducts.forEach(product => {
        if (product.rating >= 4.5) ratingRanges['4.5+']++;
        else if (product.rating >= 4.0) ratingRanges['4.0-4.5']++;
        else if (product.rating >= 3.5) ratingRanges['3.5-4.0']++;
        else if (product.rating >= 3.0) ratingRanges['3.0-3.5']++;
        else ratingRanges['Below 3.0']++;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(ratingRanges),
            datasets: [{
                data: Object.values(ratingRanges),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function updateResultsCount() {
    if (elements.resultsCount) {
        elements.resultsCount.textContent = `${filteredProducts.length} products found`;
    }
}

// Helper functions
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    stars += '☆'.repeat(5 - Math.ceil(rating));
    return stars;
}

function getAvailabilityClass(availability) {
    switch (availability) {
        case 'In Stock': return '';
        case 'Limited Stock': return 'availability-dot--limited';
        case 'Out of Stock': return 'availability-dot--out';
        default: return '';
    }
}

function isLowestPrice(product) {
    const sameProducts = filteredProducts.filter(p => 
        p.name === product.name && p.id !== product.id
    );
    if (sameProducts.length === 0) return false;
    return sameProducts.every(p => product.price <= p.price);
}

function isHighestRated(product) {
    const sameProducts = filteredProducts.filter(p => 
        p.name === product.name && p.id !== product.id
    );
    if (sameProducts.length === 0) return false;
    return sameProducts.every(p => product.rating >= p.rating);
}

// Interactive functions
function toggleProductDetails(productId) {
    const details = document.getElementById(`details-${productId}`);
    if (details) {
        details.classList.toggle('show');
    }
}

function switchTab(productId, tabName) {
    // Update tab buttons
    const tabBtns = document.querySelectorAll(`#details-${productId} .tab-btn`);
    tabBtns.forEach(btn => {
        btn.classList.toggle('tab-btn--active', btn.dataset.tab === tabName);
    });
    
    // Update tab content
    const tabContents = document.querySelectorAll(`#details-${productId} .tab-content`);
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `${tabName}-${productId}`);
    });
}

function toggleSaveProduct(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return;
    
    const index = savedProducts.findIndex(p => p.id === productId);
    
    if (index > -1) {
        savedProducts.splice(index, 1);
        showToast('Product removed from saved list', 'success');
    } else {
        savedProducts.push({
            ...product,
            savedAt: new Date().toISOString()
        });
        showToast('Product saved for later!', 'success');
    }
}

function buyProduct(url) {
    window.open(url, '_blank');
    showToast('Redirecting to product page...', 'success');
}

function renderSavedComparisons() {
    const container = document.getElementById('savedComparisons');
    if (!container) return;
    
    if (savedProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3>No saved comparisons yet</h3>
                <p>Save interesting product comparisons to access them later</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="products-grid">
            ${savedProducts.map(product => `
                <div class="product-card">
                    <div class="product-card__image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="product-card__content">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-pricing">
                            <div class="product-price">₹${formatPrice(product.price)}</div>
                        </div>
                        <div class="product-rating">
                            <span class="rating-stars">${generateStars(product.rating)}</span>
                            <span class="rating-value">${product.rating}</span>
                        </div>
                        <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-top: var(--space-8);">
                            Saved on ${new Date(product.savedAt).toLocaleDateString()}
                        </div>
                        <div class="product-actions" style="margin-top: var(--space-12);">
                            <button class="btn btn--outline restore-btn" data-product-id="${product.id}">Restore</button>
                            <button class="btn btn--primary saved-buy-btn" data-product-url="${product.url}">Buy Now</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add event listeners to saved product buttons
    container.querySelectorAll('.restore-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            restoreComparison(parseInt(this.dataset.productId));
        });
    });
    
    container.querySelectorAll('.saved-buy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            buyProduct(this.dataset.productUrl);
        });
    });
}

function restoreComparison(productId) {
    switchSection('home');
    showToast('Comparison restored!', 'success');
}

// Tooltip system
function handleTooltip(e) {
    const element = e.target.closest('[data-tooltip]');
    if (element) {
        showTooltip(element.dataset.tooltip, e);
    }
}

function showTooltip(text, event) {
    const tooltip = elements.tooltip;
    if (!tooltip) return;
    
    tooltip.querySelector('.tooltip-content').textContent = text;
    tooltip.classList.remove('hidden');
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
}

function hideTooltip() {
    if (elements.tooltip) {
        elements.tooltip.classList.add('hidden');
    }
}

// Toast notifications
function showToast(message, type = 'success') {
    const toastContainer = elements.toastContainer;
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${type === 'success' ? 
                '<polyline points="20,6 9,17 4,12"></polyline>' : 
                '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>'
            }
        </svg>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}