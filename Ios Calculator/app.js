// DOM Elements
const Sonuc = document.querySelector('.Sonuc');

const AC = document.querySelector('.ac');
const Eksi_Artı = document.querySelector('.eksi_artı');
const Yuzde_100 = document.querySelector('.yuzde_100');

const Topla = document.querySelector('.topla');
const Eksilt = document.querySelector('.eksilt');
const Carpma = document.querySelector('.carpma');
const Bölme = document.querySelector('.bölme');
const Esittir = document.querySelector('.esittir');

const Ondalık = document.querySelector('.ondalık');
const sayi_0 = document.querySelector('.sayi_0');
const sayi_1 = document.querySelector('.sayi_1');
const sayi_2 = document.querySelector('.sayi_2');
const sayi_3 = document.querySelector('.sayi_3');
const sayi_4 = document.querySelector('.sayi_4');
const sayi_5 = document.querySelector('.sayi_5');
const sayi_6 = document.querySelector('.sayi_6');
const sayi_7 = document.querySelector('.sayi_7');
const sayi_8 = document.querySelector('.sayi_8');
const sayi_9 = document.querySelector('.sayi_9');
const numberElArray = [
  sayi_0, sayi_0, sayi_2, sayi_3, sayi_4,
  sayi_5, sayi_6, sayi_7, sayi_8, sayi_9
];


// variables
let Bellekteki_değer = null;
let Bellekteki_işlem = null;


// Functions
const getValueAsStr = () => Sonuc.textContent.split(',').join('');

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const Değeri_Ayarla = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    Sonuc.textContent += '.';
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    Sonuc.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    Sonuc.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const Geçerli_Değer = getValueAsStr();
  if (Geçerli_Değer === '0') {
    Değeri_Ayarla(numStr);
  } else {
    Değeri_Ayarla(Geçerli_Değer + numStr);
  }
};

const Sonuc_İşemi = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(Bellekteki_değer);
  let newValueNum;
  if (Bellekteki_işlem === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (Bellekteki_işlem === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (Bellekteki_işlem === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (Bellekteki_işlem === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const Basılan_İşlem = (operation) => {
  const Geçerli_Değer = getValueAsStr();

  if (!Bellekteki_değer) {
    Bellekteki_değer = Geçerli_Değer;
    Bellekteki_işlem = operation;
    Değeri_Ayarla('0');
    return;
  }
  Bellekteki_değer = Sonuc_İşemi();
  Bellekteki_işlem = operation;
  Değeri_Ayarla('0');
};




// Add Event Listeners to functions
AC.addEventListener('click', () => {
  Değeri_Ayarla('0');
  Bellekteki_değer = null;
  Bellekteki_işlem = null;
});
Eksi_Artı.addEventListener('click', () => {
  const Geçerli_Sayi = getValueAsNum();
  const Geçerli_değer = getValueAsStr();

  if (Geçerli_değer === '-0') {
    Değeri_Ayarla('0');
    return;
  }
  if (Geçerli_Sayi >= 0) {
    Değeri_Ayarla('-' + Geçerli_değer);
  } else {
    Değeri_Ayarla(Geçerli_değer.substring(1));
  }
});
Yuzde_100.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  Değeri_Ayarla(newValueNum.toString());
  Bellekteki_değer = null;
  Bellekteki_işlem = null;
});


// add event listeners to operators
Topla.addEventListener('click', () => {
  Basılan_İşlem('addition');
});
Eksilt.addEventListener('click', () => {
  Basılan_İşlem('subtraction');
});
Carpma.addEventListener('click', () => {
  Basılan_İşlem('multiplication');
});
Bölme.addEventListener('click', () => {
  Basılan_İşlem('division');
});
Esittir.addEventListener('click', () => {
  if (Bellekteki_değer) {
    Değeri_Ayarla(Sonuc_İşemi());
    Bellekteki_değer = null;
    Bellekteki_işlem = null;
  }
});


// Add Event Listeners to numbers and decimal
for (let i=0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}
Ondalık.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    Değeri_Ayarla(currentValueStr + '.');
  }
});