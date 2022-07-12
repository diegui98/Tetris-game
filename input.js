import { getBlockPosition } from "./Blocks.js"
import { outsideLeftGrid, outsideRightGrid, outsideBottomGrid } from "./grid.js"


let inputDirection = { x: 0, y: 0 }
let sendInputDirection = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowLeft" :
            if (outsideLeftGrid(getBlockPosition())) break
            inputDirection = { x: -1, y: 0 }
            break
        case "ArrowRight" :
            if (outsideRightGrid(getBlockPosition())) break
            inputDirection = { x: 1, y: 0 }
            break
        case "ArrowDown" :
            if (outsideBottomGrid(getBlockPosition())) break  //crear y agregar onBlock() tal vez
            inputDirection = { x: 0, y: 1 }
            break
        // agregar caso ArrowUP que rote la pieza
    }
})

export function getInputDirection() {
    sendInputDirection = inputDirection
    inputDirection = { x: 0, y: 0 }
    return sendInputDirection
}
