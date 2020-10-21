const endpoint = 'episode';
let repository = require('../repositories/episode.ripository');


function retrieveStemmedEpisodes(){
    let p = repository.episodes;
    let result =  p.then((episodes) => {
        episodes =  episodes.episodes.reduce((r, { seasonNumber: seasonNumber, ...object }) => {
            var temp = r.find(o => o.seasonNumber === seasonNumber);
            if (!temp) r.push(temp = { seasonNumber, episodes: [] });
            temp.episodes.push({
                episodeUid: object.uid,
                episodeTitle: object.title,
                episodeNumber: object.episodeNumber,
                episodeSerialNumber: object.productionSerialNumber
            });
            return r;
        }, []);
        return episodes.sort((a,b) => a.seasonNumber > b.seasonNumber ? 1 : -1);
    });
    return result;
}

module.exports = {
    retrieveStemmedEpisodes,
};
