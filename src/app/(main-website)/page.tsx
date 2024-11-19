import React from 'react'
import Link from 'next/link'
import { Container} from '@mui/material'
import AppLogo from './components/AppLogo'


async function Home() {
  return (
    <Container>
      <AppLogo color={''} title={''} />
      <br />
      <Link style={{margin: "0 2rem 0 0 "}} href={"/about"}>About Page </Link>
      <Link href={"/content/resume"}>Resume Page </Link>
    </Container>
  )
}

export default Home