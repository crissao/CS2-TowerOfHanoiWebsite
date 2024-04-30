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
import { RingDisplayComponent } from "./ring-display/ring-display.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private header: HeaderComponent = new HeaderComponent();
    private ringDisplay: RingDisplayComponent = new RingDisplayComponent();
    private sourcerod: RodComponent | null = null;
    private destinationrod: RodComponent | null = null;
    private rod1: RodComponent = new RodComponent("rod1");
    private rod2: RodComponent = new RodComponent("rod2");
    private rod3: RodComponent = new RodComponent("rod3");
    private moves: number = 0;
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
        this.addComponent(this.ringDisplay, "ring-display");
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
            this.ringDisplay.getRings(this.rod1).length === 0 &&
            this.ringDisplay.getRings(this.rod2).length === 0 &&
            this.ringDisplay.getRings(this.rod3).length === 0
        ) {
            if (this.rings_variant === "three") {
                const ring1 = new RingComponent(200);
                const ring2 = new RingComponent(175);
                const ring3 = new RingComponent(150);
                this.ringDisplay.setRings(this.rod1, [ring1, ring2, ring3]);
            } else if (this.rings_variant === "five") {
                const ring1 = new RingComponent(200);
                const ring2 = new RingComponent(175);
                const ring3 = new RingComponent(150);
                const ring4 = new RingComponent(125);
                const ring5 = new RingComponent(100);
                this.ringDisplay.setRings(this.rod1, [
                    ring1,
                    ring2,
                    ring3,
                    ring4,
                    ring5,
                ]);
            } else {
                const ring1 = new RingComponent(200);
                const ring2 = new RingComponent(175);
                const ring3 = new RingComponent(150);
                const ring4 = new RingComponent(125);
                const ring5 = new RingComponent(100);
                const ring6 = new RingComponent(75);
                const ring7 = new RingComponent(50);
                this.ringDisplay.setRings(this.rod1, [
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
            return;
        }
    }
    @Click("rod1")
    onRod1Click() {
        this.onRodClicks(this.rod1);
    }
    @Click("rod2")
    onRod2Click() {
        this.onRodClicks(this.rod2);
    }
    @Click("rod3")
    onRod3Click() {
        this.onRodClicks(this.rod3);
    }
    onRodClicks(rod: RodComponent) {
        if (this.sourcerod === null) {
            this.sourcerod = rod;
        } else if (this.destinationrod === null) {
            this.destinationrod = rod;
            this.moveRing(this.sourcerod, this.destinationrod);
            this.sourcerod = null;
            this.destinationrod = null;
        }
    }
    moveRing(sourcerod: RodComponent, destinationrod: RodComponent) {
        const sourcelist = this.ringDisplay.getRings(sourcerod);
        const destinationlist = this.ringDisplay.getRings(destinationrod);

        if (sourcelist.length === 0) {
            EzDialog.popup(this, "Source rod is empty.", "Error:");
            this.ringDisplay.setRings(sourcerod, sourcelist);
            this.ringDisplay.setRings(destinationrod, destinationlist);
        }
        const movedring = sourcelist.pop();

        if (!movedring) {
            return;
        }
        if (
            destinationlist.length > 0 &&
            destinationlist[destinationlist.length - 1].width < movedring.width
        ) {
            EzDialog.popup(
                this,
                "Cannot stack larger ring on top of smaller ring.",
                "Error:",
            );
            sourcelist.push(movedring);
            this.ringDisplay.setRings(sourcerod, sourcelist);
            this.ringDisplay.setRings(destinationrod, destinationlist);
        } else {
            destinationlist.push(movedring);
            this.ringDisplay.setRings(sourcerod, sourcelist);
            this.ringDisplay.setRings(destinationrod, destinationlist);
            this.moves += 1;
        }
        if (
            this.rings_variant === "three" &&
            this.ringDisplay.getRings(this.rod3).length === 3
        ) {
            EzDialog.popup(
                this,
                "You win! <br> Total number of moves: " + this.moves + "<br> Minimum number of possible moves: 7",
                "Congratulations:",
            );
            return;
        } else if (
            this.rings_variant === "five" &&
            this.ringDisplay.getRings(this.rod3).length === 5
        ) {
            EzDialog.popup(
                this,
                "You win! <br> Total number of moves: " +
                    this.moves +
                    "<br> Minimum number of possible moves: 31",
                "Congratulations:",
            );
            return;
        } else if (
            this.rings_variant === "seven" &&
            this.ringDisplay.getRings(this.rod3).length === 7
        ) {
            EzDialog.popup(
                this,
                "You win! <br> Total number of moves: " +
                    this.moves +
                    "<br> Minimum number of possible moves: 127",
                "Congratulations:",
            );
            return;
        }
    }
    @Click("reset")
    onreset() {
        this.ringDisplay.setRings(this.rod1, []);
        this.ringDisplay.setRings(this.rod2, []);
        this.ringDisplay.setRings(this.rod3, []);
        this.moves = 0;
    }
}
