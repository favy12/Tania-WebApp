    

    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', () => {
        const policies = document.querySelectorAll('.policy-checklist input');
        const bookNowBtn = document.getElementById('book-now');

        policies.forEach(policy => {
            policy.addEventListener('change', () => {
                bookNowBtn.disabled = !Array.from(policies).every(p => p.checked);
            });
        });
    });


    
   // Function to check if all required fields are filled and enable/disable book button accordingly
   function checkRequiredFields() {
    console.log("Checking required fields...");
    const service = document.getElementById('service').value;
    const specificService = document.getElementById('specific-service').value;
    const price = document.getElementById('price').value;
    const policiesChecked = Array.from(document.querySelectorAll('.policy-checklist input')).every(policy => policy.checked);

    console.log("Service:", service);
    console.log("Specific Service:", specificService);
    console.log("Price:", price);
    console.log("Policies Checked:", policiesChecked);

    const bookNowBtn = document.getElementById('book-now');

    if (service && specificService && price && policiesChecked) {
        console.log("All required fields filled. Enabling Book Now button.");
        bookNowBtn.disabled = false;
    } else {
        console.log("Some required fields are empty. Disabling Book Now button.");
        bookNowBtn.disabled = true;
    }
}

const policies = document.querySelectorAll('.policy-checklist input');
const bookNowBtn = document.getElementById('book-now');

policies.forEach(policy => {
    policy.addEventListener('change', () => {
        bookNowBtn.disabled = !Array.from(policies).every(p => p.checked);
    });
});
    policy.addEventListener('change', () => {
        console.log("Policy changed:", policy.checked);
        bookNowBtn.disabled = !Array.from(policies).every(p => p.checked);
    });
    
    document.getElementById('service').addEventListener('change', updateSpecificServices);
    document.getElementById('specific-service').addEventListener('change', updatePrice);
    document.getElementById('date').addEventListener('change', updateTimeSlots);


