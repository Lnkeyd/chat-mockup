import React, {FC, useEffect } from 'react'
import { IChat } from '../../interface/chats';
import { useAppDispatch, useAppSelector } from '../../store';
import { getChats } from '../../store/messageSlice';
import { ChatItem } from '../ChatItem';
import './chatList.scss'

export const ChatList: FC = () => {

    const dispatch = useAppDispatch()

    
    useEffect(() => {
        dispatch(getChats())
        //eslint-disable-next-line
    }, [])
    
    const list: IChat[] = useAppSelector(store => store.chats.chats)

  return (
    <div className='chat-wrapper'>
        <div className="chat-label">
            All chats
        </div>
        <div className="chat-list">
            {
                list?.map((item: IChat) => (
                    <ChatItem
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        avatarUrl={item.avatar} 
                        lastMessage={item.last_message.message} 
                        createdAt={item.last_message.created_at}
                    />
                ))
            }
        </div>
    </div>
  )
}