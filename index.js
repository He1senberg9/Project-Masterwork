function getById(id) {
  return document.getElementById(id);
}
function getByClass(c) {
  return document.getElementsByClassName(c);
}
function expandHeader() {
  var container = getById("container_id");
  var navbar = getById("navbar_id");
  var cancel = getById("cancel_");
  var expand = getById("expand_");
  var button = getById("nav_button");
  var nav = getByClass("nav_");

  for (var i = 0; i < nav.length; i++) {
    nav[i].classList.add("show_margin");
  }
  container.classList.add("show_container");
  navbar.classList.add("show_navbar");
  button.classList.add("show_margin");
  cancel.classList.add("high_z");
}
function cancelHeader() {
  var container = getById("container_id");
  var cancel = getById("cancel_");
  var expand = getById("expand_");

  container.classList.remove("show_container");
  cancel.classList.remove("high_z");
}
function toggle_dropdown() {
  getById("drop_menu").classList.toggle("show_dropdown");
}

