import { Button } from 'frog'

import tokenlist from './tokenlist.json';

export const buyScreen = (c) => {
	return c.res({
		image: (
			<div>
				{tokenlist.map((asset) => asset.name)}
			</div>
		),
		intents: [
			<Button value={`/buy/${tokenlist[0].name}`}>
				Up
			</Button>,
			<Button value={`/buy/${tokenlist[1].name}`}>
				Down
			</Button>
		]
	})
}
