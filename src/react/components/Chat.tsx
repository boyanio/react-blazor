import * as React from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatMessage as ChatMessageModel } from "../core/ChatMessage";

const byTimeDesc = (a: ChatMessageModel, b: ChatMessageModel) =>
  b.time.getTime() - a.time.getTime();

export interface ChatProps {
  chatMessages: ChatMessageModel[];
}

export const Chat = (props: ChatProps) =>
  <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="chat-section">
        <ul>
          {props.chatMessages
            .sort(byTimeDesc)
            .map((chatMessage, index) => <ChatMessage key={index} chatMessage={chatMessage} isLeft={chatMessage.from == props.chatMessages[0].from} />)}
        </ul>
      </div>
    </div>
  </div>