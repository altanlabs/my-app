import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // Simple bot logic for demonstration
    if (userInput.toLowerCase().includes('hola')) {
      return '¡Hola! ¿Cómo puedo ayudarte con los datos del viaje?';
    }
    return 'Por favor, proporciona los detalles del viaje para crear el CMR.';
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-md mx-auto">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 mr-2"
        />
        <Button onClick={handleSend} className="bg-blue-500 text-white">
          Enviar
        </Button>
      </div>
    </div>
  );
}
