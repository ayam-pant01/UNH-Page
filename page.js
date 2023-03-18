document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "https://api.myjson.online/v1/records/f0c90237-df0e-48ef-a6a1-10afe11429d0"
  );
  const resData = await response.json();
  let timelineData = resData.data.timlineData;
  const container = document.getElementById("contentLoad");
  for (let i = 0; i < timelineData.length; i++) {
    const div = document.createElement("div");
    div.classList.add("container", "right");
    const divcontent = document.createElement("div");
    divcontent.classList.add("content");
    div.appendChild(divcontent);
    const h3 = document.createElement("h3");
    const text = document.createTextNode(timelineData[i].date);
    h3.appendChild(text);
    const p = document.createElement("p");
    const text2 = document.createTextNode(timelineData[i].title);
    p.appendChild(text2);
    divcontent.appendChild(h3);
    divcontent.appendChild(p);
    container.appendChild(div);
  }
});
