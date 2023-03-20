import React, {FC} from 'react'
import dayjs from 'dayjs'
import Check from '../../assets/icons/Check'
import './time.scss'

type TimeProps = {
  my: boolean,
  time: number
}

const Time: FC<TimeProps> = ({my, time}) => {

    const formatted = dayjs.unix(time).format('hh:mm')

  return (
    <div className='time'>
        {formatted}
        {
            my &&
            <div className="time-check">
                <Check/>
            </div> 
        }
    </div>
  )
}

export default Time