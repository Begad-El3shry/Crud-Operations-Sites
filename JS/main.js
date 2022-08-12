var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var supmitBtn=document.getElementById("supmitBtn");
var showSites=document.getElementById("showSites");
var inputs=document.getElementsByClassName("catch")
var sites=[];


if(JSON.parse(localStorage.getItem("sitesList")!=null)){
   sites=JSON.parse(localStorage.getItem("sitesList"));
   disPlayData();
}
function addSite(){
    var newSite=
    {
       name:siteName.value,
       url:siteUrl.value,
    }
    sites.push(newSite);
    localStorage.setItem("sitesList",JSON.stringify(sites));
}
function disPlayData(){
    var divs='';
     for(var i=0 ; i<sites.length ;i++ ){
         divs+=`<div class="d-flex justify-content-between align-content-center site mx-5 mb-3">
                <h2 >${sites[i].name}</h2>
                <div>
                <a class="btn btn-warning mx-3" href="http://${sites[i].url}" target="_blank">Visit</a>
                <button onclick="deleteSite(${i})"  class="btn btn-danger mx-3">Delete</button>
                </div>
              </div>`
     }
     document.getElementById("showSites").innerHTML=divs;
}
function clearForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
supmitBtn.onclick=function(){
    addSite();
    disPlayData();
    clearForm();
}
function deleteSite(index){
    sites.splice(index,1);
    localStorage.setItem("sitesList",JSON.stringify(sites));
    disPlayData();
}

