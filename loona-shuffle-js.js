function shuffle() {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Sorts array arr so all elements are in randomized order
  arr.sort(() => Math.random() - 0.5);

  console.log(arr);

  // Output images to the <div id = "table">
  table = document.getElementById("table");
  
  table.innerHTML = "";

  table_r = document.createElement("tr");

  table.appendChild(table_r);

  // Loop that will construct table and add images
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    
    table_d = document.createElement("td");

    table_d.innerHTML = "<img src='img/"+ arr[i] +".jpg' class='character' width='100px'/>";

    table_r.appendChild(table_d);
  }
}
