/*Primitive Types : (1) number (2) string (3) boolean
 Complex Types : (1) Objects (2) Arrays
 classes : In JS, they are the way to define blueprints for creating objects ( objects are different from the objects defined like user { name : Vaidehi; age : 17;}*/
 /* Classes : Blueprint of the house
    objects : The actual house built using the blueprint */
    /*class declarztion : Inside the class u declare properties and methods that will belong to the object created from this class*/

    class Rectangle {
        constructor(width, height, color) {   // The constructor is a special method that is called when creating a new object from the class. It initializes the object’s properties.
            this.width = width; // We are attaching the properties to the object.
            this.height = height;
            this.color = color;
        }
        area() {
            const area = this.width*this.height;
            return area;
        }
        print() {
            console.log(`Painting with color ${this.color}`); // backtick is allowing interpolation meaning we can directly insert the variables or expressions inside the string using ${...}.
        }
    }
    const rect = new Rectangle(2,4,"blue"); // We are creating an object rect from the class Rectangle.
    const area = rect.area();
    console.log(area);
    rect.print(); // Prints with color blue