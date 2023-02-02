//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var rowCount = 3;
function addStudent(){
  var presentTable = document.getElementById("myTable");
  rowCount++;
  var trNode =  document.createElement("tr");
  trNode.id="rowId";
  var tableRow = presentTable.appendChild(trNode);
  var tableRowdata = document.createElement("td");
  tableRowdata.innerHTML='<input id="box" type="checkbox" onclick="boxWithclick(this)"/><br><br><img src="down.png" width="25px" onclick="arrowWithclick(this)"/>';
  tableRow.appendChild(tableRowdata);


  var studentCell = document.createElement("td");
  studentCell.innerHTML = "Student" + rowCount;
  tableRow.appendChild(studentCell);

  var teacherCell = document.createElement("td");
  teacherCell.innerHTML = "Teacher" + rowCount;
  tableRow.appendChild(teacherCell);

  var approvedCell = document.createElement("td");
  approvedCell.innerHTML = "Approved";
  tableRow.appendChild(approvedCell);

  var fallCell = document.createElement("td");
  fallCell.innerHTML = "Fall";
  tableRow.appendChild(fallCell);

  var taCell = document.createElement("td");
  taCell.innerHTML = "TA";
  tableRow.appendChild(taCell);

  var numberCell = document.createElement("td");
  numberCell.innerHTML = "12345";
  tableRow.appendChild(numberCell);

  var percentCell = document.createElement("td");
  percentCell.innerHTML = "100%";
  tableRow.appendChild(percentCell);

  var detailsOfRow= document.createElement("tr");
  var detailsOfRowData=document.createElement("td");
      detailsOfRowData.innerHTML='Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number: <br/>Tuition Number: <br/>Comments:<br /><br/><br/>Award Status:<br/><br/><br/>';
      detailsOfRowData.colSpan="8";
      detailsOfRow.append(detailsOfRowData); 
      detailsOfRow.style.display ="none";
      alert("Student "+ rowCount  +" Record added successfully");
      presentTable.append(detailsOfRow);


}

var count = 0;

function boxWithclick(checkbox){
  var fullRow=checkbox.parentElement.parentElement;

  if(checkbox.checked==true){
    document.getElementById("button").disabled=false;
    fullRow.style.backgroundColor="yellow";
    var deleteBox2=document.getElementById("deletebox");
    deleteBox2.style.display="revert";
    deleteBox2.style.height="100%";
    var editBox=document.getElementById("editbox");
    editBox.style.display="revert";
    editBox.style.height="100%";

    var deleteButton=document.createElement("td");
    var editButton=document.createElement("td");
    deleteButton.innerHTML=
    '<button id="delete" type="button" onclick="rowDeleteWithclick(this)">Delete</button>';
    fullRow.appendChild(deleteButton);
    editButton.innerHTML=
    '<button id="edit" type="button" onclick="rowEditWithclick(this)">Edit</button>';
    fullRow.appendChild(editButton);
    count++;
  }

  else{
    
    document.getElementById("button").disabled=true;
    document.getElementById("button").style.backgroundColor="gray";
    fullRow.style.backgroundColor="#fff";
    fullRow.deleteCell(9);
    fullRow.deleteCell(8);
  }
  showHeadings();
}

function showHeadings(){
  var table = document.getElementById("myTable");
  var rows = table.rows;
  var isRowSelected = false;
  for(var i=1; i<rows.length; i++){

    if(rows[i].id=="rowId"){
      var child = rows[i].children[0].children[0]; 
      if(child.checked){
        isRowSelected= true;
      }
    }
  }

  if(!isRowSelected){  
    
    var deleteBox1=document.getElementById("deletebox");
    var editBox1=document.getElementById("editbox");
    document.getElementById("button").disabled=true;

    deleteBox1.style.display="none";
    editBox1.style.display="none";
  }
  else{
    document.getElementById("button").style.backgroundColor="orange";

  }
}

function rowDeleteWithclick(d){
  var deleteRow=d.parentElement.parentElement; 

  var checkedRow = deleteRow.children[0].children[0];
  checkedRow.checked=false;
  
  var siblingRow = deleteRow.nextElementSibling;
  siblingRow.remove();
  showHeadings();
  deleteRow.remove();
  document.getElementById("button").style.backgroundColor="gray";
  document.getElementById("button").style.border="gray";

  rowCount--;
  
  alert("Student Record Deleted Successfully");
}

function rowEditWithclick(){
  prompt("Edit the row details");
}

function arrowWithclick(image){
   
  var rowElement = image.parentNode.parentNode;
  var hiddenRow = rowElement.nextElementSibling;
  if(hiddenRow.style.display=='none'){
    hiddenRow.style.display='';
    hiddenRow.colspan='8'
  }
  else{
    hiddenRow.style.display='none';
  }
     
    }