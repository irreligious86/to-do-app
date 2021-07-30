import React, {useState} from "react";
import './App.css';
import ListItem from "../list-item/list-item";
import state from "../../state";


function App() {

    const [value, setValue] = useState(state);

    const logDone = (id) => {
        setValue(prev => prev.map(
            (item) => {
                if (item.id === id) {
                    return {
                        ...item, done: !item.done
                    }
                }
                return item;
            }
        ))
    };

    const logDelete = (id) => {
        setValue(prev => prev.filter(item => item.id !== id))
    };

    const result = value.map(item =>
        <ListItem key={item.id}
                  title={item.title}
                  id={item.id}
                  done={item.done}
                  logDone={logDone}
                  logDelete={logDelete}/>
    )

    return (
        <div className="App">
            <h1>Todos</h1>
            <ul className="list-group">
                {result}
            </ul>
        </div>
    );
}

export default App;
