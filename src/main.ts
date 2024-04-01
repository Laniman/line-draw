import "./style.css";

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const documentHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollPercentage = (
    scrollPosition /
    (documentHeight - windowHeight)
  ).toFixed(2);

  const offsetPercentage = -100 + Number.parseFloat(scrollPercentage) * 100;
  const offsetValue = `${offsetPercentage}`;

  document.documentElement.style.setProperty("--offset", offsetValue);
});
