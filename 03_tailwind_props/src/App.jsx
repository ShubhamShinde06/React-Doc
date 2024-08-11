import "./App.css";
import Card from "./components/Card";

function App() {
  
  let myObj = [
    {
      name:"shubham",
      age:34
    },
    {
      name:"joan",
      age:43
    }
  ]

  return (
    <>
     <Card heading="Mi Laptop" someObj={myObj} />
    </>
  );
}

export default App;
