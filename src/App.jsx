import { useEffect, useState, ChangeEvent } from 'react'
import ColorBar from './components/ColorBar'

import data from './sevices/api'

const formatDate = (date) => new Date(date).toLocaleDateString()

function App() {
  const [lotoResult, setLotoResult] = useState(null)

  useEffect(() => {
    setLotoResult(data.megasena)
  }, [])

  const getLotoResults = async (event) => {
    try {
      const selectOption = event.target.value

      setLotoResult(data[selectOption])

    } catch (error) {
      alert('Erro na busca de dado na API')
      console.log(error)
    }
  }

  return (
    <div className="sm:flex">
      <header className='flex flex-col items-center justify-around max-w-xl h-80 relative sm:flex-1 sm:h-screen sm:items-start overflow-hidden'>

        <select name="lotoList" id="lotoList"
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase sm:ml-14'
          onChange={(event) => getLotoResults(event)}
        >
          <option value="megasena">mega-sena</option>
          <option value="quina">quina</option>
          <option value="lotofacil">lotofácil</option>
          <option value="lotomania">lotomania</option>
          <option value="timemania">timemania</option>
          <option value="diadesorte">dia de sorte</option>
        </select>

        <div className='flex flex-col items-center gap-3 sm:ml-14 sm:flex-row'>
          <img src="logo.svg" />
          <h1 className='text-3xl uppercase text-white font-bold'>
            {lotoResult?.nome}
          </h1>
        </div>

        <div className='sm:ml-14'>
          <p className='text-center uppercase text-sm text-white font-medium sm:text-start'>
            concurso
          </p>
          <p className='text-white font-medium'>
            {`${lotoResult?.numero_concurso} - ${lotoResult && formatDate(Date.now())}`}
          </p>
        </div>

        <ColorBar color={lotoResult?.color} />
      </header >

      <main className='h-80 flex justify-center items-center relative sm:flex-1 sm:h-screen'>
        <ul className='flex flex-wrap justify-center items-center gap-6 max-w-xl'>
          {lotoResult?.dezenas.map((item, index) =>
            <li key={index} className='bg-white rounded-full text-lg py-3 px-4'>
              {item}
            </li>
          )}
        </ul>
        <p className='text-gray-500 absolute bottom-0 sm:bottom-10 sm:right-4'>
          Esse resultado é meramente ilustrativo e não possui ligação com a CAIXA.
        </p>
      </main>
    </div>
  )
}

export default App
