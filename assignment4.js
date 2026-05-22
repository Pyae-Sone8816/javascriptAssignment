for (let i = 0; i <= 2; i++) {
  let char = "";
  for (let x = 0; x <= 4; x++) {
    char += " *";
  }
  if (i == 1) {
    console.log("  " + char);
  } else {
    console.log(char);
  }
}
