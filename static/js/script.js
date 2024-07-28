console.log("JavaScript loaded and running"); // for debugging

if (document.querySelector('.auto-type')) {
    new Typed(".auto-type", {
        strings: ["Ribesh", "a Developer", "a Full-Time Student"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
}
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert("All fields are required!");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

function cleanAuthor(author) {
    if (author) {
        return author.replace(/, type\.fit/g, '').replace(/type\.fit/g, '').trim();
    }
    return 'Unknown';
}

async function fetchQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const quotes = await response.json();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote-text').innerText = randomQuote.text;
        document.getElementById('quote-author').innerText = `- ${cleanAuthor(randomQuote.author)}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

async function fetchWeather() {
    const apiKey = 'c7c870ecb47562c17b698237053b2f38';
    const city = 'Dallas';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weather = await response.json();
        const tempCelsius = Math.round(weather.main.temp); // Format temperature as integer
        document.getElementById('weather-location').innerText = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('weather-description').innerText = weather.weather[0].description;
        document.getElementById('weather-temperature').innerText = `Temperature: ${tempCelsius}C`; 
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchQuote();
    fetchWeather();
});
