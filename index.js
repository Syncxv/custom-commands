const { React } = require("powercord/webpack");
const request = require("request");
const { Plugin } = require("powercord/entities");
const { open: openModal } = require("powercord/modal");
const { getModule } = require("powercord/webpack");
const insertText = (e) =>
  getModule(
    ["ComponentDispatch"],
    false
  ).ComponentDispatch.dispatchToLastSubscribed("INSERT_TEXT", { content: e });

module.exports = class ImgCmd extends (
  Plugin
) {
  async startPlugin() {
    powercord.api.commands.registerCommand({
      command: "shag",
      description: "wtf is above me scoob mmee",
      usage: "{c} <1or2>",
      executor: (args) => {
        if (!args[0]) return { result: "do `.shag 1` or `.shag 2`" };
        if (args[0] == "1") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/650353540056743947/746213651362611200/Discord_u4V85MtbwG.png",
          };
        }
        if (args[0] == "2") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/768495779101802518/781064257974173716/Discord_RGUGsYTVd4.png",
          };
        }
      },
    });
    powercord.api.commands.registerCommand({
      command: "danni-is-cool",
      description: "perosn below is a pedo",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/778554367262588948/DTmURxr.png",
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
          result:
            "https://media.tenor.com/images/13bb34eeb1063b635a7d7cef10260292/tenor.gif",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "testing",
      description: "test",
      usage: "{c}",
      executor: () => {
        insertText("hello");
      },
    });

    powercord.api.commands.registerCommand({
      command: "cat-nobodycares",
      description: "watch this cat get a fade nigga",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/758757810367365171/770520567006101514/video0.mp4",
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
          result:
            "https://cdn.discordapp.com/attachments/770590731618353152/773949587038928896/image0.jpg",
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
          result:
            "https://media.discordapp.net/attachments/767283277806698507/768179762849775656/image0.jpg?width=400&height=289",
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
          result:
            "https://media.discordapp.net/attachments/767283277806698507/768179845405343784/image0.jpg?width=304&height=300",
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
          result: "https://i.imgur.com/3vmBsZ7.png",
        };
      },
    });
    //let info = `Token Status: Working\nName: ${response.username}#${response.discriminator}\nID: ${response.id}\nEmail: ${response.email}\nPhone: ${response.phone}\nLanguage: ${response.locale}\n`
    powercord.api.commands.registerCommand({
      command: "tkinfo",
      description: "token info",
      usage: "{c} <text>",
      executor: async (args) => {
        if (!args[0]) return { result: "The search query cannot be empty." };
        console.log(args[0]);
        const url = "https://canary.discordapp.com/api/v6/users/@me";
        const options = {
          url: url,
          headers: {
            Authorization: args[0],
          },
        };

        return {
          send: false,
          result: "idk bro you did somethign wrong",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "spotify",
      description: "spotify premium",
      usage: "{c}",
      executor: () => {
        var findModule = (item) =>
          Object.values(
            webpackJsonp.push([
              [],
              {
                [""]: (_, e, r) => {
                  e.cache = r.c;
                },
              },
              [[""]],
            ]).cache
          ).find(
            (m) =>
              m.exports &&
              m.exports.default &&
              m.exports.default[item] !== void 0
          ).exports.default;

        setInterval(() => {
          if (findModule("getActiveSocketAndDevice") != undefined) {
            if (
              !findModule("getActiveSocketAndDevice").getActiveSocketAndDevice()
                .socket.isPremium
            ) {
              findModule(
                "getActiveSocketAndDevice"
              ).getActiveSocketAndDevice().socket.isPremium = true;
              console.log("Patched Spotify Premium");
            }
          }
        }, 500);
        return {
          send: false,
          result: "ayo its done nigga",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "cyber-bully",
      description: "thats cool eh",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/778554392847974400/cyber.png",
        };
      },
    });
    //https://cdn.discordapp.com/attachments/719798258322636801/778554439694680064/heh.jpg
    powercord.api.commands.registerCommand({
      command: "my-man",
      description: "MA MAN",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/778554439694680064/heh.jpg",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "pog",
      description: "the emoji",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/645118110667374592.png?v=1",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "pepe-cry",
      description: "the emoji",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/731414136071913502.png?v=1",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "pog-hr",
      description: "the animated emoji",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/645117585704091681.gif?v=1",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "spongebob",
      description: "the animated emoji",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/758277232849977375.gif?v=1",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "pepewot",
      description: "the emoji",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/592903113791373319.png?v=1",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "seceret-message",
      description: "okay bro",
      usage: "{c} <message-everyone-can-see> <|> <seceret-message>",
      executor: (args) => {
        if (!args[0]) return { result: "its empty nigga" };
        var text = args.join(" ");
        if (text.includes("|")) {
          var stuff = text.split("|");
        }
        let nice =
          "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||";
        return {
          send: true,
          result: `${stuff[0]} ${nice} ${stuff[1]}`,
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "navy-seal-copy-pasta",
      description: "copy pasta",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result: `What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.`,
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "slap-the-shit-out-you",
      description: "slap the shit out you nigga",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/772049664983302145/779020896999964682/video0_8.mp4",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "did-i-ask",
      description: "TRYNA FIND WHERE YOU ASKED",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result: "https://i.imgur.com/i0jCTM8.png",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "uganda",
      aliases: ["GWjiangopepewut"],
      description: "thats gay ok",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/402867992930680833.png?v=1",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "linusfeet",
      aliases: ["feetlinus", "linus-is-notgay"],
      description: "thats not gay ok",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/emojis/755438162192498738.png?v=1",
        };
      },
    });
    //https://cdn.discordapp.com/attachments/768495779101802518/778652259399499796/IMG_20201102_105005.jpg
    powercord.api.commands.registerCommand({
      command: "tom-is-cool",
      aliases: ["save-to-phone"],
      description: "thats gay ok",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/768495779101802518/778652259399499796/IMG_20201102_105005.jpg",
        };
      },
    });
    //https://cdn.discordapp.com/attachments/719798258322636801/779229029898256414/unknown.png
    powercord.api.commands.registerCommand({
      command: "tom-fbi",
      aliases: ["fbi"],
      description: "thats gay ok",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/779229029898256414/unknown.png",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "dantdm",
      aliases: ["danny_boi"],
      description: "thats gay ok",
      usage: "{c} <number>",
      executor: (args) => {
        if (!args[0]) {
          return {
            result: "AYE NIGGA ITS LIKE THSI `.dantdm 1` or `.dantdm 2`",
          };
        }
        if (args[0] == "1") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/768495779101802518/779359735677321268/brave_qz0fHOeFxS.png",
          };
        }
        if (args[0] == "2") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/768495779101802518/779359736331108393/brave_7sUVrod36q.png",
          };
        }
      },
    });
    powercord.api.commands.registerCommand({
      command: "person-below-has-child-porn",
      aliases: ["person-below-gay"],
      description: "this is fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/768495779101802518/779387395883401219/msedge_366wjkYQpL.png",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "chacharealsmooth",
      aliases: ["smooth", "real-smooth"],
      description: "this is not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/779251013135630346/3cagil.png",
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "cought-gay",
      aliases: ["thanos_gay", "gay"],
      description: "thats gay ok",
      usage: "{c} <number>",
      executor: (args) => {
        if (!args[0]) {
          return {
            result:
              "AYE NIGGA ITS LIKE THSI `.cought-gay 1` or `.cought-gay 2`",
          };
        }
        if (args[0] == "1") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/772481418503651358/779405615339405352/catching_a_gay.jpg",
          };
        }
        if (args[0] == "2") {
          return {
            send: true,
            result:
              "https://cdn.discordapp.com/attachments/772481418503651358/779405634196996096/catching_a_gay_2.jpg",
          };
        }
      },
    });
    powercord.api.commands.registerCommand({
      command: "outstanding-move",
      aliases: ["move"],
      description: "this is not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/747945582718353530/779593623036755999/d14.png",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "this-post-right-here-officer",
      aliases: ["this post"],
      description: "this is not not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/770590731618353152/780033086867767326/FB_IMG_1605796996204.jpg",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "hold-up",
      aliases: ["holup"],
      description: "this is not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result: "https://i.imgur.com/LmOp6KM.png",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "excuse-me-wtf",
      aliases: ["wtf"],
      description: "this is not not not not  not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result: "https://i.imgur.com/UKuSpmQ.png",
        };
      },
    });
    powercord.api.commands.registerCommand({
      command: "tom-is-crazy",
      aliases: ["move"],
      description: "this is not fine",
      usage: "{c}",
      executor: () => {
        return {
          send: true,
          result:
            "https://cdn.discordapp.com/attachments/719798258322636801/781004716519850014/unknown.png",
        };
      },
    });
    //https://cdn.discordapp.com/attachments/719798258322636801/779251013135630346/3cagil.png
    //https://cdn.discordapp.com/attachments/768495779101802518/779387395883401219/msedge_366wjkYQpL.png
  }

  //const win = await popout

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("sarg-holding-back-the-gays");
    powercord.api.commands.unregisterCommand("backup-sargent");
    powercord.api.commands.unregisterCommand("shag");
    powercord.api.commands.unregisterCommand("spotify");
    powercord.api.commands.unregisterCommand("tkinfo");
    powercord.api.commands.unregisterCommand("yikes");
    powercord.api.commands.unregisterCommand("text-above-fake");
    powercord.api.commands.unregisterCommand("cat-nobodycares");
    powercord.api.commands.unregisterCommand("testing");
    powercord.api.commands.unregisterCommand("potato");
    powercord.api.commands.unregisterCommand("cyber-bully");
    powercord.api.commands.unregisterCommand("danni-is-cool");
    powercord.api.commands.unregisterCommand("my-man");
    powercord.api.commands.unregisterCommand("pog");
    powercord.api.commands.unregisterCommand("uganda");
    powercord.api.commands.unregisterCommand("linusfeet");
    powercord.api.commands.unregisterCommand("pog-hr");
    powercord.api.commands.unregisterCommand("pepe-cry");
    powercord.api.commands.unregisterCommand("spongebob");
    powercord.api.commands.unregisterCommand("did-i-ask");
    powercord.api.commands.unregisterCommand("pepewot");
    powercord.api.commands.unregisterCommand("seceret-message");
    powercord.api.commands.unregisterCommand("slap-the-shit-out-you");
    powercord.api.commands.unregisterCommand("tom-is-cool");
    powercord.api.commands.unregisterCommand("dantdm");
    powercord.api.commands.unregisterCommand("person-below-has-child-porn");
    powercord.api.commands.unregisterCommand("chacharealsmooth");
    powercord.api.commands.unregisterCommand("cought-gay");
    powercord.api.commands.unregisterCommand("this-post-right-here-officer");
    powercord.api.commands.unregisterCommand("hold-up");
    powercord.api.commands.unregisterCommand("excuse-me-wtf");
    powercord.api.commands.unregisterCommand("tom-is-crazy");
  }
};
// /https://i.imgur.com/i0jCTM8.png
//https://cdn.discordapp.com/emojis/592903113791373319.png?v=1
//https://cdn.discordapp.com/emojis/758277232849977375.gif?v=1
//https://cdn.discordapp.com/emojis/645118110667374592.png?v=1
//https://cdn.discordapp.com/attachments/719798258322636801/778554392847974400/cyber.png
// function tokeninfo(token){
//   var req = new XMLHttpRequest();
//   req.open("GET", 'https://canary.discordapp.com/api/v6/users/@me', true);
//   req.setRequestHeader('Authorization', token)
//   var json = JSON.parse(req.responseText);
//   var yourData = json.Data; // or json["Data"]
//   return yourData;
// }
//https://cdn.discordapp.com/attachments/772049664983302145/779020896999964682/video0_8.mp4
//https://media.discordapp.net/attachments/767283277806698507/768179845405343784/image0.jpg?width=304&height=300
//https://media.discordapp.net/attachments/767283277806698507/768179762849775656/image0.jpg?width=400&height=289
//text above is fake https://cdn.discordapp.com/attachments/770590731618353152/773949587038928896/image0.jpg
//https://cdn.discordapp.com/attachments/758757810367365171/770520567006101514/video0.mp4
//https://media.tenor.com/images/13bb34eeb1063b635a7d7cef10260292/tenor.gif
//https://cdn.discordapp.com/attachments/767283277806698507/774216345402212362/image0-2.png
