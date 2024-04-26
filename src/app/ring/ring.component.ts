import {
    BindStyleToNumberAppendPx,
    BindStyle,
    EzComponent,
} from "@gsilber/webez";
import html from "./ring.component.html";
import css from "./ring.component.css";

function getRandomColor(): string {
    const value = Math.random();
    if (value < 0.1) {
        return "red";
    } else if (value > 0.1 && value < 0.2) {
        return "lightgreen";
    } else if (value > 0.2 && value < 0.3) {
        return "blue";
    } else if (value > 0.3 && value < 0.4) {
        return "yellow";
    } else if (value > 0.4 && value < 0.5) {
        return "orange";
    } else if (value > 0.5 && value < 0.6) {
        return "coral";
    } else if (value > 0.6 && value < 0.7) {
        return "purple";
    } else if (value > 0.7 && value < 0.8) {
        return "lightblue";
    } else if (value > 0.8 && value < 0.9) {
        return "magenta";
    } else {
        return "green";
    }
}
export class RingComponent extends EzComponent {
    @BindStyleToNumberAppendPx("ring", "width")
    size: number;
    @BindStyle("ring", "backgroundColor")
    color: string;
    @BindStyleToNumberAppendPx("ring", "left")
    left: number = 0;
    @BindStyleToNumberAppendPx("ring", "top")
    top: number = 0;
    constructor(size: number) {
        super(html, css);
        this.size = size;
        this.color = getRandomColor();
    }
    setTopPosition(i: number, rodId: string) {
        if (rodId === "rod1") {
            this.left = i * 25 - 500;
        }
        if (rodId === "rod2") {
            this.left = i * 25 - 500;
        }
        if (rodId === "rod3") {
            this.left = i * 25 - 500;
        }
    }
    setLeftPosition(i: number, rodId: string) {
        if (rodId === "rod1") {
            this.top = i * 25 - 500;
        }
        if (rodId === "rod2") {
            this.top = i * 25 - 500;
        }
        if (rodId === "rod3") {
            this.top = i * 25 - 500;
        }
    }
}
