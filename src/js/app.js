export class Character {
    constructor(name, type) {
        
        if (typeof name !== 'string') {
            throw new Error('Некорректный тип имени. Введите строку');
        }

        if (name.length < 2 || name.length > 10) {
            throw new Error('Некорректная длина имени. Длина имени должна быть от 2 до 10 символов');
        }

        this.name = name;
        this.health = 100;
        this.level = 1;
        this.type = type;
        
        return this;
    }
}
