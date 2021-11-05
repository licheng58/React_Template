import { message } from 'antd'
const Lc_Message = (type, content, duration) => {
  return message.open({
    type: type || 'info',
    content: content || 'info',
    duration: duration || 1,
  })
}

export default Lc_Message
