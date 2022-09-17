import docxSvg from "./docx.svg"

const Docx = () => {
    return (
        <li className="docx">
            <img src={docxSvg} alt="Docx" className="docx__img"/>
            <span className="docx__span">Docx</span>
        </li>
    )
}

export default Docx