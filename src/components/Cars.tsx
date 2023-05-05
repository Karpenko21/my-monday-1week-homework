type CarsType = {
    topCars: Array<TopCarsType>
}
type TopCarsType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsType) => {
    return (
        <>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.topCars.map((car, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{car.manufacturer}</td>
                                <td>{car.model}</td>
                            </tr>)
                    }
                )
                }
            </table>
        </>
    )
}
