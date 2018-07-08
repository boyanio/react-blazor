import * as React from "react";
import { NewChatMessage } from "./NewChatMessage";
import { Chat } from "./Chat";
import { ChatMessage as ChatMessageModel } from "../core/ChatMessage";
import { ChatMessageRepository } from "../core/ChatMessageRepository";

interface ReactChatAppState {
  chatMessages: ChatMessageModel[];
}

export class ReactChatApp extends React.Component<{}, ReactChatAppState> {

  constructor(props) {
    super(props);

    this.state = { chatMessages: [] };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        chatMessages: ChatMessageRepository.getChatMessages()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>React chat</h1>

        <NewChatMessage />

        <Chat chatMessages={this.state.chatMessages} />
      </div>
    );
  }
}