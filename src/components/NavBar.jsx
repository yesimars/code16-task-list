import React from 'react'
import { MdLocalFireDepartment } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function NavBar({user, handleLogOut}) {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-primary-subtle" >
            <div className="container-fluid" >
                <NavLink className="navbar-brand" to="/"><MdLocalFireDepartment />İtfaiye</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/">Anasayfa</NavLink>
                        <NavLink className="nav-link" to="/acilcagri"><AiFillAlert />Acil Çağrı</NavLink>
                                                
                        {
                            user?
                            <>
                            <NavLink className="nav-link" to="/yonetici">Yönetici</NavLink>
                            <button className='nav-link' onClick={handleLogOut} >Oturumu Kapat ({user.name})</button>
                            </>:
                            <NavLink className="nav-link" to="/login">Oturum Açın</NavLink>
                        }
                        <a className="nav-link disabled" aria-disabled="true">635 Personel</a>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
}

export default NavBar