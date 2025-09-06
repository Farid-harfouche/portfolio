// Initialisation EmailJS
emailjs.init('zGC8WDTLymVHYPFfJ');

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
  e.preventDefault();

  emailjs.sendForm('service_bcss1i8', 'template_c1u2h5e', form)
    .then(function(){
      document.getElementById('sent').style.display = 'block';
      form.reset();
    }, function(err){
      alert('Erreur : ' + JSON.stringify(err));
    });
});

// Mise à jour de l'année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();
