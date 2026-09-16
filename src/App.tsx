import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Calculadora de IMC</h1>
          <h2>(Índice de Massa Corporal)</h2>
          <p>
            Informações do paciente:
          </p>
        </div>
      </section>

      <section id="social-media">
        <div id="docs">
          <h2>Referências:</h2>
          <p>OMS: <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank">who.int
          </a></p>
          <p>ABESO: <a href="https://abeso.org.br/como-calcular-o-imc-entenda-para-que-serve-esse-indice/" target="_blank">abeso.org.br
          </a></p>
        </div><div id="docs">
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
