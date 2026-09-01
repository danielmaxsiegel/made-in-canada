fetch('./sites.json')
  .then(function (response) { return response.json(); })
  .then(function (sites) {
    var table = '<table id="company-table">';

    table += '<b><tr><th>Company</th><th>Industry</th></tr></b>';

    for (var i = 0; i < sites.length; ++i) {
      table += '<tr>';
      table += '<td class="company-name"><a href="https://' + sites[i].site + '" target="_blank">' + sites[i].name + '</a></td>';
      table += '<td class="company-industry">' + sites[i].industry + '</td>';
      table += '</tr>';
    }

    table += '</table>';

    document.getElementById('table-div').innerHTML = table;
  });
