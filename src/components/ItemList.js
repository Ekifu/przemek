import Item from "./Item";

const ItemList = (props) =>{
    return(
        <div>
            {props.produkt.map((item)=>(
                <Item
                key={item.id}
                title={item.produkt}
                />
            ))}
        </div>
    );
}

export default ItemList;