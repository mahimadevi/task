// src/pages/Home.tsx
import React, { useState } from "react";
import Video from "../components/Video";
import ConfigPanel from "../components/ConfigPanel";
import TextBox from "../components/TextBox";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addTextBox } from "../slices/textSlice";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const textBoxes = useSelector((state: RootState) => state.text.textBoxes);
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [fontFamily, setFontFamily] = useState("Arial"); // Default font
  const [fontColor, setFontColor] = useState("#000000"); // Default font color
  const [isBold, setIsBold] = useState(false); // Default bold
  const [isItalic, setIsItalic] = useState(false); // Default italic
  const [isUnderline, setIsUnderline] = useState(false); // Default underline
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  ); // Default alignment

  const handleAddTextBox = () => {
    const id = `text-${Date.now()}`;
    dispatch(
      addTextBox({
        id,
        text: "New Text",
        x: 50,
        y: 50,
        width: 200,
        height: 100,
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

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.videoContainer}>
          <Video />
          {textBoxes.map((textBox) => (
            <TextBox
              key={textBox.id}
              {...textBox}
              fontSize={fontSize}
              fontFamily={fontFamily}
              fontColor={fontColor}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              textAlign={textAlign}
            />
          ))}
        </div>
        <div className={styles.configPanel}>
          <ConfigPanel
            onFontSizeChange={setFontSize}
            onFontChange={setFontFamily}
            onFontColorChange={setFontColor}
            onBoldChange={setIsBold}
            onItalicChange={setIsItalic}
            onUnderlineChange={setIsUnderline}
            onTextAlignChange={setTextAlign}
          />
          <button className={styles.addButton} onClick={handleAddTextBox}>
            Add Text
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
