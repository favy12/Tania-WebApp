document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.querySelector('.nav-icon');
    const navbar = document.querySelector('.navbar ul');

    navIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    const policies = document.querySelectorAll('.policy-checklist input');
    const bookNowBtn = document.getElementById('book-now-btn');

    policies.forEach(policy => {
        policy.addEventListener('change', () => {
            bookNowBtn.disabled = !Array.from(policies).every(p => p.checked);
        });
    });
});

function updateSpecificServices() {
    const service = document.getElementById('service').value;
    const specificService = document.getElementById('specific-service');
    
    specificService.innerHTML = ''; // Clear existing options

    if (service === 'knotless-braids') {
        specificService.innerHTML = `
            <option value="">Select Specific Service</option>
            <option value="small-knotless">Small Knotless</option>
            <option value="medium-knotless">Medium Knotless</option>
            <option value="large-knotless">Large Knotless</option>
        `;
    }
    // Add more service-specific options as needed
}

function updatePrice() {
    const specificService = document.getElementById('specific-service').value;
    const price = document.getElementById('price');

    if (specificService === 'small-knotless') {
        price.value = '$200';
    } else if (specificService === 'medium-knotless') {
        price.value = '$150';
    } else if (specificService === 'large-knotless') {
        price.value = '$100';
    } else {
        price.value = '';
    }
}

function updateTimeSlots() {
    const date = new Date(document.getElementById('date').value);
    const time = document.getElementById('time');
    
    time.innerHTML = ''; // Clear existing options

    if (date.getDay() === 0 || date.getDay() === 6) {
        time.innerHTML = `
            <option value="">Select Time</option>
            <option value="9am">9:00 AM - 2:00 PM</option>
            <option value="3pm">3:00 PM - 9:00 PM</option>
        `;
    } else {
        time.innerHTML = `
            <option value="">Select Time</option>
            <option value="5pm">5:00 PM - 10:00 PM</option>
        `;
    }
}

function showPaymentDetails() {
    document.getElementById('payment-details').style.display = 'block';
}

function confirmBooking() {
    alert('Booking confirmed! Please transfer the deposit amount to complete your booking.');
}

function submitReview() {
    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;
    
    if (name && text) {
        const reviewsContainer = document.getElementById('reviews-container');
        const review = document.createElement('div');
        review.className = 'review';
        review.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
        reviewsContainer.appendChild(review);

        document.getElementById('review-name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert('Please fill in both fields before submitting your review.');
    }
}
