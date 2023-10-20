
## Membuat login Member menjadi default
Edit file login.html di baris 14 menjadi 
```
<body onload="member();">
```

## Input otomatis huruf kecil (auto lowercase) mode voucher dan member
Edit file login.html mulai baris 120 -> 148
```
// set password = username
function setpass(){
  var user = username.value		
  password.value = user;
}
username.onkeyup = setpass; 
// change to voucher mode
function voucher(){
  username.focus();
  username.onkeyup = setpass;
  username.placeholder = "Voucher Code";
  username.style = "border-radius:3px;"
  password.type = "hidden";
  infologin.innerHTML  = "Enter the Voucher Code then click login.";
}
// change to member mode
function member(){
  username.focus();
  username.onkeyup = "";
  username.placeholder = "Username";
  username.style = "border-radius:3px 3px 0px 0px;"
  password.type = "password";	
  infologin.innerHTML  = "Enter Username and Password then click login.";
}
//-->


```
menjadi
```
//set lowercase
function setlower(){
var cekMode = password.type;
if (cekMode === "hidden"){
  var user = username.value 
  user = user.toLowerCase();
  username.value = user;  
  password.value = user;
} else if (cekMode === "password"){
  var user = username.value 
  user = user.toLowerCase();
  username.value = user;
} 
}

username.onkeyup = setlower;

// change to voucher mode
function voucher(){
  username.focus();
  username.placeholder = "Voucher Code";
  username.style = "border-radius:3px;"
  password.type = "hidden";
  password.value = username.value;
  infologin.innerHTML  = "Enter the Voucher Code then click login.";
}

// change to member mode
function member(){
  username.focus();
  username.placeholder = "Username";
  username.style = "border-radius:3px 3px 0px 0px;"
  password.type= "password";
  password.value = "";
  infologin.innerHTML  = "Enter Username and Password then click login.";
}
//-->

```
## Fitur QR Code Scanner

To use the QR CODE SCANNER feature, you need to add the following script in MikroTik via Terminal.
```
/ip hotspot walled-garden ip

add action=accept comment="Mikhmon QR Code Scanner" disabled=no dst-host=laksa19.github.io

```
Centang HTTP PAP di hotspot server profile.
