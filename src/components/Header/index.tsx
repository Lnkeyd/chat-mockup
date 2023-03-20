import React, {FC} from 'react'
import Chat from '../../assets/icons/Chat'
import { useAppSelector } from '../../store'
import './header.scss'

export const Header: FC = () => {

  const headline: string = useAppSelector(store => store.chats.activeChatTitle)

  return (
    <div className='header'>
        <Chat/>
        <div className='header-title'>{headline}</div>
    </div>
  )
}