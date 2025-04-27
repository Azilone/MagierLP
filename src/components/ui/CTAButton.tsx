import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <StyledWrapper>
      <button className="animated-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M12 3v12M7 8l5-5 5 5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"/>
        </svg>
        <span className="text">
          {isMobile ? 'Upload Photo' : 'Upload Your Photo'}
        </span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M12 3v12M7 8l5-5 5 5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"/>
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    padding: 14px 28px;
    border: 2px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: transparent;
    border-radius: 100px;
    font-weight: 600;
    color: #5F1CFC;
    box-shadow: 0 0 0 2px rgba(95, 28, 252, 0.2);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    margin: 0;

    @media (max-width: 768px) {
      min-width: 160px;
      width: auto;
      padding: 14px 40px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      padding: 12px 32px;
      font-size: 14px;
    }
  }

  .animated-button svg {
    position: absolute;
    width: 20px;
    stroke: #5F1CFC;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    @media (max-width: 768px) {
      width: 18px;
    }
  }

  .animated-button .arr-1 {
    right: 16px;
    @media (max-width: 768px) {
      right: 12px;
    }
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
    max-width: none;

    @media (max-width: 768px) {
      transform: translateX(-8px);
    }
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #FFCFF5 0%, #5F1CFC 100%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: white;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 18px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    stroke: white;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px rgba(95, 28, 252, 0.3);
  }

  .animated-button:hover .circle {
    width: 150%;
    height: 500px;
    opacity: 1;
  }
`;

export default Button;
