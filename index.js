// BACKGROUND - MOUSE MOVE EFFECT 

let x, y;
const update = e => {
    x = e.clientX 
    y = e.clientY 
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}
  
document.addEventListener('mousemove',update)


//SECTIONS TEXT ANIMATIONS + VIDEO PLAY - PAUSE
const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25,
  delay: 500 
};

const callback = entries => {
  entries.forEach(entry => {
		const { target: section } = entry;
        let childrenOne = [...section.children][0];
        let childrenTwo = [...section.children][1];

        if (entry.intersectionRatio >= 0.25) {
            //text animation on
            section.classList.add("is-visible");
            if(section.classList[0] === 'left') {
                section.classList.add("movefromleft");
            } else if(section.classList[0] === 'right') {
                section.classList.add("movefromright");
            }
            //video play
            if(childrenOne && childrenOne.tagName === 'VIDEO') {
                childrenOne.play();
            } else if(childrenTwo && childrenTwo.tagName === 'VIDEO') {
                childrenTwo.play();

            }

        } else {
            //text animation off
            if(section.classList[0] === 'left') {
                section.className = 'left'
            } else if(section.classList[0] === 'right') {
                section.className = 'right'
            }
            //video pause
            if(childrenOne && childrenOne.tagName === 'VIDEO') {
                childrenOne.pause();
            } else if(childrenTwo && childrenTwo.tagName === 'VIDEO') {
                childrenTwo.pause();
            }
        }

  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => observer.observe(section));

//FIRST WAVE HAND ANIMATION THEN ON HOVER

const handPicture = document.querySelector('#hello-hand');

handPicture.style.animation = 'wave-hand 1.5s ease-in-out';
setTimeout(() => {
    handPicture.style.animation = '';
}, 1600)

handPicture.addEventListener('mouseenter', () => {
    handPicture.style.animation = 'wave-hand 1.5s ease-in-out';
    setTimeout(() => {
        handPicture.style.animation = '';
    }, 1600)
})

//COPY CV-RESUME
const resume = document.querySelector('#resume');
const copiedNode = document.querySelector('#contact div:last-of-type p');

resume.addEventListener('click', (e) => {
    e.preventDefault();
    copiedNode.classList.add('copied');
    setTimeout(() => {
        copiedNode.className = '';
    }, 1000);

    navigator.clipboard.writeText('julie.plantey@gmail.com');
})
