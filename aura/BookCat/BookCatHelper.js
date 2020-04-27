({  
     getResponse: function(component, input) {
        //var arrayName = "";
        var action = component.get("c.getAuthorNameById");
        action.setParams({
            "id": input
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
           
            
            if (state === "SUCCESS") {
                var authorObj = response.getReturnValue();
                console.log(authorObj);
                component.set("v.input2", authorObj.result.primaryTopic.title);
                //console.log(authorObj.result.primaryTopic.subject.length);
                for (var i=0; i<authorObj.result.primaryTopic.subject.length; i++) {
                    var test = authorObj.result.primaryTopic.subject[i];
                    var test2 = test.label;
                    console.log(test);
                    console.log(test2);            
                component.set("v.input3", test2); 
                              //authorObj.result.primaryTopic.subject[3]);
                }
                component.set("v.input4", authorObj.result.primaryTopic.isbn);
    
                component.set("v.ms1", authorObj.result.label);

            }
        });
        $A.enqueueAction(action);
    },
    
})