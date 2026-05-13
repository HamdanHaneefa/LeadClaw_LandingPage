import React from 'react';

const BrandLogo = ({ size = 32, className = "" }: { size?: number, className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 1500 1500" 
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="matrix(1, 0, 0, 1, 310, 150)">
        <g>
          <path fill="#a511cf" d="M 0.6875 0 L 210.402344 0 L 210.402344 1200.136719 L 0.6875 1200.136719 Z M 0.6875 0 " />
          <path fill="#a511cf" d="M 335.140625 0 L 544.859375 0 L 544.859375 1200.136719 L 335.140625 1200.136719 Z" />
          <path fill="#a511cf" d="M 669.597656 0 L 879.3125 0 L 879.3125 1200.136719 L 669.597656 1200.136719 Z" />
        </g>
      </g>
    </svg>
  );
};

export default BrandLogo;
