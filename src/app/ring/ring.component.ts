import {
    BindStyleToNumberAppendPx,
    EzComponent,
} from "@gsilber/webez";
import html from "./ring.component.html";
import css from "./ring.component.css";
/**
 * @description creates each individual ring
 * @extends EzComponent
 */
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
    /**
     * @description determines distance from left of screen of ring, based on rodID and ring width
     * @param rodId 
     */
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
    /**
     * @description determines distance of ring from bottom of screen based on index number of ring in array
     * @param i 
     */
    setBottomPosition(i: number) {
        this.bottom = 20 * i + 100;
    }
}
