import NewItem from './components/NewItem';
import Item from './components/Item';
import ItemList from './components/ItemList';


    function App() {
        const SaveInnerDataHandler = (e) => {
            
            console.log(e)
        }

        return(
            <div>
                <NewItem onSaveInnerData={SaveInnerDataHandler}></NewItem>
            </div>
        )
    }

export default App;
