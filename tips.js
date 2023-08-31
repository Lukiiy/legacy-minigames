const header = document.getElementsByTagName("header")[0];
const tipsec = document.createElement("section");
tipsec.classList.add("tipbox");

const tiptext = document.createElement("p");
tiptext.id = "tip";
tiptext.style.display = "none";
tiptext.style.width = "0";
tiptext.style.height = "0";
tiptext.style.textAlign = "center";

tipsec.appendChild(tiptext);
header.parentNode.insertBefore(tipsec, header.nextSibling);

const tip = [
  "Use a hoe to prepare areas of ground for planting.",
  "You can change your game spawn point and skip to dawn by sleeping in a bed.",
  "Notch has over a million followers on twitter!",
  "Building a portal will allow you to travel to another dimension - The Nether.",
  "4J Studios really liked developing this game!",
  "Eating cooked pork chops gives more health than eating raw pork chops.",
  "Do not look directly at the bugs.",
  "Is it a chicken or is it a duck?",
  "Did you know there's a Minecraft Wiki?",
  "We think 4J Studios has removed Herobrine from the legacy console game, but we're not too sure.",
  "Who is Notch?",
  "Minecraft: Legacy Console Edition broke lots of records!",
  "What do you mean the Nether has bedrock walls?!",
  "Some famous people play Minecraft!",
  "Were you at Minecon?",
  "Were you at Minecraft Live?",
  "Creepers were born from a coding bug.",
  "No-one at Mojang has ever seen junkboy's face.",
  "Cook cactus in a furnace to get green dye.",
  "Placing two chests side by side will make one large chest.",
  "You'll get the latest info on this game from 4JStudios on twitter!",
  "Obsidian can only be mined with a diamond pickaxe.",
  "Obsidian is created when water hits a lava source block.",
  "Chickens lay an egg every 5-10 minutes.",
  "Harvest leather from cows, and use it to make armor.",
  "deadmau5 likes Minecraft!",
  "Blocks that can be used as a light source will melt snow and ice. This includes torches, glowstone, and Jack-O-Lanterns.",
  "Pigmen won't attack you, unless you attack them.",
  "Feed a bone to a wolf to tame it. You can then make it sit or follow you.",
  "If you set the game difficulty to Peaceful, your health will automatically regenerate, and no monsters will come out at night!",
  "Mojang has more awards than staff!",
  "Wolves won't attack Creepers.",
  "Attacking a wolf will cause any wolves in the immediate vicinity to turn hostile and attack you. This trait is also shared by Zombie Pigmen.",
  "Zombies and Skeletons can survive daylight if they are in water.",
  "Minecon 2016 was in Anaheim, California, USA!",
  "Bonemeal (crafted from a skeleton bone) can be used as a fertilizer, and can make things grow instantly!",
  "Use the right tool for the job!",
  "Alter the gamma settings to make the game brighter or darker.",
  "If you have an empty bucket, you can fill it with milk from a cow, or water, or lava!",
  "Digging soil or sand with a spade is faster than with your hand!",
  "Not all Swedish people have blonde hair. Some, like Jens from Mojang, even have ginger hair!",
  "Spiders won't attack you during the day - unless you attack them.",
  "Digging straight down or straight up is not a great idea.",
  "The instrument played by a note block depends on the material beneath it.",
  "Creepers explode when they get close to you!",
  "Make some torches to light up areas at night. Monsters will avoid the areas around these torches.",
  "There will be an update to this game eventually!",
  "Minecon 2012 was in Paris, France!",
  "minecraftforum has a section dedicated for all of the console editions.",
  "Lukiiy is dumb...",
  "No-one at Mojang has ever seen junkboy's face.",
  ".party() was excellent!",
  "Stackable fences are in the game now!",
  "Music by C418!",
  "DLC Music by Gareth Coker!",
  "Take caution when building structures made of wool in open air, as lightning from thunderstorms can set wool on fire.",
  "If an animal can't move more than 20 blocks in any direction, it won't despawn.",
  "Minecon 2015 was in London, UK!",
  "No-one can remember where Minecon 2014 was held.",
  "Always assume rumors are false, rather than assuming they're true!",
  "Read the What's New section in the How To Play menus to see the latest update information about the game.",
  "Some animals will follow you if you have wheat in your hand.",
  "A single bucket of lava can be used in a furnace to smelt 100 blocks.",
  "Lava can take minutes to disappear COMPLETELY when the source block is removed.",
  "Don't look an Enderman in the eye!"
]

const randomTip = tip[Math.floor(Math.random() * tip.length)];
tiptext.innerText = randomTip;
tiptext.style.display = "";
tiptext.style.width = "";
tiptext.style.height = "";
