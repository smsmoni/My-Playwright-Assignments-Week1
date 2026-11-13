/*Assignment Details: 
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
differently when printed.

Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript*/

const browserVersion = 'Chrome';

function getBrowserVersion(){
    if(browserVersion == 'Chrome' || browserVersion == 'chrome'){
        let version = '156.0.8078.73'
        console.log('Browser Version inside function: ' + version + '\n');
    }
console.log('Browser Version inside function but outside If: ' + version + '\n');
}
console.log('\nBrowser Version outside If and outside function: ' + browserVersion + '\n');
getBrowserVersion();

//end of Program