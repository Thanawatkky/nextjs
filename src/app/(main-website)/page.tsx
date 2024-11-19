import React from 'react'
import AppLogo from './components/AppLogo'

import Link from 'next/link'
import { Container, Divider, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'

async function  getData() {
  const response = await fetch("https://dummyjson.com/products",{cache: "no-store"} )
  if(!response.ok) {
    throw new Error("ไม่สามารถ fetch Data ได้")
  }
  return response.json()
}
async function Home() {
  const response = await getData()
  return (
    <Container>
      <h1>Product</h1>
      {
        response.products && (
          <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                  response.products.map((item: any) => (
                    <Grid key={item.id} lg={3} xs={6}>
                        <Paper>
                          <Image src={item.thumbnail} alt={item.detail} width={120} height={120} />
                          <Divider></Divider>
                          <Typography>{item.title}</Typography>
                        </Paper>
                    </Grid>
                  ))
                }
            </Grid>
          </>
        )
      }      
      <br />
      <Link style={{margin: "0 2rem 0 0 "}} href={"/about"}>About Page </Link>
      <Link href={"/content/resume"}>Resume Page </Link>
    </Container>
  )
}

export default Home