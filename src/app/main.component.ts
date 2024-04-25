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
    private rod1: RodComponent = new RodComponent("rod1");
    private rod2: RodComponent = new RodComponent("rod2");
    private rod3: RodComponent = new RodComponent("rod3");
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
        if (
            this.rod1.getRings().length === 0 &&
            this.rod2.getRings().length === 0 &&
            this.rod3.getRings().length === 0
        ){
            if (this.rings_variant === "three") {
                const ring1 = new RingComponent(200);
                this.addComponent(ring1);
                const ring2 = new RingComponent(175);
                this.addComponent(ring2);
                const ring3 = new RingComponent(150);
                this.addComponent(ring3);
                this.rod1.setRings([ring1, ring2, ring3]);
            } else if (this.rings_variant === "five") {
                const ring1 = new RingComponent(200);
                this.addComponent(ring1);
                const ring2 = new RingComponent(175);
                this.addComponent(ring2);
                const ring3 = new RingComponent(150);
                this.addComponent(ring3);
                const ring4 = new RingComponent(125);
                this.addComponent(ring4);
                const ring5 = new RingComponent(100);
                this.addComponent(ring5);
                this.rod1.setRings([ring1, ring2, ring3, ring4, ring5]);
            } else {
                const ring1 = new RingComponent(200);
                this.addComponent(ring1);
                const ring2 = new RingComponent(175);
                this.addComponent(ring2);
                const ring3 = new RingComponent(150);
                this.addComponent(ring3);
                const ring4 = new RingComponent(125);
                this.addComponent(ring4);
                const ring5 = new RingComponent(100);
                this.addComponent(ring5);
                const ring6 = new RingComponent(75);
                this.addComponent(ring6);
                const ring7 = new RingComponent(50);
                this.addComponent(ring7);
                this.rod1.setRings([
                    ring1,
                    ring2,
                    ring3,
                    ring4,
                    ring5,
                    ring6,
                    ring7,
                ]);
            }
        } else {
            return
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
            EzDialog.popup(this, "Source rod is empty.", "Error:");
            return;
        }
        const movedring = sourcelist.pop();

        if (!movedring) {
            return;
        }
        if (
            destinationlist.length > 0 &&
            destinationlist[destinationlist.length - 1].size < movedring.size
        ) {
            EzDialog.popup(
                this,
                "Cannot stack larger ring on top of smaller ring.", "Error:"
            );
            return;
        } else {
            destinationlist.push(movedring);
            sourcerod.setRings(sourcelist);
            destinationrod.setRings(destinationlist);
        }
        if(this.rings_variant === "three" && this.rod3.getRings().length === 3){
            EzDialog.popup(this, "You win!", "Congratulations:");
            return
        } else if (this.rings_variant === "five" && this.rod3.getRings().length === 5){
            EzDialog.popup(this, "You win!", "Congratulations:");
            return
        } else if (this.rings_variant === "seven" && this.rod3.getRings().length === 7){
            EzDialog.popup(this, "You win!", "Congratulations:");
            return
        }
    }
    @Click("reset")
    onreset(){
        this.rod1.setRings([]);
        this.rod2.setRings([]);
        this.rod3.setRings([]);
    }
}