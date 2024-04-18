import { describe, expect, test, beforeAll } from "@jest/globals";
import { RodComponent } from "./rod.component";
import { bootstrap } from "@gsilber/webez";

describe("RodComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<RodComponent>(RodComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(RodComponent);
        });
    });
});
