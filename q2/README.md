# General

1. What kind of front end projects do you enjoy working on? Why?

I enjoy programming, so my threshold for enjoying software work is very low. I like anything that involves programming. I am versatile enough to work in the (currently) three main web's frontend frameworks, Angular, React and Vue.js. I started my frontend career by styling and doing the layout for a fashion magazine, including lots of transitions and cool CSS features, and I liked it a lot, so that is something maybe not so deep on programming, that I really enjoy too. However, I think the purpose of the product you are developing is important. So far I have been able to maintain red lines in software related to gaming, gambling, prohibited stuff in some countries, or similar, because if you are not satisfied with the solution the product offers, you will not enjoy the work as much.

2. Which are your favorite features of HTML5? How have you used them before?

The added features in the last HTML version are just tools for specific problems, but if I need to pick a favourite, I would probably choose WebSockets because they allow to greatly improve user experience thanks to the real time communication with the server.
I used video tag to display videos and audio tag for notifications alert sound, and WebSockets for real time notifications. I used local and session storage to handle local data management. Semantic element tags like article, nav, footer, etc. are a very nice addition specifically for accessibility. I also used IndexedDB in the past for a security related project.

3. Explain the difference between creating a DOM element setting innerHTML and using createElement.

`createElement` is a native JavaScript method to be used to create DOM elements. The `innerHTML` method over an already created element allows to 'add' elements (or just plain text) as children, but it is not as safe as the dedicated method because it allows for cross-site scripting (XXS) if content is not sanitized, it does not return a reference(s) of the element(s) in that content, and forces to replace all existing content of the parent element, which may be not good for performance.

4. Compare two-way data binding vs one-way data flow.

In two-way data binding, the changes in the view, in the user interface, affects the model and vice versa. The `v-model` directive in an input's form from Vue.js is an example of a two-way data binding.

In one-way data binding, only the model affects the view. To modify the view, it is always required to adapt the model first, with callbacks, for example, because the data flow is always in one direction, from the model to the view. Vue's `ref()` is an example of one-way data binding.

The two-way data binding is faster, simpler and reduces code boilerplate, but it is not easy to debug and may have too much reactivity, so performance will go down.
On the other hand, one-way data binding is predictable, scalable and good for performance as the reactivity gets focused on a small piece of code, but it may require some more coding, and the code can get more verbose.

5. Why is asynchronous programming important in JavaScript?

JavaScript is single-threaded by definition, so a long-running task will block the entire thread unless handled asynchronously. When this task is detected, it should be handled asynchronously to improve the user experience. Some features that help with this are promises or async/await as well as JavaScript workers.


