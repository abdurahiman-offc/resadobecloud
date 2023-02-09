  // function hide1() {
  //   const box1 = document.querySelector('#box1');
  //   if (box1.style.display === "none") {
  //     // box.style.display = "flex"
  //    box1.style.display = "flex";
  //     // box.style.padding="10px"
  //   } else {
  //     box1.style.display = "none";
  //   }
  // }

  const body = document.getElementById("body");
body.addEventListener("click", hide2);
    

  function hide2() {
    const box1 = document.querySelector('#box1');
    if (box1.style.display === "none") {
      // box.style.display = "flex"
     box1.style.display = "flex";
      // box.style.padding="10px"
    } else {
      box1.style.display = "none";
    }
  }

  function hide3() {
    const box2 = document.querySelector('#box2');
    if (box2.style.display === "none") {
      // box.style.display = "flex"
     box2.style.display = "block";
      // box.style.padding="10px"
    } else {
      box2.style.display = "none";
    }
  }

