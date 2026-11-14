import React, { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'React Developer',
  'MERN Stack Developer',
  'Full-Stack Web Developer'
];

export default function TypewriterRoles() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(80 + Math.random() * 40);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(350); // Pause before next word
        } else {
          setTypingSpeed(45);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <span className="inline-flex items-center text-burnt font-semibold">
      <span>{currentText}</span>
      <span className="w-0.5 h-6 sm:h-7 lg:h-8 bg-burnt ml-1 animate-pulse" aria-hidden="true" />
    </span>
  );
}
