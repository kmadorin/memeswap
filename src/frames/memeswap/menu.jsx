import { Button } from 'frog'

import { backgroundStyles, warningStyles, titleStyles } from './styles'
import { CustomFrameContext } from '.'
import tokenlist from './tokenlist.json';

export const menuScreen = (c) => {
  return c.res({
    image: (
      <div style={backgroundStyles}>
        Menu Screen
      </div>
    ),
    intents: [
      <Button action={`/buy/${tokenlist[0].name}`}>
        Buy
      </Button>,
      <Button>
        Sell
      </Button>
    ]
  })
}
