import Rectangle from "./rectangle";
import RightFig from "./right_fig";

const canvas = document.getElementById("cnvs");

const gameState = {figs: []};



function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength
        update(gameState.lastTick)
    }
}

function draw(tFrame) {
    const context = canvas.getContext('2d');

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // draw
    gameState.figs.forEach(r=>{
        context.beginPath()
        context.moveTo(r.point(0).x, r.point(0).y)
        for (let i = 1; i < r.N; i++) {
            p = r.point(i)
            context.lineTo(p.x, p.y)
        }
        context.fill()        
    })

}

function update(tick) {

    for(let j = 0; j < gameState.figs.length; j++){
        for(let i = j + 1; i < gameState.figs.length; i++){
            r = gameState.figs[j]
            r2 = gameState.figs[i]
            if(r.intersects(r2)){
                v = {x: r.x - r2.x, y: r.y - r2.y}
                n = Math.abs(v.x) + Math.abs(v.y)
                if(n){
                    v.x /= n
                    v.y /= n
                }
                r.vx = v.x
                r.vy = v.y
                r2.vx = -v.x
                r2.vy = -v.y
            }
        }

        if(r.x < 0 || r.x > canvas.width) r.vx = -r.vx;
        if(r.y < 0 || r.y > canvas.height) r.vy = -r.vy;

        r.x += r.vx
        r.y += r.vy
    }
}

function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run)

    const nextTick = gameState.lastTick + gameState.tickLength
    let numTicks = 0

    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick
        numTicks = Math.floor(timeSinceTick / gameState.tickLength)
    }
    queueUpdates(numTicks)
    draw(tFrame)
    gameState.lastRender = tFrame
}

function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}

function setup() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gameState.lastTick = performance.now()
    gameState.lastRender = gameState.lastTick
    gameState.tickLength = 15 //ms

    for(i = 0; i < 10; i++){
        [x, y] = [Math.random() * (canvas.width - 10), Math.random() * (canvas.height - 10)]
        vx = Math.random() * 2 - 1
        vy = Math.random() * 2 - 1
        n = Math.abs(vx) + Math.abs(vy)
        vx /= n
        vy /= n
        r = new RightFig(x, y, Math.random() * Math.PI, 3, vx, vy)
        gameState.figs.push(r)
    }

    for(i = 0; i < 10; i++){
        [x, y] = [Math.random() * (canvas.width - 10), Math.random() * (canvas.height - 10)]
        vx = Math.random() * 2 - 1
        vy = Math.random() * 2 - 1
        n = Math.abs(vx) + Math.abs(vy)
        vx /= n
        vy /= n
        r = new RightFig(x, y, Math.random() * Math.PI, 6, vx, vy)
        gameState.figs.push(r)
    }

    for(i = 0; i < 10; i++){
        [x, y] = [Math.random() * (canvas.width - 10), Math.random() * (canvas.height - 10)]
        vx = Math.random() * 2 - 1
        vy = Math.random() * 2 - 1
        n = Math.abs(vx) + Math.abs(vy)
        vx /= n
        vy /= n
        r = new RightFig(x, y, Math.random() * Math.PI, 15, vx, vy)
        gameState.figs.push(r)
    }
}

setup();
run();
