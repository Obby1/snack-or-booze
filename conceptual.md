### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  >React router makes it easy to do client side routing. We are able to change the information on the DOM easily as well as update the address bar on browsers. 

- What is a single page application?
  >A single page application is when the entire website exists on the same webpage, we do not have to refresh the page or access different URL addresses to update the page contents. We manage everything on the DOM as well as the address bar from the same window. 

- What are some differences between client side and server side routing?
  >Client side routing is when we update the contents on the page with a front-end framework such as React. When doing Client side routing, we do not make calls to a server. When we do server side routing, we pass the data coming from the front-end (such as React) to a back-end (such as Express/Node or Flask/Python) which will retreive the requested information and send it back to the front end. Back-end routing is much more comprehensive and robust. We can add several security measures, manage our own database, and also redirect the user to other routes as we see fit. Front-end routing can be much quicker (since we are not interacting with a back-end) but tends to be more limited. 

- What are two ways of handling redirects with React Router? When would you use each?
  >We can handle redirects with the Redirect from react-router-dom when a condition is met (like if someone isn't authorized or not logged in) then we can redirect them to another page. We can also handle redirects with the useHistory hook. When a certain condition is met (like not authorized or not logged in ) we can useHistory and push them to a route. Use history will allow the user to press the back button on their browser to access a previous page. If we want the back button to work or we want the previous page to be accessible (like a shopping link or profile url) then useHistory is great. If we do not want the user to have access to that page (like if viewing a bank transaction or other sensitive info) then we can use a redirect. 

- What are two different ways to handle page-not-found user experiences using React Router? 
> We can use the switch component with a catch all route at the bottom (last route) that will render a not found page. We can also use if /else if / else logic inside of a Router component where the last else would render a not found route. 

- How do you grab URL parameters from within a component using React Router?
> You can use the params hook to retreive url params from the Route component. Once we pass in a variable like :id or :food in the route, we can desctructure id or food with useParams from the actual rendered component. 

- What is context in React? When would you use it?
> context is great for passing variables from higher level componenets to lower level components. We can use the createContext function from react to create a new file that will act as a save point for the context. We can then set the context.Provider with value={whatever} in the parent element, and access this same context/state from child elements with the useContext hook. This is an easy way to pass state around to nested components. 

- Describe some differences between class-based components and function
  components in React.
> Class based components were the original way React was used. From classes we extend these classes and add on to them as needed. The problem was we are duplication a lot of code and individual react class components started to get very long and hard to debug. Functional components are much more modular and easier to manage. 

- What are some of the problems that hooks were designed to solve?
  > React hooks helped with managing higher order functions from within react components. Before hooks React higher order functions involved a lot of code and redundancy. The same could be send for managing life cycles of components. After implementing hooks, React became much leaner, less redundant, and easier to work with overall. We can now use/create hooks to implement similar logic from different components making React much more intuitive and easier to use. 