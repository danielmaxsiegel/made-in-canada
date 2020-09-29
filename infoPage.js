var sites = getSites();

var table = '<table id="company-table">';

table += '<b><tr><th>Company</th><th>Industry</th></tr></b>';

for (i = 0; i < sites.length; ++i) {
  table += '<tr>';
  table += '<td class="company-name"><a href="https://' + sites[i].site + '" target="_blank">' + sites[i].name + '</a></td>';
  table += '<td class="company-industry">' + sites[i].industry + '</td>';
  table += '</tr>';
}

table += '</table>';

document.getElementById("table-div").innerHTML = table;

function getSites() {
  return [
    {name: "60°N 95°W", site: "60n95w.com", industry: "clothing"},
    {name: "3C Underwear", site: "www.3cunderwear.ca", industry: "clothing"},
    {name: "Abaka", site: "abaka.ca", industry: "clothing"},
    {name: "Alberta Apparel", site: "albertaapparel.com", industry: "clothing"},
    {name: "Algoma Steel", site: "www.algoma.com", industry: "metal"},
    {name: "Arc'Teryx", site: "arcteryx.com", industry: "clothing (outdoor gear)"},
    {name: "Aritzia", site: "www.aritzia.com", industry: "clothing (women)"},
    {name: "Arturo Denim", site: "www.arturodenim.ca", industry: "clothing"},
    {name: "Bearface Whiskey", site: "www.bearfacewhisky.com", industry: "spirits"},
    {name: "The Beer Store", site: "www.thebeerstore.ca", industry: "beer"},
    {name: "Bombardier", site: "www.bombardier.com", industry: "\"planes and trains\""},
    {name: "Bonnetier", site: "eng.bonnetier.com", industry: "clothing"},
    {name: "Bon Vivant", site: "bonvivantshop.com", industry: "clothing (men)"},
    {name: "Butter Cream Clothing", site: "buttercreamclothing.com", industry: "clothing (women)"},
    {name: "Canada Goose", site: "www.canadagoose.com", industry: "clothing"},
    {name: "Collection Arianne", site: "collectionarianne.com", industry: "clothing (women)"},
    {name: "Crown Royal", site: "www.crownroyal.com", industry: "spirits"},
    {name: "Egli's", site: "eglifarm.com", industry: "clothing"},
    {name: "Forty Creek Whisky", site: "www.fortycreekwhisky.com", industry: "spirits"},
    {name: "Frank And Oak", site: "www.frankandoak.com", industry: "clothing"},
    {name: "Godin", site: "godinguitars.com", industry: "instruments"},
    {name: "Goodyear", site: "www.goodyear.ca", industry: "tires"},
    {name: "Herschel Supply", site: "www.herschelsupply.com", industry: "clothing"},
    {name: "i.O.N Clothing", site: "www.ionclothing.ca", industry: "clothing"},
    {name: "Jack Victor", site: "www.jackvictor.com", industry: "clothing (men)"},
    {name: "J.P. Wisers", site: "www.jpwisers.com", industry: "spirits"},
    {name: "Kit And Ace", site: "www.kitandace.com", industry: "clothing"},
    {name: "La Canadienne Shoes", site: "www.lacanadienneshoes.com", industry: "clothing (women's shoes)"},
    {name: "LCBO", site: "www.lcbo.com", industry: "spirits"},
    {name: "Local Laundry", site: "locallaundry.ca", industry: "clothing"},
    {name: "Lolë", site: "www.lolelife.com", industry: "clothing (women)"},
    {name: "Lowell Montreal", site: "www.lowellmtl.ca", industry: "bags"},
    {name: "Lululemon", site: "shop.lululemon.com", industry: "clothing"},
    {name: "MEC", site: "www.mec.ca", industry: "clothing (outdoor gear)"},
    {name: "Michelin", site: "www.michelin.ca", industry: "tires"},
    {name: "Mill Street Brewery", site: "millstreetbrewery.com", industry: "beer"},
    {name: "Molson", site: "www.molson.ca", industry: "beer"},
    {name: "Muttonhead", site: "www.muttonheadstore.com", industry: "clothing"},
    {name: "Naked and Famous", site: "www.nakedandfamousdenim.com", industry: "clothing"},
    {name: "Outclass", site: "outclass.ca", industry: "clothing"},
    {name: "Paderno", site: "www.paderno.com", industry: "kitchen appliances"},
    {name: "Pajar", site: "ca.pajar.com", industry: "clothing"},
    {name: "Point Zero", site: "www.point-zero.com", industry: "clothing"},
    {name: "Province of Canada", site: "provinceofcanada.com", industry: "clothing"},
    {name: "Redpath Sugar", site: "www.redpathsugar.com", industry: "food"},
    {name: "Rolled Alloys", site: "www.rolledalloys.com", industry: "metal"},
    {name: "Roots", site: "www.roots.com", industry: "clothing"},
    {name: "Sabian", site: "sabian.com", industry: "instruments"},
    {name: "Sam Bat", site: "canada.sambat.com", industry: "sports gear"},
    {name: "Smythe", site: "shopsmythe.com", industry: "clothing (women)"},
    {name: "Sorel", site: "www.sorel.com", industry: "clothing (boots)"},
    {name: "Spin Master", site: "www.spinmaster.com", industry: "toys"},
    {name: "Steamwhistle", site: "steamwhistle.ca", industry: "beer"},
    {name: "Stede", site: "stede.ca", industry: "clothing (men)"},
    {name: "String Theory", site: "stringtheory.co", industry: "clothing"},
    {name: "The Unbranded Brand", site: "theunbrandedbrand.com", industry: "clothing"},
    {name: "Unibroue", site: "www.unibroue.com", industry: "beer"},
    {name: "Wine Rack", site: "www.winerack.com", industry: "wine"},
    {name: "Wings + Horns", site: "wingsandhorns.com", industry: "clothing (men)"},
    {name: "Zen Nomad", site: "zennomad.ca", industry: "clothing"}
  ];
}
