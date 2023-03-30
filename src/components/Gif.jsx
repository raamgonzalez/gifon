import React from 'react'
import { Link } from 'wouter'

const Gif = ({ title, id, url }) => {
    return (
        <Link to={`/gif/${id}`} className='gif' key={id}>
            <h4 className='gif__h4'>{title}</h4>
            <img loading='lazy' className='gif__img' alt={title} src={url}/> 
        </Link>  
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})