// Write a Java program to print the Fibonacci series up to a given N terms.
import java.util.Scanner;
public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms for Fibonacci series: ");
        int n = scanner.nextInt();

        int a = 0, b = 1;
        System.out.println("Fibonacci Series up to " + n + " terms:");

        for (int i = 1; i <= n; ++i) {
            System.out.print(a + " ");

            int temp = a + b;
            a = b;
            b = temp;
        }
        scanner.close();
    }
}