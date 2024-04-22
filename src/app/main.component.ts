import html from "./main.component.html";
import css from "./main.component.css";
import {
    EzComponent,
    BindValue,
    ValueEvent,
    Change,
    Click,
    BindVisibleToBoolean,
    EzDialog,
} from "@gsilber/webez";
import { HeaderComponent } from "./header/header.component";
import { RodComponent } from "./rod/rod.component";
import { RingComponent } from "./ring/ring.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private header: HeaderComponent = new HeaderComponent();
    private rod1: RodComponent = new RodComponent();
    private rod2: RodComponent = new RodComponent();
    private rod3: RodComponent = new RodComponent();
    private sourcerod: RodComponent | null = null;
    private destinationrod: RodComponent | null = null;
    @BindVisibleToBoolean("instructions")
    private visible: boolean = true;
    @BindValue("rings-variant")
    private rings_variant: string = "three";
    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.rod1, "rod1");
        this.addComponent(this.rod2, "rod2");
        this.addComponent(this.rod3, "rod3");
    }
    @Change("rings-variant")
    onRingsChange(event: ValueEvent) {
        this.rings_variant = event.value;
    }
    @Click("instruction-button")
    instruct() {
        if (!this.visible) {
            this.visible = true;
        }
    }
    @Click("X-out")
    X_out() {
        this.visible = false;
    }
    @Click("start")
    onStart() {
        if (this.rings_variant === "three") {
            const ring1 = new RingComponent(200, 1);
            this.addComponent(ring1);
            const ring2 = new RingComponent(175, 1);
            this.addComponent(ring2);
            const ring3 = new RingComponent(150, 1);
            this.addComponent(ring3);
            this.rod1.setRings([ring1, ring2, ring3]);
        } else if (this.rings_variant === "five") {
            const ring1 = new RingComponent(200, 1);
            this.addComponent(ring1);
            const ring2 = new RingComponent(175, 1);
            this.addComponent(ring2);
            const ring3 = new RingComponent(150, 1);
            this.addComponent(ring3);
            const ring4 = new RingComponent(125, 1);
            this.addComponent(ring4);
            const ring5 = new RingComponent(100, 1);
            this.addComponent(ring5);
            this.rod1.setRings([ring1, ring2, ring3, ring4, ring5]);
        } else {
            const ring1 = new RingComponent(200, 1);
            this.addComponent(ring1);
            const ring2 = new RingComponent(175, 1);
            this.addComponent(ring2);
            const ring3 = new RingComponent(150, 1);
            this.addComponent(ring3);
            const ring4 = new RingComponent(125, 1);
            this.addComponent(ring4);
            const ring5 = new RingComponent(100, 1);
            this.addComponent(ring5);
            const ring6 = new RingComponent(75, 1);
            this.addComponent(ring6);
            const ring7 = new RingComponent(50, 1);
            this.addComponent(ring7);
            this.rod1.setRings([ring1, ring2, ring3, ring4, ring5, ring6, ring7]);
        }
    }
    @Click("rod1")
    onRod1Click(){
        this.onRodClicks(this.rod1)
    }
    @Click("rod2")
    onRod2Click(){
        this.onRodClicks(this.rod2);
    }
    @Click("rod3")
    onRod3Click(){
        this.onRodClicks(this.rod3);
    }
    onRodClicks(rod: RodComponent) {
        if (this.sourcerod === null) {
            this.sourcerod = rod;
        } else if (this.destinationrod === null) {
            this.destinationrod = rod;
            this.moveRing(
                this.sourcerod,
                this.destinationrod,
            );
            this.sourcerod = null;
            this.destinationrod = null;
        }
    }
    moveRing(sourcerod: RodComponent, destinationrod: RodComponent) {
        const sourcelist = sourcerod.getRings();
        const destinationlist = destinationrod.getRings();

        if (sourcelist.length === 0) {
            EzDialog.popup(this, "Source rod is empty.");
            return;
        }
        const movedring = sourcelist.pop();
        if (!movedring) {
            return;
        }
        if (
            destinationlist.length > 0 &&
            destinationlist[-1].size < movedring.size
        ) {
            EzDialog.popup(
                this,
                "Cannot stack larger ring on top of smaller ring.",
            );
            return;
        } else {
            destinationlist.push(movedring);
            sourcerod.setRings(sourcelist);
            destinationrod.setRings(destinationlist)
        }
    }
}