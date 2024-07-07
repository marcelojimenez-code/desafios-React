import React from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(1); 

    const increment = () => {
        // Incrementar la cantidad
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        // Decrementar la cantidad, asegurándose de que no sea menor que 1
        if (count > 1 && setCount(count -1)) {
            setCount(prevCount => prevCount - 1);
        }
    };  

  return (
        <>
            <div className='center-align'>
                <Button className="btn-floating #ffb74d orange lighten-2"><i className="material-icons">remove</i></Button>
                <span className="card-title">{count}</span>
                <Button className="btn-floating #ffb74d orange lighten-2 pulse"><i className="material-icons">add</i></Button>
            </div>
        </>
  )
}

export default ItemCount
