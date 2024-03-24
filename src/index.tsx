import { Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

import memeSwapFrame from './frames/memeswap'
import { Home } from './web/home'

export const app = new Frog()

app.get('/', (ctx) => ctx.html(<Home />))
app.route('/memeswap', memeSwapFrame)

devtools(app, { serveStatic })
