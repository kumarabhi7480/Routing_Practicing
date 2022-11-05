import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';


const Home = () => {
  const [num,setNum]=useState(0)

  useEffect(()=>{
    console.log("Component didMount this function run one time only starte time");
  },[])

  const updateNum=()=>{
    return(
      console.log("if you want to do any update written inside function")
    )
  }
  useEffect(()=>{
    updateNum()
    console.log("This is component updateMount This function execute how when we will do any edit on application");
  },[num])

  useEffect(()=>{
    return ()=>{
      console.log("when we will jump one link to another link then this functio run")
    };
  },[])
    return (
        <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Home Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">This is Home Page</Button>
      </Card.Body>
    </Card>

<Button variant="danger" onClick={()=>setNum(num+1)} >Increment + </Button>
<h2>{num} </h2>
<Button variant="primary" onClick={()=>setNum(num-1)} >Decrement - </Button>
<button onClick={()=>setNum(0)} >Reset</button>
<br />
<br />
<br />


        </div>
        
    );
};

export default Home;