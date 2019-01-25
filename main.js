window.onload = function( ev )
{
    const   ca = document.getElementById( 'main' );
    const   g = ca.getContext( '2d' );
    g.font = "80px monospace";
    g.fillStyle = "#00ff00";
    g.fillText( "こんにちは世界", 40, 80 );
    g.fillText( "おはよう世界",40,250);
}