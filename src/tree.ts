/**
  You should complete this file AFTER monkey.ts!
   3.1 Make all the member variables private 
   3.2 Define the following getters:
      getKind, getTroop
   3.3 Define the following setter:
      setKind
   
   3.4 Create a method in the Tree class named 'getTreeWeight' that has no parameters and
      returns the total weight of monkeys and their pets that are in the Tree. Note:
       use getFullWeight from Monkey class.
   3.5  Create a method named 'addMonkey' that has one Monkey parameter and returns a boolean. This method
       will add the monkey to the Tree if by adding it - the full tree weight doesn't exceed the
       MAX_WEIGHT for the tree. If the monkey is added succesfully - the method returns true otherwise
       it returns false.
 
   3.6  Create a method named 'getPairNames' that has that has no parameters and returns a string containing
      the names of the Monkey and their Pets. The format of the string should be:
      "Monkey Name : Pet Name/n Monkey Name : Pet Name"
 */

import { Monkey } from "./monkey";

export class Tree {
    static MAX_WEIGHT: number = 300;
    public troop: Monkey[] = [];

    constructor(public kind: string = "Maple") {}
}
