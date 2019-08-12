document.getElementById("bt1").addEventListener("click",getdata);

function getdata()
{
    localStorage.setItem("Name","sanjeet");
    localStorage.setItem("password","12345");
    localStorage.setItem("email","gamerz1080@gmail.com");
    alert("Data Is Saved In Local Storage");
}
    
    /*

function setdata()
{
    alert(localStorage.getItem("Name"));
    alert(localStorage.setItem("password"));
    alert(localStorage.setItem("email"));
    
}*/