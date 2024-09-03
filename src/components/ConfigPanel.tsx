// import React from "react";
// import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
// import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

// interface ConfigPanelProps {
//   onFontSizeChange: (size: number) => void;
//   onFontChange: (font: string) => void;
//   onFontColorChange: (color: string) => void;
//   onBoldChange: (isBold: boolean) => void;
//   onItalicChange: (isItalic: boolean) => void;
//   onUnderlineChange: (isUnderline: boolean) => void;
//   onTextAlignChange: (align: "left" | "center" | "right") => void;
// }

// const ConfigPanel: React.FC<ConfigPanelProps> = ({
//   onFontSizeChange,
//   onFontChange,
//   onFontColorChange,
//   onBoldChange,
//   onItalicChange,
//   onUnderlineChange,
//   onTextAlignChange,
// }) => {
//   return (
//     <div>
//       <h3>Configuration</h3>
//       <div>
//         <label htmlFor="font-size">Font Size:</label>
//         <select
//           id="font-size"
//           onChange={(e) => onFontSizeChange(parseInt(e.target.value, 10))}
//           defaultValue="16"
//         >
//           <option value="12">12px</option>
//           <option value="14">14px</option>
//           <option value="16">16px</option>
//           <option value="18">18px</option>
//           <option value="20">20px</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="font-family">Font Family:</label>
//         <select
//           id="font-family"
//           onChange={(e) => onFontChange(e.target.value)}
//           defaultValue="Arial"
//         >
//           <option value="Arial">Arial</option>
//           <option value="Verdana">Verdana</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Courier New">Courier New</option>
//           <option value="Georgia">Georgia</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="font-color">Font Color:</label>
//         <input
//           type="color"
//           id="font-color"
//           onChange={(e) => onFontColorChange(e.target.value)}
//           defaultValue="#000000"
//         />
//       </div>
//       <div>
//         <label>
//           <button type="button" onClick={() => onBoldChange(true)}>
//             <FaBold />
//           </button>
//           <span>Bold</span>
//         </label>
//         <label>
//           <button type="button" onClick={() => onItalicChange(true)}>
//             <FaItalic />
//           </button>
//           <span>Italic</span>
//         </label>
//         <label>
//           <button type="button" onClick={() => onUnderlineChange(true)}>
//             <FaUnderline />
//           </button>
//           <span>Underline</span>
//         </label>
//       </div>
//       <div>
//         <label>Text Alignment:</label>
//         <button type="button" onClick={() => onTextAlignChange("left")}>
//           <FaAlignLeft />
//         </button>
//         <button type="button" onClick={() => onTextAlignChange("center")}>
//           <FaAlignCenter />
//         </button>
//         <button type="button" onClick={() => onTextAlignChange("right")}>
//           <FaAlignRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConfigPanel;

import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

interface ConfigPanelProps {
  onFontSizeChange: (size: number) => void;
  onFontChange: (font: string) => void;
  onFontColorChange: (color: string) => void;
  onBoldChange: (isBold: boolean) => void;
  onItalicChange: (isItalic: boolean) => void;
  onUnderlineChange: (isUnderline: boolean) => void;
  onTextAlignChange: (align: "left" | "center" | "right") => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  onFontSizeChange,
  onFontChange,
  onFontColorChange,
  onBoldChange,
  onItalicChange,
  onUnderlineChange,
  onTextAlignChange,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: "16px", color: "#333" }}>Configuration</h3>

      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="font-size"
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Font Size:
        </label>
        <select
          id="font-size"
          onChange={(e) => onFontSizeChange(parseInt(e.target.value, 10))}
          defaultValue="16"
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <option value="12">12px</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="font-family"
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Font Family:
        </label>
        <select
          id="font-family"
          onChange={(e) => onFontChange(e.target.value)}
          defaultValue="Arial"
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="font-color"
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Font Color:
        </label>
        <input
          type="color"
          id="font-color"
          onChange={(e) => onFontColorChange(e.target.value)}
          defaultValue="#000000"
          style={{
            border: "none",
            width: "100%",
            height: "40px",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Text Emphasis:
        </label>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            type="button"
            onClick={() => onBoldChange(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaBold />
          </button>
          <button
            type="button"
            onClick={() => onItalicChange(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaItalic />
          </button>
          <button
            type="button"
            onClick={() => onUnderlineChange(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaUnderline />
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Text Alignment:
        </label>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            type="button"
            onClick={() => onTextAlignChange("left")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaAlignLeft />
          </button>
          <button
            type="button"
            onClick={() => onTextAlignChange("center")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaAlignCenter />
          </button>
          <button
            type="button"
            onClick={() => onTextAlignChange("right")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#333",
            }}
          >
            <FaAlignRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
