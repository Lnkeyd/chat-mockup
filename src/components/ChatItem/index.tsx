import dayjs from 'dayjs'
import React, {FC} from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { getActiveChatMessages, getActiveChatTitle, getActiveChatId } from '../../store/messageSlice'
import { Avatar } from '../Avatar'
import './chatItem.scss'

type ChatItemProps = {
    id: string,
    title: string,
    avatarUrl: string,
    lastMessage: string,
    createdAt: number
}

export const ChatItem: FC<ChatItemProps> = ({id, title, avatarUrl, lastMessage, createdAt}) => {

    const dispatch = useAppDispatch()
    const activeId: string = useAppSelector(store => store.chats.activeChatId)
    const time = dayjs.unix(createdAt).format('hh:mm')

    const handleChangeChat = () => {
        dispatch(getActiveChatMessages(id))
        dispatch(getActiveChatTitle(id))
        dispatch(getActiveChatId(id))
    }

  return (
    <div className={`chat-item-wrapper ${activeId === id && 'chat-item-active'}`} onClick={handleChangeChat}>
        <Avatar size='md' src={avatarUrl}/>
        <div className="text">
            <div className="text-info">
                <div className='text-info-title'>{title}</div>
                <span className='text-info-time'>{time}</span>
            </div>
            <div className="text-message">
                {lastMessage}
            </div>
        </div>
    </div>
  )
}