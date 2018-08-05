import * as React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatMessage as ChatMessageModel } from "../../common/ChatMessage";

const byTimeDesc = (a: ChatMessageModel, b: ChatMessageModel) =>
  b.time.getTime() - a.time.getTime();

export interface ChatProps {
  chatMessages: ChatMessageModel[];
}

export const Chat = (props: ChatProps) => {
  const hasChatMessages = props.chatMessages.length > 0;

  const body = hasChatMessages ?
    <div className="chat-section">
      <ul>
        {props.chatMessages
          .sort(byTimeDesc)
          .map((chatMessage, index) => <ChatMessage key={index} chatMessage={chatMessage} isLeft={chatMessage.from == props.chatMessages[props.chatMessages.length - 1].from} />)}
      </ul>
    </div> :
    <p>
      There aren't any messages yet. Why don't you write one?
    </p>;

  return (
    <div className="row">
      <div className="col-md-12">
        {body}
      </div>
    </div>
  );
}