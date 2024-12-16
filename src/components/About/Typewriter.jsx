import { useEffect, useState, useRef, useMemo } from 'react';

const Typewriter = ({ words, loop = true, typingSpeed = 150, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndexRef = useRef(charIndex);

  const typingSpeedMemo = useMemo(() => typingSpeed, [typingSpeed]);
  const pauseTimeMemo = useMemo(() => pauseTime, [pauseTime]);

  useEffect(() => {
    charIndexRef.current = charIndex;
  }, [charIndex]);

  useEffect(() => {
    if (words.length === 0) return; // Avoid issue if words array is empty

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
      }, typingSpeedMemo);
    } else if (isPausing) {
      timer = setTimeout(() => setIsDeleting(true), pauseTimeMemo);
    } else if (isDeletingWord) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeedMemo / 2);
    } else if (isWordDeleted) {
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentWordIndex((prev) => {
        if (words.length === 0) return prev; // Prevents error with empty words array
        return loop ? (prev + 1) % words.length : prev + 1;
      });
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [charIndex, isDeleting, currentWordIndex, words, loop, typingSpeedMemo, pauseTimeMemo]);

  useEffect(() => {
    setCurrentWordIndex(0);
    setCharIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [words]);

  return <span>{displayText}</span>;
};

export default Typewriter;
