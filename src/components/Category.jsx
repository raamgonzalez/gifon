import { Link } from 'wouter'
import { motion } from 'framer-motion'

const Category = ({ name, options = [] }) => {
  return (
    <section className='Category'>
      <h3 className='App-title'>{name}</h3>
      <motion.ul
        className='Category-list'
      >
        {options.map((singleOption) => (
          <motion.li
            initial={{
              y: 400,
              scale: 0
            }}
            animate={{
              y: 0,
              scale: 1
            }}
            whileHover={{ scale: 1.1, transition: 'all 1s ease-in-out' }}
            key={singleOption}
          >
            <Link className='Category-link' to={`/search/${singleOption}`}>{singleOption}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default Category
