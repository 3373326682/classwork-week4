import { Monkey } from "../src/monkey";
import { Kitten } from "../src/kitten";

describe("Monkey class", () => {
    describe("Constructor", () => {
        test("(1 pts) Create Instance", () => {
            expect(new Monkey("Cocoa", 15, new Kitten("Fluffy", 5, 3))).toEqual(
                {
                    name: "Cocoa",
                    weight: 15,
                    pet: { name: "Fluffy", weight: 5, numLives: 3 },
                },
            );

            expect(new Monkey("Pat", 30, new Kitten("Skittles", 8, 4))).toEqual(
                {
                    name: "Pat",
                    weight: 30,
                    pet: { name: "Skittles", weight: 8, numLives: 4 },
                },
            );
        });
    });

    describe("getFullWeight", () => {
        test("(1 pts) getFull Weight", () => {
            const monkey1 = new Monkey("Cocoa", 15, new Kitten("Fluffy", 5, 3));
            expect(monkey1.getFullWeight()).toEqual(20);
            const monkey2 = new Monkey("Pat", 30, new Kitten("Skittles", 8, 4));
            expect(monkey2.getFullWeight()).toEqual(38);
        });
    });

    describe("swapPetsName", () => {
        test("(1 pts) swapPets", () => {
            const kitty1 = new Kitten("Fluffy", 5, 3);
            const monkey1 = new Monkey("Cocoa", 15, kitty1);
            const kitty2 = new Kitten("Skittles", 8, 4);
            const monkey2 = new Monkey("Pat", 30, kitty2);
            // check pets before swap
            expect(monkey1.getPet()).toBe(kitty1);
            expect(monkey2.getPet()).toBe(kitty2);
            // swapPets
            monkey1.swapPets(monkey2);
            // check pets are swapped
            expect(monkey1.getPet()).toBe(kitty2);
            expect(monkey2.getPet()).toBe(kitty1);
        });
    });
});
