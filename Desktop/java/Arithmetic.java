
import java.util.Scanner;

public class Arithmetic{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter first number");
        int n=sc.nextInt();
        
        System.out.println("Enter second number");
        int m=sc.nextInt();

        int sum=m+n;
        int mult=m*n;
        System.out.println("Sum is "+ sum);
        System.out.println("Mult is "+ mult);
    }
}