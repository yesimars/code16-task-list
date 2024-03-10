import React from 'react'

function Home({ features }) {

  return (
    <>
      <h3 className='text-center mb-4 mt-3 text-primary'>İTFAİYE GRUPLARI</h3>
      <div className="row row-cols-1 row-cols-md-4 g-3 mb-4" >
        {features.map((item) => {
          return (
            <div className="col" key={item.properties.id}>
              <div className="card h-100 shadow border-0 rounded-3">
                <div className="card-body card-img-top rounded-top-3 bg-primary-subtle">
                  <p className="card-text text-center text-danger fs-6 fw-bolder">{item.properties.grup}</p>
                  <p className="card-text text-center text-secondary">{item.properties.adres}</p>
                  <p className="card-text text-center text-secondary">{item.properties.tel}</p>
                </div>
                <iframe
                  className='shadow card-img-bottom rounded-bottom-3'
                  width="300"
                  height="300"
                  src={item.geometry.coordinates}
                >
                </iframe>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home