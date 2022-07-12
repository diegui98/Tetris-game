import { outsideBottomGrid } from "./grid.js";
import { getInputDirection } from "./input.js";

export const BLOCKS_SPEED = 8;
export const FALL_SPEED = 2;
var rightLBlock = [
  { x: 5, y: 1 },
  { x: 5, y: 2 },
  { x: 5, y: 3 },
  { x: 6, y: 3 },
];
var leftLBlock = [
  { x: 6, y: 1 },
  { x: 6, y: 2 },
  { x: 6, y: 3 },
  { x: 5, y: 3 },
];
var IBlock = [
  { x: 5, y: 1 },
  { x: 5, y: 2 },
  { x: 5, y: 3 },
  { x: 5, y: 4 },
];
var squareBlock = [
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 5, y: 2 },
  { x: 6, y: 2 },
];
var leftZBlock = [
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 5, y: 2 },
  { x: 6, y: 2 },
];
var rightZBlock = [
  { x: 5, y: 1 },
  { x: 6, y: 1 },
  { x: 5, y: 2 },
  { x: 4, y: 2 },
];

var randomClassNumber = 0;
var randomBlock = getRandomBlock();
var currentBlock = randomBlock;
var stickedBlock = [];

function getRandomBlock() {
  const blockClasses = 6;
  var randomNumber = 0;
  randomNumber = Math.floor(Math.random() * blockClasses) + 1;
  const blockList = [
    rightLBlock,
    leftLBlock,
    IBlock,
    squareBlock,
    leftZBlock,
    rightZBlock,
  ];
  randomClassNumber = randomNumber;
  return blockList[randomNumber - 1];
}

function getRandomClass() {
  if (randomClassNumber == 1) {
    return "rightLBlock";
  } else if (randomClassNumber == 2) {
    return "leftLBlock";
  } else if (randomClassNumber == 3) {
    return "IBlock";
  } else if (randomClassNumber == 4) {
    return "squareBlock";
  } else if (randomClassNumber == 5) {
    return "leftZBlock";
  } else if (randomClassNumber == 6) {
    return "rightZBlock";
  }
}

export function update() {
  const inputDirection = getInputDirection();
  for (let i = currentBlock.length - 1; i >= 0; i--) {
    currentBlock[i].y += inputDirection.y;
    currentBlock[i].x += inputDirection.x;
  }
}

export function updateFall() {
  for (let i = currentBlock.length - 1; i >= 0; i--) {
    currentBlock[i].y += 1;
  }
}

export function draw(gameBoard) {
  currentBlock.forEach((segment) => {
    const blockElement = document.createElement("div");
    blockElement.style.gridRowStart = segment.y;
    blockElement.style.gridColumnStart = segment.x;
    blockElement.classList.add(getRandomClass());
    gameBoard.appendChild(blockElement);
  });

  drawStickedBlock(gameBoard);
}

export function stickToGrid() {
  if (outsideBottomGrid(currentBlock) || onStickedBlock(currentBlock)) {
    stickedBlock = stickedBlock.concat(getBlockPosition());
  }
}

export function getBlockPosition() {
  return currentBlock;
}

export function spawnNewBlock(gameBoard) {
  if (outsideBottomGrid(currentBlock) || onStickedBlock(currentBlock)) {
    resetBlocks();
    currentBlock = getRandomBlock();
    getRandomClass();
  }
}

function drawStickedBlock(gameBoard) {
  stickedBlock.forEach((segment) => {
    const blockElement = document.createElement("div");
    blockElement.style.gridRowStart = segment.y;
    blockElement.style.gridColumnStart = segment.x;
    blockElement.classList.add("sticked");
    gameBoard.appendChild(blockElement);
  });
}

function onStickedBlock(position) {
  for (let i = currentBlock.length - 1; i >= 0; i--) {
    return stickedBlock.some((segment) => {
      return equalPositions(segment, position[i]);
    });
  }
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y + 1;
}

function resetBlocks() {
  rightLBlock = [
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
  ];
  leftLBlock = [
    { x: 6, y: 1 },
    { x: 6, y: 2 },
    { x: 6, y: 3 },
    { x: 5, y: 3 },
  ];
  IBlock = [
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 5, y: 4 },
  ];
  squareBlock = [
    { x: 5, y: 1 },
    { x: 6, y: 1 },
    { x: 5, y: 2 },
    { x: 6, y: 2 },
  ];
  leftZBlock = [
    { x: 4, y: 1 },
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 6, y: 2 },
  ];
  rightZBlock = [
    { x: 5, y: 1 },
    { x: 6, y: 1 },
    { x: 5, y: 2 },
    { x: 4, y: 2 },
  ];
}
