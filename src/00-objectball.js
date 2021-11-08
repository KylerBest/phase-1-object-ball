function gameObject(){
    const gameObject = {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                alanAnderson: {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                reggieEvans: {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                brookLopez: {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                masonPlumlee: {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                jasonTerry: {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                jeffAdrien: {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                bismakBiyombo: {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                deSagnaDiop: {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                benGordon: {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                brendanHaywood: {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return gameObject;
}
function numPointsScored(playerName, obj = gameObject()){
    let result = null;
    for(key in obj){
        console.log(`key: ${key}`);
        if(key == playerName){
            return obj[key]['points'];
        }
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            result = numPointsScored(playerName, obj[key]);
        }
    }
    if(result){
        return result;
    }
    return `ERROR: cannot find ${playerName}.`;
}
function shoeSize(playerName, obj = gameObject()){
    let result = null;
    for(key in obj){
        console.log(`key: ${key}`);
        if(key == playerName){
            return obj[key]['shoe'];
        }
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            result = shoeSize(playerName, obj[key]);
        }
    }
    if(result){
        return result;
    }
    return `ERROR: cannot find ${playerName}.`;
}
function teamColors(teamName, obj = gameObject()){
    let result = null;
    for(key in obj){
        console.log(`key: ${key}`);
        if(obj[key] == teamName){
            return obj['colors'];
        }
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            result = teamColors(teamName, obj[key]);
        }
    }
    if(result){
        return result;
    }
    return `ERROR: cannot find ${teamName}.`;
}
function teamNames(obj = gameObject()){
    let ret = [];
    function inner(obj){    
        let result = null;
        for(key in obj){
            console.log(`key: ${key}`);
            if(key == 'teamName'){
                ret.push(obj[key]);
            }
            if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
                result = inner(obj[key]);
            }
        }
        if(result){
            return result;
        }
        if(ret.length > 0){
            return ret;
        }
        return `ERROR: cannot find any teams.`;
    }
    return inner(obj);
}
function playerNumbers(teamName, obj = gameObject()){
    let ret = [];
    function inner(obj){    
        let result = null;
        for(key in obj){
            console.log(`key: ${key}`);
            if(key == 'teamName'){
                for(player in obj['players']){
                    ret.push(obj['players'][player].number);
                }
            }
            if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
                result = inner(obj[key]);
            }
        }
        if(result){
            return result;
        }
        if(ret.length > 0){
            return ret;
        }
        return `ERROR: cannot find ${teamName}.`;
    }
    return inner(obj);
}
function playerStats(playerName, obj = gameObject()){
    let result = null;
    for(key in obj){
        console.log(`key: ${key}`);
        if(key == playerName){
            return obj[key];
        }
        if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
            result = playerStats(playerName, obj[key]);
        }
    }
    if(result){
        return result;
    }
    return `ERROR: cannot find ${playerName}.`;
}
function bigShoeRebounds(obj = gameObject()){
    let ret = null;
    let shoe = 0;
    function inner(obj){    
        let result = null;
        for(key in obj){
            console.log(`key: ${key}`);
            if(key == 'players'){
                for(player in obj[key]){
                    if(obj[key][player].shoe > shoe){
                        shoe = obj[key][player].shoe;
                        ret = obj[key][player].rebounds;
                    }
                }
            }
            if(typeof obj[key] == 'object' && !Array.isArray(obj[key])){
                result = inner(obj[key]);
            }
        }
        if(result){
            return result;
        }
        if(ret){
            return ret;
        }
        return `ERROR: no players exist`;
    }
    return inner(obj);
}

