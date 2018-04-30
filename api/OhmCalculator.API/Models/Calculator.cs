using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OhmCalculator.API.Models
{
	public class Calculator : IOhmValueCalculator
	{
		public decimal CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor)
		{
			string band1, band2, band3 = "";
			decimal multiplier;
			
			// Convert the band colors into numeric strings.
			band1 = ConvertBand(bandAColor);
			band2 = ConvertBand(bandBColor);

			band1 = band1 != "0" ? string.Format("{0}{1}", band1, band2) : band2;

			// Determine the multiplier based on the specified color.
			multiplier = ConvertMultiplier(bandDColor);

			// Determine if we are calculating 5 band.
			if (!String.IsNullOrEmpty(bandCColor))
			{
				band3 = ConvertBand(bandCColor);

				band1 = band1 != "0" ? string.Format("{0}{1}", band1, band3) : band3;
			}

			return Int32.Parse(band1) * multiplier;
		}

		public decimal ConvertMultiplier(string color)
		{
			decimal value = 0;

			// Determine the color we are working with.
			switch (color)
			{
				case "black":
					value = 1;
					break;
				case "brown":
					value = 10;
					break;
				case "red":
					value = 100;
					break;
				case "orange":
					value = 1000;
					break;
				case "yellow":
					value = 10000;
					break;
				case "green":
					value = 10000;
					break;
				case "blue":
					value = 1000000;
					break;
				case "purple":
					value = 10000000;
					break;
				case "gold":
					value = 0.1m;
					break;
				case "silver":
					value = 0.01m;
					break;
				default:
					throw new Exception(String.Format("Unable to convert multiplier of invalid color '{0}'.", color));
			}

			return value;
		}

		public string ConvertBand(string color)
		{
			string value = null;

			// Determine the color we are working with.
			switch (color)
			{
				case "black":
					value = "0";
					break;
				case "brown":
					value = "1";
					break;
				case "red":
					value = "2";
					break;
				case "orange":
					value = "3";
					break;
				case "yellow":
					value = "4";
					break;
				case "green":
					value = "5";
					break;
				case "blue":
					value = "6";
					break;
				case "purple":
					value = "7";
					break;
				case "gray":
					value = "8";
					break;
				case "white":
					value = "9";
					break;
				case "gold":
					value = "0";
					break;
				case "silver":
					value = "0";
					break;
				default:
					throw new Exception(String.Format("Unable to convert band of invalid color '{0}'.", color));
			}

			return value;
		}

		public static string ConvertTolerence(string color)
		{
			string value = "";

			// Determine the color we are working with.
			switch (color)
			{
				case "brown":
					value = "1%";
					break;
				case "red":
					value = "2%";
					break;				
				case "green":
					value = "0.5%";
					break;
				case "blue":
					value = "0.25%";
					break;
				case "purple":
					value = "0.10%";
					break;
				case "gray":
					value = "0.05%";
					break;
				case "gold":
					value = "5%";
					break;
				case "silver":
					value = "10%";
					break;
				default:
					throw new Exception(String.Format("Unable to convert tolerance of invalid color '{0}'.", color));
			}

			return value;
		}

		public static string FormatNumber(decimal n)
		{
			if (n < 1000)
				return n.ToString();

			if (n < 10000)
				return String.Format("{0:#,.##} K", n - 5);

			if (n < 100000)
				return String.Format("{0:#,.#} K", n - 50);

			if (n < 1000000)
				return String.Format("{0:#,.} K", n - 500);

			if (n < 10000000)
				return String.Format("{0:#,,.##} M", n - 5000);

			if (n < 100000000)
				return String.Format("{0:#,,.#} M", n - 50000);

			//if (n < 1000000000)
				return String.Format("{0:#,,.} M", n - 500000);

			//return String.Format("{0:#,,,.##} B", n - 5000000);
		}
	}
}
