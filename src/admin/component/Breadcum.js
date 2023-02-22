import React from 'react'

const Breadcum = (props) => {
  return (
    <div className="pagetitle">
    <h1>{props.Breadcum}</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active">{props.Breadcum}</li>
      </ol>
    </nav>
  </div>
  )
}

export default Breadcum