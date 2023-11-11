export const toggleBuildTowerView = () => {
    return {
        type: 'TOGGLE_BUILD_TOWER_VIEW',
    }
}

export const pickTower = towerType => {
    return {
        type: 'PICK_TOWER',
        payload: towerType,
    }
}
