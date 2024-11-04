module.exports = (query) => {
  let numPage = query.page ? parseInt(query.page) : 0;

  let filterPagination = [
    {
      name: "Trang trước",
      page: numPage > 0 ? numPage - 1 : 0,
      class: "",
    },
    {
      name: numPage,
      page: numPage,
      class: "",
    },
    {
      name: numPage + 1,
      page: numPage + 1,
      class: "",
    },
    {
      name: numPage + 2,
      page: numPage + 2,
      class: "",
    },
    {
      name: "Trang sau",
      page: numPage + 1,
      class: "",
    },
  ];

  if (query.page) {
    const index = filterPagination.findIndex((item) => item.page == numPage);
    if (index !== -1) {
      filterPagination[index].class = "active";
    }
  }

  return filterPagination;
};
