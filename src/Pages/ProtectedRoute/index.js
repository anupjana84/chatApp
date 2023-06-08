import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { isAutheticated } from '../../Auth'

const Protected= ({Component}) => {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isAutheticated()){
      navigate('/login')
    }
  },[])

  return (
    <>
<Component/>
    </>
  )
}

export default Protected