import { Character } from "./app";

export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'Zombie';
        this.attack = 40;
        this.defence = 10;
    }
}