import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Button2 from './Button2'
import Card from './Card';
function App() {
  let product = {title:"Canvas", description:"A sporty footwear for all", price:30000};
  
  return (
    <div className="App">
      <Button text="Becks"/>
      <Button text="Jeremiah"/>
      <Button2 text="Orogun"/>
      <Button2 text="Eboh"/>
      <Button2 text="Itommi"/>
      <Card prod={product}/>
    </div>
  );
}

export default App;
