<?php 

error_reporting( E_ALL & ~E_WARNING );

$con = mysqli_connect("localhost", "root", "", "practice" );

if( isset($_GET['action'] ) ){
if( $_GET['action'] == "load_states" ){
	$query = "select * from states order by state";
	$res = mysqli_query($con, $query);
	$states = [];
	while( $row = mysqli_fetch_assoc($res) ){
		$states[] = $row;
	}
	echo json_encode([
			"status"=>"success",
			"states"=> $states
		]);
	exit;
}
if( $_GET['action'] == "delete_state" ){
	$query = "delete from states where id = " . $_GET['id'];
	$res = mysqli_query($con, $query);
	echo json_encode([
			"status"=>"success",
		]);
	exit;
}
}
if( $_GET['action'] == "load_states_list" ){
	$query = "select distinct state from states";
	$res = mysqli_query($con, $query);
	$states_list = [];
	while( $row = mysqli_fetch_assoc($res) ){
		$states_list[] = $row;
	}
	echo json_encode([
			"status"=>"success",
			"states_list"=> $states_list
		]);
	exit;
}
if( $_GET['action'] == "load_cities_list" ){
	$query = "select distinct city from cities";
	$res = mysqli_query($con, $query);
	$cities_list = [];
	while( $row = mysqli_fetch_assoc($res) ){
		$cities_list[] = $row;
	}
	echo json_encode([
			"status"=>"success",
			"cities_list"=> $cities_list
		]);
	exit;
}
if( $_POST['action'] == "add_state" ){
	$data = json_decode($_POST['data'], true );
	$query = "insert into states set 
	state = '" . $data['state'] . "',
	capital = '" . $data['capital'] . "',
	cm = '" . $data['cm'] . "' ";

	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
			"new_id"=> mysqli_insert_id($con)
		]);
	}
	exit;
}
if( $_POST['action'] == "update_state" ){
	$data = json_decode($_POST['data'], true );
	$query = "update states set 
	state = '" . $data['state'] . "',
	capital = '" . $data['capital'] . "',
	cm = '" . $data['cm'] . "' 
	where id = ". $_POST['id'];
	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
		]);
	}
	exit;
}

//cities

if( isset($_GET['action'] ) ){
	if( $_GET['action'] == "load_cities" ){
		$query = "select * from cities order by city";
		$res = mysqli_query($con, $query);
		$cities = [];
		while( $row = mysqli_fetch_assoc($res) ){
			$cities[] = $row;
		}
		echo json_encode([
				"status"=>"success",
				"cities"=> $cities
			]);
		exit;
	}
	if( $_GET['action'] == "delete_city" ){
		$query = "delete from cities where id = " . $_GET['id'];
		$res = mysqli_query($con, $query);
		echo json_encode([
				"status"=>"success",
			]);
		exit;
	}
}
if( $_POST['action'] == "add_city" ){
	$data = json_decode($_POST['data'], true );
	$query = "insert into cities set 
	state = '" . $data['state'] . "',
	city = '" . $data['city'] . "',
	mla = '" . $data['mla'] . "' ,
	population='".$data['population']."'";
	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
			"new_id"=> mysqli_insert_id($con)
		]);
	}
	exit;
}
if( $_POST['action'] == "update_city" ){
	$data = json_decode($_POST['data'], true );
	$query = "update cities set 
	state = '" . $data['state'] . "',
	city = '" . $data['city'] . "',
	mla = '" . $data['mla'] . "',
	population='".$data['population']."'
	where id = ". $_POST['id'];
	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
		]);
	}
	exit;
}

//Areas

if( isset($_GET['action'] ) ){
	if( $_GET['action'] == "load_areas" ){
		$query = "select * from areas order by area";
		$res = mysqli_query($con, $query);
		$areas = [];
		while( $row = mysqli_fetch_assoc($res) ){
			$areas[] = $row;
		}
		echo json_encode([
				"status"=>"success",
				"areas"=> $areas
			]);
		exit;
	}
	if( $_GET['action'] == "delete_area" ){
		$query = "delete from areas where id = " . $_GET['id'];
		$res = mysqli_query($con, $query);
		echo json_encode([
				"status"=>"success",
			]);
		exit;
	}
}
if( $_POST['action'] == "add_area" ){
	$data = json_decode($_POST['data'], true );
	$query = "insert into areas set 
	state = '" . $data['state'] . "',
	city = '" . $data['city'] . "',
	area = '" . $data['area'] . "' ,
	pincode='".$data['pincode']."'";
	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
			"new_id"=> mysqli_insert_id($con)
		]);
	}
	exit;
}
if( $_POST['action'] == "update_area" ){
	$data = json_decode($_POST['data'], true );
	$query = "update areas set 
	state = '" . $data['state'] . "',
	city = '" . $data['city'] . "',
	area = '" . $data['area'] . "',
	pincode='".$data['pincode']."'
	where id = ". $_POST['id'];
	$res = mysqli_query($con, $query);
	if( mysqli_error($con) ){
		echo json_encode([
			"status"=>"fail",
			"error"=> mysqli_error($con)
		],  JSON_PRETTY_PRINT );
	}else{
		echo json_encode([
			"status"=>"success",
		]);
	}
	exit;
}
print_r( $_POST );
print_r( $data );