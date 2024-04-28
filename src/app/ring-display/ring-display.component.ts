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
        if (rodId === "rod1") {
                this.rings1.forEach((ring) => this.removeComponent(ring));
                this.rings1 = [];
        } else if (rodId === "rod2"){
                this.rings2.forEach((ring) => this.removeComponent(ring));
                this.rings2 = [];
        } else {
                this.rings3.forEach((ring) => this.removeComponent(ring));
                this.rings3 = [];
        }

    }

    private assignRings(rod: RodComponent, rings: RingComponent[]) {
        const targetRingsArray = this.getRings(rod);
        rings.forEach((ring) => {
            targetRingsArray.push(ring);
        });
        targetRingsArray.forEach((ring,index) => {
            ring.setTopPosition(index, rod.getId());
            ring.setLeftPosition(index, rod.getId());
            this.addComponent(ring, "ringContainer");
        });
    }
}
