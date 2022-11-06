<?php 
                    
                        $connection = mysqli_connect('localhost','root','','borsa'); 
                        mysqli_set_charset( $connection,'utf8' );
                    // define('DB_HOST','localhost');
                    // define('DB_USER','root');
                    // define('DB_PASSWORD','');
                    // define('DB_NAME','borsa');

                    // $mysql = @new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
                    // if($mysql->connect_errno) exit("Помилка з'єднання з БД");
                    // $mysql->set_charset('utf8');

                        function get_singles_all() {
                            global $connection;
                            $single =$connection->query("SELECT * from item");
                            return $single;
                        }
                        
                        function get_single_by_id($id) {
                            global $connection;
                            $single =$connection->query("SELECT * from item where id =$id");
                            foreach ($single as $singles);
                            return $singles;
                        }
                        function get_single_by_size() {
                            global $connection;
                            $sizes =$connection->query("SELECT DISTINCT size from item order by size");
                            return $sizes;
                        }
                        function get_single_by_kategory($value,$kategory) {
                            global $connection;
                            if($kategory!=true & $value==true){
                                $cats =$connection->query("select * from item where $value ='yes'");
                            }elseif($kategory==true & $value==true){
                                $cats =$connection->query("select * from item where $value ='yes' and kategory='$kategory'");
                            }elseif($kategory==true & $value!=true){
                                $cats =$connection->query("select * from item where kategory='$kategory'");
                            }elseif($kategory!=true & $value!=true){
                                $cats =$connection->query("select * from item");
                            }
                            return $cats;
                        }

                        function get_single_by_search() {
                            global $connection;
                            if(isset($_POST['submit'])){
                            $search = $_POST['search'];
                            $query = mysqli_query($connect,"select * from single where title like '%$search%'");
                            return $query;}
                    }
                    
                        
                        ?>
                        <!-- &value1=id&kategory1=1 -->