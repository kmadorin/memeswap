import { Button } from 'frog'

import tokenlist from './tokenlist.json';
import { menuScreenStyle } from './styles';

export const menuScreen = (c:any) => {
  return c.res({
    image: (
      <div style={menuScreenStyle}>
				
			</div>
    ),
    intents: [
			<Button action={`/`}>
        Back
      </Button>,
      <Button action={`/buy/${tokenlist[0].name}`}>
        Buy
      </Button>,
      <Button>
        Sell
      </Button>
    ]
  })
}
