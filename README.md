# Notes

I share here some assumptions I've made, as well as notes on decisions and things I would improve or add in the future. This challenge includes two different technical tasks, Q3, focused on web styling, and Q4, focused on web programming as a SPA. So I divide this document into these two challenges.


## Styling Challenge (Q3)

For the styling challenge, it was specified to avoid changing the template. I did not change the template content, but the template file name to `index.html`. I hope this minor modification is allowed. Not only that, but I also avoided uploading the 'result.jpg' image that came within the original data, as it is not required.

I used the [SASS](https://sass-lang.com/) CSS preprocessor and wrote the styles using SCSS language. I've added [Vite](https://vite.dev/) to help me compile to CSS files. I left the `styles.scss` main styling file linked to the index HTML file for development purposes, but it should be the CSS file generated from the building system into the /dist folder.

About styles, I created all SCSS files as partials except the main `styles.scss` which includes all of them. I did this way because there's only one page, or view, so there's no need to have more than one CSS file in the final build. In a larger application with multiple views, each view should have its own CSS file so they can be lazy loaded per view instead of all at once on the initial page load. An specific styles file for the theme and for the SASS mixins has been created.
Using responsive styles rules, like the CSS's `flex`, allows for automatic screen size adaptation in most cases, but I also implemented minor styling rules that consider different screen sizes to better fit elements in smaller screens.

To start the project, execute these commands in a terminal:
``` 
npm install
npm run dev
```

## SPA Challenge (Q4)

For the Single Page Application challenge using Vue.js, I used [Vite](https://vite.dev/) project's building tool to take advantage of Hot Module Reload and [SASS](https://sass-lang.com/) CSS preprocessor, writing the styles using SCSS. The theming has been adjusted to ensure the final design is not exactly replicated from the screens shared and match challenge requirements. The project is coded using [TypeScript](https://www.typescriptlang.org/). [Vue Router](https://router.vuejs.org/) has added for routing, and [Vue Query](https://tanstack.com/query/v4/docs/framework/vue/overview) to automatically handle cache while connecting to the API. Components and helper utilities are tested using [Vitest](https://vitest.dev/) combined with the [Vue Testing library](https://testing-library.com/docs/vue-testing-library/intro/).

The application contains different folders under the main `src` folder:

- **components**: Includes the application components, both minor and more shareable ones, like the Button component, and bigger and less shareable ones, like the Book Item component.
- **core**: Includes the main API configuration, the shared styles (theme and mixins), application general constants and general helper utility methods.
- **domain**: Includes the project data per domain. Each domain may have the specific API endpoints configuration, types, constants and/or helpers. This specific project does have one domain, 'books'. 
- **router**: Includes project routing. This project has two routes, `/` pointing to Books List view, and `/:slug`, pointing to Book Detail view. 
- **views**: Includes Book List view, listing the books from the API and Book Detail view, displaying a book details.


I've added the Search, Pagination and Comments bonus features directly into the respective views, Search and Pagination into the Books List view and Comments into the Book Detail view. But those are potential separate components to be shared across the application and may include its own testing use cases.

The Pagination it's been done locally as per challenge requirements. In a real world production application, I would suggest handling the pagination server side to avoid the client to store more data than is required in the current view. Having a paginated API endpoint allows the client to ask for the specific data only when the user requires it. 

A 'Not Found' view may be included to handle all routes different from the Book List view and the Book Details view.

To start the project, execute these commands in a terminal:
``` 
npm install
npm run dev
```

Tests and coverage can be executed with these commands:
``` 
npm run test
npm run test:coverage
```