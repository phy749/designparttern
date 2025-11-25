// Product
interface Vehicle {
    void drive();
}

// ConcreteProduct 1
class Car implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Driving a car...");
    }
}

// ConcreteProduct 2
class Truck implements Vehicle {
    @Override
    public void drive() {
        System.out.println("Driving a truck...");
    }
}

// Creator
abstract class VehicleFactory {
    public abstract Vehicle createVehicle();
}

// ConcreteCreator 1
class CarFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
}

// ConcreteCreator 2
class TruckFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Truck();
    }
}

// Client
public class Main {
    public static void main(String[] args) {
        VehicleFactory factory1 = new CarFactory();
        Vehicle car = factory1.createVehicle();
        car.drive(); // Output: Driving a car...

        VehicleFactory factory2 = new TruckFactory();
        Vehicle truck = factory2.createVehicle();
        truck.drive(); // Output: Driving a truck...
    }
}
