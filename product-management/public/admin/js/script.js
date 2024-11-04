// Button Status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
  let url = new URL(window.location.href);
  buttonStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
}
// End Button Status

// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;

    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
// End Form Search

// Pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination) {
  let url = new URL(window.location.href);
  buttonPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");
      url.searchParams.set("page", page);

      window.location.href = url.href;
    });
  });
}
// End Pagination

// CheckBox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");
  if (inputCheckAll) {
    inputCheckAll.addEventListener("click", () => {
      if (inputCheckAll.checked) {
        inputsId.forEach((inputId) => {
          inputId.checked = true;
        });
      } else {
        inputsId.forEach((inputId) => {
          inputId.checked = false;
        });
      }
    });
  }
  if (inputsId) {
    inputsId.forEach((inputId) => {
      inputId.addEventListener("click", () => {
        const countChecked = checkboxMulti.querySelectorAll(
          "input[name='id']:checked"
        ).length;
        if (inputsId.length == countChecked) {
          inputCheckAll.checked = true;
        } else {
          inputCheckAll.checked = false;
        }
      });
    });
  }
}
// End CheckBox Multi

// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    // Ngăn ngừa hành động mặc định
    e.preventDefault();
    const checkboxMulti = document.querySelector("[checkbox-multi]");
    if (checkboxMulti) {
      const inputsChecked = checkboxMulti.querySelectorAll(
        "input[name='id']:checked"
      );
      if (inputsChecked.length > 0) {
        let ids = [];
        const inputIds = formChangeMulti.querySelector("input[name='ids']");
        inputsChecked.forEach((input) => {
          ids.push(input.getAttribute("value"));
        });
        inputIds.value = ids.join(", ");
        formChangeMulti.submit();
      } else {
        alert("Vui lòng chọn ít nhất 1 bản ghi");
      }
    }
  });
}
// End Form Change Multi
