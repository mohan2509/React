import React, { useState } from "react";


function App(){
  const [colorValue,setColorValue]=useState("")
  const [hexValue, setHexvalue ]= useState("")
  const[isDarkText,setIsDarkTest]= useState(true)

return(
  <div className="App">
    <square
    colorValue= {colorValue}
    hexValue={hexValue}
    isDarkText={isDarkText}
    />
    <input
    colorValue={colorValue}
    setColorValue={setColorValue}
    setHexvalue={setHexvalue}
    isDarkText={isDarkText}
    setIsDarkTest={setIsDarkTest}
    />
    
  </div>
);
}