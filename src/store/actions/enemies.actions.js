export const spawnEnemy = stats => {
    return {
        type: 'SPAWN_ENEMY',
        payload: stats,
    }
}

export const moveEnemy = (id, movementProps) => {
    return {
        type: 'MOVE_ENEMY',
        payload: movementProps,
        id: id,
    }
}

export const shootEnemy = (id, damage) => {
    return {
        type: 'SHOOT_ENEMY',
        payload: damage,
        id: id,
    }
}
