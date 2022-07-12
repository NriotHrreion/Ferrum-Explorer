import { ReactElement } from "react";

import FerrumPlugin from "../client/components/FerrumPlugin";
import { FerrumPluginOption, FerrumPluginProps, MainContextType } from "../client/types";

export default class PDFPlugin extends FerrumPlugin {
    public static option: FerrumPluginOption = {
        name: "pdf-viewer",
        title: "Ferrum PDF查看器",
        format: ["pdf"],
        route: "/pdf",
        self: PDFPlugin
    };

    public constructor(props: FerrumPluginProps, context: MainContextType) {
        super(props, context, PDFPlugin.option);
    }

    public viewerRender(dataUrl: string): ReactElement {
        return (
            <embed src={dataUrl.replace("image", "application")} type="application/pdf"/>
        );
    }
}
