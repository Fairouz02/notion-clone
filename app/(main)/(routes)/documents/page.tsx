// the contents of documents page
"use client";

import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create); // referance to documents.ts in convex folder

    const onCreate  = () => {
        const promise = create({ title: "Untitled"});

        toast.promise(promise, {
            loading: "creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    };

    return(
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/logo-light.svg" height="300" width="300" alt="empty" className="dark:hidden"/>
            <Image src="/logo-dark.svg" height="300" width="300" alt="empty" className=" hidden dark:block"/>

            <h2 className="text-large font-medium">
                Welcome to {user?.firstName}&apos;s Jotion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
    );
}

export default DocumentsPage;