import m from "mithril";
import Dummy from "./components/Dummy"

var MainApp = {
    oninit : function(vnode) {
        //TODO
    },
    
    view: function(vnode) {
        return m('div', {}, 
            [
                m(Dummy, {
                    title:"This is header.",
                }),
                m("p", "This is body")
            ]
        )
    }
};

m.mount(document.getElementById("app"), MainApp);