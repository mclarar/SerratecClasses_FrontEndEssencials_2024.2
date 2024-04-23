function handleSubmit(e) {
   e.preventDefault();
   let formData = new FormData(e.currentTarget);

   let nome = formData.get("nome");
   let genero = formData.get("genero");
   let raca = formData.get("raca");
   let classe = formData.get("classe");
   let historia = formData.get("historia");

   confirm(
      `Confirme suas informações:\n
      ${nome}
      ${genero === "m" ? "Masculino" : genero === "f" ? "Femenino" : "Sem gênero pra mim, obrigado"}
      ${titlefyValue(raca)}
      ${titlefyValue(classe)}
      ${encurtaTexto(historia)}`
   );
}

function racaAleatoria() {
   let races = document.getElementById("raca");
   let racescount = 25;
   let racesArray = [];

   for (let i = 0; i < racescount; i++) {
      const el = races[i];
      racesArray.push(el.value);
   }

   let randomIndex = Math.floor(Math.random() * racesArray.length);

   selectValue("raca", racesArray[randomIndex]);
}

function classeAleatoria() {
   let classes = document.getElementById("classe");
   let classesArray = classes.textContent.match(/\S+/gm); //regex 101
   let randomIndex = Math.floor(Math.random() * classesArray.length);

   selectValue("classe", classesArray[randomIndex]);
}

/**
 * Seleciona o atributo value de um elemento HTML
 *
 * @param {string} id ID do elemento que deseja atribuir valor
 * @param {string} value String value que deseja atribuir ao elemento
 */
function selectValue(id, value) {
   let selectedElement = document.getElementById(id);

   selectedElement.value = value.toLowerCase();
}

/**
 *Verifica se o parametro texto é maior que o length escolhido e retorna a string encurtada.
 * @param {string} texto texto a ser encurtado
 * @param {number} length number representando o tamanho limite do parametro texto
 * @returns {string} Texto encurtado caso passe caso passe do length escolhido.
 * @default length 25
 */
function encurtaTexto(texto, length = 25) {
   let textoReturn = texto.length > length ? texto.substring(0, length) : texto;

   return textoReturn.concat("...");
}

/**
 *Capitaliza e substituí todos os "-" por espaços " " da String value
 * @param {string} value
 * @returns {string} 
 */
function titlefyValue(value) {
   let titlefiedValue = "";
   let multiPalavra = value.includes("-");

   if (multiPalavra) {
      let valueArray = value.split("-");

      for (const word of valueArray) {
         let capitalizedWord = capitalize(word);

         titlefiedValue.concat(capitalizedWord + " ");
      }
   } else {
      titlefiedValue = capitalize(value);
   }
   titlefiedValue.trimEnd();

   return titlefiedValue;
}

function capitalize(string){
   let capitalizedString = string.replace(string.charAt(0), string.charAt(0).toUpperCase());

   return capitalizedString
}
