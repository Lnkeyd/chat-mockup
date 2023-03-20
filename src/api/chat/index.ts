import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

export const getChatList = () => {
    return wrapper("get", URLS.BASE + URLS.CHAT)
}

export const getSingleChatMessages = (id: string) => {
    return wrapper("get", URLS.BASE + URLS.MESSAGE, null, {chat_id: id})
}