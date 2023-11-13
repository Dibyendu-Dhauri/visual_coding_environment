import React, { useRef, useState } from "react";

export default function MidArea() {
  const myDivElementRef = useRef(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [duplicateDivId, setDuplicateDivId] = useState("");

  const contextMenuStyle = {
    position: "absolute",
    top: contextMenuPosition.y,
    left: contextMenuPosition.x,
    background: "#fff",
    border: "1px solid #ccc",
    boxShadow: "0px 0px 5px #888888",
    padding: "5px",
    zIndex: "1000",
    listStyle: "none",
  };
  function helper(event, draggedElement) {
    const clone = draggedElement.cloneNode(true);
    const dropX =
      event.clientX - myDivElementRef.current.getBoundingClientRect().left - 60;
    const dropY =
      event.clientY - myDivElementRef.current.getBoundingClientRect().top - 20;
    clone.style.position = "absolute";
    clone.style.left = dropX + "px";
    clone.style.top = dropY + "px";

    // setDuplicatePos({ x: dropX, y: dropY });

    // clone.onmousedown = (e) => {
    clone.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (e.button === 2) {
        setDuplicateDivId(clone.id);
        setContextMenuPosition({
          x: e.clientX - 240 + "px",
          y: e.clientY - 20 + "px",
        });
      }
      const dragMove = (e) => {
        const x =
          e.clientX - myDivElementRef.current.getBoundingClientRect().left - 60;
        const y =
          e.clientY - myDivElementRef.current.getBoundingClientRect().top - 20;
        clone.style.left = x + "px";
        clone.style.top = y + "px";
      };

      const dragEnd = (event) => {
        document.removeEventListener("mousemove", dragMove);
        document.removeEventListener("mouseup", dragEnd);
      };
      document.addEventListener("mousemove", dragMove);
      document.addEventListener("mouseup", dragEnd);
    });

    myDivElementRef.current.appendChild(clone);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    // Get the dragged element ID
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);

    if (draggedElement) {
      helper(event, draggedElement);
    }
  };

  const handleContext = (e) => {
    e.preventDefault();
  };

  const handleDuplicate = (event) => {
    const duplicateElement = document.getElementById(duplicateDivId);
    if (duplicateElement) {
      helper(event, duplicateElement);
    }
    setContextMenuPosition({
      x: 0,
      y: 0,
    });
  };

  const handleDelete = (event) => {
    const duplicateElement = document.getElementById(duplicateDivId);
    // myDivElementRef.current.removeChild(duplicateElement)

    if (duplicateElement) {
      // const cloneDeleteNode = duplicateElement.cloneNode(true);
      // duplicateElement.style.display = "none"
      setContextMenuPosition({ x: 0, y: 0 });
    }
  };

  return (
    <>
      {" "}
      <div
        className="w-full h-full overflow-auto relative"
        ref={myDivElementRef}
        onDragOver={(e) => {
          e.preventDefault();
          console.log("onDragOver");
        }}
        onDrop={handleDrop}
        onContextMenu={handleContext}
      >
        {"mid area"}
        {contextMenuPosition.x !== 0 && contextMenuPosition.y !== 0 && (
          <ul style={contextMenuStyle}>
            <li onClick={handleDuplicate}>Duplicate Node</li>
            <li onClick={handleDelete}>Delete Node</li>
          </ul>
        )}
      </div>
    </>
  );
}
