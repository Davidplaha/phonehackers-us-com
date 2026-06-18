const rows = document.querySelectorAll(".table-row:not(.table-head)");

rows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    row.style.background = "rgba(12, 138, 132, .08)";
  });

  row.addEventListener("mouseleave", () => {
    row.style.background = "";
  });
});
