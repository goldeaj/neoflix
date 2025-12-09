// Series database with detailed information
const seriesDatabase = {
    'stranger-things': {
        title: 'Stranger Things',
        image: 'https://i.pinimg.com/736x/11/ee/9c/11ee9ce236f8781d441082b4ed14308b.jpg',
        video: './assets/videos/Stranger Things 5  Official Trailer  Netflix - Netflix (1080p, h264).mp4',
        year: '2024',
        rating: '18+',
        seasons: '4 Seasons',
        match: '98% Match',
        overview: 'When a young boy vanishes, his friends, family and local police must confront terrifying supernatural forces and a strange child with psychokinetic powers. As they uncover the truth, they find themselves trapped in a nightmarish world of government experiments, otherworldly creatures, and deadly mysteries.',
        genre: 'Drama, Fantasy, Horror, Sci-Fi',
        language: 'English',
        director: 'Matt Duffer, Ross Duffer',
        writer: 'Matt Duffer, Ross Duffer',
        producer: 'Shawn Levy',
        totalSeasons: '4',
        totalEpisodes: '42',
        description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
        cast: [
            { name: 'Winona Ryder', character: 'Joyce Byers' },
            { name: 'David Harbour', character: 'Jim Hopper' },
            { name: 'Finn Wolfhard', character: 'Mike Wheeler' },
            { name: 'Millie Bobby Brown', character: 'Eleven' },
            { name: 'Noah Schnapp', character: 'Will Byers' },
            { name: 'Caleb McLaughlin', character: 'Lucas Sinclair' },
            { name: 'Gaten Matarazzo', character: 'Dustin Henderson' },
            { name: 'Joe Keery', character: 'Steve Harrington' }
        ],
        episodes: [
            'Chapter One: The Vanishing of Will Byers',
            'Chapter Two: The Weirdo on Maple Street',
            'Chapter Three: Holly, Jolly',
            'Chapter Four: The Body',
            'Chapter Five: The Flea and the Acrobat',
            'Chapter Six: The Monster',
            'Chapter Seven: The Bathtub Experiment',
            'Chapter Eight: The Upside Down',
            'Chapter Nine: The Hawkins Lab',
            'Chapter Ten: A Story Told'
        ]
    },
    'the-crown': {
        title: 'The Crown',
        image: 'https://i.pinimg.com/736x/5a/e0/db/5ae0db4ac98161f3ccbdf1c507b8672f.jpg',
        year: '2023',
        rating: '16+',
        seasons: '6 Seasons',
        match: '98% Match',
        overview: 'Chronicles the reign of Queen Elizabeth II and the political battles between her and her prime ministers, particularly with Winston Churchill and Margaret Thatcher. A sweeping look at the woman behind the Crown through the decades of her reign.',
        genre: 'Drama, Historical',
        language: 'English',
        director: 'Peter Morgan',
        writer: 'Peter Morgan',
        producer: 'Robert Fox',
        totalSeasons: '6',
        totalEpisodes: '50',
        description: 'Chronicles the reign of Queen Elizabeth II and the behind-the-scenes relationships between her and her prime ministers.',
        cast: [
            { name: 'Claire Foy', character: 'Queen Elizabeth II' },
            { name: 'John Lithgow', character: 'Winston Churchill' },
            { name: 'Olivia Colman', character: 'Queen Elizabeth II' },
            { name: 'Gillian Anderson', character: 'Margaret Thatcher' }
        ],
        episodes: [
            'Wolferton Splash',
            'Hyde Park Corner',
            'Windsor',
            'Act of God',
            'Coup',
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
        year: '2013',
        rating: '18+',
        seasons: '5 Seasons',
        match: '99% Match',
        overview: 'A high school chemistry teacher turned methamphetamine producer partners with a former student to manufacture crystal meth. As his empire grows, he adopts the alias "Heisenberg" and develops a ruthless persona.',
        genre: 'Crime, Drama, Thriller',
        language: 'English',
        director: 'Vince Gilligan',
        writer: 'Vince Gilligan',
        producer: 'Vince Gilligan',
        totalSeasons: '5',
        totalEpisodes: '62',
        description: 'A chemistry teacher turns to cooking meth to secure his family\'s financial future, but his choices spiral into violence and corruption.',
        cast: [
            { name: 'Bryan Cranston', character: 'Walter White' },
            { name: 'Aaron Paul', character: 'Jesse Pinkman' },
            { name: 'Anna Gunn', character: 'Skyler White' },
            { name: 'Dean Norris', character: 'Hank Schrader' }
        ],
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
        year: '2024',
        rating: '18+',
        seasons: '3 Seasons',
        match: '95% Match',
        overview: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. But when destiny brings him an elusive sorceress and a princess, his life changes forever.',
        genre: 'Fantasy, Adventure, Drama',
        language: 'English',
        director: 'Marc Jobst',
        writer: 'Lauren Schmidt Hissrich',
        producer: 'Lauren Schmidt Hissrich',
        totalSeasons: '3',
        totalEpisodes: '24',
        description: 'Geralt of Rivia, a monster hunter, navigates a complex world filled with magic, politics, and destiny.',
        cast: [
            { name: 'Henry Cavill', character: 'Geralt of Rivia' },
            { name: 'Anya Chalotra', character: 'Yennefer' },
            { name: 'Freya Allan', character: 'Ciri' }
        ],
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
        year: '2024',
        rating: '18+',
        seasons: '1 Season',
        match: '97% Match',
        overview: 'Twenty years after a devastating fungal pandemic causes the end of civilization, hardened survivor Joel is hired to smuggle a 14-year-old girl named Ellie out of a quarantine zone. But what starts as a small job becomes an epic cross-country journey.',
        genre: 'Drama, Post-Apocalyptic, Thriller',
        language: 'English',
        director: 'Craig Mazin',
        writer: 'Craig Mazin',
        producer: 'Craig Mazin',
        totalSeasons: '1',
        totalEpisodes: '9',
        description: 'Post-apocalyptic survival story of Joel and Ellie in a world devastated by a fungal pandemic.',
        cast: [
            { name: 'Pedro Pascal', character: 'Joel Miller' },
            { name: 'Bella Ramsey', character: 'Ellie Williams' }
        ],
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
        year: '2023',
        rating: '13+',
        seasons: '2 Seasons',
        match: '94% Match',
        overview: 'Wednesday Addams is sent to Nevermore Academy, a mysterious boarding school where she reconnects with an old family friend and attempts to stop a killing spree that has taken over the town of Nevermore.',
        genre: 'Comedy, Crime, Fantasy',
        language: 'English',
        director: 'Tim Burton',
        writer: 'Alfred Gough, Miles Millar',
        producer: 'Tim Burton',
        totalSeasons: '2',
        totalEpisodes: '16',
        description: 'Wednesday Addams at Nevermore Academy investigating a murder mystery.',
        cast: [
            { name: 'Jenna Ortega', character: 'Wednesday Addams' },
            { name: 'Gwendoline Christie', character: 'Larissa Weems' },
            { name: 'Catherine Zeta-Jones', character: 'Morticia Addams' }
        ],
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
        year: '2024',
        rating: '18+',
        seasons: '2 Seasons',
        match: '96% Match',
        overview: 'A century before the events of Game of Thrones, House Targaryen is at the absolute height of its power with the most powerful army and the most powerful dragons the world has ever known. But now, the dynasty begins to tear itself apart.',
        genre: 'Drama, Fantasy, Action',
        language: 'English',
        director: 'Ryan Condal',
        writer: 'Ryan Condal',
        producer: 'Ryan Condal',
        totalSeasons: '2',
        totalEpisodes: '18',
        description: 'The Targaryen civil war begins, tearing the dynasty apart.',
        cast: [
            { name: 'Paddy Considine', character: 'King Viserys I' },
            { name: 'Matt Smith', character: 'Prince Daemon Targaryen' },
            { name: 'Emma D\'Arcy', character: 'Princess Rhaenyra Targaryen' }
        ],
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
        year: '2021',
        rating: '16+',
        seasons: '5 Seasons',
        match: '92% Match',
        overview: 'An unusual group of robbers attempt to carry out the most perfect robbery in history by stealing from the Bank of Spain. As they execute their plans, a detective works to stop them.',
        genre: 'Crime, Drama, Thriller',
        language: 'Spanish',
        director: 'Álex de la Iglesia',
        writer: 'Álex de la Iglesia',
        producer: 'Álex de la Iglesia',
        totalSeasons: '5',
        totalEpisodes: '50',
        description: 'A criminal mastermind plans the heist of the century.',
        cast: [
            { name: 'Álvaro Morte', character: 'The Professor' },
            { name: 'Úrsula Corberó', character: 'Raquel Murillo' },
            { name: 'Jaime Lorente', character: 'Denver' }
        ],
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
        year: '2023',
        rating: '18+',
        seasons: '2 Seasons',
        match: '96% Match',
        overview: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a massive prize. But the stakes are deadly, and the games grow increasingly sinister as the competition progresses.',
        genre: 'Drama, Thriller, Survival',
        language: 'Korean',
        director: 'Hwang Dong-hyuk',
        writer: 'Hwang Dong-hyuk',
        producer: 'Hwang Dong-hyuk',
        totalSeasons: '2',
        totalEpisodes: '13',
        description: 'Deadly survival games for a massive prize.',
        cast: [
            { name: 'Lee Jung-jae', character: 'Seong Gi-hun' },
            { name: 'Jung Ho-yeon', character: 'Cho Sang-woo' }
        ],
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
        year: '2020',
        rating: '16+',
        seasons: '3 Seasons',
        match: '93% Match',
        overview: 'When children go missing in a small German town, it uncovers the dark secrets of the town and its families. Time travel, secrets, and family connections are revealed as the mystery deepens.',
        genre: 'Drama, Mystery, Sci-Fi',
        language: 'German',
        director: 'Baran bo Odar',
        writer: 'Baran bo Odar',
        producer: 'Baran bo Odar',
        totalSeasons: '3',
        totalEpisodes: '26',
        description: 'Time travel and family secrets in a mysterious small town.',
        cast: [
            { name: 'Louis Hofmann', character: 'Jonas Kahnwald' },
            { name: 'Karoline Eichhorn', character: 'Charlotte Doppler' }
        ],
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
        year: '2022',
        rating: '18+',
        seasons: '6 Seasons',
        match: '94% Match',
        overview: 'A gangster family epic set in 1920s England following the Shelby crime dynasty. Tommy Shelby leads his family through post-war Birmingham and into a brutal world of crime, power, and betrayal.',
        genre: 'Crime, Drama, Historical',
        language: 'English',
        director: 'Steven Knight',
        writer: 'Steven Knight',
        producer: 'Steven Knight',
        totalSeasons: '6',
        totalEpisodes: '36',
        description: 'A gangster family epic set in 1920s England.',
        cast: [
            { name: 'Cillian Murphy', character: 'Tommy Shelby' },
            { name: 'Paul Anderson', character: 'Arthur Shelby' },
            { name: 'Sophie Rundle', character: 'Ada Shelby' }
        ],
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
        year: '2022',
        rating: '18+',
        seasons: '4 Seasons',
        match: '95% Match',
        overview: 'A financial advisor living in Chicago is caught laundering money for a drug cartel and is forced to relocate his family to the Ozarks. What was meant to be a temporary situation becomes a long, dangerous journey.',
        genre: 'Crime, Drama, Thriller',
        language: 'English',
        director: 'Bill Dubuque',
        writer: 'Bill Dubuque',
        producer: 'Bill Dubuque',
        totalSeasons: '4',
        totalEpisodes: '44',
        description: 'Money laundering in the Missouri Ozarks.',
        cast: [
            { name: 'Jason Bateman', character: 'Marty Byrde' },
            { name: 'Laura Linney', character: 'Wendy Byrde' },
            { name: 'Julia Garner', character: 'Ruth Langmore' }
        ],
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
        year: '2024',
        rating: '13+',
        seasons: '3 Seasons',
        match: '97% Match',
        overview: 'In the outer reaches of the galaxy, a lone bounty hunter takes on a job that changes his life. When he encounters a mysterious child with Force powers, he becomes a protector and mentor.',
        genre: 'Sci-Fi, Adventure, Action',
        language: 'English',
        director: 'Jon Favreau',
        writer: 'Jon Favreau',
        producer: 'Jon Favreau',
        totalSeasons: '3',
        totalEpisodes: '24',
        description: 'A bounty hunter in the Star Wars universe protecting a mysterious child.',
        cast: [
            { name: 'Pedro Pascal', character: 'Din Djarin / The Mandalorian' },
            { name: 'Giancarlo Esposito', character: 'Moff Gideon' }
        ],
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

// Get series ID from URL parameters
function getSeriesIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load series details
function loadSeriesDetails() {
    const seriesId = getSeriesIdFromURL();
    const series = seriesDatabase[seriesId];
    
    if (!series) {
        console.error('Series not found');
        return;
    }
    
    // Update page title
    document.title = `${series.title} - StreamFlix`;
    
    // Update detail hero
    document.getElementById('detailBackdrop').style.backgroundImage = `url(${series.image})`;
    document.getElementById('detailPoster').innerHTML = `<img src="${series.image}" alt="${series.title}">`;
    document.getElementById('detailTitle').textContent = series.title;
    document.getElementById('detailYear').textContent = series.year;
    document.getElementById('detailRating').textContent = series.rating;
    document.getElementById('detailSeasons').textContent = series.seasons;
    document.getElementById('detailMatch').textContent = series.match;
    document.getElementById('detailDescription').textContent = series.description;
    
    // Update video if available
    const detailVideo = document.getElementById('detailVideo');
    const detailBackdrop = document.getElementById('detailBackdrop');
    if (series.video) {
        detailVideo.querySelector('source').src = series.video;
        detailVideo.load();
        detailVideo.style.display = 'block';
        detailBackdrop.style.backgroundImage = 'none';
    } else {
        detailVideo.style.display = 'none';
        detailBackdrop.style.backgroundImage = `url(${series.image})`;
    }
    
    // Update overview
    document.getElementById('overviewText').textContent = series.overview;
    
    // Update cast
    const castGrid = document.getElementById('castGrid');
    castGrid.innerHTML = series.cast.map(member => `
        <div class="cast-member">
            <img src="https://via.placeholder.com/150x200" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.character}</p>
        </div>
    `).join('');
    
    // Update episodes
    const episodesList = document.getElementById('episodesList');
    episodesList.innerHTML = series.episodes.slice(0, 10).map((episodeName, i) => `
        <div class="episode-item">
            <div class="episode-number">Episode ${i + 1}</div>
            <div class="episode-info">
                <h4>${episodeName}</h4>
                <p>Duration: 42-48 minutes</p>
            </div>
            <div class="episode-duration">${42 + Math.floor(Math.random() * 7)} min</div>
        </div>
    `).join('');
    
    // Update rating
    document.getElementById('ratingScore').textContent = (8 + Math.random()).toFixed(1);
    
    // Update info
    document.getElementById('genreValue').textContent = series.genre;
    document.getElementById('languageValue').textContent = series.language;
    document.getElementById('directorValue').textContent = series.director;
    document.getElementById('writerValue').textContent = series.writer;
    document.getElementById('producerValue').textContent = series.producer;
    document.getElementById('totalSeasonsValue').textContent = series.totalSeasons;
    document.getElementById('totalEpisodesValue').textContent = series.totalEpisodes;
    
    // Update similar series
    const similarSeries = document.getElementById('similarSeries');
    const otherSeries = Object.entries(seriesDatabase)
        .filter(([id]) => id !== seriesId)
        .slice(0, 5);
    
    similarSeries.innerHTML = otherSeries.map(([id, data]) => `
        <div class="similar-item" onclick="navigateToSeries('${id}')">
            <img src="${data.image}" alt="${data.title}">
            <h4>${data.title}</h4>
        </div>
    `).join('');
}

// Navigate to a series details page
function navigateToSeries(seriesId) {
    window.location.href = `series-detail.html?id=${seriesId}`;
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadSeriesDetails();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Get series ID from URL
    const params = new URLSearchParams(window.location.search);
    const seriesId = params.get('id');
    
    // Play button
    document.querySelector('.btn-play').addEventListener('click', () => {
        if (seriesId) {
            window.location.href = `player.html?series=${seriesId}&episode=1`;
        }
    });
    
    // Download button
    document.querySelector('.btn-info').addEventListener('click', () => {
        alert('Download functionality coming soon!');
    });
});
