

const GRID_X = 10
const GRID_Y = 24

export function outsideLeftGrid(position) {
    return position.some ( segment => {
        return segment.x < 2
    }
    ) 
}

export function outsideRightGrid(position) {
    return position.some ( segment => {
        return segment.x > GRID_X - 1
    }
    ) 
}

export function outsideBottomGrid(position) {
    return position.some ( segment => {
        return segment.y > 24 - 1
    })
}

export function outsideTopGrid(position) {
    return position.some ( segment => {
        return segment.y < 1
    })
}



