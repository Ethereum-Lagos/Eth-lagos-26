interface EthereumLogoProps {
  className?: string;
}

export function EthereumLogo({ className = "w-12 h-12" }: EthereumLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 417"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <polygon
          fill="#8B7FDC"
          points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
        />
        <polygon
          fill="#B4A8E8"
          points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
        />
        <polygon
          fill="#8B7FDC"
          points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
        />
        <polygon
          fill="#B4A8E8"
          points="127.962 416.9052 127.962 312.1852 0 236.5852"
        />
        <polygon
          fill="#62688F"
          points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
        />
        <polygon
          fill="#8693C4"
          points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
        />
      </g>
    </svg>
  );
}
