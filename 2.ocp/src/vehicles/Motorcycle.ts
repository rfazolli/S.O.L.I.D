import Vehicle from "./Vehicle";

export default class Motorcycle extends Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number
  ) {
    super();
  }

  startVehicle(): void {
    console.log(
      `Criando uma moto: ${this.color}, ${this.year}, ${this.engine} cilindradas`
    );

    console.log("Ligando os motores.");
  }
}
