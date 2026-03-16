// See https://aka.ms/new-console-template for more information
using System;

namespace OnePercent {
    // it is imperative for OOP for methods to be under classes
    class Primary {
        /*
        static string problem (string message) {
            return message;
        }
        */

        static int percentage (int x, int y) {
            // Convert.ToInt32 makes it so the parenthesis doesn't cancel out the division, but it is still multiplying first before dividing
            int ans = Convert.ToInt32(x / y) * 100;
            return ans;
        }

        static int answer (int answer) {
            return answer;
        }

        static void Main(string[] args) {
            Console.WriteLine("Name any passage with a math percentage problem:");
            string problem = Console.ReadLine();
            Console.WriteLine("Write math value 1 from problem:");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Write math value 2 from problem:");
            int y = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("name the question relating to your passage:");
            string question = Console.ReadLine();
            Console.WriteLine("Processing...");
            Console.WriteLine($"\n {problem}");
            Console.WriteLine($"\n {question}");
            Console.WriteLine("\n Your answer should be an integer:");
            // apparently this is possible
            int ans = Convert.ToInt32($" {Console.ReadLine()}");

            int userAnswer = answer(ans);
            int calculated = percentage(x, y);
            if (calculated == userAnswer) {
                Console.WriteLine("Congratulations, you've got the correct answer!");
            } else {
                Console.WriteLine("Sorry, you have the wrong answer!");
            }

        }
    }
}
