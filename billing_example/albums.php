<?php
error_reporting( E_ALL & ~E_WARNING );

session_start();
// $_SESSION['login'] = false;
if( $_GET['action'] == "logout" ){
	session_destroy();
	//echo "<P>You have successfully logout</p>";
	header("Location: ?event=Logout");
	exit;
}

if( $_POST['action'] == "Login" ){
	if( $_SESSION['captcha'] != $_POST['captcha'] ){
		header("Location: ?event=error2");
		exit;
	}else if( $_POST['user'] == "test" && $_POST['pass'] == "test" ){
		$_SESSION['login'] = true;
		header("Location: ?event=Login");
		exit;
	}else{
		header("Location: ?event=error");
		//echo "<P>Incorrect login</p>";
		exit;
	}
}

?>
<html>
    <head>
        <script src="vue.js" ></script>
        <script src="axios.min.js" ></script>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        <script src="bootstrap/js/bootstrap.min.js" ></script>
        <title>Albums</title>
    </head>
    <body>
    <?php if( $_SESSION['login'] ){ ?>
        <form method="POST" action="album.php" enctype="multipart/form-data" >
			Album Name: <input type="text" name="name" value="" >	
			<input type="file" name="file" value="" >
			<input type="submit" name="btn" value="submit">
		</form>
        <div id="app" >
        <table border="1" class="table table-bordered table-striped">
            <tr> 
                <th>ALBUMS</th>
            </tr>
            <tr>
                <td>
                    <table border="1" class="table table-bordered table-striped">
                        <tr>
                            <th>S.No</th>
                            <th>name</th>
                            <th>Delete</th>
                            <th>View_album</th>
                        </tr>
                        <tr v-for="v,i in albums" >
                            <td>{{ i+1 }}</td>
                            <td>{{ v['name'] }}</td>
                            <td><input type="button" value="X" v-on:click="delete_album(i)"></td>
                            <td><a v-bind:href="'album_images.php?album_id='+v['id']" class="btn btn-default btn-sm" >VIEW</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </div>
        <?php }else{ ?>
        <form method="post" >
            <div>User:<input type="text" name="user" ></div>
            <div>Password: <input type="password" name="pass" ></div>
            <div><img src="captcha.php" ></div>
            <div>Code: <input type="text" name="captcha" ></div>
            <div><input type="submit" value="Login" ></div>
            <input type="hidden" name="action" value="Login" >
        </form>
        <?php if( $_GET['event'] == "error" ){
            echo "<p style='color:red;' >Username or password wrong</p>";
        }else if( $_GET['event'] == "error2" ){
            echo "<p style='color:red;' >Incorrect Captcha entered.</p>";
        }
        }
        print_r( $_SESSION );?>
        <script>
            var app = Vue.createApp({
                //el: "#app",
                data: function(){
                    return {
                        "message": "Yes ok.",
                        "albums": [
                            
                        ],
                        new_album: {
                            "name": "",
                        },
                        show_form: false,
                        show_edit_album_form: false,
                    };
                },
                mounted: function(){
                    this.load_albums();
                },
                created: function(){

                },
                methods: {
                    load_albums: function(){
                        // promises 
                        axios.get("album.php?action=load_albums").then(response=>{
                            console.log( response.status );
                            console.log( response.data );
                            this.albums = response.data['albums'];
                        });
                    },
                    delete_album: function(vi){
                        var album_id=this.albums[vi]['id'];
                        axios.get("album.php?action=delete_album&id="+album_id).then(response=>{
                            console.log(response.status);
                            console.log(response.data);
                            console.log(album_id);
                            this.load_albums();
                        });
                    },
                }
            }).mount("#app");
        </script>
    </body>
</html>