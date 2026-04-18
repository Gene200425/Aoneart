// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Veuillez entrer une adresse email valide', 'error');
            return;
        }

        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        try {
            // Simulate sending data (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            showMessage('Merci! Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.', 'success');

            // Reset form
            contactForm.reset();
        } catch (error) {
            showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        }
    });
}

// Show message function
function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        
        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Set active nav link based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', setActiveNav);

// Add fade-in animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Formation Enrollment Handler
const formationButtons = document.querySelectorAll('.formation-card .btn');

formationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const formationCard = button.closest('.formation-card');
        const formationTitle = formationCard.querySelector('h4').textContent;
        const formationType = formationCard.closest('.formation-type').querySelector('.formation-header h3').textContent;
        
        // Create modal for enrollment
        const modal = document.createElement('div');
        modal.className = 'formation-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Inscription à la formation</h3>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p><strong>${formationTitle}</strong></p>
                    <p><em>${formationType}</em></p>
                    <form class="enrollment-form">
                        <div class="form-group">
                            <label for="enrollment-name">Nom complet *</label>
                            <input type="text" id="enrollment-name" required>
                        </div>
                        <div class="form-group">
                            <label for="enrollment-email">Email *</label>
                            <input type="email" id="enrollment-email" required>
                        </div>
                        <div class="form-group">
                            <label for="enrollment-phone">Téléphone</label>
                            <input type="tel" id="enrollment-phone">
                        </div>
                        <div class="form-group">
                            <label for="enrollment-message">Message (optionnel)</label>
                            <textarea id="enrollment-message" rows="3" placeholder="Vos motivations, niveau actuel, etc."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Confirmer l'inscription</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Show modal
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
        
        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            }
        });
        
        // Handle enrollment form submission
        const enrollmentForm = modal.querySelector('.enrollment-form');
        enrollmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('enrollment-name').value;
            const email = document.getElementById('enrollment-email').value;
            const phone = document.getElementById('enrollment-phone').value;
            const message = document.getElementById('enrollment-message').value;
            
            if (!name || !email) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, show success message
            alert(`Merci ${name}! Votre inscription à "${formationTitle}" a été enregistrée. Nous vous contacterons bientôt pour confirmer les détails.`);
            
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
    });
});

// Add modal styles
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .formation-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .formation-modal.active {
        opacity: 1;
    }
    
    .modal-content {
        background: white;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .formation-modal.active .modal-content {
        transform: scale(1);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid #eee;
    }
    
    .modal-header h3 {
        margin: 0;
        color: #8B4513;
    }
    
    .modal-close {
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        transition: color 0.3s ease;
    }
    
    .modal-close:hover {
        color: #8B4513;
    }
    
    .modal-body {
        padding: 1.5rem;
    }
    
    .enrollment-form .form-group {
        margin-bottom: 1rem;
    }
    
    .enrollment-form label {
        display: block;
        margin-bottom: 0.5rem;
        color: #8B4513;
        font-weight: 600;
    }
    
    .enrollment-form input,
    .enrollment-form textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }
    
    .enrollment-form input:focus,
    .enrollment-form textarea:focus {
        outline: none;
        border-color: #8B4513;
        box-shadow: 0 0 5px rgba(139, 69, 19, 0.3);
    }
    
    .enrollment-form .btn {
        width: 100%;
        margin-top: 1rem;
    }
`;
document.head.appendChild(modalStyle);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.src) {
                    img.style.opacity = '1';
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
}

// Scroll animation for elements
const scrollElements = document.querySelectorAll('.service-card, .gallery-item, .portfolio-item, .team-member, .value-card');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop) > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = () => {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
            element.classList.add('scrolled');
        } else if (elementOutofView(element)) {
            element.classList.remove('scrolled');
        }
    });
};

window.addEventListener('scroll', () => {
    displayScrollElement();
});

// Add scroll animation styles
const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
    .service-card, .gallery-item, .portfolio-item, .team-member, .value-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .scrolled {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(scrollStyle);
