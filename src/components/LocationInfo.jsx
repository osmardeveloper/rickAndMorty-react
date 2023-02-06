import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {
  return (
    <div className='location'>
    <section className='location_container'>
        <h2 className='location_name'>{location?.name}</h2>
        <ul className='location_list'>
          <li><span>Type: </span> {location?.type}</li>
          <li><span>Dimension: </span> {location?.dimension}</li>
          <li><span>Population: </span> {location?.residents.length}</li>
        </ul>
      </section>
      </div>
  )
}

export default LocationInfo