const em = document.querySelector('.em');
const classname = document.querySelector('.classname');
const header = document.querySelector('.header');
const after_intro = document.querySelector('.after-intro');
const foot = document.querySelector('.footer');
window.scroll({
    top: 0,
    behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
});
em.addEventListener('animationend', ()=>{
    classname.style.opacity = 1;
    classname.classList.add('animate__animated','animate__zoomInDown');
});
classname.addEventListener('animationend', ()=>{
    header.style.opacity = 1;
    after_intro.style.opacity = 1;
    foot.style.opacity = 1;
    header.classList.add('animate__animated','animate__slideInDown');
});

const ins_visit_btn = document.querySelector('.visit-btn');
ins_visit_btn.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/it.hoc.it.khon/');
});
const email_left = document.querySelector('.email-left');
const email_right = document.querySelector('.email-right');
email_left.addEventListener('click', function() {
    const originalText = 'tin.k32.cbn@gmail.com';
    const emailText = 'tin.k32.cbn@gmail.com';

    // Sao chép email vào clipboard
    navigator.clipboard.writeText(emailText).then(() => {
        // Thay đổi văn bản
        email_left.innerText = 'Đã sao chép';
        email_left.classList.add('changed');
        // Đặt lại văn bản sau 2 giây
        setTimeout(() => {
            email_left.innerText = originalText;
            email_left.classList.remove('changed');
        }, 500);
    }).catch(err => {
        console.error('Không thể sao chép: ', err);
    });
});
email_right.addEventListener('click', function() {
    const originalText = 'k32ctin@gmail.com';
    const emailText = 'k32ctin@gmail.com';

    // Sao chép email vào clipboard
    navigator.clipboard.writeText(emailText).then(() => {
        // Thay đổi văn bản
        email_right.innerText = 'Đã sao chép';
        email_right.classList.add('changed');
        // Đặt lại văn bản sau 2 giây
        setTimeout(() => {
            email_right.innerText = originalText;
            email_right.classList.remove('changed');
        }, 500);
    }).catch(err => {
        console.error('Không thể sao chép: ', err);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li');
    let currentIndex = 0;

    const updateOpacity = () => {
        listItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0.15';
            }
        });
    };

    const checkScroll = () => {
        const currentItem = listItems[currentIndex];
        const rect = currentItem.getBoundingClientRect();

        if (rect.bottom <= window.innerHeight / 2) {
            if (currentIndex < listItems.length - 1) {
                currentIndex++;
                updateOpacity();
            }
        } else if (rect.top >= window.innerHeight / 2 && currentIndex > 0) {
            currentIndex--;
            updateOpacity();
        }
    };

    document.addEventListener('scroll', checkScroll);

    // Set initial opacity
    updateOpacity();
});
