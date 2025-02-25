function toggleMode() {
  const html = document.documentElement
  

  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    document.getElementById("logoo").src = "./.assets/Instagram_logo.svg.png"
    document.getElementById("replace").src =
        "./.assets/svg/moon-stars-svgrepo-com.svg"
  } else {
    html.classList.add("dark")
    document.getElementById("logoo").src =
      "./.assets/instagram-logo-white-version-png-2388x800.png"
      document.getElementById("replace").src = "./.assets/svg/icons8-sun.svg"
       }
}
