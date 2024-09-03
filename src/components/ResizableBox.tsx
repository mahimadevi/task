import React, { useState, useRef, useEffect } from "react";
import { CSSProperties } from "react";

interface ResizableBoxProps {
  width: number;
  height: number;
  onResize: (width: number, height: number) => void;
  children: React.ReactNode;
  style?: CSSProperties;
}

const ResizableBox: React.FC<ResizableBoxProps> = ({
  width,
  height,
  onResize,
  children,
  style,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing && boxRef.current) {
      const newWidth = e.clientX - boxRef.current.getBoundingClientRect().left;
      const newHeight = e.clientY - boxRef.current.getBoundingClientRect().top;
      onResize(newWidth, newHeight);
    }
  };

  const stopResize = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopResize);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };
  }, [isResizing]);

  return (
    <div
      ref={boxRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: "relative",
        ...style,
      }}
    >
      {children}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "10px",
          height: "10px",
          cursor: "nwse-resize",
          backgroundColor: "black",
        }}
        onMouseDown={startResize}
      />
    </div>
  );
};

export default ResizableBox;
