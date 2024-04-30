import {
    BindStyleToNumberAppendPx,
    EzComponent,
} from "@gsilber/webez";
import html from "./ring.component.html";
import css from "./ring.component.css";

export class RingComponent extends EzComponent {
    @BindStyleToNumberAppendPx("ring", "width")
    width: number;
    @BindStyleToNumberAppendPx("ring", "left")
    left: number = 0;
    @BindStyleToNumberAppendPx("ring", "bottom")
    bottom: number = 0;
    constructor(width: number) {
        super(html, css);
        this.width = width;
    }
    setLeftPosition(rodId: string) {
        if (rodId === "rod1") {
            this.left = 263 + (200 - this.width) / 2;
        }
        if (rodId === "rod2") {
            this.left = 613 + (200 - this.width) / 2;
        }
        if (rodId === "rod3") {
            this.left = 963 + (200 - this.width) / 2;
        }
    }
    setBottomPosition(i: number) {
        this.bottom = 20 * i + 100;
    }
}
