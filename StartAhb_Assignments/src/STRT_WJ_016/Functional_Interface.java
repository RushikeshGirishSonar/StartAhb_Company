package STRT_WJ_016;

import java.util.function.*;

@FunctionalInterface
interface Greeting {
    void greet(String name);
}


public class Functional_Interface {

    public static void main(String[] args) {

        System.out.println("\n1. Custom Functional Interface");

        Greeting greeting = name ->System.out.println("Hii, " + name + "!");
        greeting.greet("Rushikesh");

        // 2. Predicate Interface : It Check a condition wether it's true or false and used for validatiion/filtering
        System.out.println("\n2. Predicate Interface");

        Predicate<Integer> isAdult = age -> age >= 18;
        System.out.println("Age 20 is adult: " + isAdult.test(20));
        System.out.println("Age 15 is adult: " + isAdult.test(15));

        // 3. Function Interface : It convert one value into another
        System.out.println("\n3. Function Interface");

        Function<String, Integer> calculateLength = text -> text.length();
        System.out.println("Length of 'Rushikesh': " + calculateLength.apply("Rushikesh"));

        // 4. Consumer Interface : This interface just take the input data and announces it but it does not return anything.
        System.out.println("\n4. Consumer Interface");

        Consumer<String> printMessage = message -> System.out.println("Message: " + message);
        printMessage.accept("I am using Functional Interfaces");

        // 5. Supplier Interface : It dont take any input but return the value it mostly used for data generation.
        System.out.println("\n5. Supplier Interface");

        Supplier<Double> generateRandomNumber = () -> Math.random();
        System.out.println("Random Number: " + generateRandomNumber.get());

    }
}
