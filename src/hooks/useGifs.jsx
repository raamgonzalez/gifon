import { useEffect, useState, useContext } from "react"
import getGifs from "../services/getGifs"
import {GifsContext} from "../context/GifsContext"



export default function useGifs({keyword} = { keyword: null }){
    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)

    useEffect(function () {
            setLoading(true)
            //Recupamos la keyword del local storage
            const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

            getGifs({ keyword : keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword en el local storage
                localStorage.setItem('lastKeyword', keyword)
            }
            )
        },[keyword])


    return {gifs, loading}
}