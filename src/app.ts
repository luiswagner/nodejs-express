import express from 'express'
import { Client } from 'pg'

async function main() {
  const app = express()
  const port = 3000

  const client = new Client()
  await client.connect()
   
  const res = await client.query('SELECT $1::text as message', ['DB Connection is OK!'])
  console.log(res.rows[0].message) // Hello world!
  await client.end()
    
  app.get('/', (req, res) => {
    res.send('Hello Codelab!!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
  })

  
}
//Chamando a função
main()