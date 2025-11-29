"use client";

import { useState, useEffect } from 'react';

export const useSmoothTypewriter = (texts, options = {}) => {
    const {
        speed = 60,
        delayBetweenTexts = 2000,
        deleteSpeed = 40,
    } = options;

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timer;

        if (!isDeleting) {
            // Typing phase
            if (displayText.length < currentText.length) {
                timer = setTimeout(() => {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                }, speed);
            } else {
                // Pause before deleting
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenTexts);
            }
        } else {
            // Deleting phase
            if (displayText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, deleteSpeed);
            } else {
                // Move to next text
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

    return displayText;
};
