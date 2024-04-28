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
    setLeftPosition(i: number, rodId: string) {
        if (rodId === "rod1") {
            if (this.size === 200) {
                this.left = 263;
            } else if (this.size === 175) {
                this.left = 263 + 12.5;
            } else if (this.size === 150) {
                this.left = 263 + 25;
            } else if (this.size === 125) {
                this.left = 263 + 37.5;
            } else if (this.size === 100) {
                this.left = 263 + 50;
            } else if (this.size === 75) {
                this.left = 263 + 62.5;
            } else if (this.size === 50) {
                this.left = 263 + 75;
            }
        }
        if (rodId === "rod2") {
            if (this.size === 200) {
                this.left = 613;
            } else if (this.size === 175) {
                this.left = 613 + 12.5;
            } else if (this.size === 150) {
                this.left = 613 + 25;
            } else if (this.size === 125) {
                this.left = 613 + 37.5;
            } else if (this.size === 100) {
                this.left = 613 + 50;
            } else if (this.size === 75) {
                this.left = 613 + 62.5;
            } else if (this.size === 50) {
                this.left = 613 + 75;
            }
        }
        if (rodId === "rod3") {
            if (this.size === 200) {
                this.left = 963;
            } else if (this.size === 175) {
                this.left = 963 + 12.5;
            } else if (this.size === 150) {
                this.left = 963 + 25;
            } else if (this.size === 125) {
                this.left = 963 + 37.5;
            } else if (this.size === 100) {
                this.left = 963 + 50;
            } else if (this.size === 75) {
                this.left = 963 + 62.5;
            } else if (this.size === 50) {
                this.left = 963 + 75;
            }
        }
    }
    setTopPosition(i: number, rodId: string) {
        if (rodId === "rod1") {
            if (i === 0) {
                this.top = 280;
            } else if (i === 1) {
                this.top = 260;
            } else if (i === 2) {
                this.top = 240;
            } else if (i === 3) {
                this.top = 220;
            } else if (i === 4) {
                this.top = 200;
            } else if (i === 5) {
                this.top = 180;
            } else if (i === 6) {
                this.top = 160;
            }
        }
        if (rodId === "rod2") {
            if (i === 0) {
                this.top = 280;
            } else if (i === 1) {
                this.top = 260;
            } else if (i === 2) {
                this.top = 240;
            } else if (i === 3) {
                this.top = 220;
            } else if (i === 4) {
                this.top = 200;
            } else if (i === 5) {
                this.top = 180;
            } else if (i === 6) {
                this.top = 160;
            }
        }
        if (rodId === "rod3") {
            if (i === 0) {
                this.top = 280;
            } else if (i === 1) {
                this.top = 260;
            } else if (i === 2) {
                this.top = 240;
            } else if (i === 3) {
                this.top = 220;
            } else if (i === 4) {
                this.top = 200;
            } else if (i === 5) {
                this.top = 180;
            } else if (i === 6) {
                this.top = 160;
            }
        }
    }
}
