<?php 
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASSWORD','');
define('DB_NAME','borsa');

$connection = @new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
if($connection->connect_errno) exit("Помилка з'єднання з БД");
$connection->set_charset('utf8');

function get_singles_all() {
    global $connection;
    $single =$connection->query("SELECT item.id,item.title,item.price,item.kategory,photo.location FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes' LIMIT 0,10");
    return $single;
}
function get_single_by_size() {
    global $connection;
    $sizes =$connection->query("SELECT distinct name FROM `size` ORDER BY name=0, -name DESC, name");
    return $sizes;
}
function get_single_by_color() {
    global $connection;
    $colors =$connection->query("SELECT distinct color FROM `item`");
    return $colors;
}
function get_single_by_brand() {
    global $connection;
    $brands =$connection->query("SELECT distinct brand FROM `item` ORDER BY brand");
    return $brands;
}
$itemsOnPage = 15;
function get_single_by_kategory($value,$kategory,$brand,$size,$color,$sort,$page) {
    global $connection;
    $sql = "SELECT item.id,item.title,item.price,item.kategory,photo.location FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes'";

    if($value){
        $values = implode(",",$value);
        if($values == 'female'){
            $sql .="AND item.female IN('yes')";
        }
        elseif($values == 'male'){
            $sql .="AND item.male IN('yes')";
        }else{
            $sql .="";
        }
    };

    if($kategory){
        $kategorys = implode("','",$kategory);
        $sql .="AND item.kategory IN('$kategorys')";
    };

    if($brand){
        $brands = implode("','",$brand);
        $sql .="AND item.brand IN('$brands')";
    };

    if($size){
        $sizes = implode("','",$size);
        $sql .="AND item.id IN(SELECT distinct id_item FROM `size` where name in ('$sizes'))";
    };
    if($color){
        $color1 = [];
        foreach($color as $colorss){
            $color1[] = "#$colorss"; 
        };
        $colors = implode("','",$color1);
        $sql .="AND item.color IN('$colors')";
    };

    if($sort){
        $sorts = implode("','",$sort);
        if ($sorts == 'sizeUp'){
            $sql .="order by price ASC";
        }elseif($sorts =='sizeDown'){
            $sql .="order by price DESC";
        }
    };

    if($page != 'all'){
        $pageIn = 0;
        if($page){
            $pageIn = implode(",",$page);
        }else{
            $pageIn = 1;
        }
        global $itemsOnPage;
        $limit  = $itemsOnPage;
        $offset = ($pageIn - 1) * $limit;
        $sql .=" LIMIT $offset,$limit";
    };
    
    $cats = $connection->query($sql);
    return $cats;
}
function get_size_by_id($id) {
    global $connection;
    $sizes =$connection->query("SELECT name from size where id_item =$id");
    return $sizes;
}
function get_single_by_id($id) {
    global $connection;
    $single =$connection->query("SELECT * from item where id =$id");
    foreach ($single as $singles);
    return $singles;
}
function get_photo_by_id($id) {
    global $connection;
    $locations =$connection->query("SELECT location from photo where id_item =$id");
    // foreach ($single as $singles);
    return $locations;
}
function get_color_by_id($id) {
    global $connection;
    $colors =$connection->query("SELECT  id,color from item where colorGroup =(SELECT colorGroup from item where id = $id )");
    // foreach ($single as $singles);
    return $colors;
}
function get_all_by_interesting($kategory,$id) {
    global $connection;
    if ($kategory == 'male'){
        $interesting =$connection->query("SELECT item.id,item.title,item.price,item.kategory,photo.location FROM item inner join photo on item.id = photo.id_item where item.male = 'yes' and photo.main = 'yes' and item.id not like'$id' LIMIT 0,10");
    }else{
        $interesting =$connection->query("SELECT item.id,item.title,item.price,item.kategory,photo.location FROM item inner join photo on item.id = photo.id_item where item.female = 'yes' and photo.main = 'yes' and item.id not like'$id' LIMIT 0,10");
    }
    return $interesting;
}
function get_single_by_search($text) {
    global $connection;
    $search =$connection->query("SELECT item.id,item.title,item.price,item.kategory,photo.location FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes' and item.title like '%$text%'");
    return $search;
}
function get_all_by_basket($id) {
    global $connection;
    $idBasket = implode("','",$id);
    $single =$connection->query("SELECT item.id,item.title,item.price,item.article,item.color,photo.location FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes' and item.id in('$idBasket')");
    return $single;
}
function get_count_by_basket($id) {
    global $connection;
    $idBasket = implode("','",$id);
    $single =$connection->query("SELECT COUNT(item.id) FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes' and item.id in('$idBasket')");
    foreach ($single as $singles);

    return $singles;
}
function get_sum_by_basket($id) {
    global $connection;
    $idBasket = implode("','",$id);
    $single =$connection->query("SELECT SUM(item.price) FROM item inner join photo on item.id = photo.id_item where photo.main = 'yes' and item.id in('$idBasket')");
    foreach ($single as $singles);
    return $singles;
}
?>
