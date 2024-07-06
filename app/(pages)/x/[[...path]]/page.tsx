import { Metadata } from "next";
import { redirect } from "next/navigation";
import { to } from "preps";

import Navbar from "@/components/explorer/navbar";

interface FileExplorerProps {
    params: {
        path: string[]
    }
}

export async function generateMetadata({ params }: FileExplorerProps): Promise<Metadata> {
    const { path } = params;
    
    return {
        title: "/"+ (!path ? "" : to(path).remove(0).join("/").f()),
    };
}

export default function Page({ params }: FileExplorerProps) {
    const { path } = params;

    if(!path || path.length === 0) return redirect("/x/root");
    if(path[0] !== "root") return redirect("/x/root");

    return (
        <div className="w-full h-full flex justify-center">
            <Navbar />
        </div>
    );
}
