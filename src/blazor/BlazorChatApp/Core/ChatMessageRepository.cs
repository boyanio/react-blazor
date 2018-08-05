using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorChatApp.Core
{
    internal static class ChatMessageRepository
    {
        internal static async Task<ChatMessage[]> GetChatMessagesAsync()
        {
            return await JSRuntime.Current.InvokeAsync<ChatMessage[]>(
                "ChatMessageRepository.getChatMessages");

        }

        internal static async Task AddChatMessageAsync(ChatMessage chatMessage)
        {
            await JSRuntime.Current.InvokeAsync<object>(
                "ChatMessageRepository.addChatMessage",
                chatMessage);
        }
    }
}