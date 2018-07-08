(function () {
    const sessionStorageKey = 'chat-messages';

    const getChatMessages =
        () => JSON.parse(sessionStorage.getItem(sessionStorageKey)) || [];

    const addChatMessage =
        (chatMessage) => sessionStorage.setItem(sessionStorageKey, JSON.stringify([...getChatMessages(), chatMessage]));

    Blazor.registerFunction('getChatMessages', getChatMessages);

    Blazor.registerFunction('addChatMessage', addChatMessage);
})();