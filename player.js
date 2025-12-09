// Series data
const seriesData = {
    'the-crown': {
        title: 'The Crown',
        image: 'https://i.pinimg.com/736x/5a/e0/db/5ae0db4ac98161f3ccbdf1c507b8672f.jpg',
        episodes: [
            'Wolferton Splash',
            'Hyde Park Corner',
            'Windsor',
            'Act of God',
            'Cock and Bull',
            'Gelignite',
            'Fairytale',
            'Pride & Joy',
            'Assassins',
            'Gloriana'
        ]
    },
    'breaking-bad': {
        title: 'Breaking Bad',
        image: 'https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg',
        episodes: [
            'Pilot',
            'Cat\'s in the Bag...',
            'And the Bag\'s in the River',
            'Cancer Man',
            'Gray Matter',
            'Crazy Handful of Nothin\'',
            'A No-Rough-Stuff-Type Deal',
            'Seven Thirty-Seven',
            'One Minute',
            'Dead Freight'
        ]
    },
    'the-witcher': {
        title: 'The Witcher',
        image: 'https://i.pinimg.com/736x/9a/ab/e8/9aabe8e47cc2c3ba25aacce0eec67141.jpg',
        episodes: [
            'The End\'s Beginning',
            'Four Marks',
            'Betrayer Moon',
            'Of Banquets, Bastards and Burials',
            'Bottled Appetites',
            'Rare Species',
            'Before a Fall',
            'Much More'
        ]
    },
    'the-last-of-us': {
        title: 'The Last of Us',
        image: 'https://i.pinimg.com/1200x/f7/25/fa/f725fa9666b89729d8ee8a6f51a1ccf0.jpg',
        episodes: [
            'When You\'re Lost in the Darkness',
            'Infected',
            'Long Long Time',
            'Please Hold My Hand',
            'Endure and Survive',
            'Left Behind',
            'The Middle',
            'When We are in Need',
            'Look for the Light'
        ]
    },
    'wednesday': {
        title: 'Wednesday',
        image: 'https://i.pinimg.com/1200x/91/43/1e/91431e90916d32618810235e6f6ad645.jpg',
        episodes: [
            'Wednesday\'s Child',
            'Woe What a Night',
            'Friend and Foe',
            'Haunted Housemistress',
            'You Reap What You Sow',
            'Quid Pro Quo',
            'If You Don\'t Wanna Know How It Ends',
            'A Murder of Finite Importance',
            'Day of the Dead',
            'Rave\'On'
        ]
    },
    'house-of-dragon': {
        title: 'House of the Dragon',
        image: 'https://i.pinimg.com/736x/49/96/bc/4996bcb2d11c2da4fb7603ff2fedc9ca.jpg',
        episodes: [
            'The Heirs of the Dragon',
            'The Rogue Prince',
            'The Second of His Name',
            'King of the Narrow Sea',
            'We Light the Way',
            'The Princess and the Queen',
            'Driftmark',
            'The Lord of the Tides',
            'The Green Council',
            'The Black Council'
        ]
    },
    'money-heist': {
        title: 'Money Heist',
        image: 'https://i.pinimg.com/1200x/6e/42/0b/6e420b7bd2a65359258ee4c5ee1501dd.jpg',
        episodes: [
            'Así es. Soy el profesor.',
            'Fluir',
            'La fuente de la juventud',
            'Una buena noticia',
            'Punto de no retorno',
            'Ánimo',
            'Parte 1, Final',
            'Éxodo',
            'Nueva normalidad',
            'Recontexto'
        ]
    },
    'squid-game': {
        title: 'Squid Game',
        image: 'https://i.pinimg.com/1200x/91/6b/37/916b376a61e8f11293c115bc0361a7d2.jpg',
        episodes: [
            'Bread and Lottery',
            'Hell',
            'The Man with the Umbrella',
            'Stick to the Team',
            'A Fair World',
            'Gganbu',
            'VIP',
            'Front Man',
            'One Lucky Day'
        ]
    },
    'dark': {
        title: 'Dark',
        image: 'https://i.pinimg.com/1200x/e8/2f/82/e82f828f60f7d210d7c8574595c771e9.jpg',
        episodes: [
            'Secrets',
            'Lies',
            'All You Can Become',
            'The Travelers',
            'Truths',
            'Sic Mundus Creatus Est',
            'White Light',
            'As You Know',
            'Everything Starts With Fire',
            'The Origin'
        ]
    },
    'peaky-blinders': {
        title: 'Peaky Blinders',
        image: 'https://i.pinimg.com/736x/6c/9b/dd/6c9bddfd0635a798cc47f2935a3e8f47.jpg',
        episodes: [
            'Episode 1',
            'Episode 2',
            'Episode 3',
            'Episode 4',
            'Episode 5',
            'Episode 6',
            'Black Mass',
            'House of the Dragon',
            'Gold',
            'Finale'
        ]
    },
    'ozark': {
        title: 'Ozark',
        image: 'https://i.pinimg.com/736x/49/2d/03/492d039091d0625a05ab25c0a270dade.jpg',
        episodes: [
            'Unmarked Cars',
            'Blue Jay',
            'My Druthers',
            'Fishy Business',
            'Nightmares',
            'The Precious Blood of Jesus',
            'A to Z',
            'A Night for Designs',
            'The Long Way Home',
            'The Toll'
        ]
    },
    'the-mandalorian': {
        title: 'The Mandalorian',
        image: 'https://i.pinimg.com/736x/49/7b/8b/497b8bdd152ea05fce5654a0b8c799f7.jpg',
        episodes: [
            'Chapter 1: The Mandalorian',
            'Chapter 2: The Child',
            'Chapter 3: The Sin',
            'Chapter 4: Sanctuary',
            'Chapter 5: The Gunslinger',
            'Chapter 6: The Prisoner',
            'Chapter 7: The Reckoning',
            'Chapter 8: Redemption',
            'Chapter 9: The Marshal',
            'Chapter 10: The Passenger'
        ]
    }
};

