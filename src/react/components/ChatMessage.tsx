import * as React from "react";
import { ChatMessage as ChatMessageModel } from "../core/ChatMessage";
import { formatRelativeTime } from "../core/TimeUtils";

export interface ChatMessageProps {
  isLeft: boolean;
  chatMessage: ChatMessageModel;
}

export const ChatMessage = (props: ChatMessageProps) =>
  <li>
    <div className={props.isLeft ? "left-chat" : "right-chat"}>
      <img src={`images/${props.chatMessage.from.toLowerCase()}-logo.png`} />
      <p>{props.chatMessage.text}</p>
      <span>{formatRelativeTime(props.chatMessage.time)}</span>
    </div>
  </li>;