function updateSpecificServices() {
    const service = document.getElementById('service').value;
    const specificService = document.getElementById('specific-service');

    specificService.innerHTML = ''; // Clear existing options

    const serviceOptions = {
        'knotless-braid': `
            <option value="">Select Specific Service</option>
            <option value="small-knotless-low-back">Small Knotless (Low Back)</option>
            <option value="small-knotless-mid-back">Small Knotless (Mid Back)</option>
            <option value="small-knotless-shoulder">Small Knotless (Shoulder)</option>
            <option value="small-knotless-thigh">Small Knotless (Thigh)</option>
            <option value="medium-knotless-low-back">Medium Knotless (Low Back)</option>
            <option value="medium-knotless-mid-back">Medium Knotless (Mid Back)</option>
            <option value="medium-knotless-shoulder">Medium Knotless (Shoulder)</option>
            <option value="medium-knotless-thigh">Medium Knotless (Thigh)</option>
            <option value="large-knotless-low-back">Large Knotless (Low Back)</option>
            <option value="large-knotless-mid-back">Large Knotless (Mid Back)</option>
            <option value="large-knotless-shoulder">Large Knotless (Shoulder)</option>
            <option value="large-knotless-thigh">Large Knotless (Thigh)</option>
            <option value="jumbo-knotless-low-back">Jumbo Knotless (Low Back)</option>
            <option value="jumbo-knotless-mid-back">Jumbo Knotless (Mid Back)</option>
            <option value="jumbo-knotless-shoulder">Jumbo Knotless (Shoulder)</option>
            <option value="jumbo-knotless-thigh">Jumbo Knotless (Thigh)</option>
        `,
        'box-braid': `
            <option value="">Select Specific Service</option>
            <option value="small-box-low-back">Small Box Braids (Low Back)</option>
            <option value="small-box-mid-back">Small Box Braids (Mid Back)</option>
            <option value="small-box-shoulder">Small Box Braids (Shoulder)</option>
            <option value="small-box-thigh">Small Box Braids (Thigh)</option>
            <option value="medium-box-low-back">Medium Box Braids (Low Back)</option>
            <option value="medium-box-mid-back">Medium Box Braids (Mid Back)</option>
            <option value="medium-box-shoulder">Medium Box Braids (Shoulder)</option>
            <option value="medium-box-thigh">Medium Box Braids (Thigh)</option>
            <option value="large-box-low-back">Large Box Braids (Low Back)</option>
            <option value="large-box-mid-back">Large Box Braids (Mid Back)</option>
            <option value="large-box-shoulder">Large Box Braids (Shoulder)</option>
            <option value="large-box-thigh">Large Box Braids (Thigh)</option>
            <option value="jumbo-box-low-back">Jumbo Box Braids (Low Back)</option>
            <option value="jumbo-box-mid-back">Jumbo Box Braids (Mid Back)</option>
            <option value="jumbo-box-shoulder">Jumbo Box Braids (Shoulder)</option>
            <option value="jumbo-box-thigh">Jumbo Box Braids (Thigh)</option>
        `,
        'knotless-bohemian-braids': `
            <option value="">Select Specific Service</option>
            <option value="small-knotless-boho-low-back">Small Knotless Bohemian (Low Back)</option>
            <option value="small-knotless-boho-mid-back">Small Knotless Bohemian (Mid Back)</option>
            <option value="small-knotless-boho-shoulder">Small Knotless Bohemian (Shoulder)</option>
            <option value="small-knotless-boho-thigh">Small Knotless Bohemian (Thigh)</option>
            <option value="medium-knotless-boho-low-back">Medium Knotless Bohemian (Low Back)</option>
            <option value="medium-knotless-boho-mid-back">Medium Knotless Bohemian (Mid Back)</option>
            <option value="medium-knotless-boho-shoulder">Medium Knotless Bohemian (Shoulder)</option>
            <option value="medium-knotless-boho-thigh">Medium Knotless Bohemian (Thigh)</option>
            <option value="large-knotless-boho-low-back">Large Knotless Bohemian (Low Back)</option>
            <option value="large-knotless-boho-mid-back">Large Knotless Bohemian (Mid Back)</option>
            <option value="large-knotless-boho-shoulder">Large Knotless Bohemian (Shoulder)</option>
            <option value="large-knotless-boho-thigh">Large Knotless Bohemian (Thigh)</option>
            <option value="jumbo-knotless-boho-low-back">Jumbo Knotless Bohemian (Low Back)</option>
            <option value="jumbo-knotless-boho-mid-back">Jumbo Knotless Bohemian (Mid Back)</option>
            <option value="jumbo-knotless-boho-shoulder">Jumbo Knotless Bohemian (Shoulder)</option>
            <option value="jumbo-knotless-boho-thigh">Jumbo Knotless Bohemian (Thigh)</option>
        `,
        'island-twist': `
            <option value="">Select Specific Service</option>
            <option value="small-island-twist-low-back">Small Island Twist (Low Back)</option>
            <option value="small-island-twist-mid-back">Small Island Twist (Mid Back)</option>
            <option value="small-island-twist-shoulder">Small Island Twist (Shoulder)</option>
            <option value="small-island-twist-thigh">Small Island Twist (Thigh)</option>
            <option value="medium-island-twist-low-back">Medium Island Twist (Low Back)</option>
            <option value="medium-island-twist-mid-back">Medium Island Twist (Mid Back)</option>
            <option value="medium-island-twist-shoulder">Medium Island Twist (Shoulder)</option>
            <option value="medium-island-twist-thigh">Medium Island Twist (Thigh)</option>
            <option value="large-island-twist-low-back">Large Island Twist (Low Back)</option>
            <option value="large-island-twist-mid-back">Large Island Twist (Mid Back)</option>
            <option value="large-island-twist-shoulder">Large Island Twist (Shoulder)</option>
            <option value="large-island-twist-thigh">Large Island Twist (Thigh)</option>
            <option value="jumbo-island-twist-low-back">Jumbo Island Twist (Low Back)</option>
            <option value="jumbo-island-twist-mid-back">Jumbo Island Twist (Mid Back)</option>
            <option value="jumbo-island-twist-shoulder">Jumbo Island Twist (Shoulder)</option>
            <option value="jumbo-island-twist-thigh">Jumbo Island Twist (Thigh)</option>
        `,
        'bohemian-island-twist': `
            <option value="">Select Specific Service</option>
            <option value="small-bohemian-island-twist-low-back">Small Bohemian Island Twist (Low Back)</option>
            <option value="small-bohemian-island-twist-mid-back">Small Bohemian Island Twist (Mid Back)</option>
            <option value="small-bohemian-island-twist-shoulder">Small Bohemian Island Twist (Shoulder)</option>
            <option value="small-bohemian-island-twist-thigh">Small Bohemian Island Twist (Thigh)</option>
            <option value="medium-bohemian-island-twist-low-back">Medium Bohemian Island Twist (Low Back)</option>
            <option value="medium-bohemian-island-twist-mid-back">Medium Bohemian Island Twist (Mid Back)</option>
            <option value="medium-bohemian-island-twist-shoulder">Medium Bohemian Island Twist (Shoulder)</option>
            <option value="medium-bohemian-island-twist-thigh">Medium Bohemian Island Twist (Thigh)</option>
            <option value="large-bohemian-island-twist-low-back">Large Bohemian Island Twist (Low Back)</option>
            <option value="large-bohemian-island-twist-mid-back">Large Bohemian Island Twist (Mid Back)</option>
            <option value="large-bohemian-island-twist-shoulder">Large Bohemian Island Twist (Shoulder)</option>
            <option value="large-bohemian-island-twist-thigh">Large Bohemian Island Twist (Thigh)</option>
            <option value="jumbo-bohemian-island-twist-low-back">Jumbo Bohemian Island Twist (Low Back)</option>
            <option value="jumbo-bohemian-island-twist-mid-back">Jumbo Bohemian Island Twist (Mid Back)</option>
            <option value="jumbo-bohemian-island-twist-shoulder">Jumbo Bohemian Island Twist (Shoulder)</option>
            <option value="jumbo-bohemian-island-twist-thigh">Jumbo Bohemian Island Twist (Thigh)</option>
        `,
        'fulani-bohemian-braids': `
            <option value="">Select Specific Service</option>
            <option value="fulani-bohemian-low-back">Fulani Bohemian Braids (Low Back)</option>
            <option value="fulani-bohemian-mid-back">Fulani Bohemian Braids (Mid Back)</option>
            <option value="fulani-bohemian-shoulder">Fulani Bohemian Braids (Shoulder)</option>
            <option value="fulani-bohemian-thigh">Fulani Bohemian Braids (Thigh)</option>
        `,
        'soft-locs': `
            <option value="">Select Specific Service</option>
            <option value="soft-locs-low-back">Soft Locs (Low Back)</option>
            <option value="soft-locs-mid-back">Soft Locs (Mid Back)</option>
            <option value="soft-locs-shoulder">Soft Locs (Shoulder)</option>
        `,
        'stitch-braids': `
            <option value="">Select Specific Service</option>
            <option value="sewin-stitch">1/2 Sewin, 1/2 Stitch Braids</option>
            <option value="two-feedin">Two Feedin Braids</option>
            <option value="four-stitch">Four Stitch Braids</option>
            <option value="cornrows-stitch">Cornrows Stitch Braids</option>
            <option value="stitch-ponytail">Stitch Braids into Ponytail</option>
        `,
        'crochet': `
            <option value="">Select Specific Service</option>
            <option value="crochet-low-back">Crochet (Low Back)</option>
            <option value="crochet-mid-back">Crochet (Mid Back)</option>
            <option value="crochet-shoulder">Crochet (Shoulder)</option>
            <option value="crochet-thigh">Crochet (Thigh)</option>
        `,
        'touch-up': `
            <option value="">Select Specific Service</option>
            <option value="small-touch">Small Touch Up</option>
            <option value="medium-touch">Medium Touch Up</option>
            <option value="large-touch">Large Touch Up</option>
        `,
        'hair-wash-blow-dry': `
            <option value="">Select Specific Service</option>
            <option value="hair-wash">Hair Wash and Blow Dry</option>
        `,
        'takeout': `
            <option value="">Select Specific Service</option>
            <option value="takeout">Takeout</option>
        `,
        'mens-braids': `
            <option value="">Select Specific Service</option>
            <option value="individuals">Individuals</option>
            <option value="cornrows">Cornrows</option>
        `,
        'frontal-installation': `
            <option value="">Select Specific Service</option>
            <option value="frontal-installation">Frontal Installation</option>
        `,
        'wig-revamps': `
            <option value="">Select Specific Service</option>
            <option value="wig-revamps">Wig Revamps</option>
        `,
        'hair-ventilation': `
            <option value="">Select Specific Service</option>
            <option value="closure">Closure</option>
            <option value="frontal">Frontal</option>
        `,
    };

    if (serviceOptions[service]) {
        specificService.innerHTML = serviceOptions[service];
    }
}

