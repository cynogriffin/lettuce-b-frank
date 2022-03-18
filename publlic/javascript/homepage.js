async function toReservation() {
    location.href = '/dashboard'
};

async function toLogin() {
    location.href = '/login'
};

document.querySelector('#to-reservations').addEventListener('click', toReservation);
document.querySelector('#to-login').addEventListener('click', toLogin);