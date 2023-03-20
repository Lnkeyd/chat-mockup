import React, {FC} from 'react'
import { ChatArea } from '../ChatArea'
import { Header } from '../Header'
import { Input } from '../Input'
import './chatRoom.scss'

export const ChatRoom: FC = () => {

  return (
    <div className='chat-room'>
        <Header/>
        <ChatArea/>
        <Input/>
    </div>
  )
}