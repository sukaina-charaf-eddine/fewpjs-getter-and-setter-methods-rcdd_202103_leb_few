// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor( radius ) {
    this.radius = radius;
  }
diameter(){
  return this.radius *2;
}
circumference(){
  return (this.radius * 2) * pi;
}
area(){
  return pi * (this.radius * this.radius);
}
}
