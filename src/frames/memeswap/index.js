import { Frog } from 'frog'

import { homeScreen } from './start'
import { menuScreen } from './menu'
import { buyScreen } from './buy'
import { buySelectTokenScreen } from './buy[:token]'


export const app = new Frog({
  browserLocation: '/memeswaps',
})

app.frame('/', homeScreen)
app.frame('/menu', menuScreen)
app.frame('/buy', buyScreen)
app.frame('/buy/:token', buySelectTokenScreen)
export default app