function updatePrice() {
    const specificService = document.getElementById('specific-service').value;
    const price = document.getElementById('price');

    const servicePrices = {
        'small-knotless-low-back': '$300',
        'small-knotless-mid-back': '$280',
        'small-knotless-shoulder': '$260',
        'small-knotless-thigh': '$340',
        'medium-knotless-low-back': '$280',
        'medium-knotless-mid-back': '$260',
        'medium-knotless-shoulder': '$240',
        'medium-knotless-thigh': '$320',
        'large-knotless-low-back': '$260',
        'large-knotless-mid-back': '$240',
        'large-knotless-shoulder': '$220',
        'large-knotless-thigh': '$300',
        'jumbo-knotless-low-back': '$240',
        'jumbo-knotless-mid-back': '$220',
        'jumbo-knotless-shoulder': '$200',
        'jumbo-knotless-thigh': '$280',
        'small-box-low-back': '$280',
        'small-box-mid-back': '$270',
        'small-box-shoulder': '$250',
        'small-box-thigh': '$320',
        'medium-box-low-back': '$260',
        'medium-box-mid-back': '$240',
        'medium-box-shoulder': '$220',
        'medium-box-thigh': '$300',
        'large-box-low-back': '$240',
        'large-box-mid-back': '$220',
        'large-box-shoulder': '$200',
        'large-box-thigh': '$280',
        'jumbo-box-low-back': '$220',
        'jumbo-box-mid-back': '$200',
        'jumbo-box-shoulder': '$180',
        'jumbo-box-thigh': '$280',
        'small-knotless-boho-low-back': '$320',
        'small-knotless-boho-mid-back': '$300',
        'small-knotless-boho-shoulder': '$280',
        'small-knotless-boho-thigh': '$340',
        'medium-knotless-boho-low-back': '$300',
        'medium-knotless-boho-mid-back': '$280',
        'medium-knotless-boho-shoulder': '$260',
        'medium-knotless-boho-thigh': '$320',
        'large-knotless-boho-low-back': '$280',
        'large-knotless-boho-mid-back': '$260',
        'large-knotless-boho-shoulder': '$240',
        'large-knotless-boho-thigh': '$300',
        'jumbo-knotless-boho-low-back': '$260',
        'jumbo-knotless-boho-mid-back': '$240',
        'jumbo-knotless-boho-shoulder': '$220',
        'jumbo-knotless-boho-thigh': '$280',
        'small-island-twist-low-back': '$300',
        'small-island-twist-mid-back': '$280',
        'small-island-twist-shoulder': '$260',
        'small-island-twist-thigh': '$320',
        'medium-island-twist-low-back': '$280',
        'medium-island-twist-mid-back': '$260',
        'medium-island-twist-shoulder': '$240',
        'medium-island-twist-thigh': '$300',
        'large-island-twist-low-back': '$260',
        'large-island-twist-mid-back': '$240',
        'large-island-twist-shoulder': '$220',
        'large-island-twist-thigh': '$280',
        'jumbo-island-twist-low-back': '$240',
        'jumbo-island-twist-mid-back': '$220',
        'jumbo-island-twist-shoulder': '$200',
        'jumbo-island-twist-thigh': '$260',
        'small-bohemian-island-twist-low-back': '$320',
        'small-bohemian-island-twist-mid-back': '$300',
        'small-bohemian-island-twist-shoulder': '$280',
        'small-bohemian-island-twist-thigh': '$340',
        'medium-bohemian-island-twist-low-back': '$300',
        'medium-bohemian-island-twist-mid-back': '$280',
        'medium-bohemian-island-twist-shoulder': '$260',
        'medium-bohemian-island-twist-thigh': '$320',
        'large-bohemian-island-twist-low-back': '$280',
        'large-bohemian-island-twist-mid-back': '$260',
        'large-bohemian-island-twist-shoulder': '$240',
        'large-bohemian-island-twist-thigh': '$300',
        'jumbo-bohemian-island-twist-low-back': '$220',
        'jumbo-bohemian-island-twist-mid-back': '$200',
        'jumbo-bohemian-island-twist-shoulder': '$180',
        'jumbo-bohemian-island-twist-thigh': '$240',
        'fulani-bohemian-low-back': '$320',
        'fulani-bohemian-mid-back': '$300',
        'fulani-bohemian-shoulder': '$280',
        'fulani-bohemian-thigh': '$340',
        'soft-locs-low-back': '$350',
        'soft-locs-mid-back': '$320',
        'soft-locs-shoulder': '$300',
        'sewin-stitch': '$250',
        'two-feedin': '$100',
        'four-stitch': '$100',
        'cornrows-stitch': '$150',
        'stitch-ponytail': '$150',
        'crochet-low-back': '$180',
        'crochet-mid-back': '$160',
        'crochet-shoulder': '$150',
        'crochet-thigh': '$200',
        'small-touch': '$100',
        'medium-touch': '$80',
        'large-touch': '$60',
        'hair-wash': '$20',
        'takeout': '$30',
        'individuals': '$120',
        'cornrows': '$80',
        'frontal-installation': '$120',
        'wig-revamps': '$30',
        'closure': '$80',
        'frontal': '$150',
    };

    price.value = servicePrices[specificService] || '';
}

