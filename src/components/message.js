import PropTypes from 'prop-types'

export function Message (props, attachments) {
  return {
    ...props,
    attachments
  }
}

Message.propTypes = {
  text: { type: PropTypes.string, key: 'text' },
  username: { type: PropTypes.string, key: 'username' },
  markdown: { type: PropTypes.bool, key: 'mrkdwn' }
}
