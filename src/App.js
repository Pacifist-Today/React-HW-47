import './App.css';
import FileStructures from "./components/FileStructures";
import disk from "./local disk.svg"
import directories from "./directories.json";

const App = () => {
    return(
        <div>
            <ul className="local_disk">
                <div className="localDisk">
                    <img src={disk} alt="" className="localDisk__img"/>
                    <span className="localDisk__span"> Local Disk</span>
                    {}
                </div>
                <ul>
                {
                    directories.map((value, index) => {
                        return <FileStructures value={value} key={index}/>
                    })
                }
                </ul>
            </ul>
        </div>
    )
}

export default App;