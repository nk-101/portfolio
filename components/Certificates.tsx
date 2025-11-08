
import React, { useState } from 'react';
import { CERTIFICATES_DATA } from '../constants';
import Section from './Section';
import Modal from './Modal';
import AwardIcon from './icons/AwardIcon';

const Certificates: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Section title="Certificates">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <button
              key={index}
              onClick={() => openModal(cert.imageUrl)}
              className="group text-left block bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-transparent"
              aria-label={`View certificate for ${cert.name}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full flex-shrink-0">{cert.year}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 my-4 text-sm">{cert.description}</p>
              <div className="flex items-center mt-auto">
                <AwardIcon className="h-5 w-5 text-cyan-500 dark:text-cyan-400 mr-2" />
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline">
                  View Certificate
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedImage && (
          <img 
            src={selectedImage} 
            alt="Certificate" 
            className="rounded-md max-w-full max-h-[80vh] object-contain"
          />
        )}
      </Modal>
    </>
  );
};

export default Certificates;