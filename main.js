import { update as updateBlock, draw as drawBlock, BLOCKS_SPEED, FALL_SPEED, updateFall, spawnNewBlock, stickToGrid } from './Blocks.js'

let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / BLOCKS_SPEED) return



    update()
    draw()

    const secondsSinceLastRender2 = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender2 < 1 / FALL_SPEED) return

    lastRenderTime = currentTime

    updateFall()
}

window.requestAnimationFrame(main)

function update(){
    updateBlock()
}

function draw(){
    gameBoard.innerHTML = ""
    stickToGrid()
    spawnNewBlock(gameBoard)
    drawBlock(gameBoard)
}