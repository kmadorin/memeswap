import { Frog } from 'frog'

import memeSwapFrame from './frames/memeswap'

export const app = new Frog()

app.route('/memeswap',memeSwapFrame)

export default app
