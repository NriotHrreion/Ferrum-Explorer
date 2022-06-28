import { Component, ReactElement } from "react";
import { Alert, Button } from "react-bootstrap";

import { AlertBoxProps } from "../types";
import Emitter from "../utils/emitter";

export default class AlertBox extends Component<AlertBoxProps, {}> {
    public constructor(props: AlertBoxProps) {
        super(props);
    }
    
    public render(): ReactElement {
        return (
            <Alert variant={this.props.variant} className="alert-box" style={this.props.style} id={this.props.id}>
                <Alert.Heading style={{fontWeight: "bold"}}>{this.props.heading}</Alert.Heading>
                <div>
                    {this.props.children}
                </div>
                <hr/>
                <div className="close-button-container">
                    <Button variant={"outline-"+ this.props.variant} onClick={() => {
                        Emitter.get().emit("closeAlert", this.props.alertId);
                    }}>关闭</Button>
                </div>
            </Alert>
        );
    }
}
