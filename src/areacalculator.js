const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    
    if(side == null && length == null 
      && breadth == null && radius == null) {
      return -1;
    }

    switch(choice) {
      case "square":
        area = side * 4;
        break;
      case "rectangle":
        area = length * breadth
        break;
      case "circle":
        area = pi * radius * radius
        break;
    }

    return area
}
module.exports = {calculateArea}
