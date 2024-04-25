import { EzComponent } from "@gsilber/webez";
import html from "./rod.component.html";
import css from "./rod.component.css";
import { RingComponent } from "../ring/ring.component";

export class RodComponent extends EzComponent {
    private rodID: string;
    private rings: RingComponent[] = [];
    constructor(rodID: string) {
        super(html, css);
        this.rodID = rodID;
    }
    setRings(rings: RingComponent[]) {
        this.rings.forEach((ring) => {
            this.removeComponent(ring);
        });
        this.rings = [];
        rings.forEach((ring, index) => {
            this.rings.push(ring);
            this.addComponent(ring, `ring${index + 1}`);
        });
    }
    getRings() {
        return this.rings;
    }
    ringTopPosition(i: number) {
        return i * 25 - 500;
    }
    ringLeftPosition() {
        return 100;
    }
}
