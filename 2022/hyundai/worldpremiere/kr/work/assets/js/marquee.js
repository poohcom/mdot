const marqueeArr = document.querySelectorAll('.marquee');
marqueeArr.forEach(marquee => {
    const marqueeRow = marquee.querySelector('.marquee_row');
    const marqueeItem = marqueeRow.querySelector('.marquee_item');
    const cloneNum = Number(marqueeItem.getAttributeNode('data-clone').value);
    for (let i = 1; i < cloneNum; i++) {
        const clone = marqueeItem.cloneNode(true);
        marqueeRow.appendChild(clone);
    }
    for (let i = 0; i < 3; i++) {
        const clone = marqueeRow.cloneNode(true);
        marquee.appendChild(clone);
    }

    const marqueeMove = (dir) => {
        const rows = marquee.querySelectorAll('.marquee_row');
        rows.forEach(row => {
            let rowWidth = row.getBoundingClientRect().width;
            let currentX = Number(getComputedStyle(row).getPropertyValue('--pos-x'));
            let newX = 0;
            switch (dir) {
                case 'left':
                    newX = currentX ? (currentX - 1) : -rowWidth;
                    (newX < (-2 * rowWidth)) && (newX = -rowWidth);
                    break;
                default:
                    newX = currentX ? (currentX + 1) : -rowWidth;
                    (newX > 0) && (newX = -rowWidth);
            }
            row.style.setProperty('--pos-x', newX);
        });
    };


    let speed = Number(marquee.getAttributeNode('data-speed').value);
    let direction = 'left';
    let marqueeInterval = setInterval(marqueeMove, speed, direction);
    marquee.onmouseenter = () => {
        clearInterval(marqueeInterval);
    }
    marquee.onmousemove = () => {
        clearInterval(marqueeInterval);
    }
    marquee.onmouseleave = () => {
        clearInterval(marqueeInterval);
        marqueeInterval = setInterval(marqueeMove, speed, direction);
    }
});

var marquees = $('.marquee_item')
$(marquees).each(function(i) {
    if((i+1) % 2 === 0) {
        $(this).addClass('zig')
    } else {
        $(this).addClass('zag')
    }
})
