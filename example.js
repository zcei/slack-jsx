/** @jsx Slack */

import Slack, { Message, Attachment, Action } from 'slack-jsx'

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
