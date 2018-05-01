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
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00c30003-0044-009d-0014-009600200025.png",
        "timestamp": 1525137645234,
        "duration": 2387
    },
    {
        "description": "'Step 2: Default mode is selected as '4-Band'|Test Case: Launch Application|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\002f003c-0082-00e3-00c9-00c5001700ae.png",
        "timestamp": 1525137648146,
        "duration": 91
    },
    {
        "description": "Step 3: Default calculation is displayed|Test Case: Launch Application|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00c7002d-0090-0081-00a9-00ee00870031.png",
        "timestamp": 1525137648671,
        "duration": 60
    },
    {
        "description": "Step 1 - All black digits with black multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\004d0085-007c-005d-00b4-002800d300d5.png",
        "timestamp": 1525137649186,
        "duration": 1579
    },
    {
        "description": "Step 2 - All brown digits with brown multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00970081-00fd-00b4-002e-001c000d00c8.png",
        "timestamp": 1525137651171,
        "duration": 1653
    },
    {
        "description": "Step 3 - All red digits with red multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\006300ac-0024-002a-009a-001b00960027.png",
        "timestamp": 1525137653242,
        "duration": 1497
    },
    {
        "description": "Step 4 - All orange digits with orange multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0048008b-0053-0088-008e-0030008100d8.png",
        "timestamp": 1525137655225,
        "duration": 1438
    },
    {
        "description": "Step 5 - All yellow digits with yellow multiplier and brown tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ae0041-0094-00dc-004a-00e000bd0088.png",
        "timestamp": 1525137657069,
        "duration": 1439
    },
    {
        "description": "Step 6 - All green digits with green multiplier and green tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00080064-0087-00a0-00d8-00d500fe0010.png",
        "timestamp": 1525137658915,
        "duration": 1484
    },
    {
        "description": "Step 7 - All blue digits with blue multiplier and blue tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\008400cb-00f4-00f4-0076-00db0087002d.png",
        "timestamp": 1525137660877,
        "duration": 1497
    },
    {
        "description": "Step 8 - All purple digits with purple multiplier and purple tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00670010-0084-0042-00c7-007b00a9008d.png",
        "timestamp": 1525137662783,
        "duration": 1434
    },
    {
        "description": "Step 9 - All gray digits with purple multiplier and gray tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00cc0091-00a3-0015-0089-004800c700b7.png",
        "timestamp": 1525137664640,
        "duration": 1409
    },
    {
        "description": "Step 10 - All white digits with purple multiplier and gray tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00bd0022-00cd-00ed-001a-00c500b600f9.png",
        "timestamp": 1525137666579,
        "duration": 1358
    },
    {
        "description": "Step 11 - All white digits with gold multiplier and gold tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\009d00bd-0089-003e-00cb-006e00160095.png",
        "timestamp": 1525137668371,
        "duration": 1499
    },
    {
        "description": "Step 12 - All white digits with silver multiplier and silver tolerance|Test Case: Validate 4-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0067006d-0002-00bb-007c-002b00940069.png",
        "timestamp": 1525137670265,
        "duration": 1332
    },
    {
        "description": "Step 1 - Switch to 5-Band mode|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00af0049-00ad-00be-003e-001800740049.png",
        "timestamp": 1525137672025,
        "duration": 278
    },
    {
        "description": "Step 2 - All black digits with black multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Expected '0Ω ±1%' to equal 'Mickey Mouse'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\e2e\\test.e2e-spec.js:189:56)\n    at C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\Eric\\Documents\\GitHub\\React\\ohm-calculator\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "images\\00c900db-0012-0055-007d-0093007900ee.png",
        "timestamp": 1525137672762,
        "duration": 1656
    },
    {
        "description": "Step 3 - All brown digits with brown multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\003a005a-003c-00ad-0056-0057003d00a3.png",
        "timestamp": 1525137674862,
        "duration": 1513
    },
    {
        "description": "Step 4 - All red digits with red multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\007e0073-006b-0001-00c5-00dd006e007b.png",
        "timestamp": 1525137676843,
        "duration": 1562
    },
    {
        "description": "Step 5 - All orange digits with orange multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00640031-00c5-00c5-0007-006b00d800b9.png",
        "timestamp": 1525137678794,
        "duration": 1611
    },
    {
        "description": "Step 6 - All yellow digits with yellow multiplier and brown tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\005f00cf-00e2-001e-0082-0070007a008d.png",
        "timestamp": 1525137680808,
        "duration": 1634
    },
    {
        "description": "Step 7 - All green digits with green multiplier and green tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\002d003d-0079-0019-00b4-00980054005a.png",
        "timestamp": 1525137682835,
        "duration": 1506
    },
    {
        "description": "Step 8 - All blue digits with blue multiplier and blue tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ff002e-00ae-006e-0002-0036003c009c.png",
        "timestamp": 1525137684874,
        "duration": 1535
    },
    {
        "description": "Step 9 - All purple digits with purple multiplier and purple tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00940045-0071-0060-00e2-0095001100a8.png",
        "timestamp": 1525137686900,
        "duration": 1669
    },
    {
        "description": "Step 10 - All gray digits with purple multiplier and gray tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\009c000f-00fc-0022-0014-006a006a0027.png",
        "timestamp": 1525137689066,
        "duration": 1512
    },
    {
        "description": "Step 11 - All white digits with purple multiplier and gray tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00180048-002c-0053-0073-0010004000ca.png",
        "timestamp": 1525137690978,
        "duration": 1622
    },
    {
        "description": "Step 12 - All white digits with gold multiplier and gold tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\00ae00cc-00ba-0029-00b5-00f4008c002c.png",
        "timestamp": 1525137693011,
        "duration": 1423
    },
    {
        "description": "Step 13 - All white digits with silver multiplier and silver tolerance|Test Case: Validate 5-Band Resistor Calculations|Resistor Color Code Calulator Test Suite",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "20d2a381c1e244bfde6aaaf3adefd628",
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.139"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images\\0065003b-00df-00f9-004c-00f300a000a0.png",
        "timestamp": 1525137694947,
        "duration": 1419
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