package STRT_WJ_011;
import java.util.*;
import java.util.stream.*;

//created two classes Item and Order with their attributes and constructors.
class Item{
    String IName;
    double IPrice;

    Item(String name, double price){
        this.IName = name;
        this.IPrice = price;
    }
}

class Order{
    int OId;
    String customerName;
    List<Item> items;

    Order(int id, String name, List<Item> items){
        this.OId = id;
        this.customerName = name;
        this.items = items;
    }
}

public class StreamAPI {
    public static void main(String[] args) {
        //created a list of orders with their respective items.
        List<Order> orders = List.of(
            new Order(1,"Rushikesh", List.of(
                new Item("Book", 250.0),
                new Item("Notebook", 50)
            )),
            new Order(2,"Mohit", List.of(
                new Item("Pen", 250.0),
                new Item("Stand", 50)
            )),
            new Order(3,"Savio", List.of(
                new Item("Notebook", 250.0),
                new Item("Pen", 50)
            ))
        );

        //orders.stream will send orders one at a time to stream operations
        Stream<Order> orderStream = orders.stream();

        //here we define an array of blocked products.
        String[] blockedProducts = {"Stand"};

        //now we create a stream for mandatory products.
        Stream<String> mandatoryProduct = Stream.of("Laptop");

        //we here started processing the order stream.
        List<String> Product = orderStream

        //peek is used to print the order id.
            .peek(o -> System.out.println("Order ID: " + o.OId))

            //flatMap converts the array item to stream of items.
            .flatMap(o -> o.items.stream())

            .peek(item -> System.out.println("Item: " + item.IName))

            // we used filter to remove the blocked products.
            .filter(item -> Arrays.stream(blockedProducts).noneMatch(b -> b.equalsIgnoreCase(item.IName)))

            //map is used to extract the item names.
            .map(item -> item.IName)

            //distinct is used to remove duplicate items.
            .distinct()

            //sorted is used to sort the items in natural order.
            .sorted()

            //skip is used to skip the first item.
            .skip(1)

            //limit is used to limit the number of items to 3.
            .limit(3)

            .peek(name -> System.out.println("Filtered Item: " + name))

            //collect is used to collect the final items into a list.
            .collect(Collectors.toList());

        System.out.println("Final Product List: ");
        for (String product : Product) {
            System.out.println(product);
        }
    }
}
