var episodes = [
{ title:'Kamp Krusty', season:4, epnum:'0' },
{ title:'Stark Raving Dad', season:3, epnum:'1' },
{ title:'Old Money', season:2, epnum:'2' },
{ title:'Lisa on Ice', season:6, epnum:'3' },
{ title:'King Size Homer', season:7, epnum:'4' }
];


exports.getAll = ()=>{
return episodes

}

exports.getOne = (epnum1)=>{
    return episodes.find(function(episode) {
        return episode.epnum === epnum1;
    });
}


exports.killOne = (epnum1)=>{

episodes.splice( 
		episodes.findIndex( 
			function(episode){
				return episode.epnum === epnum1;
			}), 1);
	return {that: "episode had 3 days until retirement"};
}