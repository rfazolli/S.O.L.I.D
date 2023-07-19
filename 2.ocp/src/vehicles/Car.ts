import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {
    super();
  }

  startVehicle(): void {
    console.log(
      `Criando um carro: ${this.color}, ${this.year}, ${this.engine} potência, ${this.doors} portas com ${this.seats} assentos`
    );

    console.log("Ligando os motores.");
  }
}
