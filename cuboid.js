class Cuboid {
    constructor(length, width, height) {
        this.length = length;  // this is just a key word.
        this.width = width;
        this.height = height;
    }
    volume() {
        const volume = this.length*this.width*this.height;
        console.log(this); // gonna print the entire object.
        return volume;
    }
}

const cubo = new Cuboid(2,4,1); // if we don't pass anything then it will take undefined...
const volume = cubo.volume();
console.log(volume); 