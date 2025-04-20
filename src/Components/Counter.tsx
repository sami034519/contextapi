import React,{createContext, useContext, useState} from "react";

interface counterproviderprops{
    children:React.ReactNode
}
interface counterContextprops{
    username:string
    setusername:(name:string)=>void
    setcolor:(color:string)=>void
    color:string
    bgsetcolor:(color:string)=>void
    bgcolor:string
}
const counterContext=createContext<counterContextprops | null>(null);

export const Usecounter=()=>{
    return(
        useContext(counterContext)
    )
}

export const Counterprovider:React.FC<counterproviderprops> = (props)=>{
    const[username, setusername]=useState<string>('');
    const[color,setcolor]=useState<string>('black')
    const[bgcolor,bgsetcolor]=useState<string>('white')
return(
    <counterContext.Provider value={{username,setusername,color,setcolor ,bgcolor,bgsetcolor}}>
         {props.children}
        </counterContext.Provider>
)
}

