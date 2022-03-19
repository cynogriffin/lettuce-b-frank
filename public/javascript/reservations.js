async function createReservation(event) {
    event.preventDefault();

    const party_name = document.querySelector('#party_name').value.trim();
    const party_number = document.querySelector('#party_number').value.trim();
    const res_date = document.querySelector('#date').value.trim();
    const res_time = document.querySelector('#time').value.trim();

    const response = await fetch('/api/reservations', {
        method: 'post',
        body: JSON.stringify({
            party_name,
            party_number,
            res_date,
            res_time
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };

};

document.querySelector('.res-details').addEventListener('submit', createReservation);