import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getChatList, getSingleChatMessages } from '../api/chat'
import { IChat, IMessage } from '../interface/chats'

export const getChats = createAsyncThunk(
    'messages/getChats',
    async function (): Promise<IChat[]> {
        const data = await getChatList().then(res => res.response)
        return data
    }
)

export const getActiveChatMessages = createAsyncThunk(
    'messages/getActiveChatMessages',
    async function (id: string): Promise<IMessage[]> {
        const data = await getSingleChatMessages(id).then(res => res.response)
        return data.reverse()
    }
)

export interface IState {
    chats: IChat[] | [],
    activeChatMessages: IMessage[] | [],
    activeChatTitle: string
    activeChatId: string
}

const messagesSlice =  createSlice({
    name: 'messages',
    initialState:{
        chats: [],
        activeChatMessages: [],
        activeChatTitle: ''
    } as IState,
    reducers: {
        getActiveChatTitle: (state, action: PayloadAction<string>) => {
            const singleChat = state.chats.find((item: IChat) => item.id === action.payload)
            if (singleChat) {
                state.activeChatTitle = singleChat.title
            }
        },
        getActiveChatId: (state, action: PayloadAction<string>) => {
            state.activeChatId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getChats.fulfilled, (state, action: PayloadAction<IChat[]>) => {
                state.chats = action.payload
            })
            .addCase(getActiveChatMessages.fulfilled, (state, action: PayloadAction<IMessage[]>) => {
                state.activeChatMessages = action.payload
            })
            
            .addDefaultCase((state, action) => {})
    }
})

export const { getActiveChatTitle, getActiveChatId } = messagesSlice.actions

export default messagesSlice.reducer