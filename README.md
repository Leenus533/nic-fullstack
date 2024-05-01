# Prerequisites

- Docker & Docker Compose installed
- Motorpointarenanottingham API Key

# Project Setup

1. Clone this repository and navigate to it:

   ```
   git clone https://github.com/Leenus533/nic-project
   cd nic-project
   ```

2. Modify Docker Compose environment variables:
   - Set `API_KEY` to your Motorpointarenanottingham API Key

# Running the Project

Use the following command:

```
docker compose up -d
```

# API Endpoint

By default, you should be able to use the same API_KEY you set up for the container.
To access the formatted cached data, send a GET request to /api/tickets with the header key x-api-key set to your API_KEY.
You can test it out with the following curl command:

```

curl -X GET -H "x-api-key:YOUR_API_KEY" https://localhost:3000/api/tickets

```

Make sure to replace YOUR_API_KEY with your actual API key.
