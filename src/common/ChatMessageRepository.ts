import { ChatMessage } from "./ChatMessage";

const sessionStorageKey = "chat-messages";

const getChatMessages =
  () => (<any[]>JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]"))
    .map(x => <ChatMessage>{ from: x.from, text: x.text, time: new Date(Date.parse(x.time)) });

const chatMessageRepository = {
  getChatMessages,
  addChatMessage: (chatMessage: ChatMessage) =>
    sessionStorage.setItem(sessionStorageKey, JSON.stringify([...getChatMessages(), chatMessage]))
}

window.ChatMessageRepository = chatMessageRepository;