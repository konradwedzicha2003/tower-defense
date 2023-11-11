export const buyTower = cost => {
    return {
        type: 'BUY_TOWER',
        payload: cost,
    }
}

export const enemyKilled = bounty => {
    return {
        type: 'ENEMY_KILLED',
        payload: bounty,
    }
}

