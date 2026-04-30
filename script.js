function downloadSecret() {
  const link = document.createElement("a");
  link.href = "Secret.zip"; // file asli ada di folder project
  link.download = "Secret.zip";
  link.click();
}
