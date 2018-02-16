# Project Overview

In this project i was given a web-based application that reads RSS feeds, i developed 7 testing suites to practice and explore Jasmine's tools for testing many application's functionality, including asynchronous API functions


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What I learned

How to use Jasmine to write a number of tests against a pre-existing application. These tested the underlying business logic of the application as well as the event handling and DOM manipulation.
* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* This text improved my ability to analyze whether new code breaks an existing feature within my codebase, without having to manually test all of the functionality.

## How to run the application

* Open the index.html file in your preferred browser to view the Jasmine tests as well as to browsing the general RSS Feed which uses google feed reader API

## Test Development

** There are 4 test suites with 7 tests in total
*Uses Jasmine 2.0 with modern Done() and beforeEach() methods for determining completion of asynchronous events

- loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- test that ensures the menu element is hidden by default.
- test that ensures the menu changes visibility when the menu icon is clicked. Menu must display when clicked and hide when clicked again.
- test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

* No test is dependent on the results of another.

## Authors

* **Aidan Prehatny** - *Front End Developer* - [Website](https://aidanprehatny.com)

## Acknowledgments

* Udacity
* Adam Schachne
* SDSU