import React, {FC} from 'react'
import Attachment from '../../assets/icons/Attachment'
import Send from '../../assets/icons/Send'
import './input.scss'

export const Input: FC = () => {
  return (
    <div className='input'>
        <div className="input-area">
            <textarea className='input-area-text' placeholder='Type message' rows={3}></textarea>
        </div>
        <div className="input-buttons">
            <button className="input-buttons--attachment">
                <Attachment/>
            </button>
            <button className="input-buttons--send">
                <Send/>
            </button>
        </div>
    </div>
  )
}