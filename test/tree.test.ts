import { Monkey } from "../src/monkey";
import { Kitten } from "../src/kitten";
import { Tree } from "../src/tree";

describe("Tree class", () => {
    describe("Constructor", () => {
        test("(1 pts) Create Instance", () => {
            expect(new Tree("Oak")).toEqual({
                kind: "Oak",
                troop: [],
            });

            expect(new Tree("Birch")).toEqual({
                kind: "Birch",
                troop: [],
            });
        });
    });

    describe("getTreeWeight", () => {
        test("(1 pts) getTreeWeight", () => {
            const tree = new Tree();
            // check weight of empty tree
            expect(tree.getTreeWeight()).toEqual(0);

            // add a monkey and check weight
            const monkey1 = new Monkey(
                "Cocoa",
                155,
                new Kitten("Fluffy", 5, 3),
            );
            tree.getTroop().push(monkey1);
            expect(tree.getTreeWeight()).toEqual(160);

            // add another monkey and check weight
            const monkey2 = new Monkey("Pat", 92, new Kitten("Skittles", 8, 4));
            tree.getTroop().push(monkey2);
            expect(tree.getTreeWeight()).toEqual(260);

            // add another monkey and check weight
            const monkey3 = new Monkey("Pat", 50, new Kitten("Skittles", 8, 4));

            tree.getTroop().push(monkey3);
            expect(tree.getTreeWeight()).toEqual(318);
        });

        describe("addMonkey", () => {
            test("(1 pts) addMonkey", () => {
                const tree = new Tree();
                // check weight of empty tree
                // expect(tree.getTreeWeight()).toEqual(0);
                const monkey1 = new Monkey(
                    "Cocoa",
                    155,
                    new Kitten("Fluffy", 5, 3),
                );
                // add a monkey
                expect(tree.addMonkey(monkey1)).toEqual(true);
                // check to see if its in the tree's troop -
                // tree weight still under the max allowed
                expect(tree.getTroop()[0]).toBe(monkey1);

                // add another monkey
                const monkey2 = new Monkey(
                    "Pat",
                    92,
                    new Kitten("Skittles", 8, 4),
                );
                expect(tree.addMonkey(monkey2)).toEqual(true);
                // check to see if its in the tree's troop
                // tree weight still under the max allowed
                expect(tree.getTroop()[0]).toBe(monkey1);
                expect(tree.getTroop()[1]).toBe(monkey2);

                // add a third monkey
                const monkey3 = new Monkey(
                    "Pat",
                    50,
                    new Kitten("Skittles", 8, 4),
                );
                expect(tree.addMonkey(monkey3)).toEqual(false);
                // monkey3 shouldn't be added because
                // this would put tree weight over the max
                // check that monkey3 didn't get added but
                // monkey1 and monkey2 still there
                expect(tree.getTroop()[0]).toBe(monkey1);
                expect(tree.getTroop()[1]).toBe(monkey2);
                expect(tree.getTroop().length).toEqual(2);
                // add a third monkey that will just
                // equal max weight when added
                const monkey4 = new Monkey(
                    "Pat",
                    36,
                    new Kitten("Skittles", 4, 4),
                );

                expect(tree.addMonkey(monkey4)).toEqual(true);
                expect(tree.getTroop()[0]).toBe(monkey1);
                expect(tree.getTroop()[1]).toBe(monkey2);
                expect(tree.getTroop()[2]).toBe(monkey4);
                expect(tree.getTroop().length).toEqual(3);

            });
        });
    });

    describe("getPairNames", () => {
        test("(1 pts) getPairNames", () => {
            const tree = new Tree();

            // add a monkey and check weight
            const monkey1 = new Monkey(
                "Cocoa",
                155,
                new Kitten("Fluffy", 5, 3),
            );
            tree.getTroop().push(monkey1);
            // add another monkey and check weight
            const monkey2 = new Monkey("Pat", 92, new Kitten("Skittles", 8, 4));
            tree.getTroop().push(monkey2);

            // add another monkey and check weight
            const monkey3 = new Monkey("Bob", 50, new Kitten("Jingles", 8, 4));
            tree.getTroop().push(monkey3);
            //console.log(tree.getPairNames());
            expect(tree.getPairNames()).toEqual(
                "Cocoa : Fluffy\nPat : Skittles\nBob : Jingles\n",
            );
        });
    });
});
