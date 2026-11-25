const stamp = document.getElementById("stamp");
if (stamp) {
  const now = new Date();
  stamp.textContent = `Loaded ${now.toLocaleString()}`;
}
