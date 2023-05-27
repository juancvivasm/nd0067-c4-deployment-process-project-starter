# Pipeline description

CircleCI is a continuous integration and continuous deployment platform. A CI/CD pipeline is created with GitHub. This allows incremental updates to end users faster and minimizing possible errors.

<image src="images/pipeline
_description.jpg" alt="Udagram infrastructure">

## Development Pipeline

1. The development team push code.
2. CircleCI detects the change and starts staging:
    1. Preparation of the development environment with the necessary dependencies for the project and the environment variables.
    2. Sanity check in development environment.
    3. Build the backend and the frontend.
    4. Run Tests
4. Hold
    1. If the builds have passed QA tests in staging environment then approval is required to deploy to the production environment.
5. Deploy on AWS
    1. Configuration for aws and elastic beanstalk is used para desplegar el frontend y el backend.