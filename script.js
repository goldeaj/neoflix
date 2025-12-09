// Series ID mapping for navigation
const seriesMap = {
    'Stranger Things': 'stranger-things',
    'The Crown': 'the-crown',
    'Breaking Bad': 'breaking-bad',
    'The Witcher': 'the-witcher',
    'The Last of Us': 'the-last-of-us',
    'Wednesday': 'wednesday',
    'House of the Dragon': 'house-of-dragon',
    'Money Heist': 'money-heist',
    'Squid Game': 'squid-game',
    'Dark': 'dark',
    'Peaky Blinders': 'peaky-blinders',
    'Ozark': 'ozark',
    'The Mandalorian': 'the-mandalorian'
};

// Smooth scroll navigation
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active state
            document.querySelectorAll('.nav-menu a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});

// Update active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Carousel functionality
document.querySelectorAll('.series-carousel').forEach(carousel => {
    const grid = carousel.querySelector('.series-grid');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    let scrollAmount = 0;
    const cardWidth = 300; // Approximate card width
    const gap = 8;
    const scrollStep = (cardWidth + gap) * 3; // Scroll 3 cards at a time
    
    // Hide prev button initially
    prevBtn.style.display = 'none';
    
    nextBtn.addEventListener('click', () => {
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        scrollAmount += scrollStep;
        
        if (scrollAmount >= maxScroll) {
            scrollAmount = maxScroll;
            nextBtn.style.display = 'none';
        }
        
        grid.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        
        prevBtn.style.display = 'flex';
    });
    
    prevBtn.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        
        if (scrollAmount <= 0) {
            scrollAmount = 0;
            prevBtn.style.display = 'none';
        }
        
        grid.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        
        nextBtn.style.display = 'flex';
    });
    
    // Update button visibility on window resize
    window.addEventListener('resize', () => {
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        if (scrollAmount >= maxScroll) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        }
        
        if (scrollAmount <= 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
        }
    });
});

// Play button functionality
document.querySelectorAll('.btn-play').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Get the series title
        let title = '';
        const card = button.closest('.series-card');
        const heroSection = button.closest('.hero-content');
        
        if (card) {
            // From series cards
            title = card.querySelector('h3').textContent;
        } else if (heroSection) {
            // From hero section
            title = heroSection.querySelector('.hero-title').textContent;
        } else {
            title = 'Stranger Things';
        }
        
        // Map title to series ID
        const seriesId = seriesMap[title];
        if (seriesId) {
            window.location.href = `player.html?series=${seriesId}&episode=1`;
        } else {
            console.log('Series not found:', title);
        }
    });
});

// Play button overlay functionality (from cards)
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const card = button.closest('.series-card');
        const title = card.querySelector('h3').textContent;
        const seriesId = seriesMap[title];
        
        if (seriesId) {
            window.location.href = `player.html?series=${seriesId}&episode=1`;
        }
    });
});

// Info button functionality
document.querySelectorAll('.btn-info').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        
        let title = '';
        const heroSection = button.closest('.hero-content');
        
        if (heroSection) {
            // From hero section
            title = heroSection.querySelector('.hero-title').textContent;
        }
        
        // Map title to series ID
        const seriesId = seriesMap[title];
        if (seriesId) {
            window.location.href = `series-detail.html?id=${seriesId}`;
        }
    });
});

// Add to list functionality
document.querySelectorAll('.icon-btn').forEach(button => {
    if (button.querySelector('.fa-plus')) {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = button.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-check');
                button.style.borderColor = 'var(--text-primary)';
            } else {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-plus');
                button.style.borderColor = 'var(--text-secondary)';
            }
        });
    }
});

// Like button functionality
document.querySelectorAll('.icon-btn').forEach(button => {
    if (button.querySelector('.fa-thumbs-up')) {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = button.querySelector('i');
            if (icon.classList.contains('fa-thumbs-up')) {
                icon.classList.remove('fa-thumbs-up');
                icon.classList.add('fa-thumbs-down');
            } else {
                icon.classList.remove('fa-thumbs-down');
                icon.classList.add('fa-thumbs-up');
            }
        });
    }
});

// Series card click functionality - navigate to detail page
document.querySelectorAll('.series-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const seriesId = seriesMap[title];
        if (seriesId) {
            window.location.href = `series-detail.html?id=${seriesId}`;
        }
    });
});

// Hero video autoplay with sound toggle
const heroVideo = document.querySelector('.hero-video');
let isMuted = true;

// Add mute/unmute button to hero
const muteButton = document.createElement('button');
muteButton.className = 'mute-btn';
muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
muteButton.style.cssText = `
    position: absolute;
    bottom: 40%;
    right: 50px;
    z-index: 10;
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s ease;
`;

document.querySelector('.hero').appendChild(muteButton);

muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    heroVideo.muted = isMuted;
    const icon = muteButton.querySelector('i');
    if (isMuted) {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
});

muteButton.addEventListener('mouseenter', () => {
    muteButton.style.transform = 'scale(1.1)';
    muteButton.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    muteButton.style.color = '#141414';
});

