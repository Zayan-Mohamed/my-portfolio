import { useEffect, useState } from 'react';

const Typewriter = ({ words, loop = true, typingSpeed = 150, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const isTyping = !isDeleting && charIndex < currentWord.length;
    const isPausing = !isDeleting && charIndex === currentWord.length;
    const isDeletingWord = isDeleting && charIndex > 0;
    const isWordDeleted = isDeleting && charIndex === 0;

    let timer;

    if (isTyping) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isPausing) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeletingWord) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (isWordDeleted) {
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentWordIndex((prev) => (loop ? (prev + 1) % words.length : prev + 1));
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words, loop, typingSpeed, pauseTime]);

  useEffect(() => {
    // Reset if words prop changes
    setCurrentWordIndex(0);
    setCharIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [words]);

  return <span>{displayText}</span>;
};

export default Typewriter;
