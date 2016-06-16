# ShowHide-Password-jQuery
Show and hide password is a jQuery plugin.  It is a responsive version and allows user to see password by clicking the checkbox. 

#Demo
A demo can be found at 'index.html' in this repository.

#Features
- Show or hide password
- Lightweight
- Support Browser: IE11, Firefox, Safari, Chrome

#Setup

#Include the stylesheet in the head section of your webpage
    <link href="css/styles.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/font-awesome.css" type="text/css">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />  

#Include the script at the bottom of the body of your webpage
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
    
#Following is an example section that you could apply this plugin:
    <form class="form-signin">
        <div class="form-group">
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        </div>
        <div class="form-group">
            <input type="password" id="password" class="form-control" placeholder="Password" required="">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" id="showHide" value="remember-me"> Show Password
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form> 


