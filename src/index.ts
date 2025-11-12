import { Hono } from 'hono'
import { db } from './db/client'
import { users } from './db/schema'


const app = new Hono()

app.get( '/', async ( c ) =>
{
  const allUsers = await db.select().from( users )
  return c.text( 'Hello Hono!!!!!' + JSON.stringify( allUsers ) )
} )

export default app
