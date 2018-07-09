var episodes = [
{ title:'Kamp Krusty', season:4, epnum:0 },
{ title:'Stark Raving Dad', season:3, epnum:1 },
{ title:'Old Money', season:2, epnum:2 },
{ title:'Lisa on Ice', season:6, epnum:3 },
{ title:'King Size Homer', season:7, epnum:4 }
];


exports.getAll = ()=>{
return episodes

}

exports.get = (epnum1)=>{
    return episodes.find(function(episode) {
        return episode.epnum === epnum1;
    });
}


//exports.delete= (epnum)=>{
  //return episodes.findIndex(function(episode){
    //   return episode.epnum === epnum;
       
//});
//}



console.log(this.delete(0))

