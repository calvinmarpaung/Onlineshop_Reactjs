import React from "react";

const Item = (props) =>{
    const {item, setCart, handleRemove} = props;

    const buy = () => {

        setCart((currState) => {
            
             return [...currState, (currState + 1 +' '+ 'buah')+ ('\n') + item.product + ('\n') + ('\n')];
        })

        console.log (`Sukses membeli ${item.product}`);
    }

    const removeItem = () => {
        console.log(`Remove item ID: ${item._id}`);
        handleRemove(item._id)
    }
    
    let number = item.price;
    let formatted = new Intl.NumberFormat().format(number);
    
 
    return(
     
        <div key={item._id} width="125" className='bg-white-200 rounded-t-md w-auto' > 
          
         <img src={item.image} width="120" height="176" 
                    className=" rounded-t-md bg-slate-100 m-auto" 
                    alt="..." /><br/>
            <h1 className="font-bold">{item.product} </h1><br/>
            <p className="font-light text-justify ">{item.desc}</p><br/>
            <p className="font-normal bg-teal-100">Stocks: {item.stock}</p><br/>
            <p className="font-normal bg-teal-100">Price: {formatted}</p><br/>

            <button className="bg-red-200 hover:bg-red-700 text-black font-semi-bold py-2 px-4 rounded-full
             bg-blue  place-self-end" onClick={removeItem}>Delete </button>
            { item.stock > 0 && <button className="bg-green-200 hover:bg-green-700 text-black font-semi-bold py-2 px-4 rounded-full
             bg-blue  place-self-end" onClick={buy}>Buy</button>}
        </div>
    );  
} 

export default Item;
