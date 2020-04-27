({
   onClick : function(component, event, helper) {
        var input = component.get("v.name");
        console.log(input);
        helper.getResponse(component, input);
    },
})