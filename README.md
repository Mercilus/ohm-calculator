# ohm-calculator

[ohm-calculator](http://ohmcalculator.azurewebsites.net/index.html) is a web based [electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code) calculator built on React and ASP.Net Core, that is used to calculate the values and tolerance of 4 and 5 band resistors.

![interface](http://ohmcalculator.azurewebsites.net/images/ohm-calculator-interface-4band.png) ![interface](http://ohmcalculator.azurewebsites.net/images/ohm-calculator-interface-5.png)

<ul>
  <li>Reactjs Front-end</li>
  <li>ASP.Net Core Web API</li>
  <li>Swagger API Documentation</li>
  <li>XUnit API Unit Tests</li>
  <li>Protractor E2E Automated Testing</li>
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

## React Web Application

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

[Example Report](http://ohmcalculator.azurewebsites.net/reports/report.html)

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> webdriver-manager update</code></pre>

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> webdriver-manager start</code></pre>

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master> npm run e2e</code></pre>

## XUnit API Unit Tests

<pre><code>C:\Documents\GitHub\React\ohm-calculator-master\api\OhmCalculator.API.Tests> dotnet test</code></pre>
