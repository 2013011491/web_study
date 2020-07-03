getDocu = function(target){
    fetch(target).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML=text;
        })
    })
}

getList = function(target){
    fetch(target).then(function(response){
        response.text().then(function(text){
            var items = text.split(',');
            var i=0;
            var tags = '';
            while(i<items.length){
                var item = items[i];
                item = item.trim();
                var tag = '<li><a href="#!'+item+'" onclick="getDocu(\''+item+'\')">'+item+'</a></li>';
                tags = tags + tag;
                i = i + 1;
            }
            document.querySelector('#nav').innerHTML=tags;
        })
    })
}