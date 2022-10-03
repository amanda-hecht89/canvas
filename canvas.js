window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // x pos, y pos, height, width
    // filled box
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 200, 200);

    //outline box
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.strokeRect(160, 130, 135, 268);

    //circles
    ctx.strokeStyle = 'hotpink';
    ctx.lineWidth = 13;
    ctx.beginPath();
    ctx.arc(300, 400, 75, 0, 2 * Math.PI);
    ctx.stroke();
    
    //lines
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(500, 100);
    ctx.lineTo(500, 230);
    ctx.closePath();
    ctx.stroke();

    //painting
    let painting = false;

    function startPos(e) {
        ctx.beginPath();
        draw(e);
        painting = true;
    }

    function endPos() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'purple';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    //event listeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);













});