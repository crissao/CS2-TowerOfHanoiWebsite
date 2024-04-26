import { EzComponent } from "@gsilber/webez";
import html from "./ring-display.component.html";
import css from "./ring-display.component.css";
import { RingComponent } from "../ring/ring.component";
import { RodComponent } from "../rod/rod.component";

export class RingDisplayComponent extends EzComponent {
    private rings1: RingComponent[] = [];
    private rings2: RingComponent[] = [];
    private rings3: RingComponent[] = [];
    constructor() {
        super(html, css);
    }
    setRings(rod: RodComponent, rings: RingComponent[]) {
        const rodId = rod.getId();
        this.clearRings(rodId);
        this.assignRings(rod, rings);
    }

    getRings(rod: RodComponent) {
        const rodId = rod.getId();
        if (rodId === "rod1") {
            return this.rings1;
        } else if (rodId === "rod2") {
            return this.rings2;
        } else {
            return this.rings3;
        }
    }

    private clearRings(rodId: string) {
        switch (rodId) {
            case "rod1":
                this.rings1.forEach((ring) => this.removeComponent(ring));
                this.rings1 = [];
                break;
            case "rod2":
                this.rings2.forEach((ring) => this.removeComponent(ring));
                this.rings2 = [];
                break;
            case "rod3":
                this.rings3.forEach((ring) => this.removeComponent(ring));
                this.rings3 = [];
                break;
            default:
                break;
        }
    }

    private assignRings(rod: RodComponent, rings: RingComponent[]) {
        const targetRingsArray = this.getRings(rod);
        rings.forEach((ring, index) => {
            ring.setTopPosition(index, rod.getId());
            ring.setLeftPosition(index, rod.getId());
            targetRingsArray.push(ring);
            this.addComponent(ring, `${rod.getId()[3]}ring${index + 1}`);
        });
    }
}
