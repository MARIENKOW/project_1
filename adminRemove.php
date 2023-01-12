<!DOCTYPE html>
<html lang="en">
   
<?php
session_start();
require 'php/head.php';
$all =get_remove();
?>
<body>
   <div class="login">
      <?php
      if($_SESSION["admin"]){
      ?>
      <div class="choose">
         <div class="container">
            <div class="remove add">
               <div class="remove__inner add__inner">
                  <form method="POST">
                        <div class="remove__title add__title">виберіть товари які потрібно видалити</div>
                        <p class="remove__title add__subtitle">всього товарів (<? echo mysqli_num_rows($all); ?>)</p>
                        <table onclick = chooseCheckboxClick()>
                           <tr>
                              <th></th>
                              <th>назва</th>
                              <th>ціна</th>
                              <th>артикул</th>
                              <th>категорія</th>
                           </tr>
                           <?php
                           foreach($all as $item){
                           ?>
                           <tr class="remove__row">
                              <td><input type="checkbox" class="remove__checkbox" name="<?php echo $item["id"]?>" id="<?php echo $item["id"]?>"></td>
                              <td><?php echo $item["title"]?></td>
                              <td><?php echo $item["price"]?></td>
                              <td><?php echo $item["article"]?></td>
                              <td>
                                 <?php
                                    if($item["kategory"]==="bags"){echo "сумки";}
                                    elseif($item["kategory"]==="cases"){echo "кейси";}
                                    elseif($item["kategory"]==="purse"){echo "портмане";}
                                    elseif($item["kategory"]==="belts"){echo "ремені";}
                                    elseif($item["kategory"]==="umbrellas"){echo "парасольки";}
                                 ?>
                              </td>
                           </tr>
                           <?
                           }
                           ?>
                           <tr>
                        </table>
                        <button class="login__btn add__btn warningBtn" onclick=warningShowRemove() type="submit">видалити</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div style="display:none"  class="remove__popap add__popap">
         <div class="remove__popap--in">
            <div class="add__title popapTitle"></div>
            <button class="login__btn add__btn _ajaxAdminRemoveBtn remove__btn">підтверджую</button>
            <span onclick=popapRemoveAdmin() class="remove__popapRemove">
               <span></span>
            </span>
         </div>
      </div>
      <?php
      }else{
         echo "<script>location.href = 'admin.php'</script>";
      }
      ?>
   </div>
   <script src="jQuery/jquery-3.6.1.min.js"></script>
   <script src="js/admin.js"></script>
</body>
</html>