function copyDiscord() {
    const el = document.createElement("textarea");
    el.value = "NoxLoveYa#5666";
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert(
      "copied the discord tag in your clipboard, go add me if you want !"
    );
  }