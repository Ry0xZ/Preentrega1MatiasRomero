import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stockItems, item}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1 )
        }
        
    }

    const onAdd = () => {
        if (counter <= stock){
            setStock(stock - counter);
            setCounter(1);
        }

    }

    return(
        <div className="container d-flex  flex-column justify-content-center text-center aling-items-center " id="itemcount">
            <div className="row mb-2">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-secondary center-block" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-secondary center-block">{counter} </button>
                        <button type="button" className="btn btn-secondary center-block" onClick={incrementarStock} >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
                    
                </div>
                <div className="col-md-12 p-3">
                <Link to={"/category/" + item.category}><button type="button" className="btn btn-dark">atras</button></Link>
                
                </div>
            </div>

        </div>

        
        
    
    )
}

export default ItemCount;