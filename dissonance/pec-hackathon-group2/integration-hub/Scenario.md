# Scenario :  (Integration Hub)
## Create an Application that can do below
- Accept a REST API request from a source
- Forward the API to a target endpoint after applying any/all of the below options
- Routing Layer:  Have a route definition to map source to target API endpoint mapping
- Transformation Layer : Transform the JSON from source format to a target format before routing. Have a config based transformation rule that can be defined.
- Orchestration Layer : Orchestrate multiple target API calls before responding back to source. (One request to many targets)

## Must Have (Core Scenario): 
- API Router
- JSON Transformer

## Bonues Scenarios: 
### Add additional capability to do below
- Multiplexing Layer : Split and forward the same request to multiple target endpoints and aggregate the response before responding back to source
- Preferably use Python or NodeJS to build the application
- Have authentication mechanism to ensure no unauthorized calls come through to the application.
- Have failure handling at various touchpoints.


### Additional Inputs
- Use postman for initiating the requests to the app
- You can use a mockup endpoint as a target endpoint from the app.  Some examples below:
    -   https://jsonplaceholder.typicode.com/
    -   https://mocki.io/