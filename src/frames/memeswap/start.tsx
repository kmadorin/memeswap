import { Button } from 'frog'
import { startScreenStyle } from './styles'

export const homeScreen = (c:any) => {
  return c.res({
    image: (
			<div style={startScreenStyle}>
				<h2>Meme</h2>
				<h1>Swap</h1>
				
				<span>Powered by 1inch</span>
			</div>
		),
    intents: [
      <Button>Help</Button>,
      <Button>Website</Button>,
      <Button action={`/menu`}>Start &#x1F680;</Button>,  
    ],
  })
}
