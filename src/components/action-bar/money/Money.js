import React from "react";
import './money.scss'
import { useSelector } from "react-redux";
import { getMoney } from "../../../store/selectors/getMoney";

const Money = () => {
    const currentMoney = useSelector(getMoney)

    return (
      <div className='money'>
        {currentMoney}$
      </div>
    )
  }
  
  export default Money;