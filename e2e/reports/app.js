var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Step 1: Open Browser|Test Case: Launch Application|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ee00da-00cd-00cd-00d8-0090007a0078.png",
        "timestamp": 1525156110981,
        "duration": 2452
    },
    {
        "description": "'Step 2: Default mode is selected as '4-Band'|Test Case: Launch Application|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ca00f8-0009-0020-00cd-001000670064.png",
        "timestamp": 1525156113948,
        "duration": 63
    },
    {
        "description": "Step 3: Default calculation is displayed|Test Case: Launch Application|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00930092-00c7-0096-00a4-00be00ab0054.png",
        "timestamp": 1525156114399,
        "duration": 53
    },
    {
        "description": "Step 1 - All black digits with black multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008800a1-0083-004c-0082-004400ec00e0.png",
        "timestamp": 1525156114886,
        "duration": 1602
    },
    {
        "description": "Step 2 - All brown digits with brown multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008700cc-0071-0007-004c-0095005b0094.png",
        "timestamp": 1525156116870,
        "duration": 1406
    },
    {
        "description": "Step 3 - All red digits with red multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00b30044-0049-0082-006d-008600f400d3.png",
        "timestamp": 1525156118664,
        "duration": 1441
    },
    {
        "description": "Step 4 - All orange digits with orange multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00b200e6-00e7-00d9-0000-007f009a00da.png",
        "timestamp": 1525156120502,
        "duration": 1578
    },
    {
        "description": "Step 5 - All yellow digits with yellow multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\002300aa-0089-0035-0063-007000f40028.png",
        "timestamp": 1525156122473,
        "duration": 1422
    },
    {
        "description": "Step 6 - All green digits with green multiplier and green tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0038009e-00cc-00e9-0002-00030049007d.png",
        "timestamp": 1525156124325,
        "duration": 1512
    },
    {
        "description": "Step 7 - All blue digits with blue multiplier and blue tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00da0053-0064-0028-007b-002b007d0073.png",
        "timestamp": 1525156126223,
        "duration": 1446
    },
    {
        "description": "Step 8 - All purple digits with purple multiplier and purple tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00970072-001d-004f-0083-002600310077.png",
        "timestamp": 1525156128079,
        "duration": 1411
    },
    {
        "description": "Step 9 - All gray digits with purple multiplier and gray tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00a30005-00da-00a3-0036-0078003a00e4.png",
        "timestamp": 1525156129876,
        "duration": 1374
    },
    {
        "description": "Step 10 - All white digits with purple multiplier and gray tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00e0006a-00c2-00d8-0048-00cb009a007b.png",
        "timestamp": 1525156131631,
        "duration": 1338
    },
    {
        "description": "Step 11 - All white digits with gold multiplier and gold tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00f90079-001d-0075-005f-00e300b8003b.png",
        "timestamp": 1525156133365,
        "duration": 1310
    },
    {
        "description": "Step 12 - All white digits with silver multiplier and silver tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00d700c2-0062-00c4-0026-009200ce00f6.png",
        "timestamp": 1525156135051,
        "duration": 1318
    },
    {
        "description": "Step 1 - Switch to 5-Band mode|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00a8005f-0015-00d5-0031-0038001c004a.png",
        "timestamp": 1525156136754,
        "duration": 190
    },
    {
        "description": "Step 2 - All black digits with black multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Expected '0Ω ±1%' to equal 'Mickey Mouse'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\e2e\\test.e2e-spec.js:189:56)\n    at C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "images\\000a007b-00e4-0075-0011-006300810087.png",
        "timestamp": 1525156137376,
        "duration": 1596
    },
    {
        "description": "Step 3 - All brown digits with brown multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0032005c-00ab-0085-0093-00bb00ce0087.png",
        "timestamp": 1525156139380,
        "duration": 1704
    },
    {
        "description": "Step 4 - All red digits with red multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00f7004e-00b6-004d-0066-00ca00140012.png",
        "timestamp": 1525156141610,
        "duration": 1614
    },
    {
        "description": "Step 5 - All orange digits with orange multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00150045-00e2-00ec-00fa-0031006b00b4.png",
        "timestamp": 1525156144059,
        "duration": 1657
    },
    {
        "description": "Step 6 - All yellow digits with yellow multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008f001d-0049-00c6-0018-00d900710080.png",
        "timestamp": 1525156146111,
        "duration": 1481
    },
    {
        "description": "Step 7 - All green digits with green multiplier and green tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\007e00c4-0035-00d8-0046-002d00bb0026.png",
        "timestamp": 1525156148092,
        "duration": 1640
    },
    {
        "description": "Step 8 - All blue digits with blue multiplier and blue tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00fa00ee-00e0-00bf-00ab-0088004a0081.png",
        "timestamp": 1525156150291,
        "duration": 1723
    },
    {
        "description": "Step 9 - All purple digits with purple multiplier and purple tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\003f006a-0067-0080-0019-006100e50018.png",
        "timestamp": 1525156152304,
        "duration": 2226
    },
    {
        "description": "Step 10 - All gray digits with purple multiplier and gray tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00a100f7-0092-009d-0092-0000006900a5.png",
        "timestamp": 1525156154857,
        "duration": 2023
    },
    {
        "description": "Step 11 - All white digits with purple multiplier and gray tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\002d00e3-0034-00f3-006b-00c3003300d3.png",
        "timestamp": 1525156157364,
        "duration": 1432
    },
    {
        "description": "Step 12 - All white digits with gold multiplier and gold tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\009d002d-00b3-00e8-00d5-0083008600d2.png",
        "timestamp": 1525156159131,
        "duration": 1915
    },
    {
        "description": "Step 13 - All white digits with silver multiplier and silver tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "68df2e6ff338af37e68629fe85b131a7",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\006200be-0020-0051-00b1-0058008f0099.png",
        "timestamp": 1525156161320,
        "duration": 1778
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    var firstTimestamp = a.timestamp;
    var secondTimestamp = b.timestamp;

    if(firstTimestamp < secondTimestamp) return -1;
    else return 1;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};