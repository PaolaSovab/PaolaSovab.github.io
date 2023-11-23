const name = document.querySelector("#name");
const id = document.querySelector("#id");
const carType = document.querySelector("#carType");
const desc = document.querySelector("#desc");
const btn = document.querySelector(".btn");

const output = document.querySelector(".output");

btn.onclick = () => {
  const values = {
    name: name.value,
    id: id.value,
    carType: carType.value,
    desc: desc.value,
  };

  if (
    name.value == "" ||
    id.value == "" ||
    carType.value == "" ||
    desc.value == ""
  ) {
    alert("No pueden haber campos vacios!");
    return;
  }

  output.innerHTML += `
    <tr>
      <td>${values.name}</td>
      <td>${values.id}</td>
      <td>${values.carType}</td>
      <td>${values.desc}</td>
    </tr>
  `;
  name.value = "";
  id.value = "";
  carType.value = "";
  desc.value = "";

};
