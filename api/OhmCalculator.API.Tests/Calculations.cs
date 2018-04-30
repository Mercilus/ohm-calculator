using System;
using Xunit;

namespace OhmCalculator.API.Tests
{
    public class Calculations
    {
        [Theory]
		[Trait("Name", "4 Band Resistor Test")]
		[InlineData("black",  "black", "brown")]
		[InlineData("brown",  "black", "brown")]
		[InlineData("red",    "black", "brown")]
		[InlineData("orange", "black", "brown")]
		[InlineData("yellow", "black", "brown")]
		[InlineData("green",  "black", "brown")]
		[InlineData("blue",   "black", "brown")]
		[InlineData("purple", "black", "brown")]
		[InlineData("gray",   "black", "brown")]
		[InlineData("white",  "gold",  "blue")]
		public void Test4Band(string bands, string multiplier, string tolerance)
        {
			OhmCalculator.API.Controllers.CalculatorController controller = null;
			string result = "", expected = "", conditions = "";

			// Format our conditions string based on the input.
			conditions = string.Format("{0},{1},{2}", bands, multiplier, tolerance);

			// Setup our controller.
			controller = new Controllers.CalculatorController();

			// Perform the calculation.
			result = controller.Get4band(bands, bands, multiplier, tolerance);

			// Determine what the expected answer should be based on the conditions.
			switch (conditions)
			{
				case "black,black,brown":
					expected = "0Ω ±1%";
					break;
				case "brown,black,brown":
					expected = "11Ω ±1%";
					break;
				case "red,black,brown":
					expected = "22Ω ±1%";
					break;
				case "orange,black,brown":
					expected = "33Ω ±1%";
					break;
				case "yellow,black,brown":
					expected = "44Ω ±1%";
					break;
				case "green,black,brown":
					expected = "55Ω ±1%";
					break;
				case "blue,black,brown":
					expected = "66Ω ±1%";
					break;
				case "purple,black,brown":
					expected = "77Ω ±1%";
					break;
				case "gray,black,brown":
					expected = "88Ω ±1%";
					break;
				case "white,gold,blue":
					expected = "9.9Ω ±0.25%";
					break;
				default:
					throw new NotSupportedException("The condition '" + conditions + "' is not supported by the unit test.");
			}

			Assert.Equal(expected, result);
        }

		[Theory]
		[Trait("Name", "4 Band Resistor Test")]
		[InlineData("black",  "black", "brown")]
		[InlineData("brown",  "black", "brown")]
		[InlineData("red",    "black", "brown")]
		[InlineData("orange", "black", "brown")]
		[InlineData("yellow", "black", "brown")]
		[InlineData("green",  "black", "brown")]
		[InlineData("blue",   "black", "brown")]
		[InlineData("purple", "black", "brown")]
		[InlineData("gray",   "black", "brown")]
		[InlineData("white",  "gold",  "blue")]
		public void Test5Band(string bands, string multiplier, string tolerance)
        {
			OhmCalculator.API.Controllers.CalculatorController controller = null;
			string result = "", expected = "", conditions = "";

			// Format our conditions string based on the input.
			conditions = string.Format("{0},{1},{2}", bands, multiplier, tolerance);

			// Setup our controller.
			controller = new Controllers.CalculatorController();

			// Perform the calculation.
			result = controller.Get5band(bands, bands, bands, multiplier, tolerance);

			switch (conditions)
			{
				case "black,black,brown":
					expected = "0Ω ±1%";
					break;
				case "brown,black,brown":
					expected = "111Ω ±1%";
					break;
				case "red,black,brown":
					expected = "222Ω ±1%";
					break;
				case "orange,black,brown":
					expected = "333Ω ±1%";
					break;
				case "yellow,black,brown":
					expected = "444Ω ±1%";
					break;
				case "green,black,brown":
					expected = "555Ω ±1%";
					break;
				case "blue,black,brown":
					expected = "666Ω ±1%";
					break;
				case "purple,black,brown":
					expected = "777Ω ±1%";
					break;
				case "gray,black,brown":
					expected = "888Ω ±1%";
					break;
				case "white,gold,blue":
					expected = "99.9Ω ±0.25%";
					break;
				default:
					throw new NotSupportedException("The condition '" + conditions + "' is not supported by the unit test.");
			}

			Assert.Equal(expected, result);
        }
    }
}
