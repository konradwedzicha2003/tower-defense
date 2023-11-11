// export const path = [
//     1,2,3,4,14,15,16,17,7,8,9,
//     10,20,30,40,50,49,48,47,46,
//     45,44,43,42,52,62,63,64,65,
//     66,67,68,69,79,89,88,87,86,
//     85,84,83,82,81
// ];

export const path = [
    1,2,3,4,5,6,7,8,18,28,38,
    48,47,46,45,44,43,42,41,51,61,71,81,91
];

const makeLand = (path) => {
    let arr = [];
    for (let i = 1; i < 101; i++) {
        arr.push(i);   
    }
    return arr.filter(arrNum => !path.some(num => num === arrNum))
} 

export const land = [
    ...makeLand(path)
];

export const pathStart = {
    start: 0
};

export const border = [
    1,2,3,4,5,6,7,8,9,10,11,
    20,21,30,31,40,41,50,51,
    60,61,70,71,80,81,90,91,
    92,93,94,95,96,97,98,99,100
];

export const excluededMaxRangeStartCells = [
    9,10,19,20,29,30,39,40,49,50,59,60,69,70,79,80,89,90,99,100
];

export const excluededMinRangeStartCells = [
    10,20,30,40,50,60,70,80,90,100
];

export const basicEnemy = {
    health: 2,
    position: 1,
    direction: 'bottom',
    initialRender: true,
    step: 0,
    bounty: 10,
};

export const initialReduxValues = {
    grid: {
        gridCells: [],
    },
    enemies: [],
    towerPick: {
        isBuildTowerViewOpened: false,
        pickedTower: '',
    },
    money: 100,
    towers: {
        towerList: []
    },
    time: 0,
};

export const towerTypes = {
    basicTower: {
        name: 'basic-tower',
        damage: 0.5,
        cost: 10,
    },

    magicTower: {
        name: 'magic-tower',
        damage: 0.1 ,
        cost: 25,
    },
};
