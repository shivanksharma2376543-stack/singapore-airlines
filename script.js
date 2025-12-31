const joinBtn = document.getElementById("joinBtn");
const homeLink = document.getElementById("homeLink");
const staffLink = document.getElementById("staffLink");
const aboutLink = document.getElementById("aboutLink");
const bookLink = document.getElementById("bookLink");

const home = document.getElementById("home");
const ourStaff = document.getElementById("ourStaff");
const aboutUs = document.getElementById("aboutUs");
const bookFlight = document.getElementById("bookFlight");

if (joinBtn) {
    joinBtn.addEventListener("click", () => {
        window.open("https://discord.gg/KpucdrfdD3", "_blank");
    });
}

function closeAll() {
    [ourStaff, aboutUs, bookFlight].forEach(sec => {
        if (sec) {
            sec.classList.remove("open");
            sec.style.maxHeight = null;
        }
    });
}

if (staffLink && ourStaff) {
    staffLink.addEventListener("click", e => {
        e.preventDefault();
        closeAll();
        ourStaff.classList.add("open");
        setTimeout(() => {
            ourStaff.scrollIntoView({ behavior: "smooth" });
        }, 100);
    });
}

if (aboutLink && aboutUs) {
    aboutLink.addEventListener("click", e => {
        e.preventDefault();
        closeAll();
        aboutUs.classList.add("open");
        setTimeout(() => {
            aboutUs.scrollIntoView({ behavior: "smooth" });
        }, 100);
    });
}

if (bookLink && bookFlight) {
    bookLink.addEventListener("click", e => {
        e.preventDefault();
        closeAll();
        bookFlight.classList.add("open");
        setTimeout(() => {
            bookFlight.scrollIntoView({ behavior: "smooth" });
        }, 100);
    });
}

if (homeLink && home) {
    homeLink.addEventListener("click", e => {
        e.preventDefault();
        closeAll();
        home.scrollIntoView({ behavior: "smooth" });
    });
}


const form = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMessage');
const errorMsg = document.getElementById('errorMessage');

if (form && successMsg && errorMsg) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                successMsg.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            errorMsg.style.display = 'block';
            console.error('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Booking';
        }
    });
}