import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/IVehicle";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehicle.CAR;
let vehicle: IVehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2022, 2.0, 4, 4);
  vehicle.startVehicle();
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Amarelo", 2022, 2.0);
  vehicle.startVehicle();
}
