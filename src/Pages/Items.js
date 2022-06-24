import React, { useState, useEffect } from "react";
import Item from "../components/Item";
const Items = (props) =>{

    const {setCart}= props;
    const [items, setItems] =useState([]);

    const fetchItems = async()=>{

    
    try {
        let response = await fetch(`http://movie-app-g2.herokuapp.com/products`);
        
                if (response.ok) {
                let data = await response.json();
                
                setItems(data);
                } else {
                throw Error ('Something happened when fetch!')
                }
                
            } catch (err) {
                console.log(err);
            }
        }
   

    useEffect(( )=>{
        fetchItems();
    }, [])

    const removeItemApi = async (_id) =>{
    
        try {
        
            let response = await fetch(`http://movie-app-g2.herokuapp.com/products/${_id}`);
    
            if (response.ok) {
              setItems((currentState) => {
                return currentState.filter(state => {
                  if (state._id !== _id) {
                    return state;
                  }
                })
              })
            }
        } catch (err) {
            console.log(err);
        }
      } 
      
        return(
    <div className="relative ">
      <div className="absolute top-10 left-12 right-12 mt-9">  
            <div className="place-self-center grid grid-cols-5 gap-12 ">
                
                {items.map(item=>(
                    <Item key= {item._id} item={item} handleRemove={removeItemApi} setCart={setCart}/>))}
            </div>
       </div>
      </div>
    );
} 

export default Items;
