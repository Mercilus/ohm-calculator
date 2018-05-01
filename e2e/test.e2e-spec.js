
describe('Resistor Color Code Calulator Test Suite', function () {

    describe('Test Case: Launch Application', function () {
    
        it('Step 1: Open Browser', function() {
        
            browser.get('http://localhost:3000/');
    
            expect(element(by.id('plabel')).getText()).toEqual("Resistor Color Code Calculator");
        });

        it(`'Step 2: Default mode is selected as '4-Band'`, function() {
        
            expect(element(by.id('btnMode')).getText()).toEqual("Switch to 5 Band");    
        });

        it('Step 3: Default calculation is displayed', function() {
        
            expect(element(by.id('result')).getText()).toEqual("110Ω ±1%");    
        });
    });

    describe('Test Case: Validate 4-Band Resistor Calculations', function () {

        it('Step 1 - All black digits with black multiplier and brown tolerance', function() {
        
            element(by.id('Band1:black')).click();
            element(by.id('Band2:black')).click();
            element(by.id('Mul:black')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);

            expect(element(by.id('result')).getText()).toEqual("0Ω ±1%");
        });
    
        it('Step 2 - All brown digits with brown multiplier and brown tolerance', function() {
        
            element(by.id('Band1:brown')).click();
            element(by.id('Band2:brown')).click();
            element(by.id('Mul:brown')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("110Ω ±1%");
        });
    
        it('Step 3 - All red digits with red multiplier and brown tolerance', function() {
        
            element(by.id('Band1:red')).click();
            element(by.id('Band2:red')).click();
            element(by.id('Mul:red')).click();
            element(by.id('Tol:red')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("2.2 KΩ ±2%");
        });
    
        it('Step 4 - All orange digits with orange multiplier and brown tolerance', function() {
        
            element(by.id('Band1:orange')).click();
            element(by.id('Band2:orange')).click();
            element(by.id('Mul:orange')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("33 KΩ ±1%");
        });
    
        it('Step 5 - All yellow digits with yellow multiplier and brown tolerance', function() {
        
            element(by.id('Band1:yellow')).click();
            element(by.id('Band2:yellow')).click();
            element(by.id('Mul:yellow')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("440 KΩ ±1%");
        });
    
        it('Step 6 - All green digits with green multiplier and green tolerance', function() {
        
            element(by.id('Band1:green')).click();
            element(by.id('Band2:green')).click();
            element(by.id('Mul:green')).click();
            element(by.id('Tol:green')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("550 KΩ ±0.5%");
        });
    
        it('Step 7 - All blue digits with blue multiplier and blue tolerance', function() {
        
            element(by.id('Band1:blue')).click();
            element(by.id('Band2:blue')).click();
            element(by.id('Mul:blue')).click();
            element(by.id('Tol:blue')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("66 MΩ ±0.25%");
        });
    
        it('Step 8 - All purple digits with purple multiplier and purple tolerance', function() {
        
            element(by.id('Band1:purple')).click();
            element(by.id('Band2:purple')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:purple')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("770 MΩ ±0.10%");
        });
    
        it('Step 9 - All gray digits with purple multiplier and gray tolerance', function() {
        
            element(by.id('Band1:gray')).click();
            element(by.id('Band2:gray')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:gray')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("880 MΩ ±0.05%");
        });

        it('Step 10 - All white digits with purple multiplier and gray tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:gray')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("990 MΩ ±0.05%");
        });

        it('Step 11 - All white digits with gold multiplier and gold tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Mul:gold')).click();
            element(by.id('Tol:gold')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("9.9Ω ±5%");
        });

        it('Step 12 - All white digits with silver multiplier and silver tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Mul:silver')).click();
            element(by.id('Tol:silver')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("0.99Ω ±10%");
        });
    });

    describe('Test Case: Validate 5-Band Resistor Calculations', function () {

        it('Step 1 - Switch to 5-Band mode', function() {
        
            element(by.id('btnMode')).click();
            expect(element(by.id('btnMode')).getText()).toEqual("Switch to 4 Band");
        });

        it('Step 2 - All black digits with black multiplier and brown tolerance', function() {
        
            element(by.id('Band1:black')).click();
            element(by.id('Band2:black')).click();
            element(by.id('Band3:black')).click();
            element(by.id('Mul:black')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);

            expect(element(by.id('result')).getText()).toEqual("Mickey Mouse");
        });
    
        it('Step 3 - All brown digits with brown multiplier and brown tolerance', function() {
        
            element(by.id('Band1:brown')).click();
            element(by.id('Band2:brown')).click();
            element(by.id('Band3:brown')).click();
            element(by.id('Mul:brown')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("1.11 KΩ ±1%");
        });
    
        it('Step 4 - All red digits with red multiplier and brown tolerance', function() {
        
            element(by.id('Band1:red')).click();
            element(by.id('Band2:red')).click();
            element(by.id('Band3:red')).click();
            element(by.id('Mul:red')).click();
            element(by.id('Tol:red')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("22.2 KΩ ±2%");
        });
    
        it('Step 5 - All orange digits with orange multiplier and brown tolerance', function() {
        
            element(by.id('Band1:orange')).click();
            element(by.id('Band2:orange')).click();
            element(by.id('Band3:orange')).click();
            element(by.id('Mul:orange')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("333 KΩ ±1%");
        });
    
        it('Step 6 - All yellow digits with yellow multiplier and brown tolerance', function() {
        
            element(by.id('Band1:yellow')).click();
            element(by.id('Band2:yellow')).click();
            element(by.id('Band3:yellow')).click();
            element(by.id('Mul:yellow')).click();
            element(by.id('Tol:brown')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("4.44 MΩ ±1%");
        });
    
        it('Step 7 - All green digits with green multiplier and green tolerance', function() {
        
            element(by.id('Band1:green')).click();
            element(by.id('Band2:green')).click();
            element(by.id('Band3:green')).click();
            element(by.id('Mul:green')).click();
            element(by.id('Tol:green')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("5.55 MΩ ±0.5%");
        });
    
        it('Step 8 - All blue digits with blue multiplier and blue tolerance', function() {
        
            element(by.id('Band1:blue')).click();
            element(by.id('Band2:blue')).click();
            element(by.id('Band3:blue')).click();
            element(by.id('Mul:blue')).click();
            element(by.id('Tol:blue')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("666 MΩ ±0.25%");
        });
    
        it('Step 9 - All purple digits with purple multiplier and purple tolerance', function() {
        
            element(by.id('Band1:purple')).click();
            element(by.id('Band2:purple')).click();
            element(by.id('Band3:purple')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:purple')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("7770 MΩ ±0.10%");
        });
    
        it('Step 10 - All gray digits with purple multiplier and gray tolerance', function() {
        
            element(by.id('Band1:gray')).click();
            element(by.id('Band2:gray')).click();
            element(by.id('Band3:gray')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:gray')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("8880 MΩ ±0.05%");
        });

        it('Step 11 - All white digits with purple multiplier and gray tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Band3:white')).click();
            element(by.id('Mul:purple')).click();
            element(by.id('Tol:gray')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("9990 MΩ ±0.05%");
        });

        it('Step 12 - All white digits with gold multiplier and gold tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Band3:white')).click();
            element(by.id('Mul:gold')).click();
            element(by.id('Tol:gold')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("99.9Ω ±5%");
        });

        it('Step 13 - All white digits with silver multiplier and silver tolerance', function() {
        
            element(by.id('Band1:white')).click();
            element(by.id('Band2:white')).click();
            element(by.id('Band3:white')).click();
            element(by.id('Mul:silver')).click();
            element(by.id('Tol:silver')).click();
            
            browser.sleep(1000);
    
            expect(element(by.id('result')).getText()).toEqual("9.99Ω ±10%");
        });
    });
});

// describe('angularjs homepage todo list', function() {

//     it('should add a todo', function() {
//     browser.get('https://angularjs.org');

//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();

//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');

//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });