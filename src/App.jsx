import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/handleRandom'
import "/image_3.png"

const RESIDENTS_PERPAGE = 12;

function App() {
// Almacenar info Location
  const [location, setLocation] = useState()

// Almacenar valor del Input
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

//Ejecutar sudmit del Formulario
  const handleSudmit= (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

// Obtener Residentes por Pagina
  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }

//Ejecutor del render y nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <div className='App_container'>
        <img className='App_img_person' src="/image_3.png" alt="/image_3.png" />
        <h1 className='App_title'>Rick and Morty Wiki</h1>
      </div>
      <ResidentForm handleSudmit={handleSudmit}/>
      <LocationInfo location={location} />
      <ResidentList pagination={pagination}/>
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage}/>
    </div>
  )
}

export default App
