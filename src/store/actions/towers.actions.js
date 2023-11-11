export const checkEnemiesAround = (id, towerRange) => {
    return {
        type: 'TOWER_CHECK_ENEMIES_AROUND',
        payload: towerRange,
        id: id,
    }
}

export const addTower = (id, towerType) => {
    return {
        type: 'ADD_TOWER',
        payload: towerType,
        id: id,

    }
}