import React, { useState, useEffect } from "react";
import './basic-tower.scss'
import { useDispatch } from "react-redux";
import { towerTypes, path } from "../../../config/config";
import { shootEnemy } from "../../../store/actions/enemies.actions";
import { useShootLogic } from "../../../hooks/use-shoot-logic";

const BasicTower = ({position}) => {

    const dispatch = useDispatch(); 
    const [turretDirection, setTurretDirection] = useState(0);
    const [isShooting, setIsShooting] = useState(false);

    const shootEnemyFunc = enemy => {
        if (enemy?.id) {
            dispatch(shootEnemy(enemy.id, towerTypes.basicTower.damage))

            const positionIndex = path.indexOf(enemy.position)
            const actualPosition = path[positionIndex + 1]

            const defineTurretDirection = () => {
                switch ((actualPosition - position) % 100) {
                    case -10: 
                        return -90;
                    case -11: 
                        return -135;
                    case -9: 
                        return -45;
                    case 1: 
                        return 0;
                    case 11: 
                        return 45;
                    case 10: 
                        return 90;
                    case 9: 
                        return 135;
                    case -1: 
                        return 180;
                    default:
                        return 0;
                }
            }

            setTurretDirection(defineTurretDirection())
            setIsShooting(true)
            setTimeout(() => setIsShooting(false), 500)

        }
    };

    useShootLogic({
        shootEnemyFunc, 
        towerPosition: position,
        towerRange: 3,
    })

    
    return (
        <> 
            <div className='basic-tower'/>  

            <div className='basic-turret'
                style={{
                    transition: 'transform 0.5s',
                    transform: `rotate(${turretDirection}deg)`,
                    background: `${isShooting ? 'red' : 'green'}`
                }}
            />
        </>
    )
  }
  
  export default BasicTower;
  