muteButton.addEventListener('mouseleave', () => {
    muteButton.style.transform = 'scale(1)';
    muteButton.style.backgroundColor = 'rgba(109, 109, 110, 0.7)';
    muteButton.style.color = 'white';
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const searchIcon = document.querySelector('.search-icon');

// All series data for search
const allSeries = [
    { title: 'Stranger Things', id: 'stranger-things', image: 'https://i.pinimg.com/736x/11/ee/9c/11ee9ce236f8781d441082b4ed14308b.jpg', year: '2024', rating: '18+', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.' },
    { title: 'The Crown', id: 'the-crown', image: 'https://i.pinimg.com/736x/5a/e0/db/5ae0db4ac98161f3ccbdf1c507b8672f.jpg', year: '2023', rating: '16+', description: 'Chronicles the reign of Queen Elizabeth II' },
    { title: 'Breaking Bad', id: 'breaking-bad', image: 'https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg', year: '2013', rating: '18+', description: 'A chemistry teacher turns to cooking meth' },
    { title: 'The Witcher', id: 'the-witcher', image: 'https://i.pinimg.com/736x/9a/ab/e8/9aabe8e47cc2c3ba25aacce0eec67141.jpg', year: '2023', rating: '18+', description: 'A mutated monster hunter struggles to find his place' },
    { title: 'The Last of Us', id: 'the-last-of-us', image: 'https://i.pinimg.com/736x/9a/94/57/9a9457e0df17e09a9c407e527ba0b789.jpg', year: '2023', rating: '18+', description: 'A survivor and a young girl journey across America' },
    { title: 'Wednesday', id: 'wednesday', image: 'https://i.pinimg.com/736x/3f/10/70/3f1070fd08e8bdc3027ea9c54bf3aad4.jpg', year: '2022', rating: '13+', description: 'Wednesday Addams at Nevermore Academy' },
    { title: 'House of the Dragon', id: 'house-of-dragon', image: 'https://i.pinimg.com/736x/95/71/a5/9571a52e8af86f3ddc5f79fdc1fe48b1.jpg', year: '2024', rating: '18+', description: 'The Targaryen civil war for the Iron Throne' },
    { title: 'Money Heist', id: 'money-heist', image: 'https://i.pinimg.com/736x/ca/d8/7e/cad87ec3de2ce80ef6be8c6f7a45eee0.jpg', year: '2021', rating: '16+', description: 'A criminal mastermind plans the biggest heist' },
    { title: 'Squid Game', id: 'squid-game', image: 'https://i.pinimg.com/736x/78/ac/dd/78acdd686bb2aef8db9c6a9f81fffc05.jpg', year: '2021', rating: '18+', description: 'Deadly survival games for a prize' },
    { title: 'Dark', id: 'dark', image: 'https://i.pinimg.com/1200x/e8/2f/82/e82f828f60f7d210d7c8574595c771e9.jpg', year: '2020', rating: '16+', description: 'Time travel and family secrets' },
    { title: 'Peaky Blinders', id: 'peaky-blinders', image: 'https://i.pinimg.com/736x/6c/9b/dd/6c9bddfd0635a798cc47f2935a3e8f47.jpg', year: '2022', rating: '18+', description: 'A gangster family epic set in 1920s' },
    { title: 'Ozark', id: 'ozark', image: 'https://i.pinimg.com/736x/49/2d/03/492d039091d0625a05ab25c0a270dade.jpg', year: '2022', rating: '18+', description: 'Money laundering in the Missouri Ozarks' },
    { title: 'The Mandalorian', id: 'the-mandalorian', image: 'https://i.pinimg.com/736x/49/7b/8b/497b8bdd152ea05fce5654a0b8c799f7.jpg', year: '2024', rating: '13+', description: 'A bounty hunter in the Star Wars universe' }
];

// Toggle search input on icon click
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        searchResults.classList.remove('show');
    }
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length === 0) {
        searchResults.classList.remove('show');
        return;
    }
    
    // Filter series based on query
    const results = allSeries.filter(series => 
        series.title.toLowerCase().includes(query) ||
        series.description.toLowerCase().includes(query)
    );
    
    // Display results
    if (results.length > 0) {
        searchResults.innerHTML = results.map(series => `
            <div class="search-result-item" data-series-id="${series.id}">
                <img src="${series.image}" alt="${series.title}" class="search-result-img">
                <div class="search-result-info">
                    <div class="search-result-title">${series.title}</div>
                    <div class="search-result-meta">
                        <span>${series.year}</span>
                        <span>${series.rating}</span>
                    </div>
                    <div class="search-result-description">${series.description}</div>
                </div>
            </div>
        `).join('');
        searchResults.classList.add('show');
        
        // Add click handlers to results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const seriesId = item.dataset.seriesId;
                window.location.href = `series-detail.html?id=${seriesId}`;
            });
        });
    } else {
        searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
        searchResults.classList.add('show');
    }
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('show');
    }
});

// Close search on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.classList.remove('active');
        searchInput.value = '';
        searchResults.classList.remove('show');
    }
});

