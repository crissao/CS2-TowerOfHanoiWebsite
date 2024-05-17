import { describe, expect, test, beforeAll } from "@jest/globals";
import { MainComponent } from "./main.component";
import { bootstrap } from "@gsilber/webez";
import { RingComponent } from "./ring/ring.component";
import { RodComponent } from "./rod/rod.component";

describe("MainComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<MainComponent>(MainComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(MainComponent);
        });
    });
    describe("onStart", () => {
        test("Starting with 'three' rings variant", () => {
            component.onReset();
            component.onStart();
            expect(component.ringDisplay.getRings(component.rod1).length).toBe(
                3,
            );
        });

        test("Starting with 'five' rings variant", () => {
            component.onReset();
            component.ringsVariant = "five";
            component.onStart();
            expect(component.ringDisplay.getRings(component.rod1).length).toBe(
                5,
            );
        });

        test("Starting with 'seven' rings variant", () => {
            component.onReset();
            component.ringsVariant = "seven";
            component.onStart();
            expect(component.ringDisplay.getRings(component.rod1).length).toBe(
                7,
            );
        });

        test("Starting when rings are already present", () => {
            component.ringDisplay.setRings(component.rod1, [
            ]);
            component.onStart();
            expect(
                component.ringDisplay.getRings(component.rod1).length,
            ).toBeGreaterThan(0);
        });
    });

    describe("onRodClicks", () => {
        test("Moving rings between rods", () => {
            const sourceRod = new RodComponent("rod1");
            const destinationRod = new RodComponent("rod2");
            const ring = new RingComponent(100);
            component.ringDisplay.setRings(sourceRod, [ring]);
            component.onRod1Click();
            component.onRod2Click();
            expect(component.ringDisplay.getRings(sourceRod).length).toBe(0);
            expect(component.ringDisplay.getRings(destinationRod).length).toBe(1);
        });

        test("Trying to move rings without selecting destination", () => {
            const sourceRod = new RodComponent("rod1");
            const ring = new RingComponent(100);
            component.ringDisplay.setRings(sourceRod, [ring]);
            component.onRod1Click();
            expect(component.ringDisplay.getRings(sourceRod).length).toBe(1);
        });
    });
});
