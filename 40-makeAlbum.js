//Object Returning through the function calling
/*function make_album(artist_name, album_name)
{
const music={artist_name: artist_name, album_name: album_name};
return music;
}*/
function make_album(artist_name, album_name, number_track)
{
const music={artist_name: artist_name, album_name: album_name, number_track:number_track};
return music;
}

//console.log(make_album("Rock Player","Dil Dil Pakistan"));
console.log(make_album("Instrumental","Hans Zimmer Collection", 13));
console.log(make_album("Another Instrumental","Hans Zimmer Collection", 10));
console.log(make_album("Eastern Instrumental","Eastern Collection", 11));
