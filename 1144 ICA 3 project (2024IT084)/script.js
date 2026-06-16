
// 1. TIMED BACKGROUND IMAGE CAROUSEL SLIDER
const rotatableImages = document.querySelectorAll('.slide1 img');
let slideCounter = 0;

if (rotatableImages.length > 0) {
    setInterval(() => {
        rotatableImages[slideCounter].classList.remove('active');
        slideCounter = (slideCounter + 1) % rotatableImages.length;
        rotatableImages[slideCounter].classList.add('active');
    }, 3000); 
}

//Login page


// 4. LOGIN page
const login = document.getElementById('loginform');

if (login) {
    login.addEventListener('submit', function(event) {
        // 1. Stop the page from automatically refreshing on submit
        event.preventDefault(); 

        // 2. Grab the values the user typed in
        const index = document.getElementById('studentIndex').value.trim();
        const pin = document.getElementById('securityKey').value.trim();

        // 3. Simple verification check
        if (index === "" || pin === "") {
            alert("❌ System Error: Please fill in all authentication fields.");
            return;
        }

        // 4. Show a success message and send them to the home page
        alert(`🔓 Access Granted! Welcome back, student node: ${index}`);
        
        // 5. Redirect back to the main marketplace dashboard
        window.location.href = "index.html"; 
    });
}

// 2. Sell Book
const sellBook= document.getElementById('sellBook');
const output = document.getElementById('output');
const heading = document.getElementById('heading');

if (sellBook) {
    sellBook.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('bookTitle').value.trim();
        const code = document.getElementById('courseCode').value.trim();
        const condition = document.getElementById('bookCondition').value;
        const price= document.getElementById('bookPrice').value;

        if (title === "" || code === "" || condition === "" || price === "") {
            alert("❌ System Validation Error: One or more fields remain empty.");
            return; 
        }

        alert(`🎉 Success! Marketplace record created for: "${title}"`);

       heading.style.display = "block";

        const newDivCard = document.createElement('div');
        newDivCard.className = 'card1'; 

        newDivCard.innerHTML = `
            <img src="images/newbook.jfif" alt="Book">
            <div class="details">
                <span class="tag1">${code}</span>
                <p style="font-size:12px; color:#f6ad55; margin-bottom:8px; font-weight:bold;">Condition: ${condition}</p>
                <h3>${title}</h3>
                <p class="price1">$${parseFloat(price).toFixed(2)}</p>
            </div>
        `;

        output.appendChild(newDivCard);
        sellBook.reset();
    });
}


// 3.Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('userName').value.trim();
        alert(`📬 Thank you, ${name}! Your message has been dispatched safely to the campus help desk log.`);
        contactForm.reset();
    });
}