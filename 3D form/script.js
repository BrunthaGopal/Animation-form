const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('clcik', () =>{
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('clcik', () =>{
    wrapper.classList.toggle('active');
});