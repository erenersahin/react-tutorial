# Guide to React
npm start == start project and run before coding! <br/>

package.json = dependencies and scripts <br/>

node_modules = all dependencies like virtualenv <br/>

public <br/>
&nbsp;    index.html = our page // <'div id = root'> is important <br/>
&nbsp;    beacuse react is mounted there <br/>

src <br/>
&nbsp;    index.js = refers 'root' in index.html above! <br/>

Component <br/>
&nbsp;    should render & return some HTML to DOM! <br/>
&nbsp;    should contain one root element each! <br/>


## How to Create Component <br/>
1 - Create a folder inside src like 'Example' <br/>
2 - create Example.js and create arrow func <br/>
functions must start w/lowerCase beacuse components start with upperCase! <br/>
3 - go App.js & add import Example from './Example/Example' <br/>
This import Example must start with upperCase because React knows UpperCase for components! <br/>
Done! <br/>


## Function Specs <br/>
- props is an argument for func to have properties! <br/>
- props have a children arg and, due to props.children an empty p element is created <br/>


## class-based Components Specs <br/>
- if state wants to be changed, use setState <br/>
setState = special prop of Components! <br/>


## Functional Components Specs


