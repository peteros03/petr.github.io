
  function prompt() {
    const li = document.createElement("li");
    var inputValue = document.getElementById("new_member").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') {
      alert("fill all the fields to continue")
    } else {
      document.getElementById("member_list").appendChild(li)
    }
    document.getElementById("new_member").value = ""
  }
  function show_hide(){
    var a;
    a=document.ShowElementByClass("menu-list");
    
  }
