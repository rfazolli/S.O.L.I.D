import IVehicle from "./IVehicle";

export default abstract class Vehicle implements IVehicle {
  abstract startVehicle(): void;
}
