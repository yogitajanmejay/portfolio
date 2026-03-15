/*======================menu show and hidden==============================*/ 
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*======================menu show==============================*/ 
/* Validation if constant exists */ 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*======================menu hidden==============================*/ 
/* Validation if constant exists */ 
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*======================remove menu mobile==============================*/ 
const navLink = document.querySelectorAll('.nav-menu');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click',linkAction));

/*======================change background header==============================*/ 
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20
     ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);


/*======================scroll sections active link==============================*/ 
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId +']'

        );

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive)

/*======================scroll about animation==============================*/ 
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) =>{
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
 });

/*======================dark light theme==============================*/ 
window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if(theme === 'light') {
        document.body.classList.add('light-theme');
        toggleBtn.classList.remove('ri-sun-line');
        toggleBtn.classList.add('ri-moon-line');
    } else {
        document.body.classList.remove('light-theme');
        toggleBtn.classList.add('ri-sun-line');
        toggleBtn.classList.remove('ri-moon-line');
    } 

    localStorage.setItem('theme', theme);          
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light')
});
});

/*======================mixitup filter porfolio==============================*/ 
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* active work */ 
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) =>{
        a.classList.remove('active-work');
    });

     this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*======================email js==============================*/ 
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message'),
message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = ''
        }, 3000);
    } else {
        emailjs.sendForm('service_7kt7iok', 'template_zn4pmmr', '#contact-form', '4U8hW0K2IeP4zeEcS').then(
  () => {
   message.textContent = 'Message sent';

   setTimeout(() => {
            message.textContent = ''
        }, 5000);
  },
  (error) => {
    alert('OOPs! SOMETHING WENT WRONG...', error);
  }
);

   contactName.value = '';
   contactEmail.value = '';
   contactMessage.value = '';
    }
};

contactForm.addEventListener('submit',sendEmail);

/*======================scroll reveal animation==============================*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

});

sr.reveal('.home-data');
sr.reveal('.home-img-wrapper' , {delay: 500 });
sr.reveal('.home-social' , {delay: 600 });
sr.reveal('.work-card , .r-container', {interval: 100 });
sr.reveal('.skills-developer, .contact-group' , {origin: 'left' });
sr.reveal('.skills-designer, .contact-form' , {origin: 'right' });

/*=============== typing animation ==============*/

  const words = ["Web Designer", "UI Designer"];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;
  const speed = 150;
  const pause = 1000;

  function type() {
    const typingText = document.getElementById("typing-text");

    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
        typingText.innerHTML = currentWord;
        setTimeout(type, speed);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
        typingText.innerHTML = currentWord;
        setTimeout(type, speed / 2);
      } else if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, pause);
      } else {
        isDeleting = false;
        j = 0;
        i = (i + 1) % words.length;
        setTimeout(type, speed);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });


/*=============== resume button ==============*/

    // Get the buttons and content sections
const educationBtn = document.getElementById('education-btn');
const certificateBtn = document.getElementById('certificate-btn');
const educationContent = document.getElementById('education');
const certificateContent = document.getElementById('certificate');

// Function to show Education and hide Certificate
educationBtn.addEventListener('click', () => {
    educationContent.classList.add('active');
    certificateContent.classList.remove('active');
    educationBtn.classList.add('active-work');
    certificateBtn.classList.remove('active-work');
});

// Function to show Certificate and hide Education
certificateBtn.addEventListener('click', () => {
    certificateContent.classList.add('active');
    educationContent.classList.remove('active');
    certificateBtn.classList.add('active-work');
    educationBtn.classList.remove('active-work');
});