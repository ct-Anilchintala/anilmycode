<?php
error_reporting( E_ALL & ~E_WARNING );

$con = mysqli_connect("localhost", "root", "", "practice" );

if( $_POST ){
    if( $_POST['action'] == "save_bill" ){
        $bill = json_decode($_POST['bill'], true );
        $billitems=json_decode($_POST['bill_items'],true);

        if( $_POST['edit_mode'] ){

        }else{
            $query = "insert into bills set
            date = '" .$bill['date'] ."', 
            c_name = '" . $bill['c_name'] . "',
            amount = '" . $bill['amount'] . "',
            tax = '" . $bill['tax'] . "',
            net = '" . $bill['net'] . "'";
            $res = mysqli_query($con, $query);

            $res2 = mysqli_query($con,"select * from bills where c_name= '".$bill['c_name']."'");
            $row=mysqli_fetch_assoc($res2);

            
            foreach( $billitems as $i=>$j ){
                $res2 = mysqli_query($con, "insert into bill_items set bill_id='".$row['id']."',
                product_id='".$j['product_id']."',
                quantity='".$j['qty']."',
                price='".$j['price']."',
                total='".$j['total']."'"); 
            }
        }
        if( mysqli_error($con) ){
            echo json_encode([
                "status"=>"fail",
                "error"=> mysqli_error($con)
            ],  JSON_PRETTY_PRINT );
        }else{
            echo json_encode([
                "status"=>"success",
                //"new_id"=> mysqli_insert_id($con)
            ]);
        }
        exit;
    }
}
?>

<html>
    <head>
        <script src="vue.js" ></script>
        <script src="axios.min.js" ></script>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
        <script src="bootstrap/js/bootstrap.min.js" ></script>
    </head>
    <body>
        <div id="app" >
            <div>{{ message }}</div>
            
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
                            <tr>
                                <td><input type="date" v-model="bill['date']" ></td>
                                <td><input type="text" v-model="bill['c_name']" ></td>
                                <td>{{ bill['amount'] }}</td>
                                <td>{{ bill['tax'] }}</td>
                                <td>{{ bill['net'] }}</td>
                                <td><a v-bind:href="'bill_view.php?bill_id='+bill['id']" class="btn btn-default btn-sm" >VIEW</a></td>
                                <td><input type="button" class="btn btn-danger btn-sm" v-on:click="delete_item(i)">X</a></td>
                            </tr>
                        </table>

                        <table border="1" class="table table-bordered table-striped">
                            <tr>
                                <th>sno</th>
                                <th>Product</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th><input type="button" class="btn btn-danger btn-sm" value="+" v-on:click="add_item" ></th>
                            </tr>
                            <tr v-for="v,i in bill_items" >
                                <td>{{ (i+1) }}</td>
                                <td><select v-model="v['product_id']" v-on:change="product_selected(i)" >
                                    <option value="" >Select Product</option>
                                    <option v-for="pd in products" v-bind:value="pd['id']" >{{ pd['name'] }}</option>
                                </select></td>
                                <td><input type="number" v-model="v['qty']" v-on:change="calculate(i)" ></td>
                                <td>{{ v['price'] }}</td>
                                <td>{{ v['total'] }}</td>
                                <td><input type="button" class="btn btn-danger btn-sm" value="X" v-on:click="delete_item(i)" ></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <input type="button" class="btn btn-primary btn-sm" value="SAVE" v-on:click="save_bill()" >
        </div>
        <script>
            var app = Vue.createApp({
                //el: "#app",
                data: function(){
                    return {
                        "message": "Yes ok.",
                        "bill": {
                            "id": 0,
                            "date": "",
                            "c_name": "",
                            "amount": 0,
                            "tax": 0,
                            "net": 0
                        },
                        "bill_items": [{
                            "id": 0,
                            "product_id": "",
                            "qty": 0,
                            "price": 0,
                            "total": 0,
                        }],
                        products: [],
                        edit_mode: <?=$_GET['bill_id']?"true":"false" ?>,
                        bill_id: <?=$_GET['bill_id']?$_GET['bill_id']:0 ?>,
                    };
                },
                mounted: function(){
                    this.load_products();
                    <?php if( $_GET['bill_id'] ){ ?>
                        // do bill edit
                        //this.load_bill();
                    <?php } ?>
                    if( this.edit_mode ){
                        this.load_bill();
                    }
                },
                created: function(){

                },
                methods: {
                    load_products: function(){
                        // promises 
                        axios.get("product.php?action=load_products").then(response=>{
                            console.log( response.status );
                            console.log( response.data );
                            this.products = response.data['products'];
                        });
                    },
                    product_selected: function(vi){
                        var product_id = this.bill_items[ vi ]['product_id'];
                        for(var i=0;i<this.products.length;i++){
                            if( this.products[i]['id'] == product_id ){
                                this.bill_items[ vi ]['price'] = this.products[i]['price'];
                            }
                        }
                        this.calculate(vi);
                    },
                    calculate: function(vi){
                        this.bill_items[ vi ]['total'] = Number(this.bill_items[vi]['price'])*Number(this.bill_items[vi]['qty']);
                        this.calculate_amount();
                    },
                    calculate_amount: function(){
                        var tot = 0;
                        for(var i=0;i<this.bill_items.length;i++){
                            tot = tot + Number(this.bill_items[i]['total']);
                        }
                        this.bill['amount'] = tot;
                        this.bill['tax'] = (tot*.18).toFixed(2);
                        this.bill['net'] = (Number(this.bill['amount']) + Number(this.bill['tax'])).toFixed(2);
                    },
                    add_item: function(){
                        this.bill_items.push({
                            "id": 0,
                            "product_id": "",
                            "qty": 0,
                            "price": 0,
                            "total": 0,
                        });
                    },
                    delete_item: function(vi){
                        this.bill_items.splice(vi,1);
                    },
                    save_bill: function(){
                        axios.post("?",{
                            "action": "save_bill",
                            "bill": JSON.stringify(this.bill),
                            "bill_items": JSON.stringify(this.bill_items),
                            "bill_id": this.bill_id,
                            "mode": this.edit_mode
                        },{
                            'headers': {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(response=>{
                            console.log(this.bill_items);
                            this.bill= {
                            "id": 0,
                            "date": "",
                            "c_name": "",
                            "amount": 0,
                            "tax": 0,
                            "net": 0
                        };
                        this.bill_items= [{
                            "id": 0,
                            "product_id": "",
                            "qty": 0,
                            "price": 0,
                            "total": 0,
                        }];
                        })
                    },
                    load_bill: function(){
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
        </script>
    </body>
</html>