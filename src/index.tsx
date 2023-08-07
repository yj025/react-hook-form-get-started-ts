import "./styles.css"
import {useForm} from "react-hook-form";
import React from "react";
import ReactDOM from "react-dom";

function App(){
  const {register,handleSubmit} = useForm();

  return(
      <form onSubmit={handleSubmit((data)=>{alert(JSON.stringify(data));})}>
      <label>Example</label>
        <input {...register("example") } defaultValue="default"/>
          <label>ExampleRequired</label>
          <input {...register("exampleRequired",{required:true,maxLength:10})}
          />
          <input type="submit"/>
      </form>
  )
}
const root = document.getElementById("root")
ReactDOM.render(<App/>,root)