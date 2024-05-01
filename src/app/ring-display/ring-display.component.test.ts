import { describe, expect, test, beforeAll } from "@jest/globals";
import { RingDisplayComponent } from "./ring-display.component";
import { bootstrap } from "@gsilber/webez";
import { RingComponent } from "../ring/ring.component";
import { RodComponent } from "../rod/rod.component";

describe("RingDisplayComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<RingDisplayComponent>(RingDisplayComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(RingDisplayComponent);
        });
    });
    describe("setRings", () => {
        test("Set rings on rod1", () => {
            const rod1 = new RodComponent("rod1");
            const rings = [new RingComponent(100), new RingComponent(75)];

            component.setRings(rod1, rings);

            expect(component.getRings(rod1).length).toBe(rings.length);
        });

        test("Set rings on rod2", () => {
            const rod2 = new RodComponent("rod2");
            const rings = [new RingComponent(150)];

            component.setRings(rod2, rings);

            expect(component.getRings(rod2).length).toBe(rings.length);
        });

        test("Set rings on rod3", () => {
            const rod3 = new RodComponent("rod3");
            const rings = [
                new RingComponent(200),
                new RingComponent(175),
                new RingComponent(125),
            ];

            component.setRings(rod3, rings);

            expect(component.getRings(rod3).length).toBe(rings.length);
        });

        test("Clear existing rings before setting new rings", () => {
            const rod1 = new RodComponent("rod1");
            const existingRings = [
                new RingComponent(100),
                new RingComponent(75),
            ];
            component.setRings(rod1, existingRings);

            const newRings = [new RingComponent(150)];
            component.setRings(rod1, newRings);

            expect(component.getRings(rod1).length).toBe(newRings.length);
        });
    });
});
