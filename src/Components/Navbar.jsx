import React from 'react'

export default function Navbar({setCategory}) {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary " data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span class="badge bg-light text-dark fs-5">NEWSNECTAR</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" onClick={()=>setCategory("sports")}><span className='span'>Sports</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick={()=>setCategory("technology")}><span className='span'>Technology</span></a>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>setCategory("business")}><span className='span'>Business</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>setCategory("health")}><span className='span'>Health</span></div>
        </li>
        <li className="nav-item">
          <div className="nav-link active click" onClick={()=>setCategory("entertainment")}><span className='span'>Entertainment</span></div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</>
  )
}


