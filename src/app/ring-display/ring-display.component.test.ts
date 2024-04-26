import { describe, expect, test, beforeAll } from "@jest/globals";
import { RingDisplayComponent } from "./ring-display.component";
import { bootstrap } from "@gsilber/webez";

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
});
