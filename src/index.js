import RightFig from "./right_fig";
import Circle from "./circle";
import Common from "./common";
import vec2 from "./vec2";
import QuadTree from "./quad-tree";
import Rectangle from "./rectangle";

const canvas = document.getElementById("cnvs");
const gameState = {figs: []};

function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength
        update(gameState.lastTick)
    }
}
let time = 0
let frames = 0
let fps = 0
function draw(tFrame) {
    const context = canvas.getContext('2d');
    context.font = "20px serif";
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // draw
    // gameState.figs.forEach(r=>{
    //     context.beginPath()
    //     if(r.type == "RightFig"){
    //         context.moveTo(r.point(0).x, r.point(0).y)
    //         for (let i = 1; i < r.N; i++) {
    //             const p = r.point(i)
    //             context.lineTo(p.x, p.y)
    //         }
    //     }
    //     if(r.type == "Circle"){
    //         context.arc(r.x, r.y, r.r, 0, Math.PI * 2)
    //     }
    //     context.fillStyle = r.color
    //     context.fill()      
    // })

    gameState.QTRoot.draw(context)

    if(!tFrame) return

    const dt = tFrame - gameState.lastTick
    frames++
    time += dt
    if(time >= 1000){
        time -= 1000
        fps = frames
        frames = 0
    }

    context.fillStyle = "black"
    context.fillText(fps, 10, 20)
}

function update(tick) {

    gameState.QTRoot.processCollisions()

    // for(let j = 0; j < gameState.figs.length; j++){
    //     const r = gameState.figs[j]
    //     for(let i = j + 1; i < gameState.figs.length; i++){
    //         const r2 = gameState.figs[i]
    //         if(r.intersects(r2)){
    //             const v = new vec2(r.x - r2.x, r.y - r2.y).norm()
    //             r.vx = v.x
    //             r.vy = v.y
    //             r2.vx = -v.x
    //             r2.vy = -v.y
    //         }
    //     }

    //     if(r.x < 0 || r.x > canvas.width) r.vx = -r.vx;
    //     if(r.y < 0 || r.y > canvas.height) r.vy = -r.vy;

    //     r.x += r.vx
    //     r.y += r.vy

    //     if(r.lives <= 0) gameState.figs.splice(j, 1)
    // }
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

    gameState.QTRoot = new QuadTree(new Rectangle(0, 0, canvas.width, canvas.height))

    for(let i = 0; i < 1000; i++){
        const v = new vec2(Math.random() * 2 - 1, Math.random() * 2 - 1).norm()
        const rad = Math.random() * 2 + 5
        let [x, y] = [Math.random() * (canvas.width - 2 * rad) + rad, Math.random() * (canvas.height - 2 * rad) + rad]
        const r = new RightFig(x, y, v.x, v.y, 3, rad, Math.random() * Math.PI)
        // gameState.figs.push(r)
        gameState.QTRoot.insert(r)
    }

    for(let i = 0; i < 1000; i++){
        const v = new vec2(Math.random() * 2 - 1, Math.random() * 2 - 1).norm()
        const rad = Math.random() * 2 + 5
        let [x, y] = [Math.random() * (canvas.width - 2 * rad) + rad, Math.random() * (canvas.height - 2 * rad) + rad]
        const r = new RightFig(x, y, v.x, v.y, 6, rad, Math.random() * Math.PI)
        // gameState.figs.push(r)
        gameState.QTRoot.insert(r)
    }

    for(let i = 0; i < 1000; i++){
        const v = new vec2(Math.random() * 2 - 1, Math.random() * 2 - 1).norm()
        const rad = Math.random() * 2 + 5
        let [x, y] = [Math.random() * (canvas.width - 2 * rad) + rad, Math.random() * (canvas.height - 2 * rad) + rad]
        const r = new Circle(x, y, v.x, v.y, rad)
        // gameState.figs.push(r)
        gameState.QTRoot.insert(r)
    }
}

setup();
run();
