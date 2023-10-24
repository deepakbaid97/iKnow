import { RobotFilled, UserOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { ReactNode } from 'react'

interface ChatBubble {
    sender: "user" | "bot",
    content: ReactNode
}

const ChatBubble:React.FC<ChatBubble> = (props) => {
  return (
    <div className='chat-bubble'>
        <div className='chat-bubble-icon'>
             {props.sender === "user" ?<UserOutlined /> : <RobotFilled /> }
        </div>
        <Card 
            style={{
                border: props.sender == "user" ? "none" : "2px solid #232323", 
                backgroundColor: props.sender === "user" ? "lightblue": "white",
            }}
            size='small'
            className={props.sender}>
            {
                props.content
            }
        </Card>
    </div>
  )
}

export default ChatBubble