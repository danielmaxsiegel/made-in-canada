var infobar = document.createElement( 'div' );

infobar.id = 'made-in-canada-infobar';

infobar.innerHTML += '<p>This site features goods or services that are produced in Canada</p>';

infobar.style.position = 'relative';
infobar.style.width = '100%';
infobar.style.height = '30px';
infobar.style.textalign = 'center';
infobar.style.backgroundColor = 'white';

document.body.prepend( infobar );
