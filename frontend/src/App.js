import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Carregando...");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => setMsg(data.mensagem))
      .catch(() => setMsg("Erro ao conectar com backend 😢"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
