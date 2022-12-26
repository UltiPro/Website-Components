const btn = document.querySelector('.btn');

const btnAnimation = e => {
    const insideBtnTop = e.clientY - e.target.offsetTop;
    const insideBtnLeft = e.clientX - e.target.offsetLeft;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = insideBtnTop + 'px';
    circle.style.left = insideBtnLeft + 'px';

    e.target.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },300);
}

btn.addEventListener('click', btnAnimation);