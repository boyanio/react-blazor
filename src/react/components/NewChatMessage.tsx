import * as React from "react";
import { ChatMessageRepository } from "../core/ChatMessageRepository";

interface NewChatMessageState {
  newMessage: string;
}

const createDefaultState: () => NewChatMessageState =
  () => ({ newMessage: "" });

export class NewChatMessage extends React.Component<{}, NewChatMessageState> {

  constructor(props) {
    super(props);

    this.state = createDefaultState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form className="form-inline new-message-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" id="newChatMessage" className="form-control" placeholder="Enter your message here..." value={this.state.newMessage} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    );
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ newMessage: event.currentTarget.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    ChatMessageRepository.addChatMessage({ from: 'React', time: new Date(), text: this.state.newMessage });
    this.setState(createDefaultState());
    event.preventDefault();
  }
}