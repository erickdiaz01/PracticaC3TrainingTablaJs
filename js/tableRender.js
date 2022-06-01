import { data } from "./data.js";
import { sortColums } from "./sortTable.js";

export const tableRender = () => {
  const container = document.querySelector("#container");

  const table = document.createElement("table");
  table.classList.add("dataTable");

  const tableHead = document.createElement("thead");
  const registerHead = document.createElement("tr");
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Nombre";
 
  const lastNameHeader = document.createElement("th");
  lastNameHeader.textContent = "Apellido(s)";

  const ageHeader = document.createElement("th");
  ageHeader.textContent = "Edad";

  const emailHeader = document.createElement("th");
  emailHeader.textContent = "Correo electronico";

  const phoneHeader = document.createElement("th");
  phoneHeader.textContent = "Telefono";


  registerHead.append(
    nameHeader,
    lastNameHeader,
    ageHeader,
    emailHeader,
    emailHeader,
    phoneHeader
  );
  tableHead.append(registerHead);
  table.append(tableHead);

  data.forEach((persona) => {
    const rowTable = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = persona.nombre;
    const lastName = document.createElement("td");
    lastName.textContent = persona.apellidos;
    const age = document.createElement("td");
    age.textContent = persona.edad;
    const email = document.createElement("td");
    email.textContent = persona.email;
    const phoneNumber = document.createElement("td");
    phoneNumber.textContent = persona.telefono;

    rowTable.append(name, lastName, age, email, phoneNumber);
    table.append(rowTable);
  });

  container.append(table);
  nameHeader.addEventListener("click", 
  function(){sortColums(0, "str");
  }
 );
  lastNameHeader.addEventListener("click", function(){sortColums(1, "str");
});
  ageHeader.addEventListener("click", function(){sortColums(2, "num");
});
  emailHeader.addEventListener("click", function(){sortColums(3, "str");
});
  phoneHeader.addEventListener("click", function(){sortColums(4, "str");
});
  let tabla = document.querySelector(".dataTable");
  console.log(tabla.rows);
};
