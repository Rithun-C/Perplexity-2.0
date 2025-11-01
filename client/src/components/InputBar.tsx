import React from 'react';

interface InputBarProps {
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<InputBarProps> = ({ currentMessage, setCurrentMessage, onSubmit }) => {
  return (
    <div className="p-6 bg-white border-t border-gray-100">
      <form onSubmit={onSubmit} className="flex space-x-4">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5E507F] focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-[#4A3F71] to-[#5E507F] text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!currentMessage.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default InputBar;