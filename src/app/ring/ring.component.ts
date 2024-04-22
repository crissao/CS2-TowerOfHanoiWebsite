import {BindStyleToNumberAppendPx, EzComponent, } from "@gsilber/webez";
import html from "./ring.component.html";
import css from "./ring.component.css";

export class RingComponent extends EzComponent {
    @BindStyleToNumberAppendPx("ring", "width")
    size: number;
    constructor(size: number,) {
        super(html, css);
        this.size = size;
    }
}