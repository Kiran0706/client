import React, { useState } from 'react';
import './home.css'; // Import the external CSS file

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const sendMessage = () => {
        if (messageText.trim() !== '') {
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            // Create a new message object
            const newMessage = {
                text: messageText,
                timestamp,
            };

            // Update the message list
            setMessages([...messages, newMessage]);

            // Clear the input field
            setMessageText('');

            // Scroll to the bottom of the chat after sending
            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };

    const handleInputChange = (e) => {
        setMessageText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-sidebar">
                <div className="chat-header">
                    <h2>Chat App</h2>
                </div>
                <div className="chat-list">
                    <div className="chat-list-item active">
                        <div className="avatar">K</div>
                        <div className="chat-info">
                            <h3>Kiran</h3>
                            <p>Hey, how are you?</p>
                        </div>
                    </div>
                    <div className="chat-list-item">
                        <div className="avatar">N</div>
                        <div className="chat-info">
                            <h3>Naresh</h3>
                            <p>Let's meet tomorrow!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat-main">
                <div className="chat-header">
                    <h3>Kiran</h3>
                </div>

                <div className="chat-messages">
                    <ol id="messageList">
                        {messages.map((message, index) => (
                            <li key={index} className="message sent">
                                <div>{message.text}</div>
                                <div className="timestamp">{message.timestamp}</div>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={messageText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;
