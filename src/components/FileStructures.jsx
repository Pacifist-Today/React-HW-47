import Docx from "./Docx";
import Xlsx from "./Xlsx";
import Pdf from "./Pdf";
import Dir from "./Dir";

const FileStructures = (props) => {
    const data = props.value
    let fileType = null

    if (data.type === "file") {
        fileType = data.name.slice(data.name.indexOf(".") + 1)
        if (fileType === "docx") return <Docx data={data}/>
        if (fileType === "xlsx") return <Xlsx data={data}/>
        if (fileType === "pdf") return <Pdf data={data}/>
    }
    if (data.type === "dir") return (
        <li>
            <Dir data={data}/>
        </li>
    )
}

export default FileStructures