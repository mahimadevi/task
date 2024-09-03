// src/components/TextBox.tsx
import React, { FC, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTextBox, updateTextBox } from "../slices/textSlice";
import ResizableBox from "./ResizableBox";

interface TextBoxProps {
  id: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  fontFamily: string;
  fontColor: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  textAlign: "left" | "center" | "right";
  onSelect?: () => void;
  onPositionChange?: (x: number, y: number) => void;
}

const TextBox: FC<TextBoxProps> = ({
  id,
  text,
  x,
  y,
  width,
  height,
  fontSize,
  fontFamily,
  fontColor,
  isBold,
  isItalic,
  isUnderline,
  textAlign,
  onSelect,
  onPositionChange,
}) => {
  const dispatch = useDispatch();
  const [position, setPosition] = React.useState({ x, y });
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition({ x, y });
  }, [x, y]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (onSelect) onSelect();

    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newX = position.x + moveEvent.clientX - startX;
      const newY = position.y + moveEvent.clientY - startY;

      setPosition({ x: newX, y: newY });
      if (onPositionChange) onPositionChange(newX, newY);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      dispatch(
        updateTextBox({
          id,
          text,
          x: position.x,
          y: position.y,
          width,
          height,
          fontSize,
          fontFamily,
          fontColor,
          isBold,
          isItalic,
          isUnderline,
          textAlign,
        })
      );
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleResize = (newWidth: number, newHeight: number) => {
    dispatch(
      updateTextBox({
        id,
        text,
        x: position.x,
        y: position.y,
        width: newWidth,
        height: newHeight,
        fontSize,
        fontFamily,
        fontColor,
        isBold,
        isItalic,
        isUnderline,
        textAlign,
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateTextBox({
        id,
        text: e.target.value,
        x: position.x,
        y: position.y,
        width,
        height,
        fontSize,
        fontFamily,
        fontColor,
        isBold,
        isItalic,
        isUnderline,
        textAlign,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTextBox(id));
  };

  return (
    <ResizableBox
      width={width}
      height={height}
      onResize={handleResize}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "move",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        ref={boxRef}
        onMouseDown={handleMouseDown}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <textarea
          value={text}
          onChange={handleChange}
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
            color: fontColor,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
            textAlign: textAlign,
          }}
        />
        <button
          onClick={handleDelete}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "#ff0000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "4px 8px",
            fontSize: "14px",
          }}
        >
          X
        </button>
      </div>
    </ResizableBox>
  );
};

export default TextBox;
