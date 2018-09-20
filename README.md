# Unknown Territory

A quick prototype application meant to help a user explore the US and present information related to specific territories/regions.  Currently, the application only supports information about elected officials related to a specific address entered or a US state selected from an interactive map.  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

This application depends on a specific version of TypeScript (2.9.2) which can be installed by running `npm i -g typescript@2.9.2`.

Run `npm install` to download all packages and dependencies needed for the project then run `ng serve` to launch a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features
- Integrates with [Google Maps](https://cloud.google.com/maps-platform/) to provide the interactive map
- Territory/region layers for the map are generated from information provided by the [US Census](https://www.census.gov/data/developers/data-sets.html)
- Elected officials are provided via [Google's Civic Information API](https://developers.google.com/civic-information/)
- Styling/markup utilizes [Angular Material](https://material.angular.io/) design elements and [flex-layout](https://github.com/angular/flex-layout)

## Possible Use Cases
- A means to learn new things about where you live as well as other areas of the country
- Quickly lookup elected officials with contact info if you want to voice your opinion about legislation that's under debate
- Browse miscellanous statistics about regions for market research or personal interests
- Could be built into a larger application for defining custom territories and build groups/teams around those territories (eg. sales teams, campaign teams, volunteer teams)

## Future Enhancements/Bug Fixes
- Additional categories of information to search by territory (eg. popular landmarks, statistics, trends, etc)
- Additional map layers (eg. counties, zip codes, congressional districts)
- Create an interface for the services to conform to when searching by territories
- Make it a bit more mobile friendly
- Tests for each component and service
- Possibly a process to submit changes or new information