import { useEffect, useState } from 'react'
import getTrendingTerms from '../services/getTrendingTermsService'
import Category from './Category'


const TrendingSearch = () => {

    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Trendings' options={trends}/>
}

export default TrendingSearch