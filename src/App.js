import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [kisi, setKisi] = useState(data);
  return (
    <main>
      <section className="container">
        <h4>Bugün {kisi.length} kişinin doğum günü.</h4>
        <List kisi={kisi} />
        <button onClick={() => setKisi([])}>Hepsini Kaldır</button>
      </section>
    </main>
  );
}

export default App;
