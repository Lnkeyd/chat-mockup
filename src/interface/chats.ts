export interface IChat {
    id: string
    created_at: number
    title: string
    avatar: string
    private: boolean
    last_message: ILastMessage
    count_unread: number
    users: IUser[]
}

export interface IMessage {
    id: string
    created_at: number
    user: IUser
    message: string
    is_new: boolean
}

export interface ILastMessage {
    created_at: number
    user_id: string
    user_name: string
    user_surname: string
    you: boolean
    message: string
}
  
export interface IUser {
    id: string
    name: string
    surname: string
    avatar: string
    you: boolean
}