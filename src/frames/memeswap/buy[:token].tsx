import { Button } from 'frog'

import tokenlist from './tokenlist.json';

import { selectedTokenStyle, tokenStyle, tokenListStyles} from './styles';


export const buySelectTokenScreen = (c:any) => {
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
      <div style={{display: "flex", flexDirection: "column"}}>
					<ul style={tokenListStyles}>
						{tokenlist.map((asset, index) => {
							return (<li key={asset.name} style={index === tokenIndex ? selectedTokenStyle : tokenStyle }>{asset.name}</li>)
						})}
					</ul>
      </div>
    ),
    intents: [
      <Button action={`/buy/${tokenlist[nextIndex].name}`}>
        Up
      </Button>,
      <Button action={`/buy/${tokenlist[prevIndex].name}`}>
        Down
      </Button>,
			<Button action={`/buy/${token}/1`}>
				Select
			</Button>
    ]
  })
}
