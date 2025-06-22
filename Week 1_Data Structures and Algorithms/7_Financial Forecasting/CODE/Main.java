import java.util.Scanner;
import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Financial Forecasting Tool");
        System.out.print("Enter Present Value (e.g. 1000): ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter Annual Growth Rate (e.g. 0.05 for 5%): ");
        double annualGrowthRate = scanner.nextDouble();

        System.out.print("Enter Number of Years: ");
        int years = scanner.nextInt();

        DecimalFormat df = new DecimalFormat("#.##");

        double valueRecursive = FinancialForecast.futureValue(presentValue, annualGrowthRate, years);
        System.out.println("Future value after " + years + " years (Recursive): Rs. " +  df.format(valueRecursive));

        double valueMemoized = ForecastRecursive.futureValueMemoized(presentValue, annualGrowthRate, years);
        System.out.println("Future value after " + years + " years (Memoized): Rs. " +  df.format(valueMemoized));

        scanner.close();
    }
}
