import React, { useEffect } from 'react';

// {
//   header: ["id", "nome", "telefone"],
//   data: []
// }

const parseCSV = (text) => {
  text.split('\n')
}

export default function App() {
  useEffect(() => {
    fetch('/demo.csv')
      .then(r => r.text())
      .then(text => console.log(text))
  })
  return <div className="App"></div>
}