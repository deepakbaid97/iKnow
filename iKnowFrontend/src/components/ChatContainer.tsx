import { SendOutlined } from '@ant-design/icons';
import ChatBubble from './ChatBubble'

import "./common.scss";
import { Button, Input, Space } from 'antd';
import { ReactNode, useState } from 'react';
import { valueType } from 'antd/es/statistic/utils';
import axios from 'axios';

const ChatContainer = () => {
    const c:ReactNode = (
        <div>
            <h1>IDK</h1>
        </div>
    );
    const handleOnClick = (event:any) => {
        console.log('HIIIIiiiIi', event);
        axios.post('http://localhost:3000/doYouKnow', {
            headers:  {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            data: {
                "question": "what is your name?"
            }
        })
        .then((e:any) => {
            console.log(e, "EEEE");
        })
    }

    const handleOnInputChange = (event:any) => {
        console.log(event.target.value);
        setUserText(event.target.value);
    }
    const [userText, setUserText] = useState<valueType>('');
  return (
    <div className='chat-container'>
        <div className='chat-container-bubbles'>
            <ChatBubble sender="bot" content={c}/>
            <ChatBubble sender="user" content={c}/>
        </div>
        <Space.Compact style={{ width: '100%' }} size='large'>
            <Input 
                placeholder="Ask me..." 
                style={{marginBottom: "90px"}} 
                size='large'
                value={userText}
                onChange={(e) => handleOnInputChange(e)}
            />
            <Button 
                type="primary" 
                icon={<SendOutlined />}
                onClick={(e) => handleOnClick(e)}
            >               
            </Button>
        </Space.Compact>
    </div>
  )
}

export default ChatContainer