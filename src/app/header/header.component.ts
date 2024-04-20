import { EzComponent } from "@gsilber/webez";
import html from "./header.component.html";
import css from "./header.component.css";

export class HeaderComponent extends EzComponent {
    constructor() {
        super(html, css);
    }  
}
