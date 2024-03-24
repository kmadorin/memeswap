import { Button } from 'frog'

import tokenlist from './tokenlist.json';


export const quoteTokenScreen = (c:any) => {
	const { token:baseToken, amount, quoteToken } = c.req.param();

	const tokenIndex = tokenlist.findIndex((asset) => asset.name === baseToken);
	const quoteTokenIndex = tokenlist.findIndex((asset) => asset.name === quoteToken);

	if (tokenIndex === -1 || quoteTokenIndex === -1) {
		return c.res({
			image: (
				<h2>Invalid base token</h2>
			),
			intents: [
				<Button action="/menu">
					Back
				</Button>
			]
		})
	}

	const nextIndex = quoteTokenIndex === tokenlist.length - 1 ? 0 : tokenIndex + 1;
	const prevIndex = quoteTokenIndex === 0 ? tokenlist.length - 1 : tokenIndex - 1;

	
  return c.res({
    image: (
      <div style={{display: "flex", flexDirection: "column"}}>
				<h2>{quoteToken}</h2>
				<div style={{display: "flex", flexDirection: "column"}}>
        	{tokenlist.map((asset, index) => index === tokenIndex ? <h3 key={asset.name}>{asset.name}</h3> : <span key={asset.name}>{asset.name}</span>)}
				</div>
      </div>
    ),
    intents: [
			<Button action={`/buy/${baseToken}/${amount}/${tokenlist[prevIndex]}`}>
        Down
      </Button>,
      <Button action={`/buy/${baseToken}/${amount}/${tokenlist[nextIndex]}`}>
        Up
      </Button>,
			<Button action={`/final`}>
				Swap
			</Button>
    ]
  })
}
