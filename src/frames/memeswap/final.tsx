import { Button } from 'frog'

export const finalScreen = (c:any) => {
  return c.res({
    image: (
      <div style={{display: "flex", flexDirection: "column"}}>
				<h1>Exchange completed</h1>
      </div>
    ),
    intents: [
      <Button action="/">Swap again</Button>,
      <Button>Share</Button>,  
    ],
  })
}
