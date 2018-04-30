using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OhmCalculator.API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OhmCalculator.API.Controllers
{
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
  
        [HttpGet("Get4band/{bandAColor}/{bandBColor}/{multiColor}/{tolColor}")]
        public string Get4band(string bandAColor, string bandBColor, string multiColor, string tolColor)
        {
			Calculator library = new Calculator();
			return string.Format("{0}Ω ±{1}", Calculator.FormatNumber(library.CalculateOhmValue(bandAColor, bandBColor, null, multiColor)), Calculator.ConvertTolerence(tolColor));
		}

		[HttpGet("Get5band/{bandAColor}/{bandBColor}/{bandCColor}/{multiColor}/{tolColor}")]
		public string Get5band(string bandAColor, string bandBColor, string bandCColor, string multiColor, string tolColor)
		{
			Calculator library = new Calculator();
			return string.Format("{0}Ω ±{1}", Calculator.FormatNumber(library.CalculateOhmValue(bandAColor, bandBColor, bandCColor, multiColor)), Calculator.ConvertTolerence(tolColor));
		}
	}
}
