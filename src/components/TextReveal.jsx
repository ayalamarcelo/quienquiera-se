import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({ children, className = '', href = '#', onClick }) {
  const text = typeof children === 'string' ? children : '';

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`text-reveal-link ${className}`}
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
    >
      <div className="text-reveal-wrapper">
        {/* Capa 1: Texto visible que sube */}
        <motion.span
          className="text-reveal-item"
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%' },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {text}
        </motion.span>

        {/* Capa 2: Texto clonado que entra desde abajo */}
        <motion.span
          className="text-reveal-item text-reveal-clone"
          variants={{
            initial: { y: '100%' },
            hover: { y: 0 },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {text}
        </motion.span>
      </div>
    </motion.a>
  );
}