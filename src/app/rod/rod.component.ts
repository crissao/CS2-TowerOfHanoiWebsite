import { EzComponent } from "@gsilber/webez";
import html from "./rod.component.html";
import css from "./rod.component.css";
import { RingComponent } from "../ring/ring.component";

export class RodComponent extends EzComponent {
    private rings: RingComponent[] = []
    constructor() {
        super(html, css);
    }
    setRings(rings: RingComponent[]){
        this.rings = [];
        rings.forEach((ring,index) => {
            this.rings.push(ring);
            this.addComponent(ring, `ring${index + 1}`);
        })
    }
    getRings(){
        return this.rings;
    }
}
