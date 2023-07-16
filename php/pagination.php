<?php
require 'db.php';
if(isset($_POST['action'])){
   $result = get_single_by_kategory($_POST['gender'],$_POST['kategory'],$_POST['brand'],$_POST['size'],$_POST['color'],$_POST['sort'],'all');
   $output='';
   if(mysqli_num_rows($result)>0){
      $allItems = mysqli_num_rows($result);
      $pages = ceil($allItems / $itemsOnPage);
      if($pages>1){
         for($i=1;$i<=$pages;$i++){
            $checked = '';
            if(isset($_POST['page'])){
               if($_POST['page'] == [$i]){
                  $checked = 'checked="yes"';
               }
            }else{
               if($i == 1){
                  $checked = 'checked="yes"';
               }
            }
            $output .='<div class="body__number ajaxPaginationClick">
            <input class="body__checkbox body__numberCheck"'.$checked.' type="radio" name="pages" id="page'.$i.'">
            <label class="body__label pagination__label" for="page'.$i.'">'.$i.'</label>
         </div>' ;
         }
      }
   };
   echo $output;

}
?>