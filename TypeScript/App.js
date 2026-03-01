"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./Navbar");
var Home_1 = require("./Home");
var Services_1 = require("./Services");
var Contact_1 = require("./Contact");
var Footer_1 = require("./Footer");
require("./App.css");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <Navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/Services" element={<Services_1.default />}/>
        <react_router_dom_1.Route path="/Contact" element={<Contact_1.default />}/>
      </react_router_dom_1.Routes>
      <Footer_1.default />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
