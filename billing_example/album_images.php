
<html>
    <head>
        <script src="vue.js" ></script>
        <script src="axios.min.js" ></script>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        <script src="bootstrap/js/bootstrap.min.js" ></script>

        <style>
            #tab{
                text-align:center;
            }
        </style>
    </head>
    <body>

                    
        <div id="app" > 
                <table id="tab" class="table table-bordered table-striped">
                    <tr>
                        <th>Album Images</th>
                    </tr>
                </table>
                <table id="tab" class="table table-bordered table-striped" >   
                    <tr>
                        <th>S.No</th>
                        <th>Album Id</th>
                        <th>Album Name</th>
                        <th>File Name</th>
                    </tr>
                    <tr v-for="v,i in files" >
                        <td>{{ (i+1) }}</td>
                        <td>{{ v['album_id'] }}</td>
                        <td>{{ albums['name'] }}</td>
                        <td>{{ v['filename'] }}</td>
                    </tr>
                </table>
                
            <?php
                error_reporting( E_ALL & ~E_WARNING );
                $con = mysqli_connect("localhost", "root", "", "practice" );
                $res2=mysqli_query($con,"select * from albums where id='".$_GET['album_id']."'");
			    $row=mysqli_fetch_assoc($res2);
                $dir=$row['name'];
                $file = dir($dir);
                while( $fn = $file->read() ){if( $fn != "." && $fn != ".." ){
                    echo "<div style='margin:5px; width:200px; padding:5px; border:1px solid black;'>
                    <img style='width:100%;' src='$dir/" . $fn . "' >
                    <div>" . $fn . "</div>
                    </div>";
                }
            }?>

        </div>
        <script>
            var app = Vue.createApp({
                //el: "#app",
                data: function(){
                    return {
                        "albums": {
                            "id": 0,
                            "name":"",
                        },
                        "files": [{
                            "id": 0,
                            "album_id": 0,
                            "filename": "",
                        }],
                       
                    };
                },
                mounted: function(){
                        this.load_albums();
                    }
                ,
                created: function(){
                },
                methods: {
                load_albums: function(){
                    console.log("hi");
                    axios.get("album.php?action=read_album&id=<?=$_GET['album_id']?>").then(response=>{
                        console.log( response.status );
                        console.log( response.data );
                        this.albums = response.data['albums'];
                        this.files = response.data['files'];
                    });
                },                
            }}).mount("#app");
        </script>
    </body>