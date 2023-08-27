import { useState } from "react";
import "./App.css";

function App() {

const [weight,setWeight] = useState(0);
const [height,setHeight] = useState(0);
const [bmi,setBmi] = useState("");
const [image,setImage] = useState("");
const [message,setMessage] = useState("");

let calcBmi = (event) => {
event.preventDefault();
if(weight === 0 || height === 0){
  alert("please type weight and height...")
let bmi = weight / (height * height)
setBmi(bmi.toFixed())
}
}


  return (
    <div className="App">
<div className="container">
  <h2 className="center">Bmi Calculator</h2>
  <form onSubmit={calcBmi}>
    <div>
      <label>Weight (kg)</label>
      <input value={weight} onChange={(e)=>setWeight(e.target.value)} />
    </div>
    <div>
      <label>Height (cm)</label>
      <input value={height} onChange={(e)=>setHeight(e.target.value)}  />
    </div>
    <div>
      <button className="btn" type="submit" onClick={()=> calcBmi()}>Submit</button>
      <button className="btn btn-outline" type="submit">Delete Informations</button>
    </div>
  </form>
  <div className="center">
<h3>Your Bmi is : {bmi}</h3>
<p>{message}</p>
  </div>
</div>
<div className="img-container">
<img src={image} alt="kv karakter"/>
</div>
    </div>
  );
}

export default App;
