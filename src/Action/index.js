export const chatSend = (text) => {
    return {
        type:"CHAT_SEND",
        payload:text
    }
}