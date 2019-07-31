using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace BlazorChatApp.Core
{
    public class ChatMessageRepository
    {
        private readonly IJSRuntime _jsRuntime;

        public ChatMessageRepository(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime ?? throw new ArgumentNullException(nameof(jsRuntime));
        }

        public async Task<ChatMessage[]> GetChatMessagesAsync()
        {
            return await _jsRuntime.InvokeAsync<ChatMessage[]>(
                "ChatMessageRepository.getChatMessages");

        }

        public async Task AddChatMessageAsync(ChatMessage chatMessage)
        {
            await _jsRuntime.InvokeAsync<object>(
                "ChatMessageRepository.addChatMessage",
                chatMessage);
        }
    }
}