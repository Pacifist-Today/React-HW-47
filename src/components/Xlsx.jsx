import xlsxSvg from "./xlsx.svg"

const Xlsx = () => {
    return (
        <li className="xlsx">
            <img src={xlsxSvg} alt="Xlsx" className="xlsx__img"/>
            <span className="xlsx__span">Xlsx</span>
        </li>
    )
}

export default Xlsx