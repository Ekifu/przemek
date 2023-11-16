
import { useState } from "react";
function NewItem(props){
    const [Item, NewItem] = useState({
        produkt: '',
    })
    const change1 = (e) =>{
        NewItem((prevState) =>
        {return{
            ...prevState, produkt: e.target.value
        }})
    }
    const Create = () =>{
        props.onSaveInnerData(Item)
    }
    return(
        <div>
            <h1>Lista zakupów</h1>
            <br></br><br></br>
            Produkt<input required onChange={change1} placeholder="Wpisz nazwe"></input>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <button onClick={Create}>Dodaj do listy</button>

        </div>

    );
}
export default NewItem;