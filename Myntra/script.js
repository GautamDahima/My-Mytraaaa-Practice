  const slider = document.querySelector('.slider');
    const leftBtn = document.querySelector('.btn.left');
    const rightBtn = document.querySelector('.btn.right');

    let scrollAmount = 0;
    const cardWidth = 398.88; // card + margin

    rightBtn.addEventListener('click', () => {
      if (scrollAmount > -(cardWidth * (slider.children.length - 7))) {
        scrollAmount -= 512;
        slider.style.transform = `translateX(${scrollAmount}px)`;
      }
    });

    leftBtn.addEventListener('click', () => {
      if (scrollAmount < 0) {
        scrollAmount += 512;
        slider.style.transform = `translateX(${scrollAmount}px)`;
      }
    });