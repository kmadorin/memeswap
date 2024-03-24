import { Button } from 'frog'

import { backgroundStyles, warningStyles, titleStyles } from './styles'
import { CustomFrameContext } from '.'
import tokenlist from './tokenlist.json';


export const buySelectTokenScreen = (c) => {
	const { token } = c.req.param();

	const tokenIndex = tokenlist.findIndex((asset) => asset.name === token);

	if (tokenIndex === -1) {
		return c.res({
			image: (
				<h2>Invalid token</h2>
			),
			intents: [
				<Button action="/menu">
					Back
				</Button>
			]
		})
	}

	const nextIndex = tokenIndex === tokenlist.length - 1 ? 0 : tokenIndex + 1;
	const prevIndex = tokenIndex === 0 ? tokenlist.length - 1 : tokenIndex - 1;

	
  return c.res({
    image: (
      <div style={backgroundStyles}>
				<h2>{token}</h2>
				<div style={{display: "flex", flexDirection: "column"}}>
        	{tokenlist.map((asset, index) => index === tokenIndex ? <h3 key={asset.name}>{asset.name}</h3> : <span key={asset.name}>{asset.name}</span>)}
				</div>
      </div>
    ),
    intents: [
      <Button action={`/buy/${tokenlist[nextIndex].name}`}>
        Up
      </Button>,
      <Button action={`/buy/${tokenlist[prevIndex].name}`}>
        Down
      </Button>,
			<Button action={`/buy/${token}/select`}>
				Select
			</Button>
    ]
  })
}
