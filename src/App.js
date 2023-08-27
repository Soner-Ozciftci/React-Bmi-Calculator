import { useState } from "react";
import "./App.css";

function App() {

const [weight,setWeight] = useState(0);
const [height,setHeight] = useState(0);
const [bmi,setBmi] = useState("");
const [image,setImage] = useState("");
const [message,setMessage] = useState("");


  return (
    <div className="App">
<div className="container">
  <h2 className="center">Bmi Calculator</h2>
  <form>
    <div>
      <label>Weight (kg)</label>
      <input value={weight} />
    </div>
    <div>
      <label>Height (cm)</label>
      <input value={height} />
    </div>
    <div>
      <button className="btn" type="submit">Submit</button>
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
