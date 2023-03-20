import dayjs from 'dayjs'
import Message from '../Message'
import NewMessage from '../NewMessage/indes'
import './chatArea.scss'
import SystemMessage from '../SystemMessage'
import { IMessage } from '../../interface/chats'
import { useAppSelector } from '../../store'
import { nanoid } from '@reduxjs/toolkit'

export const ChatArea: React.FC = () => {
    
    const activeChat: IMessage[] = useAppSelector(store => store.chats?.activeChatMessages)
  
  return (
    <>
        <div className='chat-area'>
            {
                activeChat?.map((item: IMessage, index: number) => (
                        <div key={item.id}>
                            {/* DISPLAYS NEW DAY vvvvvv */}
                            {(dayjs(activeChat[index - 1]?.created_at).format('DD/MM/YYYY') !== dayjs(item.created_at).format('DD/MM/YYYY')) && <SystemMessage date={item.created_at}/>}
                            {/* DISPLAYS "NEW MESSAGES" vvvvvv */}
                            {item.is_new && (activeChat[index - 1]?.is_new === false)  && <NewMessage/>}
                            <Message 
                            name={item.user.name + item.user.surname}
                            avatarUrl={item.user.avatar}
                            text={item.message}
                            my={item.user.you}
                            time={item.created_at}
                            main={activeChat[index - 1]?.user.id !== item.user.id}/>
                        </div>
                        ))
            }
        </div>
    </>
  )
}