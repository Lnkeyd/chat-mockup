import React, {FC} from "react";
import { ChatList } from "../../components/ChatList";
import { ChatRoom } from "../../components/ChatRoom";
import {IPage} from "../../interface/page";
import './layout.scss'

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <div className="main-page-layout">
            <ChatList/>
            <ChatRoom/>
        </div>
    )
}