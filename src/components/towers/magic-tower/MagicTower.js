import React, { useState } from "react";
import './magic-tower.scss'
import { useDispatch } from "react-redux";
import { path, towerTypes } from "../../../config/config";
import { shootEnemy } from "../../../store/actions/enemies.actions";
import { useShootLogic } from "../../../hooks/use-shoot-logic";

const MagicTower = ({position}) => {
    const dispatch = useDispatch(); 
    const [turretDirection, setTurretDirection] = useState(0);
    const [isShooting, setIsShooting] = useState(false);

    const shootEnemyFunc = enemy => {
        if (enemy?.id) {
            dispatch(shootEnemy(enemy.id, towerTypes.magicTower.damage))

            const positionIndex = path.indexOf(enemy.position)
            const actualPosition = path[positionIndex + 1]

            const defineTurretCloseDirection = () => {
                const checkIsPreviousNumberNegative = (number) => {
                    (enemy.position - position) % 100 < 0 ? -Math.abs(number) : number
                }

                switch ((actualPosition - position) % 100) {
                    case -10: 
                        return -90;
                    case -11: 
                        return -135;
                    case -9: 
                        return -45;
                    case 1: 
                        return 0;
                    case 5: 
                        return 45;
                    case 10: 
                        return 90;
                    case 9: 
                        return 135;
                    case -1: 
                        return 180;


                    case -12: 
                        return -155;
                    case -22: 
                        return -135;
                    case -21: 
                        return -115;
                    case -20: 
                        return -90;
                    case -19: 
                        return -70;
                    case -18: 
                        return -45;
                    case -8: 
                        return -20;
                    case 2: 
                        return 0;
                    case 12: 
                        return 20;
                    case 22: 
                        return 45;
                    case 21: 
                        return 70;
                    case 20: 
                        return 90;
                    case 19: 
                        return 115;
                    case 18: 
                        return 135;
                    case 8: 
                        return 155;
                    case -2: 
                        return 180;
                        
                    default:
                        return 0;
                }
            }

            setTurretDirection(defineTurretCloseDirection())
            setIsShooting(true)
            setTimeout(() => setIsShooting(false), 500)

        }
    };
    useShootLogic({
        shootEnemyFunc, 
        towerPosition: position,
        towerRange: 5,
    })

    return (
        <> 
            <div className='magic-tower'/>  

            <div className='magic-turret'
                style={{
                    transition: 'transform 0.5s',
                    transform: `rotate(${turretDirection}deg)`,
                    background: `${isShooting ? 'red' : 'green'}`
                }}
            />
        </>    )
  }
  
  export default MagicTower;
  