/** @jsx Slack */

import Slack from 'slack-jsx'
import { Message, Attachment, Action } from 'slack-jsx/components'

const attachment = (
  <Attachment pretext='Above the attachment'>
    <Action name='foo' value='bar'>Click me!</Action>
  </Attachment>
)

const message = (
  <Message>
    {attachment}
  </Message>
)

console.log(JSON.stringify(message, null, 2))
