// Change Status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

  buttonChangeStatus.forEach((element) => {
    element.addEventListener("click", () => {
      const productId = element.getAttribute("data-id");
      const dataStatus = element.getAttribute("data-status");
      const statusChange = dataStatus === "active" ? "inactive" : "active";
      const action = path + `/${statusChange}/${productId}?_method=PATCH`;
      formChangeStatus.action = action;

      formChangeStatus.submit();
    });
  });
}

// End Change Status
