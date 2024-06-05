function help()
{
  alert("Please enter your email address, name, password, confirm password, date of birth and agree to the terms and conditions to sign up.");
}

function checkempty()
{
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value; 
  var password2 = document.getElementById("password2").value;
  var dob = document.getElementById("dob").value;
  if(email == "" || name == "" || password == "" || password2 == "" || dob == "" || document.getElementById("checkbox").checked == false)
  {
    alert("Please fill in all the fields.");
    return false;
  }
  else
  {
    return true;
  }
  
}

// username = document.getElementById("email").value;
// password = document.getElementById("password").value;

// let p=fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
//   })
// })
// .then(res => res.json())
// .then(console.log);