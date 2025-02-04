// navigation bar when clicked on a document. [] in folder name lets the URL be dynamic to documentId

"use client"

import { useQuery } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Toolbar } from "@/app/(main)/_components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { Editor } from "@/components/editor";

interface DocumentIdPageProps { //fetches the param from the dynamic URL containing the documentId. this method is an alternative to using the hook 
    params: { documentId: Id<"documents"> };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps ) => {
    const document = useQuery(api.documents.getById, {documentId: params.documentId});

    if ( document === undefined ) {
        return (
            <div>
                <Cover.Skeleton />
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <div className="space-y-4 pl-8 pt-4">
                        <Skeleton className="h-14 w-[50%]"/>
                        <Skeleton className="h-4 w-[80%]"/>
                        <Skeleton className="h-4 w-[40%]"/>
                        <Skeleton className="h-4 w-[60%]"/>
                    </div>
                </div>
            </div>
        )
    }

    if ( document === null ) { 
        return (
            <div>Not Found</div>
        )
    }


    return ( 
        <div className="pb-40">
            <Cover url={document.coverImage} />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document} />
                {/* <Editor onChange={()=>{}} initialContent={document.content} /> */}
            </div>
        </div>
    );
}
 
export default DocumentIdPage;