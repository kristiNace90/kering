sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

        },
        handleTypeMissmatch: function(oEvent) {
			var aFileTypes = oEvent.getSource().getFileType();
			aFileTypes.map(function(sType) {
				return "*." + sType;
			});
			MessageToast.show("The file type *." + oEvent.getParameter("fileType") +
									" is not supported. Choose one of the following types: " +
									aFileTypes.join(", "));
		},
        getMetadatatest:function () {
            $.ajax({
                contentType: 'application/json',
                data: {},
                dataType: 'json',
                success: function(data){
                    console.log("device control succeeded");
                },
                error: function(){
                    console.log("Device control failed");
                },
                processData: false,
                type: 'GET',
                url: 'api/v1/dataimport/publicDimensions/t.W:KERING_EMPLOYEE/metadata'
            });
        },
        postEmptyCall: function () {
            /*

*/

           $.ajax({
            contentType: 'application/json',
            data: {},
            dataType: 'json',
            success: function(data){
                console.log("device control succeeded");
            },
            error: function(){
                console.log("Device control failed");
            },
            processData: false,
            type: 'POST',
            url: 'api/v1/dataimport/publicDimensions/t.W:KERING_EMPLOYEE'
        });
        },

    });
});
