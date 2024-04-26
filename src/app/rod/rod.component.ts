import { EzComponent } from "@gsilber/webez";
import html from "./rod.component.html";
import css from "./rod.component.css";

export class RodComponent extends EzComponent {
    private id: string;
    constructor(id: string) {
        super(html, css);
        this.id = id;
    }
    getId(): string {
        return this.id;
    }
}
