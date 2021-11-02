// Adding Form Validation to blog form

// Accessing form (DOM)

const blogForm = document.getElementById('blogForm');



// Create "submit" event

blogForm.addEventListener('submit', function (e) {
    
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

});





