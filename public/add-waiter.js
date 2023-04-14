let waiterForm = document.getElementById("add-waiter");

waiterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = waiterForm.elements["name"].value;
  let inputLastName = waiterForm.elements["last-name"].value;
  const data = { name: inputName, lastName: inputLastName };
  
  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/waiters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success: ", result);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  
  postJSON(data);
});