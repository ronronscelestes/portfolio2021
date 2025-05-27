// BACKGROUND - MOUSE MOVE EFFECT 

let x, y;
const update = e => {
    x = e.clientX 
    y = e.clientY 
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}
  
document.addEventListener('mousemove',update)

//COPY CV-RESUME
const resume = document.querySelector('#resume');
// const copiedNode = document.querySelector('#contact div:last-of-type p');

resume.addEventListener('click', (e) => {
    e.preventDefault();
    // copiedNode.classList.add('copied');
    // setTimeout(() => {
    //     copiedNode.className = '';
    // }, 1500);

    navigator.clipboard.writeText('julie.plantey@gmail.com');
})
