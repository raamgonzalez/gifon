import React from 'react'

const Gif = ({ title, id, url }) => {
    return (
        <div key={id}>
            <h4>{title}</h4>
            <img alt={title} src={url}/> 
        </div>  
    )
}

export default Gif