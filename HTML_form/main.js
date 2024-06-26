document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", submitForm);

  async function submitForm(e) {
    e.preventDefault();

    let error = formValidate(form);
    if (error === 0) {
    } else {
      console.log("Error");
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
console.log(formReq);
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } 
       if (input.value === "") {
        formAddError(input);
        error++;
        console.log(input);
      }
      if (input.type === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      }

    
    }
    if (error > 0) {
        return error;
      } else {
        return 0;
      }
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
