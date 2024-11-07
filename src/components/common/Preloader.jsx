import React, { useEffect, useState } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        })
  return (
    <div>
        <div className={`preloader ${loading ? 'active' : ''}`}></div>
    </div>
  )
}

export default Preloader