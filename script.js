function toggleMode() {
  const html = document.documentElement
  document.getElementById("switch").addEventListener("click", function () {
    this.name = this.name === "sunny-outline" ? "moon-outline" : "sunny-outline"
  })

  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    document.getElementById("logoo").src = "./.assets/Instagram_logo.svg.png"
  } else {
    html.classList.add("dark")
    document.getElementById("logoo").src =
      "./.assets/instagram-logo-white-version-png-2388x800.png"
  }
}
