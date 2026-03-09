import { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const addNumbers = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>Add Two Numbers</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
      />

      <br/><br/>

      <button onClick={addNumbers}>Add</button>

      <h3>Result: {result}</h3>

    </div>
  );
}

export default App;