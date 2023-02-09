import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [capy, setCapy] = useState("");
    const [name, setName] = useState("");
    const age = Math.floor(7 + Math.random() * 10 * 12);

    useEffect(() => {
        fetch('https://api.capy.lol/v1/capybara?json=true')
        .then(response => {
            if (!response.ok) {
                return
            }
            return response.json();
        })
        .then(js => {
            setCapy(js.data.url);
        });

        fetch('https://onomancer.sibr.dev/api/getName?threshold=4')
        .then(response => {
            if (!response.ok) {
                return
            }
            return response.json();
        })
        .then(js => {
            setName(js);
        });
    }, []);
  return (
    <div className="App">
      <img src={capy}/>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}

export default App;
