'use client';
import { useEffect } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.2s ease',
        padding: '2rem',
        cursor: 'pointer',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: 'none',
          color: '#FFFFFF',
          fontSize: '2rem',
          cursor: 'pointer',
          lineHeight: 1,
          fontFamily: 'DM Sans, sans-serif',
          padding: '0.5rem',
          zIndex: 1,
        }}
      >
        ×
      </button>
      <div
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '700px', width: '100%', cursor: 'default' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
    </div>
  );
}
