class Programmer{
  constructor(name, language = "Ruby"){
    this.name = name;
    this.language = language;
  }

   evangelize() {
      var string = `${ this.name }: ${ this.language.toUpperCase() } IS THE BEST LANGUAGE EVER`
      return string
    }
}

bestLanguages = ["Ruby", "Elixir"]

export function addJavaScript(languageArray){
  var newArray = languageArray.slice(0);
  newArray.push('JavaScript');
  return newArray;
}

export var bestLanguages;
export default Programmer;
