import React, { useRef } from 'react';

const UseRef = () => {
//const [value,setValue] = useState("Enter any text");
//console.log({value})

const value = useRef(null)
console.log("Re render")
const handleChange = (e)=>{
//console.log(e.target.value)
console.log(value.current.value)
value.current.style.backgroundColor="red";
if(value.current.value==='Abhishek'){
value.current.style.fontSize="30px";
}
else if(value.current.value==='kumar'){
    value.current.style.fontSize="25px";
    value.current.style.color="white";
    }

}
    return (
        <div>
            <input type="text"ref={value} defaultValue='Abhishek' />
            
            <button onClick={handleChange} >Click Me</button>
        </div>
    );
};

export default UseRef;