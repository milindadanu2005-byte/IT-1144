// ==========================================
// 1. TIMED BACKGROUND IMAGE CAROUSEL SLIDER
// ==========================================
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

// ==========================================
// 4. LOGIN PORTAL AUTHENTICATION HANDLER
// ==========================================
const portalAuthForm = document.getElementById('portalAuthForm');

if (portalAuthForm) {
    portalAuthForm.addEventListener('submit', function(event) {
        // 1. Stop the page from automatically refreshing on submit
        event.preventDefault(); 

        // 2. Grab the values the user typed in
        const studentIndexVal = document.getElementById('studentIndex').value.trim();
        const securityKeyVal = document.getElementById('securityKey').value.trim();

        // 3. Simple verification check
        if (studentIndexVal === "" || securityKeyVal === "") {
            alert("❌ System Error: Please fill in all authentication fields.");
            return;
        }

        // 4. Show a success message and send them to the home page
        alert(`🔓 Access Granted! Welcome back, student node: ${studentIndexVal}`);
        
        // 5. Redirect back to the main marketplace dashboard
        window.location.href = "index.html"; 
    });
}


// ==========================================
// 2. FORM PROCESSING & DYNAMIC BOOK LISTINGS
// ==========================================
const listingDeskForm = document.getElementById('listingDeskForm');
const divCardsOutputContainer = document.getElementById('divCardsOutputContainer');
const liveOutputHeading = document.getElementById('liveOutputHeading');

if (listingDeskForm) {
    listingDeskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const titleVal = document.getElementById('bookTitle').value.trim();
        const codeVal = document.getElementById('courseCode').value.trim();
        const conditionVal = document.getElementById('bookCondition').value;
        const priceVal = document.getElementById('bookPrice').value;

        if (titleVal === "" || codeVal === "" || conditionVal === "" || priceVal === "") {
            alert("❌ System Validation Error: One or more fields remain empty.");
            return; 
        }

        alert(`🎉 Success! Marketplace record created for: "${titleVal}"`);

        liveOutputHeading.style.display = "block";

        const newlyMintedDivCard = document.createElement('div');
        newlyMintedDivCard.className = 'card1'; 

        newlyMintedDivCard.innerHTML = `
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" alt="Book">
            <div class="details">
                <span class="tag1">${codeVal}</span>
                <p style="font-size:12px; color:#f6ad55; margin-bottom:8px; font-weight:bold;">Condition: ${conditionVal}</p>
                <h3>${titleVal}</h3>
                <p class="price1">$${parseFloat(priceVal).toFixed(2)}</p>
            </div>
        `;

        divCardsOutputContainer.appendChild(newlyMintedDivCard);
        listingDeskForm.reset();
    });
}

// ==========================================
// 3. CONTACT FORM DISPATCH SUBMISSION HANDLER
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameVal = document.getElementById('userName').value.trim();
        alert(`📬 Thank you, ${nameVal}! Your message has been dispatched safely to the campus help desk log.`);
        contactForm.reset();
    });
}