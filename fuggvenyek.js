export function htmlOsszeAllit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    txt += `<div class ="kep"><img src="${element.kep}" alt="${element.cim}"></div>`;
  }
  return txt;
}
export function kepValtas() {
    
}
