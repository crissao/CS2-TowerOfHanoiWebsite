import { EzComponent, Click, BindVisibleToBoolean } from "@gsilber/webez";
import html from "./header.component.html";
import css from "./header.component.css";

export class HeaderComponent extends EzComponent {
    @BindVisibleToBoolean('instructions')  
    private visible: boolean=true;
    constructor() {
        super(html, css);
    }
    @Click("instruction_button")
    instruct() {
        this.visible = true;
    }
    @Click("X-out")
    X_out(){
        this.visible = false;
    }
}
