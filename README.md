# Book-my-travel

## Next Js, Date-Range, Google Maps API

A project to learn the concepts of google maps api, date-range and context api

[Live Demo](https://book-my-hotel.vercel.app/)

### Lesson Learned

-   Prop Drilling: I knew what prop drilling was but this project really allowed me to get an idea on how it impedes performance and how to overcome this problem. I had an option to use redux or context api. I chose context api as it was a more reasonable option in this case because it was just a simple data from an api without needing to be modified. I would choose redux for a more complext data.

-   Realization that even though a date is taught to be such simple concept but realizing it can be very complex based on your use case. For this project i utilized [react-date-range](https://www.npmjs.com/package/react-date-range)

### Problems Faced

-   At the time of implementaion of the map componenet i quickly realized that i began prop drilling in order to tackle this i implemented the Context hook from react.

### Resources

-   [Google Maps Codebox](https://codesandbox.io/s/react-google-mapsapi-multiple-markers-infowindow-h6vlq?file=/src/Map.js:114-544)

-   [Bar Of Progress](https://www.npmjs.com/package/@badrap/bar-of-progress)
