# ohm-calculator

[ohm-calculator](http://ohmcalculator.azurewebsites.net/index.html) is a web based [electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code) calculator built on React and ASP.Net Core, that is used to calculate the values and tolerance of 4 and 5 band resistors.

![interface](http://ohmcalculator.azurewebsites.net/images/ohm-calculator-interface-4band.png) ![interface](http://ohmcalculator.azurewebsites.net/images/ohm-calculator-interface-5.png)

<ul>
  <li>ASP.Net Core Web API</li>
  <li>Reactjs Front-end</li>  
  <li>Swagger API Documentation</li>  
  <li>Protractor E2E Automated Testing</li>
  <li>XUnit API Unit Tests</li>
</ul>

## Installation

Download the .zip file to your local system and unzip it in your desired location. For the purpose of this documentation, we are going to use the following path.

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master</code></pre>

## ASP.NET Core Web API

#### Setup

Launch Visual Studio 2017 and open the solution shown below:

<pre><code>C:\Users\Eric\Documents\GitHub\React\ohm-calculator-master\api\OhmCalculator.API.sln</code></pre>

#### Configuring IIS Express

The api endpoint is configured by default to run against the following url:

<pre><code>http://localhost:15794/</code></pre>

You should not need to change the endpoint to run the api. If you want to change endpoint, open the properties > debug settings for the OhmCalculator.API project in the solution. Update the App URL setting to your desired endpoint.

## Reactjs Front-end

Launch Visual Studio Code and open the folder at the following location:

<pre><code>C:\Users\Eric\Documents\GitHub\React\ohm-calculator-master</code></pre>

Using the integrated terminal in VS Code, run the following commands:

<pre><code>C:\Users\Eric\Documents\GitHub\React\ohm-calculator-master> npm i</code></pre>

<pre><code>C:\Users\Eric\Documents\GitHub\React\ohm-calculator-master> npm start</code></pre>

This will install all dependencies required by the application and launch it in the browser.

#### Running the API locally

By default, the web application uses the Azure api endpoint to perform the color code calculations. If you want the web application to use the local api, you will need to update the "WEB_SERVER" setting in web.config.js file to "LOCAL". The configuration file can be found at the following path:

<pre><code>C:\Users\Eric\Documents\GitHub\React\ohm-calculator-master\src\web.config.js</code></pre>

You will then need to open the api project in Visual Studio 2017 and press F5 which will launch the api and make it available for consumption.

*NOTE: If you changed the IIS Express default endpoint, you will also need to update the "LOCAL_API_ENDPOINT" found in the web.config.js file to the same endpoint. Otherwise, the web application will not be able to run.

## Swagger API Documentation

The ASP.Net Core API uses [Swagger](https://en.wikipedia.org/wiki/Swagger_(software)) to publish the api documentation. The  documentation for the calculator api hosted on Azure can be at the link below:

http://ohmcalculatorapi.azurewebsites.net/swagger/

## Protractor E2E Automated Testing

The React web application uses [Protractor](https://www.protractortest.org/#/) to perform automated end-to-end regression testing. Protractor interacts with the application the same way a user would by launching it in the browser and navigating through the user interface. I am also using [protractor-beautiful-report](https://www.npmjs.com/package/protractor-beautiful-reporter) to provide a detail report of the test results. The reports capture the success/failure status, errors and warnings in the browser and even take a snap shot of the user interface when each test case is executed. An example of the report can be found at the link below.

[Ohm Calculator e2e Regression Test Report](http://ohmcalculator.azurewebsites.net/reports/report.html)

To run protractor locally, you will need to run the following commands in the Visual Studio Code integrated terminal.

Protractor uses a Selenium Server to run the automation. You will need to run this command to ensure your drivers are up to date.
<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> webdriver-manager update</code></pre>

Running this command will launch Selenium Server in the background.
<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> webdriver-manager start</code></pre>

Finally, running this command will launch protractor and run the test suite.
<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> npm run e2e</code></pre>

*Note: If you have issues running protractor, you can try installing it globally with the following command:

<pre><code>npm install -g protractor</code></pre>

Selenium Server also has dependencies with Java and requires version 8+ to be installed and accessible from your OS environment variables.

## XUnit API Unit Tests

The ASP.Net Core API uses XUnit to perform unit tests against the value calculations. To run the tests, open the project in Visual Studio Code and navigate to the path mentioned below using the integrated terminal.

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master\api\OhmCalculator.API.Tests> dotnet test</code></pre>

This will run unit tests against various color code combinations for 4-band and 5-band resistors and validate the calculations are correct. The status of the number of test cases that passed, failed and that were skipped are then displayed in the console.

<pre><code>
C:\Documents\GitHub\React\ohm-calculator-master\api\OhmCalculator.API.Tests>dotnet test
Build started, please wait...
Build completed.

Test run for C:\\Documents\GitHub\React\ohm-calculator-master\api\OhmCalculator.API.Tests\bin\Debug\netcoreapp2.0\OhmCalculator.API.Tests.dll(.NETCoreApp,Version=v2.0)
Microsoft (R) Test Execution Command Line Tool Version 15.5.0
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
[xUnit.net 00:00:01.5033941]   Discovering: OhmCalculator.API.Tests
[xUnit.net 00:00:01.7037693]   Discovered:  OhmCalculator.API.Tests
[xUnit.net 00:00:01.7136180]   Starting:    OhmCalculator.API.Tests
[xUnit.net 00:00:02.0271274]   Finished:    OhmCalculator.API.Tests

Total tests: 20. Passed: 20. Failed: 0. Skipped: 0.
Test Run Successful.
Test execution time: 2.9836 Seconds
</code></pre>

An example of the 4-band unit test is below.

<pre><code>
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
</code></pre>

