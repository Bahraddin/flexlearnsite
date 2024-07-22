const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show-nav');
  hamburger.classList.toggle('hamburger-position');
});;

     const section1 = document.querySelector('#section1');
     const section2 = document.querySelector('#section2');
     const section3 = document.querySelector('#section3');
     const section4 = document.querySelector('#section4');
     const section5 = document.querySelector('#section5');
     const section6 = document.querySelector('#section6');
     
     function showVid(section){
      section.classList.toggle('function1');
     }
     
     
     
     
     
     //exam 
     const answers = document.querySelectorAll('.answer');
     
     answers.forEach(answer => {
     answer.addEventListener('click', () => {
     const isCorrect = answer.getAttribute('data-correct') === 'true';
     
     if (isCorrect) {
     answer.classList.add('correct');
     
     } else {
     answer.classList.add('wrong');
     answer.parentNode.querySelector('[data-correct="true"]').classList.add('correct');
     
     }
     });
     });