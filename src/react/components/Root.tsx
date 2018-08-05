import * as React from "react";
import { NewChatMessage } from "./NewChatMessage";
import { Chat } from "./Chat";
import { ChatMessage as ChatMessageModel } from "../../common/ChatMessage";
import * as ChatMessageRepository from "ChatMessageRepository";

interface RootState {
  chatMessages: ChatMessageModel[];
}

export class Root extends React.Component<{}, RootState> {

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
        <h1 className="text-right">React chat</h1>

        <NewChatMessage />

        <Chat chatMessages={this.state.chatMessages} />
      </div>
    );
  }
}