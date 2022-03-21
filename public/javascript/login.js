async function loginFormHandler(event) {
    event.preventDefault();

    const phone = document.querySelector('#phone-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();

    if ( email && phone ) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                phone
            }),
            headers: { 'Content-type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
    }
};

async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();

    if (name && email && phone) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name,
                email,
                phone
            }),
            headers: { 'Content-type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/reservations')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
