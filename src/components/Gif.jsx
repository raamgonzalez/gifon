import React from 'react'
import { Link } from 'wouter'

const Gif = ({ title, id, url }) => {
    return (
        <Link to={`/gif/${id}`} className='Gif' key={id}>
            <h4 className='Gif-h4'>{title}</h4>
            <img loading='lazy' className='Gif-img' alt={title} src={url}/> 
        </Link>  
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})