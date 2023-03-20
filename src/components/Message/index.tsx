import React, {FC} from 'react'
import { Avatar } from '../Avatar'
import Time from '../Time'
import './message.scss'

type MessageProps = {
    my: boolean,
    main: boolean,
    avatarUrl: string,
    name: string,
    text: string,
    time: number
}

const Message: FC<MessageProps> = ({my, main, avatarUrl, name, text, time}) => {

  return (
    <div className={`message ${(my === true) && 'my-message'} ${(main === true) && 'main-message'}`} >
        { 
            (my === false) && (main === true) &&
            <span className='message-avatar'>
                <Avatar src={avatarUrl} size={'sm'}/>
            </span>
        }
            <div className="message-user-info">
                {
                    (my === false) && (main === true) &&
                    <div className="message-user-info-name">
                        {name}
                    </div>
                }
                <div className={`message-user-info-text ${(main === false) && 'message-user-info-non-main'}`}>
                        {text}
                        <span className='message-user-info-text-time'>
                            <Time 
                                my={my}
                                time={time}
                            />
                        </span>
                </div>
            </div>
    </div>
  )
}

export default Message