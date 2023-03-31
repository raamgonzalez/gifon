import Gif from './Gif'
import { motion } from 'framer-motion'

const ListOfGifs = ({gifs}) => {

    return (
        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease:'easeInOut', duration:0.5}}
        className='listgifs__section'>
            {
                gifs.map(({id, title, url}) => <Gif id={id} key={id} title={title} url={url}/>)
            }
        </motion.section>
    )
}

export default ListOfGifs