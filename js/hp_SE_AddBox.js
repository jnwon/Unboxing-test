nhn.husky.SE_Box = jindo.$Class({
    name : "SE_Box",
    $init : function(elAppContainer){
        this._assignHTMLObjects(elAppContainer);
    },

    _assignHTMLObjects : function(elAppContainer){
        this.oInputButton = cssquery.getSingle(".se2_box", elAppContainer);
    },

    $ON_MSG_APP_READY : function(){
        this.oApp.registerBrowserEvent(this.oInputButton, 'click','PASTE_BOX');
    },

    $ON_PASTE_BOX : function(){
        this.oApp.exec("PASTE_HTML", [new Date()]);
    }
});