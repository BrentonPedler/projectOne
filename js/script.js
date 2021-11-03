// Adding post Validation to contact form

// Will alert if missing required fields

// Accessing form (DOM)

const mainContact = document.getElementById('mainContact');

// Create "submit" event

mainContact.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Create Variable for NAME / EMAIL field (required)
    
    const name = document.getElementById('name');

    const email = document.getElementById('email');

    const nameData = name.value;

    const emailData = email.value;

    if (nameData == '') {

        alert('Name Input Required');

    }

    if (emailData == '') {

        alert('Email Input Required');

    }

    function successfulSubmit () {

        const contactResponse = document.getElementById('contactResponse');
        

        mainContact.style.display = 'none';

        contactResponse.style.display = 'block';

        contactResponse.innerHTML = `<p>Thank you, we will contact you shortly</p>`;

    }

    successfulSubmit();

    
});

 












