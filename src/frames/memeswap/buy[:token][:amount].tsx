import { Button } from 'frog'

import tokenlist from './tokenlist.json';


export const amountScreen = (c:any) => {
	const { token:baseToken, amount } = c.req.param();

	const tokenIndex = tokenlist.findIndex((asset) => asset.name === baseToken);

	if (tokenIndex === -1) {
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

	const amounts = [1, 5, 10, 100, 1000];

	const amountIndex = amounts.findIndex((am) => am === parseInt(amount));
	const nextAmountIndex = amountIndex === amounts.length - 1 ? 0 : amountIndex + 1;
	const prevAmountIndex = amountIndex === 0 ? amounts.length - 1 : amountIndex - 1;
	
  return c.res({
    image: (
      <div style={{display: "flex", flexDirection: "column"}}>
				<div style={{display: "flex", flexDirection: "column"}}>
					<ul>
						{amounts.map((amount, index) => {
							return (<li key={`${amount}-${index}`}>{amount}</li>)
						})}
					</ul>
				</div>
      </div>
    ),
    intents: [
			<Button action={`/buy/${baseToken}/${amounts[prevAmountIndex]}`}>
        Down
      </Button>,
      <Button action={`/buy/${baseToken}/${amounts[nextAmountIndex]}`}>
        Up
      </Button>,
			<Button action={`/buy/${baseToken}/${amount}/${tokenlist[1].name}`}>
				Continue
			</Button>
    ]
  })
}
