/**
 * @author psarando
 */

import React, { Component } from "react";
import CopyTextArea from "../src/components/copy/CopyTextArea";
import { storiesOf } from "@storybook/react";

export class CopyTextAreaTest extends Component {
    render() {
        let textToCopy = `The Dark Arts better be worried,
oh boy!`;

        return (
            <CopyTextArea
                debugIdPrefix="test.id.prefix"
                btnText="Copy"
                copiedBtnText="Copied!"
                multiline={true}
                text={textToCopy}
            />
        );
    }
}
storiesOf("CopyTextArea", module).add("with copy text area", () => (
    <CopyTextAreaTest />
));
