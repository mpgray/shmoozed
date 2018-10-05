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

1. Install stuff...

## IntelliJ IDE Configuration

* Styleguide!

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
