const usersData = {
    user1: {
        name: 'Adaman',
        avatar: 'images/Creator_1.jpg',
        works: [
            'https://picsum.photos/400/400?random=1',
            'https://picsum.photos/400/400?random=2',
            'https://picsum.photos/400/400?random=3',
            'https://picsum.photos/400/400?random=4',
            'https://picsum.photos/400/400?random=5',
            'https://picsum.photos/400/400?random=6'
        ]
    },
    user2: {
        name: 'Художник 2',
        avatar: 'images/Creator_2.jpg',
        works: [
            'https://picsum.photos/400/400?random=7',
            'https://picsum.photos/400/400?random=8',
            'https://picsum.photos/400/400?random=9',
            'https://picsum.photos/400/400?random=10'
        ]
    },
    user3: {
        name: 'Void',
        avatar: 'images/Creator_3.jpg',
        works: [
            'https://picsum.photos/400/400?random=11',
            'https://picsum.photos/400/400?random=12',
            'https://picsum.photos/400/400?random=13',
            'https://picsum.photos/400/400?random=14',
            'https://picsum.photos/400/400?random=15'
        ]
    },
    user4: {
        name: 'M4wer',
        avatar: 'images/Creator_4.jpg',
        works: [
            'https://picsum.photos/400/400?random=16',
            'https://picsum.photos/400/400?random=17',
            'https://picsum.photos/400/400?random=18',
            'https://picsum.photos/400/400?random=19',
            'https://picsum.photos/400/400?random=20',
            'https://picsum.photos/400/400?random=21',
            'https://picsum.photos/400/400?random=22'
        ]
    }
};

// DOM элементы
const usersScreen = document.getElementById('usersScreen');
const portfolioScreen = document.getElementById('portfolioScreen');
const portfolioGallery = document.getElementById('portfolioGallery');
const backButton = document.getElementById('backButton');
const currentAvatar = document.getElementById('currentAvatar');
const currentName = document.getElementById('currentName');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close');

let currentUser = null;

// Обработчик клика по пользователю
document.querySelectorAll('.user-card').forEach(card => {
    card.addEventListener('click', function () {
        const userId = this.dataset.user;
        openPortfolio(userId);
    });
});

// Открытие портфолио
function openPortfolio(userId) {
    currentUser = usersData[userId];

    // Обновляем информацию о пользователе в заголовке
    currentAvatar.src = currentUser.avatar;
    currentName.textContent = currentUser.name;

    // Очищаем галерею
    portfolioGallery.innerHTML = '';

    // Добавляем работы пользователя
    currentUser.works.forEach((work, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `<img src="${work}" alt="Работа ${index + 1}">`;

        // Обработчик клика для просмотра изображения
        portfolioItem.addEventListener('click', () => {
            openImageModal(work, `Работа ${index + 1} - ${currentUser.name}`);
        });

        portfolioGallery.appendChild(portfolioItem);
    });

    // Анимация перехода
    usersScreen.style.transform = 'translateX(-100%)';
    portfolioScreen.classList.add('active');
}

// Возврат к списку пользователей
backButton.addEventListener('click', () => {
    portfolioScreen.classList.remove('active');
    usersScreen.style.transform = 'translateX(0)';
    currentUser = null;
});

// Открытие модального окна с изображением
function openImageModal(imageSrc, caption) {
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    imageModal.classList.add('active');
}

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    imageModal.classList.remove('active');
});

// Закрытие модального окна при клике вне изображения
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.classList.remove('active');
    }
});

// Закрытие модального окна по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        imageModal.classList.remove('active');
    }
});
