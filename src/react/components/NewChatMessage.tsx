import * as React from "react";
import * as ChatMessageRepository from "ChatMessageRepository";

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
      <form className="new-message-form">
        <div className="row">
          <div className="col-md-9">
            <input type="text" id="newChatMessage" className="form-control" placeholder="Enter your message here..." value={this.state.newMessage} onChange={this.handleChange} />
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Send</button>
          </div>
        </div>
      </form>
    );
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ newMessage: event.currentTarget.value });
  }

  handleSubmit() {
    ChatMessageRepository.addChatMessage({ from: 'React', time: new Date(), text: this.state.newMessage });
    this.setState(createDefaultState());
  }
}