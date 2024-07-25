import { create } from "zustand";
import { to } from "preps";

import { storage } from "@/lib/storage";
import { diskStorageKey } from "@/lib/global";

interface ExplorerStore {
    path: string[]
    disk: string

    setPath: (path: string[]) => void
    setDisk: (disk: string) => void
    stringifyPath: () => string
    enterPath: (target: string) => void
    backToRoot: () => void
    back: () => void
}

export function stringifyPath(path: string[]): string {
    return decodeURIComponent(
        path.join("/").replace("root", path.length === 1 ? "/" : "")
    );
}

export function parseStringPath(path: string): string[] {
    const arr = path.split("/");

    return arr.map((value, index) => {
        if(index === 0) return "root";

        return value;
    }).filter((value) => value.length !== 0)
}

export const useExplorer = create<ExplorerStore>((set, get) => ({
    path: ["root"],
    disk: "",

    setPath: (path) => set({ path }),
    setDisk: (disk: string) => {
        set({ disk });
        storage.setItem(diskStorageKey, disk);
    },
    stringifyPath: () => stringifyPath(get().path),
    enterPath: (target: string) => {
        set({ path: [...get().path, target] });
    },
    backToRoot: () => {
        set({ path: ["root"] });
    },
    back: () => {
        const { path } = get();
        
        if(path.length === 1) return;
        set({ path: to(path).remove(path.length - 1).f() });
    }
}));
