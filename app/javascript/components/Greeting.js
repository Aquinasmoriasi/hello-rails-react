import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreeting } from '../redux/greetings/greeting'

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchGreeting());
  },[useDispatch, fetchGreeting])
  return (
    <h2>{greeting.message}</h2>
  )
}

export default Greeting