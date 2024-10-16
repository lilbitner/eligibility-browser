# Eligibility Browser app

This application is built given the prompt below. 

It is built using Vite and React. 

To run the test suites: 

```sh
npm run test
```

To run the server: 

```sh
npm install
npm run dev
```

* The `components` directory houses all components. This would ideally be broken down into either an atomic design layout (atoms, molecules, organisms, pages) or on a per-feature basis. For now, all components exist at the same level. 
* The `api` directory houses the mock API data, but would presumably hold logic surrounding the api and data quering. 
* The `core` directory is intended to house all-application reusable logic, for example, types. 
* The `utils` directory is intended to house utility functions. It is at the top level for now, but would presumably be a directory on a per-feature basis. 

## Some improvements to be made

* In-line styling of components should be removed and seperated into seperate styling files per component. This could leverage a third-party library such as emotion. 
* A design system of basic components and tokens (for spacing and font size for example), should be utilized to maintain UI consistency.
* For scalability, file structure should be organized to better reflect how each component is utilized. 
* Unit tests should be added for each component. 


# Prompt

## Frontend Software Development Engineer -- Technical Coding Problem

The  goal of  this coding  exercise is  to give  us insight  into your
ability to  write code that solves  a problem for a  company.  It will 
help us evaluate  your ability to assess  requirements  and  produce a
design that reacts to those requirements.

### Problem Statement

The Glorious Gumball Co. has asked for help with visualizing their
medical claim data for their employees, retirees and dependents.

The intent is to create an "eligibility browser" single-page web
interface to find eligible employees, dependents, and retirees, and
show their employment history alongside the time and amount for each
claim.

There is an API which goes to fetch all the data in one JSON blob.
You can see an example of this data in the `api-data.json` file.

Build a single-page application that displays this data in a similar 
way to that exemplified in the `eligibility-browser.jpg` diagram.  Note 
that you will need to calculate some information in order to display 
the data effectively, including:

* current status of each person, one of:
  * empl: current employee
  * empl, termed: former employee, no retirement plan
  * dep: current dependent
  * dep, termed: former dependent
  * ret: current retiree
  * ret, termed: former retiree, termed out of eligibility
* number of valid claims for each person (displayed in title of
    "claims" column)
* total claim amount for each person


### Criteria for Evaluation
The applet you submit should show an understanding of the 
following:
* Typescript
* State Management (store, composables/hooks, provide/inject, 
prop-drilling).
  * Not all of the above strategies are required or expected.
    * Your output should contain more than just prop-drilling.
* Unit tests
  * Write **one** unit test that:
    * Runs successfully
    * Meaningfully verifies an expected user interaction (e.g. click).
  * Additional coverage is not required or expected.


#### SPA Framework

Submissions must use one of the following SPA frameworks:
* Vue (either v2/v3)
* React

We will not evaluate on your choice of framework. Choose the one you 
are most confident in.


### Further Questions

#### Describe the backend's role in facilitating the above.
##### What API endpoint(s) would you write, and how would you structure them?

I would structure the endpoints as follows: 
* There would exist one GET endpoint to fetch the list of people to display. This endpoint would return basic information about each person in order to display them within the People column (i.e name, status, and id). It would return the status of each employee already calculated, as opposed to that logic existing on the frontend. 
* The next logical endpoint would be another GET to fetch the information about the person selected. I envision that the endpoint would leverage the id of the selected person, which the frontend already has access to, in order to query for that particular person's history and claims information. For now this endpoint returns both history and claims, though for scalability sake, if there exists a need to handle large amounts of data for history or claims, then perhaps the endpoints can be seperated. 

##### Would you recommend a specific data storage solution? Why?

I believe a relational database would make sense for this set of data. From a high level, a People table, an EligibilityHistory table, and a Claims table. People would have many EligibilityHistory and People would have many Claims. Cloud based options, such as Amazon S3 or Google Cloud Storage, may be useful here to support scalability.


#### Describe strategies for scaling the above application for the following cases:
##### 100 claims per year for a person

There are a few approaches to handling larger sets of claims data, some ideas are as follows: 

* Data pagination for this particular claims endpoint. For example, the Claims column could render the first '20' claims, and with each user click to the next '20', more data is fetched.
* Along the same lines as data pagination, only rendering data that is selected for view within the History column itself. For example, the user can select a particular timeframe within the History column, and the claims within that timeframe are rendered within the Claims column - so the amount of data fetched is reduced and segmented by timeframe.  

##### 10,000 employees, and more than 10,000 dependents

With this scale of people data, it is important to reduce the potential performance issues that accompany rendering many components within the DOM and gathering large amounts of data. A few ideas are as follows: 

* Implement search functionality that allows a user to search for a particular person. This search can implement filters based on type or status, for example. This will limit having to render thousands of people and components and will limit the amount of data that is fetched at once. And with this, ensure a proper loading state exists while the data is being fetched. Pagination or infinite scroll may also be effective here. 
* Leverage a caching mechanism, such as sever-side caching, that supports retrieving potentially frequently accessed data as efficiently as possible. 
* It is also important to keep in mind the optimization of each frontend component that is being highly utilized within this People column. For example, memoizing what is necessary within a component to reduce redundant computations. 

