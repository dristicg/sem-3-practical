// Create a class Calculator that overloads add() method to perform addition of two integers, two double values, and three integers.


class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator cal = new Calculator();

        System.out.println("Addition of two integers: " + cal.add(5, 7));
        System.out.println("Addition of three integers: " + cal.add(6, 10, 12));
        System.out.println("Addition of two double values: " + cal.add(1.2, 1.5));
    }
}