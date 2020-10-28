<div class="background">
  <div class="background-seeThrough">
    <div class="top_bar" style="display:none; visibility:hidden">
    <!-- test end -->
    <div class="testHiddenMenu" style="visibility: none;">
      <div class="logo">
        <img class="" src="assets/images/circlogo.png" alt="" width="25" height="25">
        <a href="index.php">Circularní řešení</a>
      </div>

      <div class="search">
        <form method="GET" name="search_form">
          <input type="text" id="search_text_input">
            <!-- this.value is the value of whatever is being typed. -->
            <div class="button_holder">
                <img src="assets/images/searchicon.png" alt="">
            </div>
        </form>

        <div class="search_results"><!-- this was missing -->
        </div>
        <div class="search_results_footer_empty"><!-- this was there -->
        </div>
      </div>

      <nav>


        <script>
          function showMobileMenu() {
            $(".websiteMobileMenu--Item").toggleClass("invisible");
          }
        </script>

          <ul id="websitePcMenu">

          <li>
            <a href="#" class="mainMenuItems mobileInvisible">
              <div class="mainMenuItemIcon"><i class="fas fa-user"></i></div>
              <div> <?php echo $user['first_name']; ?>  </div>
            </a>
          </li>
          

          <li> 
          <a href="index.php" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"><i class="fa fa-home fa-lg"></i></div>
            <div class="nav-icon-mobile">Novinky</div>
          </a>
          </li>

          <li> 
          <a href="project.php" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"><i class="fas fa-frog projectContent"></i></div>
            <div class="projectContent">Přehled řešení</div>
          </a>
        </li>

        <li>  
          <a href="tableprojects.php" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"><i class="fas fa-dove projectContent"></i></div>
            <div class="projectContent">Typová řešení</div>
          </a>
        </li>

        <li>  
          <a href="javascript:void(0);" onclick="getDropdownData('<?php echo $userLoggedIn; ?>', 'message')" class="mainMenuItems mobileInvisible"> 
            <div class="mainMenuItemIcon"><i class="fa fa-envelope fa-lg"></i></div>
            <div>Zprávy
              <?php
              if($num_notifications > 0){
                  echo '<span class="notification_badge unread_notification" id="unread_notifications">' . $num_notifications .'</span> ';
              }
              ?>
            </div>        
          </a>
        </li>

        <li>   
          <a href="javascript:void(0);" onclick="getDropdownData('<?php echo $userLoggedIn; ?>', 'notification')" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"><i class="fas fa-eye"></i></div>
            <div>Upozornění
            <?php
            if($num_messages > 0){
                echo '<span class="notification_badge unread_message" id="unread_message">' . $num_messages .'</span> ';
            }
            ?>
            </div>
        </li> 

        <li>
          <a href="requests.php" class="mainMenuItems mobileInvisible"> 
            <div class="mainMenuItemIcon"><i class="fa fa-users fa-lg"></i></div>
            <div>Kontakty
            <?php
            if($num_requests > 0){
                echo '<span class="notification_badge unread_requests" id="unread_requests">' . $num_requests .'</span> ';
            }
            ?>        
            </div>
          </a>
        </li>

        <li>   
          <a href="settings.php" class="mainMenuItems mobileInvisible"> 
            <div class="mainMenuItemIcon"><i class="fa fa-cog fa-lg"></i></div>
            <div>Nastavení</div>
          </a>
        </li>
          
        <li>   
          <a href="#" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"><i class="fas fa-question"></i></div>
            <div>Nápověda</div>
          </a>
        </li>
          
        <li> 
          <a href="contact.php" class="mainMenuItems mobileInvisible"> 
            <div class="mainMenuItemIcon"><i class="far fa-comment"></i></div>
            <div>Správce</div>
          </a>
        </li>
          
        <li>   
          <a href="includes\handlers\logout.php" class="mainMenuItems mobileInvisible">
            <div class="mainMenuItemIcon"> <i class="fa fa-sign-out-alt fa-lg"></i></div>
            <div>Odejít</div>
          </a>
        </li>

        <!--
        <a href="messages.php" class="mainMenuItems mobileInvisible"><i class="far fa-comment-alt"></i></i></a>
        -->
      
        <!--<a href="upload.php" class="mainMenuItems mobileInvisible"> <i class="fa fa-cog fa-lg"></i></a> -->

      </ul>

      <a href="#" id="burgerIcon">
        <span class="burgerIcon--span"> <i class="fas fa-bars" onclick="showMobileMenu();"></i>
      </a>
      
      <ul id="websiteMobileMenu" class="">


        <li class="websiteMobileMenu--Item invisible">
          <a href="#"> 
            <span class="websiteMobileMenu--Icon"> <i class="fas fa-user"></i> </span> 
            <span class="websiteMobileMenu--Description"> <?php echo $user['first_name']; ?> </span>
          </a>
        </li>

        <li class="websiteMobileMenu--Item invisible">
            <a href="index.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fa fa-home fa-lg"></i> </span> 
              <span class="websiteMobileMenu--Description">Novinky</span>
            </a>
          </li> 
      
        <li class="websiteMobileMenu--Item invisible">
            <a href="project.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fas fa-frog projectContent"></i> </span> 
              <span class="websiteMobileMenu--Description projectContent">Přehled řešení</span>
            </a>
        </li>     
      
        <li class="websiteMobileMenu--Item invisible">
            <a href="tableprojects.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fas fa-dove projectContent"></i> </span> 
              <span class="websiteMobileMenu--Description projectContent">Typová řešení</span>
            </a>
        </li>  
      
        <li class="websiteMobileMenu--Item invisible">
            <a  href="javascript:void(0);" onclick="getDropdownData('<?php echo $userLoggedIn; ?>', 'message')"> 
              <span class="websiteMobileMenu--Icon"> <i class="fa fa-envelope fa-lg"></i> </span> 
              <span class="websiteMobileMenu--Description">Zprávy
              <?php
              if($num_notifications > 0){
                  echo '<span class="notification_badge unread_notification" id="unread_notifications">' . $num_notifications .'</span> ';
              }
              ?>          
              </span>
            </a>
        </li>

        <li class="websiteMobileMenu--Item invisible">
            <a href="javascript:void(0);" onclick="getDropdownData('<?php echo $userLoggedIn; ?>', 'notification')"> 
              <span class="websiteMobileMenu--Icon"> <i class="fas fa-eye"></i> </span> 
              <span class="websiteMobileMenu--Description">Upozornění
              <?php
              if($num_messages > 0){
                echo '<span class="notification_badge unread_message" id="unread_message">' . $num_messages .'</span> ';
              }
              ?>
              
              </span>
            </a>
        </li>

        <li class="websiteMobileMenu--Item invisible">
            <a href="requests.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fa fa-users fa-lg"></i> </span> 
              <span class="websiteMobileMenu--Description"> Kontakty
              <?php
              if($num_requests > 0){
                echo '<span class="notification_badge unread_requests" id="unread_requests">' . $num_requests .'</span> ';
              }
              ?> 
              </span>
            </a>
        </li> 
          
        <li class="websiteMobileMenu--Item invisible">
            <a href="settings.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fa fa-cog fa-lg"></i> </span> 
              <span class="websiteMobileMenu--Description">Nastavení</span>
            </a>
        </li> 
      
        <li class="websiteMobileMenu--Item invisible">
            <a href="#"> 
              <span class="websiteMobileMenu--Icon"> <i class="fas fa-question"></i> </span> 
              <span class="websiteMobileMenu--Description">Nápověda</span>
            </a>
        </li> 
      
        <li class="websiteMobileMenu--Item invisible">
            <a href="contact.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="far fa-comment"></i> </span> 
              <span class="websiteMobileMenu--Description">Správce</span>
            </a>
        </li> 
      
        <li class="websiteMobileMenu--Item invisible">
            <a href="includes\handlers\logout.php"> 
              <span class="websiteMobileMenu--Icon"> <i class="fa fa-sign-out-alt fa-lg"></i> </span> 
              <span class="websiteMobileMenu--Description">Odejít</span>
            </a>
        </li> 

      </ul>

      </nav>

      <div class="dropdown_data_window" style="height:0px; border:none;"></div>
        <input type="hidden" id="dropdown_data_type" value="">
    
      </div>
      <!-- test end -->
      </div>
      
    </div>



    <div class="row wrapper">
