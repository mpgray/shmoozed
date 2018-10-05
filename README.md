# Shmoozed
> A web application where Amazon Sellers and Buyers _BOTH_ win!

[![Front-End][front-end-image]](https://angular.io/)
[![Back-End][backend-end-image]](https://spring.io/)
[![Database][database-image]](https://www.mysql.com/)
[![Hosting Platform][hosting-platform-image]](https://aws.amazon.com/)

[Shmoozed](http://www.shmoozed.com) is a web application designed to allow Amazon Sellers to better understand the market price for their items. This is done by trending price data for items over time. In addition, potential Buyers can provide their ideal price (how good of a deal or steal they want) and negotiate with sellers of those items, eventually coming to an agreement on a price.

Shmoozed was developed as a project at Weber State University as part of CS 3750 Software Eng II.

**Application Screenshot Eventually Goes Here...**
![](screenshot.png)

## Architecture

Shmoozed is made up of a Front-end application written using Angular, a Back-end Java API powered by Spring & Spring Boot, backed by a MySQL Database, and all hosted on Amazon Web Services.

**High Level Diagram Eventually Goes Here...**
![](high-level-arch.png)

### Detailed diagrams & documentation:
* [Front-end](/BackEnd/README.md#architecture)
* [Back-end](/FrontEnd/README.md#architecture)
* [Database](/BackEnd/README.md#architecture)
* [Hosting](/Docs/Hosting.md#architecture)

## Project Setup

Project setup is dependant on which architectural piece, front-end or back-end, you are working on:

* [Front-end project setup](/FrontEnd/README.md#development-setup)
* [Back-end project setup](/BackEnd/README.md#development-setup)

## Other Documentation

* [Pull Request / Code Review Procedure](/Docs/Contributing.md)

## Contributors

* Charles Durfee
* Christopher Nash
* Daniel Kiser
* Eric Christensen
* James Larson
* Jonathan Pedregon
* Michael Gray


<!-- Markdown Image Definitions -->
[front-end-image]: https://img.shields.io/badge/Front--end-Angular-blue.svg 
[backend-end-image]: https://img.shields.io/badge/Back--end-Java%20%26%20Spring%20Boot-brightgreen.svg
[database-image]: https://img.shields.io/badge/Database-MySQL-orange.svg
[hosting-platform-image]: https://img.shields.io/badge/Hosting--Platform-AWS-yellow.svg
