import React from 'react'
import { Link } from 'react-router-dom'

function PageNoteFound() {
  return (
    <>
    <h1>404 - Sayfa Bulunamadı</h1>
    <Link to='/' className='btn btn-info'>Ana Sayfaya Gitmek için Tıklayın</Link>
    </>
  )
}

export default PageNoteFound