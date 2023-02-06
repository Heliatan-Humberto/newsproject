import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 6

const snakeBody = [{
    x: 11,
    y: 11
}]

let newSegments = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return position.x === segment.x && position.y === segment.y
    })
}

export function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {
        ignoreHead: true
    })
}

// touch input

var touchG = []; var offset = [];
    var snake, food;

    window.addEventListener("touchstart", touchStart);

    window.addEventListener("touchmove", touchMove);

    window.addEventListener("touchend", touchEnd);

function touchStart(evt) {
    evt.preventDefault();
    var touch = evt.touches[0];
    touchG = [touch.pageX, touch.pageY];
}

function touchMove(evt){
    var touch = evt.touches[0];
    offset = [touch.pageX - touchG[0], touch.pageY - touchG[1]];
}

function touchEnd(evt){
    if(Math.abs(offset[0]) > Math.abs(offset[1])){
        if(offset[0] / Math.abs(offset[0]) == 1){
            if(snake.direction[0] == -1){

            }else{
                snake.direction = [1, 0]; 
            }
        }else if(offset[0] / Math.abs(offset[0]) == -1){
            if(snake.direction[0] == 1){

            }else{
                snake.direction = [-1, 0]; 
            }   
        }          
    }else{
        if(offset[1] / Math.abs(offset[1]) == 1){
            if(snake.direction[1] == -1){

            }else{
                snake.direction = [0, 1]; 
            }          
        }else if(offset[1] / Math.abs(offset[1]) == -1){
            if(snake.direction[1] == 1){

            }else{
                snake.direction = [0, -1]; 
            }          
        }
    }    
}        
