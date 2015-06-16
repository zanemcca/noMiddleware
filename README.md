# Issue with loopback middleware

 This repo contains some custom error handling middleware attached to
 the loopback framework. The purpose of this is to show a potential bug
 with middleware not being run in staging and development environments.

 The issue appears when there is a 404 error on an api with the correct
 restApiRoot set.
 
## Examples
    GET /api/nonexistent - Will not call middleware
    GET /another/nonexistent - Will call the middleware properly

## Prep
    npm install
    npm install -g mocha

## Failing Test
    export NODE_ENV=staging
    mocha test

## Passing Test
    export NODE_ENV=production
    mocha test

