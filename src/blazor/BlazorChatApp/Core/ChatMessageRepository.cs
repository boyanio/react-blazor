using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System.Linq;

namespace BlazorChatApp.Core
{
    internal static class ChatMessageRepository
    {
        internal static ChatMessage[] GetChatMessages()
        {
            return RegisteredFunction.Invoke<ChatMessage[]>("getChatMessages")
                .OrderByDescending(m => m.Time)
                .ToArray();
        }

        internal static void AddChatMessage(ChatMessage chatMessage)
        {
            RegisteredFunction.Invoke<ChatMessage[]>("addChatMessage", chatMessage);
        }
    }
}