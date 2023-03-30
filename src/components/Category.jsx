import { Link } from 'wouter'


const Category = ({name, options = []}) => {

    return (
        <section className='Category'>
            <h3 className='App-title'>{name}</h3>
            <ul className='Category-list'>
                {options.map((singleOption) =>(
                    <li key={singleOption}>
                        <Link className='Category-link' to={`/search/${singleOption}`}>{singleOption}</Link>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}

export default Category