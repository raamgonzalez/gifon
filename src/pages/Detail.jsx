import Gif from '../components/Gif'
import useSingleGif from '../hooks/useSingleGif'

const Detail = ({params}) => {

    const { gif } = useSingleGif({id: params.id})
    if(!gif) return null

    return (
        <>
            <h3 className='App-title'>{gif.title}</h3>
            <Gif {...gif}/>
        </>
    )
}

export default Detail