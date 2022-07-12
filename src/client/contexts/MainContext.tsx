import React from "react";
import { MainContextType } from "../types";

const MainContext = React.createContext<MainContextType>({
    isDemo: false,
    config: {
        "explorer": {
            "root": "C:",
            "password": "e10adc3949ba59abbe56e057f20f883e"
        },
        "editor": {
            "lineNumber": true,
            "autoWrap": false,
            "highlightActiveLine": true,
            "fontSize": 14
        },
        "terminal": {
            "ip": "0.0.0.0",
            "port": 22,
            "username": "root",
            "password": "123456"
        }
    }
});
MainContext.displayName = "MainContext";

export default MainContext;