let currentSeries = null;
let currentEpisode = 1;

// Get series and episode from URL
function getPlayerParams() {
    const params = new URLSearchParams(window.location.search);
    const seriesId = params.get('series');
    const episodeNum = params.get('episode') || 1;
    return { seriesId, episodeNum: parseInt(episodeNum) };
}

// Load player content
function loadPlayer() {
    const { seriesId, episodeNum } = getPlayerParams();
    
    if (!seriesId || !seriesData[seriesId]) {
        document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; color: white; font-size: 24px;">Series not found</div>';
        return;
    }
    
    currentSeries = seriesData[seriesId];
    currentEpisode = episodeNum;
    
    // Update series info
    document.getElementById('seriesPoster').src = currentSeries.image;
    document.getElementById('seriesTitle').textContent = currentSeries.title;
    document.getElementById('episodeNum').textContent = `Episode ${currentEpisode}`;
    document.getElementById('episodeTitle').textContent = currentSeries.episodes[currentEpisode - 1] || 'Episode ' + currentEpisode;
    document.getElementById('seriesDescription').textContent = `Now playing: ${currentSeries.title} - ${currentSeries.episodes[currentEpisode - 1]}`;
    
    // Load episodes list
    const episodesList = document.getElementById('episodesList');
    episodesList.innerHTML = currentSeries.episodes.map((ep, idx) => `
        <button class="episode-btn ${idx + 1 === currentEpisode ? 'active' : ''}" onclick="playEpisode(${idx + 1})">
            <div>Episode ${idx + 1}</div>
            <div class="episode-name">${ep}</div>
        </button>
    `).join('');
    
    // Set video source (using sample video)
    document.getElementById('mainPlayer').src = './assets/videos/Stranger Things 5  Official Trailer  Netflix - Netflix (1080p, h264).mp4';
}

// Play specific episode
function playEpisode(episodeNum) {
    if (!currentSeries) return;
    
    const params = new URLSearchParams(window.location.search);
    const seriesId = params.get('series');
    
    // Update URL without reload
    window.history.pushState({}, '', `player.html?series=${seriesId}&episode=${episodeNum}`);
    
    currentEpisode = episodeNum;
    
    // Update UI
    document.getElementById('episodeNum').textContent = `Episode ${episodeNum}`;
    document.getElementById('episodeTitle').textContent = currentSeries.episodes[episodeNum - 1] || 'Episode ' + episodeNum;
    document.getElementById('seriesDescription').textContent = `Now playing: ${currentSeries.title} - ${currentSeries.episodes[episodeNum - 1]}`;
    
    // Update active episode button
    document.querySelectorAll('.episode-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === episodeNum);
    });
    
    // Reset video
    const player = document.getElementById('mainPlayer');
    player.currentTime = 0;
    player.play();
}

// Player Controls
document.addEventListener('DOMContentLoaded', () => {
    loadPlayer();
    
    const player = document.getElementById('mainPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playOverlayBtn = document.getElementById('playOverlayBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.querySelector('.progress-fill');
    const progressHandle = document.querySelector('.progress-handle');
    
    // Play/Pause
    function togglePlay() {
        if (player.paused) {
            player.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playOverlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            player.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playOverlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    
    playPauseBtn.addEventListener('click', togglePlay);
    playOverlayBtn.addEventListener('click', togglePlay);
    player.addEventListener('click', togglePlay);
    
    // Volume
    let isMuted = false;
    volumeBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        player.muted = isMuted;
        volumeBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });
    
    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.querySelector('.player-wrapper').requestFullscreen();
        }
    });
    
    // Progress bar
    player.addEventListener('timeupdate', () => {
        const percentage = (player.currentTime / player.duration) * 100;
        progressFill.style.width = percentage + '%';
        progressHandle.style.left = percentage + '%';
    });
    
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        player.currentTime = percentage * player.duration;
    });
    
    // Navigation
    backBtn.addEventListener('click', () => {
        if (currentEpisode > 1) {
            playEpisode(currentEpisode - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentEpisode < currentSeries.episodes.length) {
            playEpisode(currentEpisode + 1);
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            player.currentTime += 10;
        } else if (e.code === 'ArrowLeft') {
            player.currentTime -= 10;
        } else if (e.code === 'ArrowUp') {
            player.volume = Math.min(player.volume + 0.1, 1);
        } else if (e.code === 'ArrowDown') {
            player.volume = Math.max(player.volume - 0.1, 0);
        } else if (e.code === 'KeyF') {
            fullscreenBtn.click();
        }
    });
    
    // Auto play on load
    setTimeout(() => {
        player.play().catch(err => console.log('Autoplay prevented:', err));
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playOverlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }, 500);
});
