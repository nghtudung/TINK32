const em = document.querySelector('.em');
const classname = document.querySelector('.classname');
const header = document.querySelector('.header');
em.addEventListener('animationend', ()=>{
    classname.style.opacity = 1;
    classname.classList.add('animate__animated','animate__zoomInDown');
});
classname.addEventListener('animationend', ()=>{
    header.style.opacity = 1;
    header.classList.add('animate__animated','animate__slideInDown');
});

const ins_visit_btn = document.querySelector('.visit-btn');
ins_visit_btn.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/it.hoc.it.khon/');
});
document.addEventListener("DOMContentLoaded", function() {
    const emailChildren = document.querySelectorAll('.email-child');

    emailChildren.forEach(email => {
        email.addEventListener('click', function() {
            const originalText = this.innerText;
            const emailText = this.innerText;

            // Sao chép email vào clipboard
            navigator.clipboard.writeText(emailText).then(() => {
                // Thay đổi văn bản
                this.innerText = 'Đã sao chép';
                email.classList.add('changed');
                // Đặt lại văn bản sau 2 giây
                setTimeout(() => {
                    this.innerText = originalText;
                    email.classList.remove('changed');
                }, 1000);
            }).catch(err => {
                console.error('Không thể sao chép: ', err);
            });
        });
    });
});