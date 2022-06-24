import React from "react";
import {Link} from 'react-router-dom';
const MyNavbar = () =>{
    return(
   
        <div >
            <div className="relative ">
                    <div className="absolute top-2 right-12 ">
                            <div className="flex flex-row py-2">
                                <div className="bg-gradient-to-l from-slate-300 to-red-400 w-6 h-6 rounded-lg py-1.5  "/>
                                <div className="bg-gradient-to-l from-slate-300 to-blue-400 w-3 h-3 rounded-lg  "></div>
                                <span className="text-xl text-black-400 ml-2 font-serif font-semi-bold ">Calvin</span>
                            </div>
                    </div>
            </div> 
            <div className="relative ">
                <div className="absolute top-2 left-12 ">
                    <div className='py-3 '>
                        <Link to = '/'> Home | </Link>
                        <Link to = '/Items'>Products | </Link>
                        <Link to = '/Profile'>Profile | </Link>
                        <Link to = '/Cart'> Cart | </Link><br/>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default MyNavbar;
