console.log('detected point2homes')
console.log(11)
var roomDetails = $('.details-info-popup table')
console.log(12)
console.log('room details', roomDetails)

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function ftToM(ft) {
  return round(ft * 0.3048, 2)
}

if (roomDetails.length > 0) {
  var header = roomDetails.find('thead tr')
  var body = roomDetails.find('tbody')
  header.append('<th>Width (m)</th>')
  header.append('<th>Length (m)</th>')
  header.append('<th>Surface (sq m)</th>')

  // 1 ft = 0.3048 m
  body.children().each(function (index) {
    // console.log( index + ": " + $( this ).text() );
    // retrieve width and length
    var w = $(this).find('td:nth-child(3)').text()
    var l = $(this).find('td:nth-child(4)').text()
    console.log('w: %s, l: %s', w, l)
    
    w = w.match(/([0-9\.]*)[ ]*ft$/)
    var w_meters = 0
    if (w !== null) {
      w_meters = ftToM(w[1])
    }
    var l_meters = 0
    l = l.match(/([0-9\.]*)[ ]*ft$/)
    if (l !== null) {
      l_meters = ftToM(l[1])
    }
    var s_meters = round(w_meters * l_meters, 2)
    $(this).append(`<td>${w_meters} m</td>`)
    $(this).append(`<td>${l_meters} m</td>`)
    $(this).append(`<td>${s_meters} m<sup>2</sup></td>`)
  });
}