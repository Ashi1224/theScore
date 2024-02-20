# QA Take Away Test

## Requirements

- On top of standard Appium requirements UiAutomator2 driver also expects the following prerequisites: Windows, Linux and macOS are supported as hosts Android SDK Platform tools must be installed. 
- Android Studio IDE also provides a convenient UI to install and manage the tools. - ANDROID_HOME or ANDROID_SDK_ROOT environment variable must be set Java JDK and JAVA_HOME environment variable. 
- Android SDK below API 30 requires Java 8. Android SDK 30 and above requires Java 9 or newer. 
- Emulator platform image must be installed if you plan to run your tests on it. 
- Android Studio IDE also provides a convenient UI to install and manage emulators. - Real Android devices must have USB debugging enabled and should be visible as online in adb devices -l output. The minimum version of Android API must be 5.0 (API level 21) (6.0 is recommended as version 5 has some known compatibility issues)

## Installations

### Prerequisites

#### Installation Java JDK

``` First of all, installing Java JDK is essential for developing tests with Appium. You can download the latest version from```.
(https://www.oracle.com/java/technologies/downloads/#java8)

#### Install Android Studio

```Android Studio is the recommended development environment for creating Android applications and working with Appium. You can download Android Studio from``` (https://github.com/rwralitera/appium-install-from-scratch/blob/main/Docs/ANDROID_IOS_SETUP.md)

####  Install Visual Studio Code

```Visual Studio Code is a lightweight and powerful code editor commonly used for writing Appium test scripts. You can download it here```.
https://visualstudio.microsoft.com/downloads/


#### Installation Node.js & NPM
```Node.js is an essential JavaScript platform for running Appium. You can download the latest version of Node.js.```

```npm install -g npm```

### Installed appium with node
```Npm install -g appium ```

### Run the test
``` npm run test ```

## Project Structure
```Each test is divided into two parts```
- We will be following a hybrid POM Structure where each test will have its page
- Each page will have its class containing actions inside a class and locators inside an object

```Example```
- login.page.js
- test.e2e.js

Calls the Actions class from pages	Contains the class with locators for respective page

```Folder Structure```
- Pages: Contains the pages for each test file
- Specs:Contains test files

### Wdio Configurations
```Runner Configuration```
- The runner configuration section defines how WebDriverIO will execute your tests. It includes settings such as the runner type (local or remote), host, port, and the list of spec files to be tested.

```Specify Test Files```
- This section specifies which test files should be run. You can use wildcards to include multiple files, and you can also exclude certain files from being tested.

```Test Configurations```

- This section includes various settings that affect the behavior of WebDriverIO during test execution, such as log levels, timeouts, and the number of instances to run in parallel.

```Install the dependencies and devDependencies and start the server```
- git clone 
- cd QA_Test
- npm run test