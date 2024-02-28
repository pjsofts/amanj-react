import { useEffect } from "react";


const Button = ({text, onClick, ...rest})=>{
    
    useEffect(()=>{
        console.log(`Hi everyone button ${text} is mounted`);
        
        return ()=>{
            console.log(`Hi everyone button ${text} is unmounting`);
            // clearInterval(interval);
            
        }
    },[])

    return <div>
        <button {...rest} onClick={onClick} >{text}</button>
    </div>
}


export default Button;