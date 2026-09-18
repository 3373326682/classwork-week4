/**
   You should complete this file BEFORE Tree.ts!
   2.1 Make all the member variables private 
   2.2 Define the following getters:
   getName, getWeight, getPet
   2.3 Define the following setters:
   setName, setWeight 
 
    2.4 Create a method in the Monkey class named 'getFullWeight' that has no parameters and returns the combined weight of the
          monkey and its pet.
    2.5   Create a method named swapPets that has one Monkey parameter and does not return a value. This method
         swaps pets with the monkey that is passed to this method. (Note the pet objects should be swapped. Do NOT
         just swap the values of the pet member fields.)
 */

import { Kitten } from "./kitten";
export class Monkey {
    constructor(
        public name: string = "Bongo",
        public weight: number = 0,
        public pet: Kitten = new Kitten(),
    ) {}
}
