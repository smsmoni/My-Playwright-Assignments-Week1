/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.

Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript*/

function launchBrowser(browserName){
    if(browserName === 'Chrome')
        console.log('You have launched browser: ' + browserName);
    else
        console.log('You have launched Other browser: ' + browserName);
}

function runTests(testType){
    switch(testType){
    case "Sanity":    
    console.log('You are running: ' + testType + ' suite');
    break;
    case "Regression":
    console.log('You are running: ' + testType + ' suite');
    break;
    default:
    console.log('You are running: Smoke suite');
    break;  
    }    
}


launchBrowser('Chrome');
launchBrowser('Firefox');
runTests('Regression');
runTests('Full Suite');
//end of Program