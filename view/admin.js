let list = document.getElementById("list");

fetch("http://localhost:3000/3527")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      let name = data[i].split(":")[0];
      let Msg = data[i].split(":")[1];
      let item = `<div class="item">
                  <div class="title">
                  <h1>${name}</h1>
                  </div>
                  <div>${Msg}</div>
                  </div>
`;
list.innerHTML+=item
    }
  });
