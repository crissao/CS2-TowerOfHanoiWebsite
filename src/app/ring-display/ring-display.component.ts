import { EzComponent } from "@gsilber/webez";
import html from "./ring-display.component.html";
import css from "./ring-display.component.css";
import { RingComponent } from "../ring/ring.component";
import { RodComponent } from "../rod/rod.component";
/**
 * @description used to display the array of rings on appropriate rod
 * @extends EzComponent
 */
export class RingDisplayComponent extends EzComponent {
    private rings1: RingComponent[] = [];
    private rings2: RingComponent[] = [];
    private rings3: RingComponent[] = [];
    constructor() {
        super(html, css);
    }
    /**
     * @description calls clearRings and assignRings to display rings passed in by parameter on rod passed in by parameter
     * @param rod 
     * @param rings 
     */
    setRings(rod: RodComponent, rings: RingComponent[]) {
        const rodId = rod.getId();
        this.clearRings(rodId);
        this.assignRings(rod, rings);
    }
    /**
     * @description uses rod ID to retrieve rings located on particular rod
     * @param rod 
     * @returns rings associated with rod parameter
     */
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
    /**
     * @description removes all rings from display
     * @param rodId 
     */
    private clearRings(rodId: string) {
        if (rodId === "rod1") {
            this.rings1.forEach((ring) => this.removeComponent(ring));
            this.rings1 = [];
        } else if (rodId === "rod2") {
            this.rings2.forEach((ring) => this.removeComponent(ring));
            this.rings2 = [];
        } else {
            this.rings3.forEach((ring) => this.removeComponent(ring));
            this.rings3 = [];
        }
    }
    /**
     * @description adds rings to appropriate rod on display
     * @param rod 
     * @param rings 
     */
    private assignRings(rod: RodComponent, rings: RingComponent[]) {
        const targetRingsArray = this.getRings(rod);
        const startIndex = targetRingsArray.length;

        rings.forEach((ring, index) => {
            targetRingsArray.push(ring);
            const positionIndex = startIndex + index;
            ring.setBottomPosition(positionIndex);
            ring.setLeftPosition(rod.getId());
            this.addComponent(ring, "ringContainer");
        });
    }
}
