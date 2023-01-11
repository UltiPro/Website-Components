const text = document.querySelector(".text");

const inputValue = "Hello World!";
const speed = 80;

let index = 1;
let timeout;

const WriteAnimation = () => {
	text.innerHTML = inputValue.slice(0, index);
	index++;
	if(index > inputValue.length) return;
	timeout = setTimeout(WriteAnimation, speed);
}

WriteAnimation();