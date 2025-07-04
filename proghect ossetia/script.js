document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let autoSlide = true;
    let slideInterval = 3000; // Интервал автопрокрутки (3 сек)

    // Показ слайда по индексу
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Следующий слайд
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Предыдущий слайд
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Автопрокрутка
    let intervalId;
    function startAutoSlide() {
        if (autoSlide) {
            intervalId = setInterval(nextSlide, slideInterval);
        }
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // Клики по кнопкам
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Клики по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Запуск
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function () {
    // Функция для управления слайдером в карточке
    function setupCardSlider(card) {
        const images = card.querySelectorAll('.card-image');
        let currentIndex = 0;

        function changeImage() {
            // Скрываем текущее изображение
            images[currentIndex].classList.remove('active');
            images[currentIndex].classList.add('inactive');

            // Переходим к следующему изображению
            currentIndex = (currentIndex + 1) % images.length;

            // Показываем новое изображение
            images[currentIndex].classList.remove('inactive');
            images[currentIndex].classList.add('active');
        }

        // Меняем изображение каждые 5 секунд
        return setInterval(changeImage, 5000);
    }

    // Запускаем слайдеры для всех карточек
    const cards = document.querySelectorAll('.tour-card');
    const intervals = [];

    cards.forEach(card => {
        intervals.push(setupCardSlider(card));
    });

    // Очистка интервалов при закрытии страницы
    window.addEventListener('beforeunload', function () {
        intervals.forEach(interval => clearInterval(interval));
    });
});

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});
