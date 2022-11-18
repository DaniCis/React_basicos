import './App.css';
import Componente from './components/Componente';
import Estado from "./components/Estado";
import Propiedades from "./components/Propiedades";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6 ,EventosES7 ,MasSobreEventos} from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
        <Propiedades 
          cadena="Esta es una cadena" 
          numero={22} 
          boolean={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"Dani",correo:"danicisneros2@hotmail.com"}}
          funcion={(num)=>num*num}
          elementoReact={<i>Esto es un elemento react</i>}
          componenteReact={<Componente msg="soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado />
        <hr/>
        <RenderizadoCondicional />
        <hr/>
        <RenderizadoElementos />
        <hr/>
        <EventosES6 />
        <hr/>
        <EventosES7 />
        <hr/>
        <MasSobreEventos />
        </section>
      </header>
    </div>
  );
}

export default App;
