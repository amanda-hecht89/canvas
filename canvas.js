window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // x pos, y pos, height, width
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 200, 200);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.strokeRect(320, 420, 135, 268);

    ctx.beginPath();













});