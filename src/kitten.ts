/* 1.1 Make all the member variables private 
   1.2 Define the following getters:
   getName, getWeight, getNumLives
   1.3 Define the following setters:
   setName, setWeight
   */
export class Kitten {
    constructor(
        private name: string = "Kitty",
        private weight: number = 0,
        private numLives: number = 9,
    ) {}
    makeSound(): string {
        if (this.numLives >= 2) return "purr";
        else return "hiss";
    }
    getName(): string {
        return this.name;
    }
    getWeight(): number {
        return this.weight;
    }
    getNumLives(): number {
        return this.numLives;
    }
    setName(newname: string): void {
        this.name = newname;
    }
    setWeight(newweight: number): void {
        this.weight = newweight;
    }
    setNumLives(newnumlives: number): void {
        this.numLives = newnumlives;
    }
}
