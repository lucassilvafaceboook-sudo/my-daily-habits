import "./App.css"; 
 
export default function App() { 
  return ( 
    <main className="app"> 
      <header className="hero"> 
        <p className="eyebrow">ITEAM BOA VISTA-RR</p> 
        <h1>Aula 1, módulo 4.</h1> 
        <p>Configruando minha página em React</p> 
      </header> 
 
      <section className="habit-list" aria-label="Hábitos de hoje"> 
        <article className="habit-card"> 
          <h2>main.jxs</h2> 
          <p>Conecta o componente app ao elemento raiz do Html</p> 
        </article> 
 
        <article className="habit-card"> 
          <h2>app.jxs</h2> 
          <p>Componente principal da interface</p> 
        </article> 
 
        <article className="habit-card"> 
          <h2>app.css</h2> 
          <p>Estilos específicos da tela princial</p> 
        </article> 
      </section> 
    </main> 
  ); 
} 