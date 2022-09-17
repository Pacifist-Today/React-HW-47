import pdfSvg from "./pdf.svg"

const Pdf = () => {
    return (
        <li className="pdf">
            <img src={pdfSvg} alt="PDF" className="pdf__img"/>
            <span className="pdf__span">PDF</span>
        </li>
    )
}

export default Pdf