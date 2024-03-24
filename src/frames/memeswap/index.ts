import { Frog } from 'frog'

import { homeScreen } from './start'
import { menuScreen } from './menu'
import { buyScreen } from './buy'
import { buySelectTokenScreen } from './buy[:token]'
import { quoteTokenScreen } from './buy[:token][:amount][:token]'
import { amountScreen } from './buy[:token][:amount]'
import { finalScreen } from './final'

const app = new Frog()

app.frame('/', homeScreen)
app.frame('/menu', menuScreen)
app.frame('/buy', buyScreen)
app.frame('/buy/:token', buySelectTokenScreen)
app.frame('/buy/:token/:amount', amountScreen)
app.frame('/buy/:token/:amount/:quoteToken', quoteTokenScreen)
app.frame('/final', finalScreen)

export default app
