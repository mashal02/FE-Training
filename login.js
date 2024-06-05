  function help()
  {
    document.getElementById("helptext").style.display = "block";
  }

  function checkempty()
  {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value; 
    if(name == "" || password == "")
    {
      alert("Please fill in all the fields.");
      return false;
    }
    else
    {
      return true;
    }
    
  }

function login() {
//  if(checkempty()) {
      user = document.getElementById("name").value;
      pw = document.getElementById("password").value;
      console.log("check")
      console.log(user + " " + pw );
      fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      })
    })
.then(res => res.json())
.then(console.log);

return false;
    //   let response = fetch('https://dummyjson.com/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       username: user,
    //       password: pw,
    //       expiresInMins: 30, // optional, defaults to 60
    //     })
    //   }).then(response.json()
    // ).then(data.json());

  }