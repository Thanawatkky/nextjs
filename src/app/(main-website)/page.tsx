import React from 'react'
import AppLogo from './components/AppLogo'
import Link from 'next/link'
import { Container } from '@mui/material'

async function  getData() {
  const response = await fetch("https://dummyjson.com/users")
  if(!response.ok) {
    throw new Error("ไม่สามารถ fetch Data ได้")
  }
  return response.json()
}
async function Home() {
  const response = await getData()
  return (
    <Container>
      <p>{JSON.stringify(response.users)}</p>
      
      <br />
      <Link style={{margin: "0 2rem 0 0 "}} href={"/about"}>About Page </Link>
      <Link href={"/content/resume"}>Resume Page </Link>
    </Container>
  )
}

export default Home