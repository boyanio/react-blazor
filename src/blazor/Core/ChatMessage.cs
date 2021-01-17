using System;

namespace BlazorChatApp.Core
{
    public class ChatMessage
    {
        public DateTime Time { get; set; }

        public string From { get; set; }

        public string Text { get; set; }
    }
}