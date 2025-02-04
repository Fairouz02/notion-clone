"use client"

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine"; 
import "@blocknote/core/style.css";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};

export const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps ) => {
    const resolvedTheme = useTheme();
    const EditorChanged = async () => {
        return JSON.stringify(editor.topLevelBlocks, null, 2)
    }
    
    const editor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) : undefined
        
        // ,
        // onEditorContentChange: (editor) => {
        //     onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        // },theme={resolvedTheme === "dark" ? "dark" : "light"}
    })

   

    return (
        <div>
            <BlockNoteView editor={editor} />
        </div>
    )
}