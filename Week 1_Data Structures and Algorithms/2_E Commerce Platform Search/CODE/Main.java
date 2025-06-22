import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Predefined product list
        Product[] products = {
                new Product(1, "Desk Lamp", "Home Decor"),
                new Product(2, "Sunglasses", "Accessories"),
                new Product(3, "Sandals", "Footwear"),
                new Product(4, "Pen Drive", "Electronics"),
                new Product(5, "Book", "Stationary")
        };

        // Take user input for search
        System.out.print("Enter product name to search: ");
        String searchName = scanner.nextLine();

        System.out.print("Choose search method (1: Linear, 2: Binary): ");
        int choice = scanner.nextInt();

        Product result = null;

        if (choice == 1) {
            result = LinearSearch.linearSearch(products, searchName);
        } else if (choice == 2) {
            BinarySearch.sortByName(products);
            result = BinarySearch.binarySearch(products, searchName);
        } else {
            System.out.println("Invalid option! Please enter 1 or 2.");
            scanner.close();
            return;
        }

        // Show result
        System.out.println("\nSearch Result:");
        if (result != null) {
            System.out.println(result);
        } else {
            System.out.println("Product not found");
        }

        scanner.close();
    }
}
