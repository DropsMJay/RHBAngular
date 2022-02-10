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