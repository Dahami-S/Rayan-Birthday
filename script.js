window.onload = function () {
    // Celebration Popup
    const popup = document.getElementById('celebratePopup');
    const closePopup = document.querySelector('.close-popup');

    // Show popup after 5 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 5000);

    closePopup.onclick = function () {
        popup.style.display = 'none';
    };

    // Confetti Trigger
    const confettiButton = document.getElementById('confettiButton');
    confettiButton.addEventListener('click', function () {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
};


  const birthday = new Date("Sep 20, 2024 00:00:00").getTime();
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "It's Your Birthday!";
    }
  }, 1000);


// Lightbox Functionality for Image Modal
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modalImg.classList.add('modal-content');
modal.appendChild(modalImg);

const closeModal = document.createElement('span');
closeModal.classList.add('close');
closeModal.innerHTML = '&times;';
modal.appendChild(closeModal);

document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (e) {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Function to "open" the gift box and reveal the message
function openGift(giftNumber) {
    const boxes = document.querySelectorAll('.gift-box');
    boxes.forEach((box, index) => {
        if (index + 1 === giftNumber) {
            box.classList.add('open');
        } else {
            box.classList.remove('open');
        }
    });

    // Optional: Play a cute animation
    triggerGiftAnimation();
}

// Confetti animation on opening a gift
function triggerGiftAnimation() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    
    // Function to generate the calendar
    function generateCalendar(year, month, highlightDay) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        let html = '<div class="calendar-header">September 2002</div>';
        html += '<div class="calendar-days">';
        
        
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            html += `<div class="calendar-day">${day}</div>`;
        });
        
        
        for (let i = 0; i < firstDay; i++) {
            html += '<div class="calendar-day"></div>';
        }
        
        
        for (let day = 1; day <= daysInMonth; day++) {
            const isHighlight = (day === highlightDay) ? 'highlight' : '';
            html += `<div class="calendar-day ${isHighlight}">${day}</div>`;
        }
        
        html += '</div>';
        calendarElement.innerHTML = html;
    }
    
    
    generateCalendar(2002, 9, 20);
});

function showMessage(message) {
    document.getElementById("birthdayMessage").innerHTML = message;
  }
  
  
window.addEventListener('DOMContentLoaded', (event) => {
    const messageBox = document.querySelector('.message-box');
    messageBox.classList.add('show');
});
