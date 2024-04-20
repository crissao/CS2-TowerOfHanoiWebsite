import { EzComponent } from "@gsilber/webez";
import html from "./rod.component.html";
import css from "./rod.component.css";

export class RodComponent extends EzComponent {
    private rod1: RodComponent = new RodComponent()
    constructor() {
        super(html, css);
    }
}
