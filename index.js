
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"
                    ,"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
                    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
                    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
                    "<",">",".","?","/"];


s=document.getElementById("pwd1")
d=document.getElementById("pwd2")
function generate(){
    l=[]
    m=[]
     for(i=0;i<15;i++){
        x=Math.floor(Math.random()*90)
        l.push(characters[x])
        p1=l.join('')
      } 
      s.innerText=p1

      for(i=0;i<15;i++){
        x=Math.floor(Math.random()*90)
        m.push(characters[x])
        p2=m.join('')
      } 
      d.innerText=p2

      
}

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("pwd1");


   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}






