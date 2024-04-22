import {BindStyleToNumber, BindStyleToNumberAppendPx, EzComponent, } from "@gsilber/webez";
import html from "./ring.component.html";
import css from "./ring.component.css";

export class RingComponent extends EzComponent {
    @BindStyleToNumberAppendPx("ring", "width")
    size: number;
    @BindStyleToNumber("ring", "backgroundColor")
    color: number;
    constructor(size: number, color: number) {
        super(html, css);
        this.size = size;
        this.color = color;
    }

}
