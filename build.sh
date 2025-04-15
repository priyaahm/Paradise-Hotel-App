#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Exit with the build status
exit $? 