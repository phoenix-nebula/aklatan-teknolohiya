// ============================================
/*

    Caution: Personal terminologies ahead

*/
// ============================================

// access common or basic types, like String, Type, I/O, and Object
using System;

namespace LetsBegin {

    // public class to be accessible to other classes in and out of the same namespace
    public class calculations {
        // Public method is needed to be accessible to the Main method
        // methods can have as many local parameters as it needs
        // int methods always needs an integer return value
        // static methods can be used as an object reference
        public static int addition (int x, int y) {
            Console.WriteLine("Calculating...");
            int ans = x + y;
            // not Main method must return a value/variable
            return ans;
        }

        public static int subtraction (int x, int y) {
            Console.WriteLine("Calculating...");
            int ans = x - y;
            return ans;
        }

        public static int multiplication (int x, int y) {
            Console.WriteLine("Calculating...");
            int ans = x * y;
            return ans;
        }

        public static int division (int x, int y) {
            Console.WriteLine("Calculating...");
            int ans = x / y;
            return ans;
        }
    }

    internal class index {
        static void Main(string[] args) {
            Console.WriteLine("Enter two numbers:");
            // C# is strict, ReadLine is rendered as a string before converting it ToInt32
            int integer1 = Convert.ToInt32(Console.ReadLine());
            // WriteLine as is only accepts 1 parameter
            // $"{}" is needed to implement a variable in a string
            Console.WriteLine($"Your first Integer is {integer1}");
            int integer2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Your second Integer is {integer2}");
            Console.WriteLine("Choose: addition, subtraction, multiplication, division");
            string calculation = Console.ReadLine(); 
            if (calculation == "addition") {
                int calc = calculations.addition(integer1, integer2);
                Console.WriteLine($"Your number is {calc}");
            } else if (calculation == "subtraction") {
                int calc = calculations.subtraction(integer1, integer2);
                Console.WriteLine($"Your number is {calc}");
            } else if (calculation == "multiplication") {
                int calc = calculations.multiplication(integer1, integer2);
                Console.WriteLine($"Your number is {calc}");
            } else if (calculation == "division") {
                int calc = calculations.division(integer1, integer2);
                Console.WriteLine($"Your number is {calc}");
            } else {
                Console.WriteLine("Input provided is not included in options.");
            }
        }
    }
}
