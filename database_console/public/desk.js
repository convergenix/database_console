// // dom ready
// document.addEventListener("DOMContentLoaded", (event)=>{
//     // Add knowledge base to help button
//     extraHelBTN();
//   });
  
  
//   // KNOWLEDGE BASE
//   let extraHelBTN = () => {
//     // Add knowledge base to help button
//    let helpbtn = $('#toolbar-help')[0];
//    let shringDB = document.createElement('a');
//    shringDB.id="shringdb";
//    shringDB.className = "dropdown-item";
//    shringDB.href="javascript:void(0)";
//    shringDB.innerText = "Shrink Database";
//    console.log(helpbtn)
// //    console.log($('#toolbar-help'))
//    helpbtn.appendChild(shringDB);
//    shringDB.onclick = ()=>{
//     frappe.confirm('Are you sure you want to proceed?',
//     () => {
//         // action to perform if Yes is selected
//         frappe.call({
//             method: "database_console.utils.clear_emails_and_errors",
//             type: "GET",
//             callback: function(r) {
//                 frappe.msgprint(r.message)
//             },
//             freeze: true,
//             freeze_message: "Shrinking Database",
//             async: true
//         });        
//     }, () => {
//         // action to perform if No is selected
//     })
//    }
//   }


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      // Add knowledge base to help button
      const helpbtn = document.querySelector("#toolbar-help");
      if (helpbtn) {
        const shringDB = document.createElement("a");
        shringDB.id = "shringdb";
        shringDB.className = "dropdown-item";
        shringDB.textContent = "Shrink Database";
        shringDB.href = "#";
  
        helpbtn.appendChild(shringDB);
  
        shringDB.addEventListener("click", () => {
          frappe.confirm("Are you sure you want to proceed?", () => {
            shrinkDatabase();
          }, () => {
            // action to perform if No is selected
          });
        });
      } else {
        console.warn("Element with ID 'toolbar-help' not found in the DOM");
      }
    }, 5000); // Delay execution by 5 seconds
  });
  
  function shrinkDatabase() {
    frappe.call({
      method: "database_console.utils.clear_emails_and_errors",
      type: "GET",
      callback: (r) => {
        frappe.msgprint(r.message);
      },
      freeze: true,
      freeze_message: "Shrinking Database",
      async: true,
    });
  }