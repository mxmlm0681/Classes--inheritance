import { Character } from "./app";

export default class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Swordsman';
        this.attack = 40;
        this.defence = 10;
    }
}