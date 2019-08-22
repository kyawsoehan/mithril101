import m from "mithril";

const HeaderBar = {
    
    view: function(vnode) {
        self = this;
        return m('h2', {}, 
            [
                m("span", vnode.attrs.title),
                m("a", {
                    href:"#",
                    onclick: function(event) {
                        event.preventDefault();
                        alert("I told you ... DO NOT CLICK!!!");
                    }
                }, "Do Not Click!")
            ]        
        )
    }
};

export default HeaderBar;

