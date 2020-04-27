({
	getResponse: function(component, input) {
        //var arrayName = "";
        var action = component.get("c.getAuthorNameById");
        console.log(action);
        action.setParams({
            "id": input
        });
        action.setCallback(this, function(response) {
            var states = response.getState();
            console.log(states);
           
            
            if (states === "SUCCESS") {
                var authorObj = response.getReturnValue();
                console.log(authorObj);
                component.set("v.ms1", authorObj.result.label);
                //component.set("v.ms2d", authorObj.result.primaryTopic.description);
                //component.set("v.input4", authorObj.result.primaryTopic.isbn);          
            }
        });
        $A.enqueueAction(action);
    },
    
})