// Notifications
document.querySelector('.fa-bell').addEventListener('click', () => {
    alert('No new notifications');
    // In a real application, this would show a notifications dropdown
});

// Profile dropdown
const profile = document.querySelector('.profile');
const profileDropdown = document.querySelector('.profile-dropdown');

profile.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('show');
});

// Close profile dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.profile')) {
        profileDropdown.classList.remove('show');
    }
});

// Update wishlist count in profile
function updateWishlistCount() {
    const wishlistCountElement = document.getElementById('wishlistCount');
    if (wishlistCountElement) {
        wishlistCountElement.textContent = myList.length;
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real application, this would navigate to different sections or pages
        console.log(`Navigating to: ${link.textContent}`);
    });
});

// Lazy loading for images (simple implementation)
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, observerOptions);

document.querySelectorAll('.series-card img').forEach(img => {
    imageObserver.observe(img);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// My List functionality
let myList = JSON.parse(localStorage.getItem('myList')) || [];

// Update My List display
function updateMyList() {
    const myListGrid = document.getElementById('myListGrid');
    updateWishlistCount();
    
    if (myList.length === 0) {
        myListGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-plus-circle"></i>
                <p>Your list is empty</p>
                <span>Add shows and movies to your list by clicking the + button</span>
            </div>
        `;
    } else {
        myListGrid.innerHTML = myList.map(item => `
            <div class="mylist-card" data-series-id="${item.id}">
                <img src="${item.image}" alt="${item.title}">
                <div class="mylist-card-overlay">
                    <div class="mylist-card-title">${item.title}</div>
                    <div class="mylist-card-actions">
                        <button class="mylist-remove-btn" onclick="removeFromList('${item.id}')">
                            <i class="fas fa-times"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for cards
        document.querySelectorAll('.mylist-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.mylist-remove-btn')) {
                    const seriesId = card.dataset.seriesId;
                    window.location.href = `series-detail.html?id=${seriesId}`;
                }
            });
        });
    }
}

// Add to list
function addToList(seriesId, title, image) {
    const existingIndex = myList.findIndex(item => item.id === seriesId);
    if (existingIndex === -1) {
        myList.push({ id: seriesId, title, image });
        localStorage.setItem('myList', JSON.stringify(myList));
        updateMyList();
        return true;
    }
    return false;
}

// Remove from list
function removeFromList(seriesId) {
    myList = myList.filter(item => item.id !== seriesId);
    localStorage.setItem('myList', JSON.stringify(myList));
    updateMyList();
}

// Check if item is in list
function isInList(seriesId) {
    return myList.some(item => item.id === seriesId);
}

// Update all + buttons
function updateAddButtons() {
    document.querySelectorAll('.series-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        const seriesId = seriesMap[title];
        const addBtn = card.querySelector('.card-actions .icon-btn:nth-child(2)');
        
        if (addBtn && seriesId) {
            const inList = isInList(seriesId);
            addBtn.innerHTML = inList ? '<i class="fas fa-check"></i>' : '<i class="fas fa-plus"></i>';
            addBtn.style.background = inList ? 'rgba(255, 255, 255, 0.3)' : '';
        }
    });
}

// Add click handlers to + buttons
document.querySelectorAll('.card-actions .icon-btn:nth-child(2)').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = button.closest('.series-card');
        const title = card.querySelector('h3').textContent;
        const image = card.querySelector('img').src;
        const seriesId = seriesMap[title];
        
        if (seriesId) {
            if (isInList(seriesId)) {
                removeFromList(seriesId);
                button.innerHTML = '<i class="fas fa-plus"></i>';
                button.style.background = '';
            } else {
                if (addToList(seriesId, title, image)) {
                    button.innerHTML = '<i class="fas fa-check"></i>';
                    button.style.background = 'rgba(255, 255, 255, 0.3)';
                }
            }
        }
    });
});

// Add wishlist icons to all cards
function addWishlistIcons() {
    document.querySelectorAll('.series-card').forEach(card => {
        // Check if icon already exists
        if (card.querySelector('.wishlist-icon')) return;
        
        const title = card.querySelector('h3').textContent;
        const seriesId = seriesMap[title];
        
        if (seriesId) {
            const wishlistIcon = document.createElement('div');
            wishlistIcon.className = 'wishlist-icon';
            wishlistIcon.innerHTML = '<i class="fas fa-heart"></i>';
            
            // Check if in list
            if (isInList(seriesId)) {
                wishlistIcon.classList.add('in-list');
            }
            
            // Add click handler
            wishlistIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                const image = card.querySelector('img').src;
                
                if (isInList(seriesId)) {
                    removeFromList(seriesId);
                    wishlistIcon.classList.remove('in-list');
                } else {
                    if (addToList(seriesId, title, image)) {
                        wishlistIcon.classList.add('in-list');
                    }
                }
                updateAddButtons();
            });
            
            card.appendChild(wishlistIcon);
        }
    });
}

// Initialize My List on page load
updateMyList();
updateAddButtons();
addWishlistIcons();
updateWishlistCount();

console.log('NeoFlix initialized successfully!');
