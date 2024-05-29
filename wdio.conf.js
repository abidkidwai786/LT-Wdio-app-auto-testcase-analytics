exports.config = {

    services: [
        [
            "lambdatest",
            {
                tunnel: false,
                lambdatestOpts: {
                    logFile: "tunnel.log"
                }
            }
        ],
        ['lambdatest-test-case-analytics', {}]
    ],

    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL || "mobile-hub.lambdatest.com",
    port: 80,

    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,

    specs: [
        './test/specs/**/test.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
 
    capabilities: [
        {
            "lt:options": {
                deviceName: ".*",
                build: "LT_Appium_NodeJS_WebDriverIO",
                name: "android_ltOptions",
                isRealMobile: true,
                app: process.env.LT_APP_ID || "lt://proverbial-android",
                platformName: "Android",
                enableCustomTranslation: true,
                //appProfiling: true
            }
        },
    ],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
