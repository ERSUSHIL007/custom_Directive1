//Creating Custom directive
app.directive('ngProduct', function() {
    //Creating object and defining properties
    directive_1 = [];
    directive_1.templateUrl = "./public/home.html";
    directive_1.restrict = "EAC";
    //Creating Custom Attribute to the directive through scope property
    directive_1.scope = {
        product: " =product "
    };

    //return Object
    return directive_1;
});