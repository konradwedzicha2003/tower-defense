export const createGrid = cells => {
    return {
        type: 'CREATE_GRID',
        payload: cells,
    }
}

export const buildTower = (id, towerType) => {
    return {
        type: 'BUILD_TOWER',
        payload: towerType,
        id: id,

    }
}

export const changeEnemyPosition = (id, enemyId) => {
    return {
        type: 'ENEMY_CHANGED_POSITION',
        payload: enemyId,
        id: id,
    }
}
