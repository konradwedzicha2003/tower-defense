import { excluededMaxRangeStartCells, excluededMinRangeStartCells, path } from "../config/config";

export const defineCellsInRange = (position, cells, rangeWidth) => {

    const checkIsExcluded = (cell) => {
        if (rangeWidth === 5) {
            return !excluededMaxRangeStartCells.some(el => el === cell.cellNumber)
        } else {
            return !excluededMinRangeStartCells.some(el => el === cell.cellNumber)
        }
    };
    
    const findCellWithGivenPosition = (cells, position) => {
        return cells.find(cell => position === cell.cellNumber)
    };

    // In case we want to watch on current enemy position and his cells in range
    // const positionIndex = path.indexOf(position)
    // const actualPosition = path[positionIndex + 1]
    const actualPosition = position

    const cellsCopy = [...cells];
    const cellsInRange = [];

    const positionCell = findCellWithGivenPosition(cellsCopy, actualPosition)

    const startFarthestLeft =  findCellWithGivenPosition(cellsCopy, actualPosition - 22)

    const startLeftTop = findCellWithGivenPosition(cellsCopy, actualPosition - 21)

    const startTop = findCellWithGivenPosition(cellsCopy, actualPosition - 20)

    const startLeftBottom = findCellWithGivenPosition(cellsCopy, actualPosition - 12)

    const startBottom = findCellWithGivenPosition(cellsCopy, actualPosition - 2)

    const startMidTop = findCellWithGivenPosition(cellsCopy, actualPosition - 10)

    const startMidBottom = findCellWithGivenPosition(cellsCopy, actualPosition - 1)

    const startMedium = findCellWithGivenPosition(cellsCopy, actualPosition - 11)

    const startCell = 
        startFarthestLeft && checkIsExcluded(startFarthestLeft) && rangeWidth === 5
        ? startFarthestLeft : startLeftTop &&  checkIsExcluded(startLeftTop) && rangeWidth === 5
        ? startLeftTop : startLeftBottom && checkIsExcluded(startLeftBottom) && rangeWidth === 5
        ? startLeftBottom : startTop &&  checkIsExcluded(startTop) && rangeWidth === 5
        ? startTop : startMedium &&  checkIsExcluded(startMedium)
        ? startMedium : startBottom &&  checkIsExcluded(startBottom) && rangeWidth === 5
        ? startBottom : startMidTop &&  checkIsExcluded(startMidTop)
        ? startMidTop : startMidBottom && checkIsExcluded(startMidBottom)
        ? startMidBottom : positionCell

    let currentCellIndex = cellsCopy.indexOf(startCell);

    const iterationCount = rangeWidth === 5  
    ? (positionCell.cellNumber - startCell.cellNumber) >= 20
        ? 5 
        : (positionCell.cellNumber - startCell.cellNumber) >= 10 
            ? 4 
            : 3 
    : (positionCell.cellNumber + 10) > 100 || positionCell.cellNumber <= 10
        ? 2
        : 3

    for (let i = 0; i < iterationCount; i++) {
        if (cellsCopy[currentCellIndex] !== undefined) {
            cellsInRange.push(cellsCopy[currentCellIndex])

            const iterationWidth = rangeWidth === 5 
            ? positionCell.cellNumber % 10 === 0 
                ? 3 
                : positionCell.cellNumber % 10 === 9 
                    ? 4 
                    : positionCell.cellNumber % 10 === 8 
                        ? 5 
                        : positionCell.cellNumber % 10 === 1
                            ? 3
                            : positionCell.cellNumber % 10 === 2
                                ? 4
                                : 5
            : positionCell.cellNumber % 10 === 0 
                ? 2 
                : positionCell.cellNumber % 10 === 1
                    ? 2
                    : 3

            for (let i = 1; i < iterationWidth; i++) {
                cellsInRange.push(cellsCopy[currentCellIndex + i])
            }
            currentCellIndex += 10
        }
    }

    return cellsInRange
}