# Shmoozed Back-end API

The Shmoozed Back-end API is developed in Java.

## Technologies Used

* Java
* Maven (dependency management & building/packaging)
* Spring
* Spring Boot

# Development Setup

## Prerequisites

* Java 8 JDK Installed

## Maven Installation

Note that IntelliJ generally installs with its own bundled version of Maven. In most cases this is good enough to use and no additional
installation is required. However, occasionally this does cause issues. Our suggestion is to install IntelliJ, follow the configuration
steps below to import the project and see if it builds properly. If it does, skip these instructions.

A primer on Maven is provided at https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html. It goes _deep_ very quickly though.
Thankfully, for the most part it will likely be "set it and forget it".

Detailed installation instructions for maven can be found at the following links:
* (Windows - very detailed) https://www.mkyong.com/maven/how-to-install-maven-in-windows/ 
* (Windows, Mac, Linux) https://www.baeldung.com/install-maven-on-windows-linux-mac

The high level description of installing Maven is:
1. Download the latest version of Maven from http://maven.apache.org/download.cgi (at the time of wrigint that is 3.5.4)
   * Windows: Download the "Binary zip archive" verion (`apache-maven-3.5.4-bin.zip`)
   * Mac / Linux: Download the "Binary tar.gz archive" verion (`apache-maven-3.5.4-bin.tar.gz`)
2. Extract to a directory
3. Set up Maven directories into your system's Path

A primer on Maven is provided at https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html. It goes _deep_ very quickly though.
Thankfully, for the most part it will likely be "set it and forget it".

## IntelliJ IDE Configuration

The following intructions are specific to IntelliJ Ultimate. Any IDE which can import a Maven pom.xml file and generate a project from it 
_should_ be able to import this project and begin working with it. 

IntelliJ Ultimate is necessary as we are using Spring & Spring Boot. See the [comparison chart](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html) between Community Edition & Ultimate Edition for details. IntelliJ offers free Ultimate subscirptions to students.

One common IDE for Spring Development is [Spring Tool Suite](https://spring.io/tools) which is built on Eclipse. If no Ultimate license is 
available, consider using Spring Tool Suite which is free. No detailed instructions are provided, but it is basically just Open --> Maven Project --> Locate `pom.xml` and import project.

### Import Styleguide

To help keep the code clean and unified, a code styleguide for IntelliJ is provided. These instructions explain how to import and use that in IntelliJ.

1. File --> Settings...
2. Editor --> Code Style
3. Click the "gear" icon next to `Scheme` --> Import Scheme --> IntelliJ IDEA code style XML
4. Browse to `/BackEnd/Java_Code_Style.xml`. Click Ok.
5. Check the `Current scheme` checkbox. Click Ok.
6. Ensure that `Java Code Style` is shown in the `Scheme` dropdown


### Open/Import Project

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

OS X & Linux:

```sh
npm install my-crazy-module --save
```

Windows:

```sh
edit autoexec.bat
```

## Project Structure

```
+--- src/
|   +--- main/
|   |   +--- java/
|   |   |   +--- com/
|   |   |   |   +--- shmoozed/
|   |   |   |   |   +--- example/
|   |   |   |   |   |   +--- helloworld/
|   |   |   |   |   |   |   +--- HelloWorldApplication.java
|   |   +--- resources/
|   |   |   +--- application.properties 
|   +--- test/
|   |   +--- java/
|   |   |   +--- com/
|   |   |   |   +--- shmoozed/
|   |   |   |   |   +--- example/
|   |   |   |   |   |   +--- helloworld/
|   |   |   |   |   |   |   +--- HelloWorldApplicationTest.java
+--- pom.xml
```

Diagram about "layers": Controllers --> Services --> Remotes / Models


# Deploy Procedure

Ideally, this would be automated through a DevOps / Delivery Tool such as Jenkins, etc. but due to
time constraints these manual build and deploy instructions should be followed when a new version
of the API is ready to be released into Production.

1. Build things...
2. Deploy things...
3. Sanity change things...
