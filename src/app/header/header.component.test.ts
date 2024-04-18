import { describe, expect, test, beforeAll } from "@jest/globals";
import { HeaderComponent } from "./header.component";
import { bootstrap } from "@gsilber/webez";

describe("HeaderComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<HeaderComponent>(HeaderComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(HeaderComponent);
        });
    });
});
