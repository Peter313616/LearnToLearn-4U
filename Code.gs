/*
* Peter McEwen
* February 26, 2019
* find parts of quadratic function
*/
var aValue = 0.00;
var bValue = 0.00;
var cValue = 0.00;
var sheet = SpreadsheetApp.getActive();

function onOpen() {
  var menuItems = [
    {name: 'Prepare sheet...', functionName: 'prepareSheet_'},
    {name: 'Generate step-by-step...', functionName: 'generateStepByStep_'},
  ];
  sheet.addMenu('Parabola Solver', menuItems);
}

function prepareSheet_() {
  var headers = [
    'standard form equation',
    'vertex form',
    'factored form',
    'vertex',
    'zeroes',];
  var initialData = ['41x2 + 7x + 18'];
  sheet.getRange('A1:E1').setValues([headers]).setFontWeight('bold');
  sheet.getRange('A2').setValues([initialData]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumn(1);
  sheet.autoResizeColumn(2);
  sheet.autoResizeColumn(3);
  sheet.autoResizeColumn(4);
  sheet.autoResizeColumn(5);
}

function CalculateVertexForm(userInput) {
  aValue = userInput.substring(0,userInput.indexOf('x'));
  bValue = userInput.substring(userInput.indexOf('+') + 1, userInput.lastIndexOf('x'));
  cValue = userInput.substring(userInput.lastIndexOf('x') + 3);
  
  var vertXvalue = (bValue / aValue) / 2;
  var ZeroPair = vertXvalue * vertXvalue;
  var vertYvalue = (aValue * (-1 * ZeroPair));
  vertYvalue = vertYvalue - (-1 * cValue);
  
  return aValue + '(x + ' + vertXvalue + ')^2 + ' + vertYvalue;
}
