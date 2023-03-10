# portfolio_api app


> Imagine.ai is an app starter on steroids!

### Run the app in terminal

1. Start a Postgres database server on your machine or in the cloud.
2. Set the following environment variables in your .env file

```
POSTGRES_HOST=<address-where-database-running>
POSTGRES_PORT=<port-where-database-running>
POSTGRES_DB=<database-name>
POSTGRES_USER=<username-for-database>
POSTGRES_PASSWORD=<password-to-database>
DB_DIALECT=postgres
```

3. Install packages and start the application server.

```
$ npm install
$ npm start
```

### Make API calls against the server

1. Go to [http://localhost:8000/swagger](http://localhost:8000/swagger) to see Swagger documentation for API endpoints.
2. Run the APIs by clicking the "Try it now" button on the Swagger page.

### Run admin bro dashboard

Go to [http://localhost:8000/admin](http://localhost:8000/admin)

### Run tests and check code coverage

```
$ npm test
$ npm coverage
```

### Lint your code

```
$ npm lint
$ npm format
```


