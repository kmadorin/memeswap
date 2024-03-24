import { Button } from 'frog'

export const homeScreen = (c) => {
  return c.res({
    image: (
      <div>
				<h1>Meme Swap</h1>
				<h2>Easily trade ERC20 tokens</h2>
				<h3>Powered by 1inch</h3>
      </div>
    ),
    intents: [
      <Button>Help</Button>,
      <Button>Website</Button>,
      <Button action={`/menu`}>Start &#x1F680;</Button>,  
    ],
  })
}