function updateTimeSlots() {
    const date = new Date(document.getElementById('date').value);
    const time = document.getElementById('time');
    
    time.innerHTML = ''; // Clear existing options

    if (date.getDay() === 6 || date.getDay() === 0) { // Check if the day is Saturday or Sunday
        time.innerHTML = `
            <option value="">Select Time</option>
            <option value="9am-2pm">9:00 AM - 2:00 PM</option>
            <option value="3pm-9pm">3:00 PM - 9:00 PM</option>
        `;
    } else {
        time.innerHTML = `
            <option value="">Select Time</option>
            <option value="5pm-10pm">5:00 PM - 10:00 PM</option>
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
    const reviewName = document.getElementById('review-name').value;
    const reviewText = document.getElementById('review-text').value;
    const reviewsContainer = document.getElementById('reviews-container');
    
    if (reviewName && reviewText) {
        const newReview = document.createElement('div');
        newReview.className = 'review';
        newReview.innerHTML = `
            <h3>${reviewName}</h3>
            <p>${reviewText}</p>
        `;
        reviewsContainer.appendChild(newReview);
        
        // Clear the form fields
        document.getElementById('review-name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}
// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Attach change event listeners to update specific services, price, and check required fields
    document.getElementById('service').addEventListener('change', () => {
        updateSpecificServices();
        checkRequiredFields();
    });
    document.getElementById('specific-service').addEventListener('change', () => {
        updatePrice();
        checkRequiredFields();
    });
    document.getElementById('price').addEventListener('input', checkRequiredFields);
    document.getElementById('policies').addEventListener('change', checkRequiredFields);
    // Attach change event listener to date input to update time slots
    document.getElementById('date').addEventListener('change', updateTimeSlots);
    // Attach click event listener to book now button to show payment details
    document.getElementById('book-now').addEventListener('click', showPaymentDetails);
});