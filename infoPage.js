var sites = getSites();

var table = '<table>';

for (i = 0; i < sites.length; ++i) {
  table += '<tr><td>';
  table += '<a href="https://' + sites[i].site + '" target="_blank">';
  table += sites[i].name;
  // table += getIndustryEmoji(sites[i].industry);
  table += '</a>';
  table += '</td></tr>';
}

table += '</table>';

document.getElementById("table-div").innerHTML = table;

function getSites() {
  return [
    {name: "60°N 95°W", site: "60n95w.com", industry: "fashion"},
    {name: "3C Underwear", site: "www.3cunderwear.ca", industry: "fashion"},
    {name: "Abaka", site: "abaka.ca", industry: "fashion"},
    {name: "Alberta Apparel", site: "albertaapparel.com", industry: "fashion"},
    {name: "Algoma Steel", site: "www.algoma.com"},
    {name: "Arc'Teryx", site: "arcteryx.com", industry: "fashion"},
    {name: "Aritzia", site: "www.aritzia.com", industry: "fashion"},
    {name: "Arturo Denim", site: "www.arturodenim.ca", industry: "pants"},
    {name: "Bearface Whiskey", site: "www.bearfacewhisky.com", industry: "spirits"},
    {name: "The Beer Store", site: "www.thebeerstore.ca", industry: "beer"},
    {name: "Bombardier", site: "www.bombardier.com"},
    {name: "Bonnetier", site: "eng.bonnetier.com"},
    {name: "Bon Vivant", site: "bonvivantshop.com"},
    {name: "Butter Cream Clothing", site: "buttercreamclothing.com"},
    {name: "Canada Goose", site: "www.canadagoose.com"},
    {name: "Collection Arianne", site: "collectionarianne.com"},
    {name: "Crown Royal", site: "www.crownroyal.com"},
    {name: "Egli's", site: "eglifarm.com"},
    {name: "Forty Creek Whisky", site: "www.fortycreekwhisky.com"},
    {name: "Frank And Oak", site: "www.frankandoak.com"},
    {name: "Godin", site: "godinguitars.com"},
    {name: "Goodyear", site: "www.goodyear.ca"},
    {name: "Herschel Supply", site: "www.herschelsupply.com"},
    {name: "i.O.N Clothing", site: "www.ionclothing.ca"},
    {name: "Jack Victor", site: "www.jackvictor.com"},
    {name: "J.P. Wisers", site: "www.jpwisers.com"},
    {name: "Kit And Ace", site: "www.kitandace.com"},
    {name: "La Canadienne Shoes", site: "www.lacanadienneshoes.com"},
    {name: "LCBO", site: "www.lcbo.com"},
    {name: "Local Laundry", site: "locallaundry.ca"},
    {name: "Lolë", site: "www.lolelife.com"},
    {name: "Lowell Montreal", site: "www.lowellmtl.ca"},
    {name: "Lululemon", site: "shop.lululemon.com"},
    {name: "MEC", site: "www.mec.ca"},
    {name: "Michelin", site: "www.michelin.ca"},
    {name: "Mill Street Brewery", site: "millstreetbrewery.com"},
    {name: "Molson", site: "www.molson.ca"},
    {name: "Muttonhead", site: "www.muttonheadstore.com"},
    {name: "Naked and Famous", site: "www.nakedandfamousdenim.com"},
    {name: "Paderno", site: "www.paderno.com"},
    {name: "Pajar", site: "ca.pajar.com"},
    {name: "Point Zero", site: "www.point-zero.com"},
    {name: "Province of Canada", site: "provinceofcanada.com"},
    {name: "Redpath Sugar", site: "www.redpathsugar.com"},
    {name: "Rolled Alloys", site: "www.rolledalloys.com"},
    {name: "Roots", site: "www.roots.com"},
    {name: "Sabian", site: "sabian.com"},
    {name: "Sam Bat", site: "canada.sambat.com"},
    {name: "Smythe", site: "shopsmythe.com"},
    {name: "Sorel", site: "www.sorel.com"},
    {name: "Spin Master", site: "www.spinmaster.com"},
    {name: "Steamwhistle", site: "steamwhistle.ca"},
    {name: "Stede", site: "stede.ca"},
    {name: "String Theory", site: "stringtheory.co"},
    {name: "The Unbranded Brand", site: "theunbrandedbrand.com"},
    {name: "Unibroue", site: "www.unibroue.com"},
    {name: "Wine Rack", site: "www.winerack.com"},
    {name: "Wings + Horns", site: "wingsandhorns.com"},
    {name: "Zen Nomad", site: "zennomad.ca"}
  ];
}

function getIndustryEmoji(industry) {
  switch (industry) {
    case 'beer':
      return '🍺';
    case 'fashion':
      return '👕';
    case 'spirits':
      return '🥃';
  }
}
