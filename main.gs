function doPost(e) {
  const postdata = JSON.parse(e.postData.contents);
  let jsondata = JSON.stringify(postdata);
  catchFunc(jsondata);
  return ContentService.createTextOutput("connect");
}


function catchFunc(jsonCatchData) {
  const sheetId = "1DK9zRbegt_gYPmwTB5TBrxoKEdbHb98JgHb9D9glV-c";
  const sheet = SpreadsheetApp.openById(sheetId);
  
  sendData = JSON.parse(jsonCatchData);
  const size = Object.keys(sendData).length;
  let today = Object.keys(sendData);
  for(let i = 0; i< size;i++){
    let allData = sendData[today[i]];
    console.log(allData);
    var time = allData.time;
    var check = allData.check;
    var ID = allData.ID;
    sheet.appendRow([today[i],time,check,ID]);
  }
}
