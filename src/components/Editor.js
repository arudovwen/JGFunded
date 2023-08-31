import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toolbar } from "@/utils/toolbar";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      {typeof window !== "undefined" && (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="editor-class bg-white !max-h-[126px] !p-0 !rounded-lg !px-4"
          toolbarClassName="toolbar-class !bg-transparent !p-0"
          onEditorStateChange={onEditorStateChange}
          toolbar={toolbar}
        />
      )}
    </div>
  );
};

export default EditorConvertToHTML;
