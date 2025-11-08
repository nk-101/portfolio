
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl p-4 m-4 max-w-4xl max-h-[90vh] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the content
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 h-8 w-8 bg-slate-600 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors z-10"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
