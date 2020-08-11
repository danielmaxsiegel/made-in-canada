var infobar = document.createElement( 'div' );

infobar.id = 'made-in-canada-infobar';

infobar.innerHTML += '<div><p>This site features goods or services that are produced in Canada 🇨🇦</p></div>';

infobar.style.position = 'relative';
infobar.style.width = '100%';
infobar.style.height = '25px';
infobar.style.backgroundColor = 'white';
infobar.style.color = 'black';
infobar.style.verticalAlign = 'middle';
infobar.style.textAlign = 'center';
infobar.style.marginTop = '5px';

document.body.prepend( infobar );
