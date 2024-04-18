import { describe, expect, test, beforeAll } from "@jest/globals";
import { RingComponent } from "./ring.component";
import { bootstrap } from "@gsilber/webez";

describe("RingComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<RingComponent>(RingComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(RingComponent);
        });
    });
});
