import React from 'react'
//style={{ marginBottom: 10, width: "20rem" }}
function Home({ features }) {
  return (
    <>
      <h3 className='text-center mb-4 mt-3'>İTFAİYE GRUPLARI</h3>
      <div className="row row-cols-1 row-cols-md-4 g-2" >
        {features.map((features) => {
          return (
            <>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body bg-primary-subtle">
                    <p className="card-text">{features.grup}</p>
                    <p className="card-text">{features.adres}</p>
                    <p className="card-text">{features.tel}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      
    </>
  )
}

export default Home