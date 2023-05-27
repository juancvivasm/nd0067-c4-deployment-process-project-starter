# Udagram infrastructure

This project uses Amazon Web Services (AWS) to host a site developed with Angular (Ionic App), ExpressJS and PostgreSQL database.

<image src="images/infrastructure_description.jpg" alt="Udagram infrastructure">

## Services used

- **Amazon Simple Storage Service (S3)** To host a static website in our case the frontend of the application that makes the requests and handles the API responses.
- **AWS Elastic Beanstalk (eb)** Elastic Beanstalk is a service used to deploy and scale web applications and services. It is used to host the application API (backend) that is responsible for handling the requests made and interacting with the database.
- **Amazon Relational Database Service (RDS)** is a collection of managed services that makes it easy to set up, run, and scale databases in the cloud. PostgreSQL was selected for the project, it is a powerful open source object-relational database to persist application data..

