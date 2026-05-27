for (let i = 0; i <= 4; i++) {
  let char = "";
  if (i % 2 === 1) {
    char = " ";
  }
  for (let x = 0; x <= 4; x++) {
    char += " *";
  }

  console.log(char);
}
