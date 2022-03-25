import React, { useState } from "react";
import foodData from "../foodData"

export default function AppTwo() {

    const [data, setData] = useState(foodData)

    const items = data.foods.map((food) => {
        return <h3>{food}</h3>
    })

    return (
        <div>
            <h2>AppTwo</h2>
            {items}
        </div>
    )
}