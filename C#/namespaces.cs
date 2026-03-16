// This file is an error

using System;

namespace cat1 {
    public class cat {
        public static void Meow(string message) {
            Console.WriteLine(message);
        }
    }
    public class mouse {
        public void Wee(string message) {
            Console.WriteLine("weeewee");
        }
    }
}

namespace dog1 {
    public class dog {
        public void Woof(string message) {
            Console.WriteLine("WooFWooF");
        }
    }
    public class parrot {
        public void Arr(string message) {
            Console.WriteLine("ArrArrr");
        }
    }
}

namespace main {
    class setAll {
        static void Main(string[] args) {
            string underCat = "Hello World";
          
        }
    }
}

// only 1 namespace per .cs file, and namespaces are accessed across the project using "using 'namespace'"
