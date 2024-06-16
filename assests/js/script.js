"use strict";

const users = [
                  {
                    username:'Nijanthan',
                    password:'niji@123',
                    id:1,
                  },
                  {
                    username:'Ragavan',
                    password:'raghav@123',
                    id:2,
                  },
                  {
                    username:'Ezhumalai',
                    password:'ezhumalai@123',
                    id:3,
                  }

              ]

const form = document.forms['form'];
form.addEventListener('submit',function(e){
  e.preventDefault();
  let username = form['username'].value;
  let password = form['password'].value;

  const curUser = users.filter(user=>{
      return user.username === username && user.password === password;
  })

  if(curUser.length !== 0){
    alert(`Logged in as ${curUser[0].username}`)
    form['username'].value = '';
    form['password'].value = '';
  }
  else{
    alert('Username or Password incorrect !')
  }
})
