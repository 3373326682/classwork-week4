/* 1.1 Make all the member variables private 
   1.2 Define the following getters:
   getName, getWeight, getNumLives
   1.3 Define the following setters:
   setName, setWeight
   */
export class Kitten {
    constructor(public name : string = "Kitty" ,
                        public weight : number = 0,
                        public numLives : number = 9){ }   
    makeSound() : string{
        if (this.numLives >=2) return "purr";
        else return "hiss";  
    }
}
