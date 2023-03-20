import React, {FC} from 'react'
import dayjs from 'dayjs'
import './systemMessage.scss'

type SystemMessageProps = {
  date: number
}

const SystemMessage: FC<SystemMessageProps> = ({date}) => {

    const formatted = dayjs.unix(date).format('DD.MM.YYYY')
    
  return (
    <div className='system-message'>{formatted}</div>
  )
}

export default SystemMessage