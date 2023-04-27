console.log("Hello, world!");

// add 16x16 grid of square divs to container
const container = document.querySelector('#container');

// for (let i = 1; i <= 16; i++) {
//     const content = document.createElement('div');
//     content.classList.add(`content${i}`);
//     content.textContent = `${i}`;
//     container.appendChild(content);
// };

for (let i = 1; i <= 16; i++) {
    const content = document.createElement('div');
    content.classList.add(`content`);
    content.textContent = `${i}`;
    container.appendChild(content);
};

let cell = document.querySelector('.content');
cell.addEventListener('click', function (e) {
    console.log(e);
  });