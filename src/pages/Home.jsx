import React, { useRef } from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Home({ features }) {

  const positions = [
    { id: 1, lat: 40.19994038930082, lng: 29.060416000000004, name: 'GENÇ OSMAN İTFAİYE GRUBU' },
    { id: 2, lat: 40.188316949700756, lng: 29.059489502115294, name: 'ZAFER İTFAİYE GRUBU' },
    { id: 3, lat: 40.17649800000002, lng: 29.0782, name: 'IŞIKLAR İTFAİYE GRUBU' },
    { id: 4, lat: 40.191016999999995, lng: 29.126142186509515, name: 'MİMARSİNAN İTFAİYE GRUBU' },
    { id: 5, lat: 40.223413, lng: 28.99163508465398, name: 'İHSANİYE İTFAİYE GRUBU' },
    { id: 6, lat: 40.22546461687468, lng: 29.073294000000004, name: 'KÜÇÜK BALIKLI İTFAİYE GRUBU' },
    { id: 7, lat: 40.205193611973115, lng: 29.189422859374215, name: 'GÜRSU İTFAİYE GRUBU' },
    { id: 8, lat: 40.19309289481835, lng: 29.206990239759136, name: 'KESTEL İTFAİYE GRUBU' },
    { id: 9, lat: 40.35697192161792, lng: 28.911556333205564, name: 'MUDANYA İTFAİYE GRUBU' },
    { id: 10, lat: 40.42858638348323, lng: 29.169769029461992, name: 'GEMLİK İTFAİYE GRUBU' },
    { id: 11, lat: 40.42858837669336, lng: 29.169773278971327, name: 'KÜÇÜK KUMLA GRUBU' },
    { id: 12, lat: 40.26420740201306, lng: 29.064191149527836, name: 'DEMİRTAŞ İTFAİYE GRUBU' },
    { id: 13, lat: 40.181939605554255, lng: 28.78500549008067, name: 'HASANAĞA OSB İTFAİYE GRUBU' },
    { id: 14, lat: 40.210378367739004, lng: 28.942856996380957, name: 'KÜÇÜK SANAYİ İTFAİYE  GRUBU' },
    { id: 15, lat: 40.102342536237195, lng: 29.13144723390802, name: 'ULUDAĞ  İTFAİYE  GRUBU' },
    { id: 16, lat: 40.03129227706447, lng: 28.3885871751075, name: 'MUSTAFAKEMALPAŞA İTFAİYE GRUBU' },
    { id: 17, lat: 40.19828229282822, lng: 28.352206039580153, name: 'KARACABEY İTFAİYE GRUBU' },
    { id: 18, lat: 40.08997776069958, lng: 29.492670823087753, name: 'İNEGÖL MERKEZ İTFAİYE GRUBU' },
    { id: 19, lat: 40.15946635410092, lng: 29.5529949747639, name: 'HAMZABEY OSB İTFAİYE GRUBU' },
    { id: 20, lat: 40.07147364557054, lng: 29.526461807823956, name: 'İNEGÖL SANAYİ İTFAİYE GRUBU' },
    { id: 21, lat: 40.25708030642507, lng: 29.64581971696246, name: 'YENİŞEHİR İTFAİYE GRUBU' },
    { id: 22, lat: 40.426655481284726, lng: 29.729884667537185, name: 'İZNİK İTFAİYE GRUBU' },
    { id: 23, lat: 40.48290859059755, lng: 29.307523285250088, name: 'ORHANGAZİ İTFAİYE GRUBU' },
    { id: 24, lat: 39.91350121682631, lng: 29.23657294000691, name: 'KELES İTFAİYE GRUBU' },
    { id: 25, lat: 39.903450613545935, lng: 28.98695310077403, name: 'ORHANELİ İTFAİYE GRUBU' },
    { id: 26, lat: 39.769063157179865, lng: 28.88784964618368, name: 'BÜYÜKORHAN İTFAİYE GRUBU' },
    { id: 27, lat: 39.67816642506449, lng: 29.145661564564513, name: 'HARMANCIK İTFAİYE GRUBU' },
    { id: 28, lat: 40.1886771375165, lng: 29.127785618666103, name: '112 ACİL ÇAĞRI MERKEZİ' },
  ];

  const handleZoomToPosition = (item) => {
    const { lat, lng } = positions.find(position => position.id === item.properties.id);
    mapRef.current.flyTo([lat, lng], 18); // Haritayı belirtilen konuma kayarak götür
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  const mapRef = useRef(null);
  
  return (
    <>
      <h3 className='text-center mb-4 mt-3 text-primary'>İTFAİYE GRUPLARI</h3>
      <div className="row row-cols-1 row-cols-md-4 g-3 mb-3">
        {features.map((item) => {
          return (
            <div className="col" key={item.properties.id}>
              <div className="card h-100 shadow border-0 rounded-3 bg-primary-subtle">
                <div className="card-body rounded-top-3 bg-primary-subtle" >
                  <p className="card-text text-center text-danger fs-6 fw-bolder" >{item.properties.grup}</p>
                  <p className="card-text text-center text-secondary">{item.properties.adres}</p>
                  <p className="card-text text-center text-secondary">{item.properties.tel}</p>
                  
                </div>
                <div className='text-center mb-3 bg-primary-subtle'>
                    <button type="button" className="btn btn-danger" onClick={() => {handleZoomToPosition(item); scrollToBottom()}}><FaMapMarkedAlt /> Haritaya git</button>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='mb-3 mt-4'>
        <center>
          <MapContainer
            center={[40.14003814800143, 29.05616717866315]}
            zoom={9}
            scrollWheelZoom={false}
            style={{ width: "1000px", height: "470px", borderRadius: "8px", boxShadow: "0px 0px 20px 0px grey" }}
            ref={mapRef}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {positions.map(park => (
              <Marker key={park.id} position={[park.lat, park.lng]}>
                <Popup>
                  {park.name}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </center>
      </div>
    </>
  )
}

export default Home