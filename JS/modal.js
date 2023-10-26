//  giving function to the signup btn

document.getElementById('btn').addEventListener('click',()=>{



    var name= document.getElementById('name').value;
    var pass= document.getElementById('pass').value;
     
    //  saving item in localstorage
    localStorage.setItem('username',name)
    localStorage.setItem('password',pass)})
     

    //  giving function to the login btn

    document.getElementById('btn2').addEventListener('click',()=>{

// getting data from localstorage

var username=localStorage.getItem('username')
var password=localStorage.getItem('password')

// grabbing value from user input


var user= document.getElementById('loginname').value;
var pass= document.getElementById('loginpass').value;

if(username == user && password == pass)
{document.getElementById('correct').innerHTML= 'Login successfully'
document.getElementById('wrong').innerText= ''

}

else 
{
    document.getElementById('wrong').innerText= 'Incorrcet Username or password'
    document.getElementById('correct').innerText= ''
}
 })

// convert Password into text
document.getElementById('show').addEventListener('click',()=>{
var convertpass= document.getElementById('loginpass');

if( convertpass.type=='password'){
    convertpass.type='text'
}
else{
    convertpass.type='password'
}

})