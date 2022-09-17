import dirSvg from "./dir.svg"
import FileStructures from "./FileStructures";

const Dir = props => {
    const data = props.data

    return (
        <>
            <img src={dirSvg} alt="Folder" className="dir__img"/>
            <span> Folder</span>
            {
                Array.isArray(data.children) && data.children.length
                    ?
                    <ul>
                        {
                            data.children.map((value, index) => {
                                return <FileStructures key={index} value={value}/>
                            })
                        }
                    </ul>
                    :
                null
            }
        </>
    )
}

export default Dir