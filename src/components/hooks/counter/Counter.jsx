import React, { useEffect, useState } from 'react'

function Counter({targetCount}) {
  const [count, setCount] = useState(300);

  useEffect(()=>{
      const timer = setInterval(()=>{
        setCount(prevCount => prevCount + 1)
      }, 1)

      if(count === targetCount){
        clearInterval(timer)
      }

      return () => clearInterval(timer)
  }, [count])


  return (
    <span>{count.toLocaleString('fa-IR')}</span>
  )
}

export default Counter