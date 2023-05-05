import React, {useState} from "react";
import {Button} from "./Button";

type NewComponentProps = {
    money: MoneyType[]
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}
type FilterType = "All" | "Dollars" | "RUBLS"

export const NewComponent = (props: NewComponentProps) => {

    const [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = props.money;
    if (filter === "Dollars") {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    } else if (filter === "RUBLS") {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
        <ul>
            {currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>{el.banknots} </span>
                        <span>{el.value} </span>
                        <span>{el.number}</span>
                    </li>
                )
            })}
        </ul>

        <div style={{marginLeft: '35px'}}>
            <Button name={"All"} callBack={() => onClickFilterHandler("All")}/>
            <Button name={"Dollars"} callBack={() => onClickFilterHandler("Dollars")}/>
            <Button name={"RUBLS"} callBack={() => onClickFilterHandler("RUBLS")}/>
           {/*
        <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
        <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>*/}
        </div>
</>
)
}
