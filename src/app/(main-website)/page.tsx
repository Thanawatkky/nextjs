import React from 'react'
import AppLogo from './components/AppLogo'
import Link from 'next/link'
import { Container } from '@mui/material'

function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
      <AppLogo title='Logo one' color='blue'/>
      <AppLogo title='Logo two' color="lime"/>
      <br />
      <Link style={{margin: "0 2rem 0 0 "}} href={"/about"}>About Page </Link>
      <Link href={"/content/resume"}>Resume Page </Link>
    </Container>
  )
}

export default Home