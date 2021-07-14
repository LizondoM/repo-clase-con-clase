class Album{
    title: string[];
    songs: string[];
    constructor(title, songs:string[]){
        this.title = title;
        this.songs = songs;
    }
}


class Banda{
    members:string[];
    albums:any[];
    constructor(members:string[], albums:Album[]){
        this.members = members;
        this.albums = albums;
    }
}

function sweet(){
    const unAlbum = new Album(["Sun is shining"], []);
    const unaBanda = new Banda(["mati"], [unAlbum, unAlbum, unAlbum]);
   // console.log(unaBanda.members);
    console.log(unaBanda.albums);
 
}

main();