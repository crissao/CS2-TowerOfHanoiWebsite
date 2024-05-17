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
    GenericEvent,
    BindStyle,
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
    private sourceRod: RodComponent | null = null;
    private destinationRod: RodComponent | null = null;
    private rod1Clicked: boolean = false;
    private rod2Clicked: boolean = false;
    private rod3Clicked: boolean = false;
    private rod1: RodComponent = new RodComponent("rod1");
    @BindStyle("rod1-background", "backgroundColor")
    private rod1Background: string = "rgb(255, 238, 175)";
    @BindStyle("base1-background", "backgroundColor")
    private base1Background: string = "rgb(255, 238, 175)";
    private rod2: RodComponent = new RodComponent("rod2");
    @BindStyle("rod2-background", "backgroundColor")
    private rod2Background: string = "rgb(255, 238, 175)";
    @BindStyle("base2-background", "backgroundColor")
    private base2Background: string = "rgb(255, 238, 175)";
    private rod3: RodComponent = new RodComponent("rod3");
    @BindStyle("rod3-background", "backgroundColor")
    private rod3Background: string = "rgb(255, 238, 175)";
    @BindStyle("base3-background", "backgroundColor")
    private base3background: string = "rgb(255, 238, 175)";
    private moves: number = 0;
    @BindVisibleToBoolean("instructions")
    private visible: boolean = true;
    @BindValue("rings-variant")
    private ringsVariant: string = "three";
    constructor() {
        super(html, css);
        this.addComponent(this.header, "header");
        this.addComponent(this.rod1, "rod1");
        this.addComponent(this.rod2, "rod2");
        this.addComponent(this.rod3, "rod3");
        this.addComponent(this.ringDisplay, "ring-display");
    }
    /**
     * @description changes number of rings used in game based on the value clicked from dropdown menu (3, 5, or 7)
     * @param event
     */
    @Change("rings-variant")
    onRingsChange(event: ValueEvent) {
        this.ringsVariant = event.value;
    }
    /**
     * @description makes instructions visible on button click
     */
    @Click("instruction-button")
    instruct() {
        if (!this.visible) {
            this.visible = true;
        }
    }
    /**
     * @description makes instructions invisible on button click
     */
    @Click("X-out")
    xOut() {
        this.visible = false;
    }
    /**
     * @description starts game: places designated number of rings on rod1 in ringDisplay (only works when game has already been reset, otherwise returns nothing)
     * @returns
     */
    @Click("start")
    onStart() {
        if (
            this.ringDisplay.getRings(this.rod1).length === 0 &&
            this.ringDisplay.getRings(this.rod2).length === 0 &&
            this.ringDisplay.getRings(this.rod3).length === 0
        ) {
            if (this.ringsVariant === "three") {
                const ring1 = new RingComponent(200);
                const ring2 = new RingComponent(175);
                const ring3 = new RingComponent(150);
                this.ringDisplay.setRings(this.rod1, [ring1, ring2, ring3]);
            } else if (this.ringsVariant === "five") {
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
    /**
     * @description highlights rod1 on mouseover
     */
    @GenericEvent("rod1", "mouseover")
    onRod1Hover() {
        this.rod1Background = "white";
        this.base1Background = "white";
    }
    /**
     * @description highlights rod2 on mouseover
     */
    @GenericEvent("rod2", "mouseover")
    onRod2Hover() {
        this.rod2Background = "white";
        this.base2Background = "white";
    }
    /**
     * @description highlights rod3 on mouseover
     */
    @GenericEvent("rod3", "mouseover")
    onRod3Hover() {
        this.rod3Background = "white";
        this.base3background = "white";
    }
    /**
     * @description unhighlights rod1 on mouseleave if rod1clicked is not clicked
     */
    @GenericEvent("rod1", "mouseleave")
    onRod1Leave() {
        if (!this.rod1Clicked) {
            this.rod1Background = "rgb(255, 238, 175)";
            this.base1Background = "rgb(255, 238, 175)";
        }
    }
    /**
     * @description unhighlights rod2 on mouseleave if rod2clicked is not clicked
     */
    @GenericEvent("rod2", "mouseleave")
    onRod2Leave() {
        if (!this.rod2Clicked) {
            this.rod2Background = "rgb(255, 238, 175)";
            this.base2Background = "rgb(255, 238, 175)";
        }
    }
    /**
     * @description unhighlights rod3 on mouseleave if rod3clicked is not clicked
     */
    @GenericEvent("rod3", "mouseleave")
    onRod3Leave() {
        if (!this.rod3Clicked) {
            this.rod3Background = "rgb(255, 238, 175)";
            this.base3background = "rgb(255, 238, 175)";
        }
    }
    /**
     * @description makes rod1clicked true, highlights rod1, and calls onRodClicks method with rod1 as argument
     */
    @Click("rod1")
    onRod1Click() {
        this.rod1Clicked = true;
        this.rod1Background = "white";
        this.base1Background = "white";
        this.onRodClicks(this.rod1);
    }
    /**
     * @description makes rod2clicked true, highlights rod2, and calls onRodClicks method with rod2 as argument
     */
    @Click("rod2")
    onRod2Click() {
        this.rod2Clicked = true;
        this.rod2Background = "white";
        this.base2Background = "white";
        this.onRodClicks(this.rod2);
    }
    /**
     * @description makes rod3clicked true, highlights rod3, and calls onRodClicks method with rod3 as argument
     */
    @Click("rod3")
    onRod3Click() {
        this.rod3Clicked = true;
        this.rod3Background = "white";
        this.base3background = "white";
        this.onRodClicks(this.rod3);
    }
    /**
     * @description assigns rod clicked (passed in as parameter) to be either this.sourcerod or this.destinationrod, depending on current values of this.sourcerod and this.destinationrod
     * @param rod
     */
    onRodClicks(rod: RodComponent) {
        if (this.sourceRod === null) {
            this.sourceRod = rod;
        } else if (this.destinationRod === null) {
            this.destinationRod = rod;
            this.moveRing(this.sourceRod, this.destinationRod);
            this.sourceRod = null;
            this.destinationRod = null;
            this.rod1Clicked = false;
            this.rod2Clicked = false;
            this.rod3Clicked = false;
            this.onRod1Leave();
            this.onRod2Leave();
            this.onRod3Leave();
        }
    }
    /**
     * @description provides popup error if ring movement is invalid, otherwise moves top ring from sourcelist to destination list, and returns if game is won; uses setRings method to display rings
     * @param sourceRod
     * @param destinationRod
     * @returns
     */
    moveRing(sourceRod: RodComponent, destinationRod: RodComponent) {
        const sourcelist = this.ringDisplay.getRings(sourceRod);
        const destinationlist = this.ringDisplay.getRings(destinationRod);

        if (sourcelist.length === 0) {
            EzDialog.popup(this, "Source rod is empty.", "Error:");
            this.ringDisplay.setRings(sourceRod, sourcelist);
            this.ringDisplay.setRings(destinationRod, destinationlist);
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
            this.ringDisplay.setRings(sourceRod, sourcelist);
            this.ringDisplay.setRings(destinationRod, destinationlist);
        } else {
            destinationlist.push(movedring);
            this.ringDisplay.setRings(sourceRod, sourcelist);
            this.ringDisplay.setRings(destinationRod, destinationlist);
            this.moves += 1;
        }
        if (
            this.ringsVariant === "three" &&
            this.ringDisplay.getRings(this.rod3).length === 3
        ) {
            EzDialog.popup(
                this,
                "You win! <br> Total number of moves: " +
                    this.moves +
                    "<br> Minimum number of possible moves: 7",
                "Congratulations:",
            );
            return;
        } else if (
            this.ringsVariant === "five" &&
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
            this.ringsVariant === "seven" &&
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
    /**
     * @description clears rings from screen and empties ring arrays
     */
    @Click("reset")
    onReset() {
        this.ringDisplay.setRings(this.rod1, []);
        this.ringDisplay.setRings(this.rod2, []);
        this.ringDisplay.setRings(this.rod3, []);
        this.moves = 0;
        this.rod1Clicked = false;
        this.rod2Clicked = false;
        this.rod3Clicked = false;
        this.onRod1Leave();
        this.onRod2Leave();
        this.onRod3Leave();
    }
}
