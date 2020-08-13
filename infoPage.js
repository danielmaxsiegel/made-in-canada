var sites = getSites();

var table = '<table>';

for (i = 0; i < sites.length; ++i) {
  console.log(sites[i].name);
  table += '<tr><td>';
  table += '<a href="https://' + sites[i].site + '">';
  table += sites[i].name;
  table += '</a>';
  table += '</td></tr>';
}

table += '</table>';

document.getElementById("table-div").innerHTML = table;

function getSites() {
  return [
    {name: "Arc'Teryx", site: "arcteryx.com"},
    {name: "Aritzia", site: "www.aritzia.com"},
    {name: "Canada Goose", site: "www.canadagoose.com"},
    {name: "Collection Arianne", site: "collectionarianne.com"},
    {name: "Crown Royal", site: "www.crownroyal.com"},
    {name: "Forty Creek Whisky", site: "www.fortycreekwhisky.com"},
    {name: "Frank And Oak", site: "www.frankandoak.com"},
    {name: "Goodyear", site: "www.goodyear.ca"},
    {name: "Herschel Supply", site: "www.herschelsupply.com"},
    {name: "Lolë", site: "www.lolelife.com"},
    {name: "Lululemon", site: "shop.lululemon.com"},
    {name: "MEC", site: "www.mec.ca"},
    {name: "Michelin", site: "www.michelin.ca"},
    {name: "Muttonhead", site: "www.muttonheadstore.com"},
    {name: "Naked and Famous", site: "www.nakedandfamousdenim.com"},
    {name: "Paderno", site: "www.paderno.com"},
    {name: "Pajar", site: "ca.pajar.com"},
    {name: "Point Zero", site: "www.point-zero.com"},
    {name: "Roots", site: "www.roots.com"},
    {name: "Sabian", site: "sabian.com"},
    {name: "Sam Bat", site: "canada.sambat.com"},
    {name: "Sorel", site: "www.sorel.com"},
    {name: "The Unbranded Brand", site: "theunbrandedbrand.com"}
  ];
}
