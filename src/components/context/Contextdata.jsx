import {createContext } from "react";
import data from "./../Mock.json"
export const Datacontext=createContext();

const Dataprovider=({children})=>{
    // const data={Mockdata}
    return(
        <Datacontext.Provider value={{data}}>
            {children}
        </Datacontext.Provider>
    )
}
export default Dataprovider