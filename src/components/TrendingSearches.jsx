import useNearScreen from '../hooks/useNearScreen'
import React, { Suspense } from 'react'

import Spinner from '../ui/Spinner'

const TrendingSearch = React.lazy(
  () => import('./TrendingSearch')
)

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <>
      <section ref={fromRef}>
        <Suspense fallback={<Spinner />}>
          {isNearScreen ? <TrendingSearch /> : <Spinner />}
        </Suspense>
      </section>
    </>
  )
}
