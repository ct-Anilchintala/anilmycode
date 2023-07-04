
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="vue.js" ></script>
    <script src="axios.min.js" ></script>
    <script src="config_certification_template_v2.js"></script>
</head>
<body>
    <div id="app">
        <div>
            <span style="color:red; float:left;">EXTERIOR</span>
            <div style="color:red; text-align:right;">COST:₹0</div>
        </div>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style="width:100vw; text-align: left;">Exterior Front(COST:₹0)
            <span style="float:right;" class="caret"></span></button>
            <div>
                <div>{{ generate_form() }}</div>
            </div>
            <pre>{{data}}</pre>
        </div>
        <script>
            var app = Vue.createApp({
                //el: "#app",
                data: function(){
                    return {
                        "message": "Yes ok.",
                        "data":something,                                    
                    };
                },
                mounted: function(){
                    
                },
                created: function(){
                	
                },
                methods: {
                    generate_ok_options: function(){

                    }
                }
            }).mount("#app");
        </script>
    </div>
</body>
</html>
