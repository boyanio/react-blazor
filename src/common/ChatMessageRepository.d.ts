import { ChatMessage } from "./ChatMessage";

declare const ChatMessageRepository: IChatMessageRepository;

declare global {
  interface Window {
    ChatMessageRepository: IChatMessageRepository;
  }
}

interface IChatMessageRepository {
  getChatMessages: () => ChatMessage[];
  addChatMessage: (chatMessage: ChatMessage) => void;
}

export = ChatMessageRepository;