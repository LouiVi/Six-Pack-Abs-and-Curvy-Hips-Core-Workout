"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img = app.CreateImage( "Img/Six-Pack Abs and Curvy Hips Core Workout.png", 0.45 );
	lay.AddChild( img );
	
	var player= app.CreateVideoView( 1, -1,"ShowControls" );
	player.SetFile(  "Misc/Six-Pack Abs and Curvy Hips Core Workout.mp4");
	player.SetOnReady( ()=>{player.Play();} );
		player.SetOnComplete( ()=>{player.Play();} );
		player.Show();
		lay.AddChild( player );
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>6-Pack Abs & Curvy Hips</big></font></p>" + 
    "Todo: Put your home page controls here! </p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    lay.AddChild( txt );
}