import { EzComponent, Click, EzDialog } from "@gsilber/webez";
import html from "./header.component.html";
import css from "./header.component.css";

export class HeaderComponent extends EzComponent {
    
    constructor() {
        super(html, css);
    }
    @Click("instruction_button")
    instruct(){
        EzDialog.popup(
            this,
            "Rules:<bm><ul><li>Move all of the rings from the leftmost stack to the rightmost stack</li><li>Do not stack a larger ring on top of a smaller ring</li><li>Only one ring can be moved at a time</li></ul>",
            "Instructions",
            ["X"],
            "instruction_button",
        )
    }
}
