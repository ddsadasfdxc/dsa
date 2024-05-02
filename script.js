function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();

    if (message) {
        var messagesContainer = document.getElementById('messages');
        var msgElement = document.createElement('div');

       msgElement.textContent = message;

       messagesContainer.appendChild(msgElement);

       input.value = ''; // 清空输入框
       messagesContainer.scrollTop = messagesContainer.scrollHeight; // 滚动到底部
   }
