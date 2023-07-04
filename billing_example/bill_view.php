
<html>
     <head>
         <script src="vue.js" ></script>
         <script src="axios.min.js" ></script>
         <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
         <script src="bootstrap/js/bootstrap.min.js" ></script>
     </head>
     <body>

         <div id="app" >
            
             <table>
             <tr>
                    <th>Create Bill</th>
                </tr>
                <tr>
                    <td>
                        <table border="1" class="table table-bordered table-striped">
                            <tr>
                                <th>date</th>
                                <th>customer_name</th>
                                <th>amount</th>
                                <th>tax</th>
                                <th>net</th>
                                <th></th>
                            </tr>
                            <tr v-if="'date' in bill" >
                                <td><input type="date" v-model="bill['date']" ></td>
                                <td><input type="text" v-model="bill['c_name']" ></td>
                                <td>{{ bill['amount'] }}</td>
                                <td>{{ bill['tax'] }}</td>
                                <td>{{ bill['net'] }}</td>
                                <td><input type="button" class="btn btn-danger btn-sm" v-on:click="delete_item(i)">X</a></td>
                            </tr>
                        </table>
                    </td>
                 </tr>
                 <tr>
                    <td>
                        <!-- <div><a href="bill_edit.php" class="btn btn-primary btn-sm" >Add Bill</a></div> -->
                        <table border="1" class="table table-bordered table-striped">
                            <tr>
                                <th>sno</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                            <tr v-for="v,i in bill_items" >
                                <td>{{ v[i]['product_id'] }}</td>
                                <td>{{ v[i]['qty'] }}</td>
                                <td>{{ v[i]['amount'] }}</td>
                                <td>{{ v[i]['tax'] }}</td>
                                <td>{{ v[i]['net'] }}</td>
                                <!-- <td><a v-bind:href="'bill_view.php?bill_id='+v['id']" class="btn btn-default btn-sm" >VIEW</a></td> -->
                                <!-- <td><input type="button" class="btn btn-danger btn-sm" v-on:click="delete_bill(i)">X</a></td> -->
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <script>
            var app = Vue.createApp({
                //el: "#app",
                data: function(){
                    return {
                        "message": "Yes ok.",
                        "bill": {},
                        "bill_items":[],
                    };
                },
                mounted: function(){
                    this.load_data();
                },
                created: function(){

                },
                methods: {
                    load_data: function(){
                        // promises 
                        axios.get("product.php?action=read_bill&id=<?=$_GET['bill_id'] ?>").then(response=>{
                            console.log( response.status );
                            console.log( response.data );
                            this.bill = response.data['bill'];
                            this.bill_items = response.data['bill_items'];
                        });
                    },
                }
            }).mount("#app");
            // load_data()
        </script>
    </body>
</html>