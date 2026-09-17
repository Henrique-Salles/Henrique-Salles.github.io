import './App.css'
import { useState } from 'react'
import Compform from './components/Compform'

function App() {
  const [weight, setWeight] = useState<number | undefined>(undefined)
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [imc, setIMC] = useState<number | undefined>(undefined)


  function calculate() {
    if (weight === undefined || height === undefined) {
      return
    }
    let res=weight/(height*height)
    setIMC(Number(res.toFixed(2)))
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Calculadora de IMC</h1>
          <h2>(Índice de Massa Corporal)</h2>
          <p>
            Informações do paciente:
          </p>
          <Compform 
            label='Peso (kg):' 
            state={weight} 
            funcState={setWeight}
            className='weightInput'
            placeholder='Ex: 75'/>
          <Compform 
            label='Altura (m):' 
            state={height} 
            funcState={setHeight}
            className='heightInput'
            placeholder='Ex: 1.70'/>
          <button className="calc-button" onClick={calculate}>Calcular</button>
          <h2>Resultado:</h2>
          <h1>{imc}</h1>
        </div>

        <div id="card">
          <div id="card__title">Tabela de Resultados</div>
          <div id="card__data">
            <div id="card__left">
              <div id="item">&lt; 18,50</div>
              <div id="item">18,50 a 24,99</div>
              <div id="item">25 a 29,99</div>
              <div id="item">&gt; 30</div>
            </div>
            <div id="card__right">
              <div id="item">Magreza</div>
              <div id="item">Normal</div>
              <div id="item">Sobrepeso</div>
              <div id="item">Obesidade</div>
            </div>
          </div>
        </div>

      </section>

      <section id="footer">
        <div id="references">
          <h2>Referências:</h2>
          <p>OMS: <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank">who.int
          </a></p>
          <p>ABESO: <a href="https://abeso.org.br/como-calcular-o-imc-entenda-para-que-serve-esse-indice/" target="_blank">abeso.org.br
          </a></p>
        </div><div id="references">
          <h2>Desenvolvido por:</h2>
          <p>Carlos Henrique Salles Manhães</p>
          <ul>
            <li>
              <a href="https://github.com/henrique-Salles" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Git Hub
              </a>
            </li>
            <li>
              <a href="https://discordapp.com/users/648210874284245024" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
