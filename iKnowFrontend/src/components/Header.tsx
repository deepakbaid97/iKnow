import { ClearOutlined, SettingOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Header = () => {
  return (
    <div className='header'>
    <Button type="default" icon={<SettingOutlined />} size='large'>
      Settings
    </Button>
    <h1>iKNOW what you're looking for</h1>
    <Button 
        type="default" 
        icon={<ClearOutlined />} 
        size='large'
    >
      Clear Chat
    </Button>
  </div>
  )
}

export default Header