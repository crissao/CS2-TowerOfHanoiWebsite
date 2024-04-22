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
    private rodlist1: RingComponent[] = [];
    private rodlist2: RingComponent[] = [];
    private rodlist3: RingComponent[] = [];
    private selectedSourceRod: string = "";
    private selectedDestinationRod: string = "";
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
        this.rodlist2 = [];
        this.rodlist3 = [];
        if (this.rings_variant === "three") {
            const ring1 = new RingComponent(200, 1);
            this.addComponent(ring1);
            const ring2 = new RingComponent(175, 1);
            this.addComponent(ring2);
            const ring3 = new RingComponent(150, 1);
            this.addComponent(ring3);
            this.rodlist1.push(ring1, ring2, ring3);
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
            this.rodlist1.push(ring1, ring2, ring3, ring4, ring5);
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
            this.rodlist1.push(ring1, ring2, ring3, ring4, ring5, ring6, ring7);
        }
    }
    @Click("rod1")
    @Click("rod2")
    @Click("rod3")
    onRodClick(event: MouseEvent) {
        const rodId = (event.target as HTMLElement).getAttribute("id");
        if (rodId) {
            if (this.selectedSourceRod === "") {
                this.selectedSourceRod = rodId;
            } else if (this.selectedDestinationRod === "") {
                this.selectedDestinationRod = rodId;
                this.moveRing(
                    this.selectedSourceRod,
                    this.selectedDestinationRod,
                );
                // Reset selected rods for the next move
                this.selectedSourceRod = "";
                this.selectedDestinationRod = "";
            }
        }
    }
    moveRing(sourceRod: string, destinationRod: string) {
        const sourceList = this.getRodList(sourceRod);
        const destinationList = this.getRodList(destinationRod);

        if (sourceList.length === 0) {
            EzDialog.popup(this, "Source rod is empty.");
            return;
        } 
        const movedRing = sourceList.pop();
        if (!movedRing) {
            return;
        }
        if (
            destinationList.length > 0 &&
            destinationList[-1].size < movedRing.size
        ) {
            EzDialog.popup(
                this,
                "Cannot stack larger ring on top of smaller ring.",
            );
            return;
        }
        
    }
    getRodList(rodId: string): RingComponent[] {
        if (rodId === "rodlist1") {
            return this.rodlist1;
        } else if (rodId === "rodlist2") {
            return this.rodlist2;
        } else if (rodId === "rodlist3") {
            return this.rodlist3;
        } else {
            throw new Error("error")
        }
    }
}