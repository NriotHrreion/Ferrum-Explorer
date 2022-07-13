import React, { Component, ReactElement } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

import Utils from "../../Utils";
import { DialogBoxProps, DialogBoxState } from "../types";

export default class DialogBox extends Component<DialogBoxProps, DialogBoxState> {
    public static createDialog(id: string, dialogComponent: ReactElement): React.ReactPortal {
        return ReactDOM.createPortal(
            <div id={id}>
                {dialogComponent}
            </div>,
            document.getElementById("dialogs") as Element
        );
    }

    public constructor(props: DialogBoxProps) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public setOpen(isOpen: boolean): void {
        this.setState({ isOpen });
        document.body.style.overflowY = isOpen ? "hidden" : "auto";
    }

    public render(): ReactElement {
        return (
            <>
                <div className="dialog-backdrop" style={{display: this.state.isOpen ? "block" : "none"}}/>
                <dialog className="dialog-container" style={{display: this.state.isOpen ? "flex" : "none"}}>
                    <div className="dialog-header">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="dialog-content">{this.props.children}</div>
                    <div className="dialog-footer">
                        <Button id="dialog-close" onClick={() => this.setOpen(false)}>关闭</Button>
                    </div>
                </dialog>
            </>
        );
    }

    public componentDidMount(): void {
        // Disable the mouse wheel when the dialog is open
        document.addEventListener("DOMMouseScroll", () => {return false}, {passive: false}); // Firefox
        window.addEventListener("mousewheel", (e: Event) => {
            if(this.state.isOpen) {
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
        }, {passive: false});

        // Make the back-to-top button unavailable when the dialog is open
        Utils.getElem("back-to-top-button").addEventListener("click", (e: MouseEvent) => {
            if(this.state.isOpen) {
                e.stopPropagation();
                e.preventDefault();
                
                return false;
            }
        });
    }
}
