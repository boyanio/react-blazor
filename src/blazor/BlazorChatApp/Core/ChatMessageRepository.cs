using Microsoft.AspNetCore.Blazor.Browser.Interop;

namespace BlazorChatApp.Core
{
    internal static class ChatMessageRepository
    {
        internal static ChatMessage[] GetChatMessages()
        {
            return RegisteredFunction.Invoke<ChatMessage[]>("getChatMessages");
        }

        internal static void AddChatMessage(ChatMessage chatMessage)
        {
            RegisteredFunction.Invoke<ChatMessage[]>("addChatMessage", chatMessage);
        }
    }
}