module.exports = {
    client: {
      includes: ['./src/graphql/**'],
      service: {
        name: "epic-seven-planner",
        url: "http://localhost:3001/api",
        skipSSLValidation: true 
      }
    }  
  };