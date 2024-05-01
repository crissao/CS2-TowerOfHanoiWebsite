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
    describe("setLeftPosition", () => {
        test("Set left position for rod1", () => {
            component.width = 100;
            const width = 100;
            const rodId = "rod1";
            component.setLeftPosition(rodId);
            expect(component.left).toBe(263 + (200 - width) / 2);
        });

        test("Set left position for rod2", () => {
            component.width = 150;
            const width = 150;
            const rodId = "rod2";
            component.setLeftPosition(rodId);
            expect(component.left).toBe(613 + (200 - width) / 2);
        });

        test("Set left position for rod3", () => {
            component.width = 200;
            const width = 200;
            const rodId = "rod3";
            component.setLeftPosition(rodId);
            expect(component.left).toBe(963 + (200 - width) / 2);
        });
    });

    describe("setBottomPosition", () => {
        test("Set bottom position", () => {
            const index = 5;
            component.setBottomPosition(index);
            expect(component.bottom).toBe(20 * index + 100);
        });
    });
});
