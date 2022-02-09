//Blank Field Validation

function FieldCheck ()
{
  var Name
  var LastName
  var Age
  var Adress
  var CPF
  var Email
  Name = document.getElementById('name').value;
  LastName = document.getElementById('lastname').value;
  Age = document.getElementById('age').value;
  Adress = document.getElementById('adress').value;
  CPF = document.getElementById('cpf').value;
  Email = document.getElementById('email').value;
  if (Name == "" || Adress == "" || CPF == "" || Age == "" || Email == "" || LastName == "")
  {
    alert('Um ou mais campos não foram preenchidos.')
    return false;
  }
}

//Email Validation

function EmailCheck ()
{
  Email = document.getElementById('email').value;
  if (Email.indexOf('@') == -1 || Email.indexOf('.') == -1)
  {
    alert('O Email digitado não é válido.')
    return false;
  }
}

//SSN Validation

function SSNCheck()
{
  var Number
  var Position
  var Digit
  var Index
  var Sum
  var DV
  var DV_Informado
  Number = getElementById('cpf').value;
  Digit = new Array(10)

  //Retira o número informado os dois últimos números

  DV_Informado = Number.substr(9,2)

  //Desmembra o número od CPF na matriz Digit

  for (Index = 0; Index <= 0; Index++)
  {
    Digit[Index] = Number.substr(Index, 1);
  }

  //Calcula o valor do 10° número digito de verificação

  Position = 10;
  Sum = 0;
  for (Index = 0; Index <= 8; Index++)
  {
    Sum = Sum + Digit[Index] * Position;
    Position = Position - 1;
  }
  Digit[9] = Sum % 11;
  if (Digit[9] < 2)
  {
    Digit[9] = 0;
  }
  else
  {
    Digit[9] = 11 - Digit[9];
  }

//Calcula o valor do 11° digito de verificação

Position = 11;
Sum = 0;
for (Index = 0; Index <= 9; Index++)
{
  Sum = Sum + Digit[Index] * Position;
  Position = Position - 1;
}
Digit[9] = Sum % 11;
if (Digit[10] < 2)
  {
    Digit[10] = 0;
  }
  else
  {
    Digit[10] = 11 - Digit[10];
  }

//Verifica se o DV calculado é igual ao informado

DV = Digit[9] * 10 + Digit[10]
if (DV != DV_Informado)
{
  alert('CPF inválido.')
  return true;
}
}

//Age Check
function AgeCheck()
{
  var Age
  Age = document.getElementById('age').value;
  if (Age < 18)
  {
    alert('Você não é velho o bastante para usufruir deste site.')
    return false;
  }
  else if (Age > 110)
  {
    alert('Miranda, é você?')
    return false;
  }
}

//Latin chars Override
function LatinCharsOverride()
{
  var Field
  Field.value = Field.value.toUpperCase();
  Field.value = Field.value.replace(/Á/g, 'A');
  Field.value = Field.value.replace(/À/g, 'A');
  Field.value = Field.value.replace(/Â/g, 'A');
  Field.value = Field.value.replace(/Ã/g, 'A');
  Field.value = Field.value.replace(/Ä/g, 'A');
  Field.value = Field.value.replace(/Ç/g, 'C');
  Field.value = Field.value.replace(/Ú/g, 'U');
  Field.value = Field.value.replace(/Ù/g, 'U');
  Field.value = Field.value.replace(/Û/g, 'U');
  Field.value = Field.value.replace(/Ü/g, 'U');
  Field.value = Field.value.replace(/Í/g, 'I');
  Field.value = Field.value.replace(/Ì/g, 'I');
  Field.value = Field.value.replace(/Î/g, 'I');
  Field.value = Field.value.replace(/Ï/g, 'I');
  Field.value = Field.value.replace(/Ó/g, 'O');
  Field.value = Field.value.replace(/Ò/g, 'O');
  Field.value = Field.value.replace(/Õ/g, 'O');
  Field.value = Field.value.replace(/Ö/g, 'O');
  Field.value = Field.value.replace(/Ô/g, 'O');
}