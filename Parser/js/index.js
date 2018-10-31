function handleFiles(files) {
  if (window.FileReader) {
    getAsText(files[0]);
  }
}

function getAsText(fileToRead) {
  var reader = new FileReader();
  reader.readAsText(fileToRead);
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);
}

function processData(csv) {
  var allTextLines = csv.split(/\r\n|\n/);
  var lines = [];
  for (var i = 0; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(",");
    var tarr = [];
    for (var j = 0; j < data.length; j++) {
      k;
      tarr.push(data[j]);
    }
    lines.push(tarr);
  }
  console.log(lines);
}

function errorHandler(evt) {
  if (evt.target.error.name == "NotReadableError") {}
}