# Places

Places website, 12/11/2017

**By Natalia Telpukhova**


## Description

Web application that keep track of all the places you've been.

### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| location is entered | "Australia" | {location: "Australia", month: undefined, year: undefined, notes: undefined} |
| location and month are entered | "Australia", 4 | {location: "Australia", month: "April", year: undefined, notes: undefined} |
| location, month and year are entered | "Australia", 4, 2017 | {location: "Australia", month: "April", year: 2017, notes: undefined} |
| location, month, year and notes are entered | "Australia", 4, 2017, "loved it." | {location: "Australia", month: "April", year: 2017, notes: "loved it."} |
| location, and notes are entered | "Australia", undefined, undefined, "loved it." | {location: "Australia", month: "", year: undefined, notes: "loved it."} |


## Setup

* clone repository
* open index.html in browser

## Technologies Used

HTML, CSS, JS, Bootstrap, jquery

Copyright (c) 2017 Natalia Telpukhova
