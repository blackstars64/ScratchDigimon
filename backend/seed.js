/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query(
      "SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0"
    );

    await database.query("truncate user");
    await database.query("truncate digimons");

    await database.query(
      "SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1)"
    );

    /* *******************************DIGIMONS************************************** */
    queries.push(
      database.query(
        `insert into user (username, email, password, register_date, is_admin, digi_point) values ('Blackstars', 'admin@admin.am', '$argon2id$v=19$m=19456,t=2,p=1$QUgu6oUUEptpOWItS/m1YA$/PY0SeFS7omKKWUxc3Q/u8qxFm+jc9TxB5Bz6WxWLrw', '2021-05-05', 1, 999999)`
      )
    );

    queries.push(
      database.query(`insert into digimons (name, img, level) values 
        ('Botamon', 'https://digimon.shadowsmith.com/img/botamon.jpg', 'Fresh'),
        ('Punimon', 'https://digimon.shadowsmith.com/img/punimon.jpg', 'Fresh'),
        ('Poyomon', 'https://digimon.shadowsmith.com/img/poyomon.jpg', 'Fresh'),
        ('Yuramon', 'https://digimon.shadowsmith.com/img/yuramon.jpg', 'Fresh'),
        ('Pabumon', 'https://digimon.shadowsmith.com/img/pabumon.jpg', 'Fresh'),
        ('Chibomon', 'https://digimon.shadowsmith.com/img/chibomon.jpg', 'Fresh'),
        ('Pururumon', 'https://digimon.shadowsmith.com/img/pururumon.jpg', 'Fresh'),
        ('Tsubumon', 'https://digimon.shadowsmith.com/img/tsubumon.jpg', 'Fresh'),
        ('Mokumon', 'https://digimon.shadowsmith.com/img/mokumon.jpg', 'Fresh'),
        ('Koromon', 'https://digimon.shadowsmith.com/img/koromon.jpg', 'In Training'),
        ('Tsunomon', 'https://digimon.shadowsmith.com/img/tsunomon.jpg', 'In Training'),
        ('Yokomon', 'https://digimon.shadowsmith.com/img/yokomon.jpg', 'In Training'),
        ('Motimon', 'https://digimon.shadowsmith.com/img/motimon.jpg', 'In Training'),
        ('Tanemon', 'https://digimon.shadowsmith.com/img/tanemon.jpg', 'In Training'),
        ('Bukamon', 'https://digimon.shadowsmith.com/img/bukamon.jpg', 'In Training'),
        ('Tokomon', 'https://digimon.shadowsmith.com/img/tokomon.jpg', 'In Training'),
        ('Pagumon', 'https://digimon.shadowsmith.com/img/pagumon.jpg', 'In Training'),
        ('Nyaromon', 'https://digimon.shadowsmith.com/img/nyaromon.jpg', 'In Training'),
        ('Agumon', 'https://digimon.shadowsmith.com/img/agumon.jpg', 'Rookie'),
        ('Gabumon', 'https://digimon.shadowsmith.com/img/gabumon.jpg', 'Rookie'),
        ('Biyomon', 'https://digimon.shadowsmith.com/img/biyomon.jpg', 'Rookie'),
        ('Tentomon', 'https://digimon.shadowsmith.com/img/tentomon.jpg', 'Rookie'),
        ('Palmon', 'https://digimon.shadowsmith.com/img/palmon.jpg', 'Rookie'),
        ('Gomamon', 'https://digimon.shadowsmith.com/img/gomamon.jpg', 'Rookie'),
        ('Patamon', 'https://digimon.shadowsmith.com/img/patamon.jpg', 'Rookie'),
        ('Elecmon', 'https://digimon.shadowsmith.com/img/elecmon.jpg', 'Rookie'),
        ('Gazimon', 'https://digimon.shadowsmith.com/img/gazimon.jpg', 'Rookie'),
        ('DemiDevimon', 'https://digimon.shadowsmith.com/img/demidevimon.jpg', 'Rookie'),
        ('Otamamon', 'https://digimon.shadowsmith.com/img/otamamon.jpg', 'Rookie'),
        ('Gotsumon', 'https://digimon.shadowsmith.com/img/gotsumon.jpg', 'Rookie'),
        ('Gizamon', 'https://digimon.shadowsmith.com/img/gizamon.jpg', 'Rookie'),
        ('Salamon', 'https://digimon.shadowsmith.com/img/salamon.jpg', 'Rookie'),
        ('Chuumon', 'https://digimon.shadowsmith.com/img/chuumon.jpg', 'Rookie'),
        ('Mushroomon', 'https://digimon.shadowsmith.com/img/mushroomon.jpg', 'Rookie'),
        ('Floramon', 'https://digimon.shadowsmith.com/img/floramon.jpg', 'Rookie'),
        ('Hagurumon', 'https://digimon.shadowsmith.com/img/hagurumon.jpg', 'Rookie'),
        ('Kunemon', 'https://digimon.shadowsmith.com/img/kunemon.jpg', 'Rookie'),
        ('Candlemon', 'https://digimon.shadowsmith.com/img/candlemon.jpg', 'Rookie'),
        ('Kokuwamon', 'https://digimon.shadowsmith.com/img/kokuwamon.jpg', 'Rookie'),
        ('Syakomon', 'https://digimon.shadowsmith.com/img/syakomon.jpg', 'Rookie'),
        ('Penguinmon', 'https://digimon.shadowsmith.com/img/penguinmon.jpg', 'Rookie'),
        ('Psychemon', 'https://digimon.shadowsmith.com/img/psychemon.jpg', 'Rookie'),
        ('Tsukaimon', 'https://digimon.shadowsmith.com/img/tsukaimon.jpg', 'Rookie'),
        ('SnowAgumon', 'https://digimon.shadowsmith.com/img/snowagumon.jpg', 'Rookie'),
        ('Muchomon', 'https://digimon.shadowsmith.com/img/muchomon.jpg', 'Rookie'),
        ('Hawkmon', 'https://digimon.shadowsmith.com/img/hawkmon.jpg', 'Rookie'),
        ('Armadillomon', 'https://digimon.shadowsmith.com/img/armadillomon.jpg', 'Rookie'),
        ('Wormmon', 'https://digimon.shadowsmith.com/img/wormmon.jpg', 'Rookie'),
        ('Kuwagamon', 'https://digimon.shadowsmith.com/img/kuwagamon.jpg', 'Champion'),
        ('Greymon', 'https://digimon.shadowsmith.com/img/greymon.jpg', 'Champion'),
        ('Shellmon', 'https://digimon.shadowsmith.com/img/shellmon.jpg', 'Champion'),
        ('Garurumon', 'https://digimon.shadowsmith.com/img/garurumon.jpg', 'Champion'),
        ('Seadramon', 'https://digimon.shadowsmith.com/img/seadramon.jpg', 'Champion'),
        ('Monochromon', 'https://digimon.shadowsmith.com/img/monochromon.jpg', 'Champion'),
        ('Birdramon', 'https://digimon.shadowsmith.com/img/birdramon.jpg', 'Champion'),
        ('Meramon', 'https://digimon.shadowsmith.com/img/meramon.jpg', 'Champion'),
        ('Kabuterimon', 'https://digimon.shadowsmith.com/img/kabuterimon.jpg', 'Champion'),
        ('Togemon', 'https://digimon.shadowsmith.com/img/togemon.jpg', 'Champion'),
        ('Numemon', 'https://digimon.shadowsmith.com/img/numemon.jpg', 'Champion'),
        ('Ikkakumon', 'https://digimon.shadowsmith.com/img/ikkakumon.jpg', 'Champion'),
        ('Unimon', 'https://digimon.shadowsmith.com/img/unimon.jpg', 'Champion'),
        ('Leomon', 'https://digimon.shadowsmith.com/img/leomon.jpg', 'Champion'),
        ('Ogremon', 'https://digimon.shadowsmith.com/img/ogremon.jpg', 'Champion'),
        ('Devimon', 'https://digimon.shadowsmith.com/img/devimon.jpg', 'Champion'),
        ('Frigimon', 'https://digimon.shadowsmith.com/img/frigimon.jpg', 'Champion'),
        ('Mojyamon', 'https://digimon.shadowsmith.com/img/mojyamon.jpg', 'Champion'),
        ('Sukamon', 'https://digimon.shadowsmith.com/img/sukamon.jpg', 'Champion'),
        ('Centarumon', 'https://digimon.shadowsmith.com/img/centarumon.jpg', 'Champion'),
        ('Bakemon', 'https://digimon.shadowsmith.com/img/bakemon.jpg', 'Champion'),
        ('Angemon', 'https://digimon.shadowsmith.com/img/angemon.jpg', 'Champion'),
        ('Whamon', 'https://digimon.shadowsmith.com/img/whamon.jpg', 'Champion'),
        ('Drimogemon', 'https://digimon.shadowsmith.com/img/drimogemon.jpg', 'Champion'),
        ('Kokatorimon', 'https://digimon.shadowsmith.com/img/kokatorimon.jpg', 'Champion'),
        ('Tyrannomon', 'https://digimon.shadowsmith.com/img/tyrannomon.jpg', 'Champion'),
        ('Vegiemon', 'https://digimon.shadowsmith.com/img/vegiemon.jpg', 'Champion'),
        ('Gekomon', 'https://digimon.shadowsmith.com/img/gekomon.jpg', 'Champion'),
        ('Flymon', 'https://digimon.shadowsmith.com/img/flymon.jpg', 'Champion'),
        ('Gatomon', 'https://digimon.shadowsmith.com/img/gatomon.jpg', 'Champion'),
        ('Nanimon', 'https://digimon.shadowsmith.com/img/nanimon.jpg', 'Champion'),
        ('Devidramon', 'https://digimon.shadowsmith.com/img/devidramon.jpg', 'Champion'),
        ('Dokugumon', 'https://digimon.shadowsmith.com/img/dokugumon.jpg', 'Champion'),
        ('Gesomon', 'https://digimon.shadowsmith.com/img/gesomon.jpg', 'Champion'),
        ('Raremon', 'https://digimon.shadowsmith.com/img/raremon.jpg', 'Champion'),
        ('Wizardmon', 'https://digimon.shadowsmith.com/img/wizardmon.jpg', 'Champion'),
        ('DarkTyrannomon', 'https://digimon.shadowsmith.com/img/darktyrannomon.jpg', 'Champion'),
        ('Tuskmon', 'https://digimon.shadowsmith.com/img/tuskmon.jpg', 'Champion'),
        ('Snimon', 'https://digimon.shadowsmith.com/img/snimon.jpg', 'Champion'),
        ('Kiwimon', 'https://digimon.shadowsmith.com/img/kiwimon.jpg', 'Champion'),
        ('RedVegiemon', 'https://digimon.shadowsmith.com/img/redvegiemon.jpg', 'Champion'),
        ('Mekanorimon', 'https://digimon.shadowsmith.com/img/mekanorimon.jpg', 'Champion'),
        ('Tankmon', 'https://digimon.shadowsmith.com/img/tankmon.jpg', 'Champion'),
        ('Hagurumon', 'https://digimon.shadowsmith.com/img/hagurumon.jpg', 'Champion'),
        ('Vilemon', 'https://digimon.shadowsmith.com/img/vilemon.jpg', 'Champion'),
        ('Musyamon', 'https://digimon.shadowsmith.com/img/musyamon.jpg', 'Champion'),
        ('Starmon', 'https://digimon.shadowsmith.com/img/starmon.jpg', 'Champion'),
        ('Hanumon', 'https://digimon.shadowsmith.com/img/hanumon.jpg', 'Champion'),
        ('Revolvermon', 'https://digimon.shadowsmith.com/img/revolvermon.jpg', 'Champion'),
        ('BlueMeramon', 'https://digimon.shadowsmith.com/img/bluemeramon.jpg', 'Champion'),
        ('Gorillamon', 'https://digimon.shadowsmith.com/img/gorillamon.jpg', 'Champion'),
        ('Veedramon', 'https://digimon.shadowsmith.com/img/veedramon.jpg', 'Champion'),
        ('Guardromon', 'https://digimon.shadowsmith.com/img/guardromon.jpg', 'Champion'),
        ('PlatinumSukamon', 'https://digimon.shadowsmith.com/img/platinumsukamon.jpg', 'Champion'),
        ('ModokiBetamon', 'https://digimon.shadowsmith.com/img/modokibetamon.jpg', 'Champion'),
        ('Saberdramon', 'https://digimon.shadowsmith.com/img/saberdramon.jpg', 'Champion'),
        ('Icemon', 'https://digimon.shadowsmith.com/img/icemon.jpg', 'Champion'),
        ('Airdramon', 'https://digimon.shadowsmith.com/img/airdramon.jpg', 'Champion'),
        ('MetalTyrannomon', 'https://digimon.shadowsmith.com/img/metaltyrannomon.jpg', 'Champion'),
        ('Akatorimon', 'https://digimon.shadowsmith.com/img/akatorimon.jpg', 'Champion'),
        ('Geremon', 'https://digimon.shadowsmith.com/img/geremon.jpg', 'Champion'),
        ('FlareRizamon', 'https://digimon.shadowsmith.com/img/flarerizamon.jpg', 'Champion'),
        ('Thunderballmon', 'https://digimon.shadowsmith.com/img/thunderballmon.jpg', 'Champion'),
        ('Soulmon', 'https://digimon.shadowsmith.com/img/soulmon.jpg', 'Champion'),
        ('Piddomon', 'https://digimon.shadowsmith.com/img/piddomon.jpg', 'Champion'),
        ('ExVeemon', 'https://digimon.shadowsmith.com/img/exveemon.jpg', 'Champion'),
        ('Stingmon', 'https://digimon.shadowsmith.com/img/stingmon.jpg', 'Champion'),
        ('Aquillamon', 'https://digimon.shadowsmith.com/img/aquillamon.jpg', 'Champion'),
        ('Ankylomon', 'https://digimon.shadowsmith.com/img/ankylomon.jpg', 'Champion'),
        ('Andromon', 'https://digimon.shadowsmith.com/img/andromon.jpg', 'Ultimate'),
        ('Monzaemon', 'https://digimon.shadowsmith.com/img/monzaemon.jpg', 'Ultimate'),
        ('Etemon', 'https://digimon.shadowsmith.com/img/etemon.jpg', 'Ultimate'),
        ('SkullGreymon', 'https://digimon.shadowsmith.com/img/skullgreymon.jpg', 'Ultimate'),
        ('Piximon', 'https://digimon.shadowsmith.com/img/piximon.jpg', 'Ultimate'),
        ('Datamon', 'https://digimon.shadowsmith.com/img/datamon.jpg', 'Ultimate'),
        ('MetalGreymon', 'https://digimon.shadowsmith.com/img/metalgreymon.jpg', 'Ultimate'),
        ('WereGarurumon', 'https://digimon.shadowsmith.com/img/weregarurumon.jpg', 'Ultimate'),
        ('Digitamamon', 'https://digimon.shadowsmith.com/img/digitamamon.jpg', 'Ultimate'),
        ('Myotismon', 'https://digimon.shadowsmith.com/img/myotismon.jpg', 'Ultimate'),
        ('Vademon', 'https://digimon.shadowsmith.com/img/vademon.jpg', 'Ultimate'),
        ('ShogunGekomon', 'https://digimon.shadowsmith.com/img/shogungekomon.jpg', 'Ultimate'),
        ('Garudamon', 'https://digimon.shadowsmith.com/img/garudamon.jpg', 'Ultimate'),
        ('Mammothmon', 'https://digimon.shadowsmith.com/img/mammothmon.jpg', 'Ultimate'),
        ('SkullMeramon', 'https://digimon.shadowsmith.com/img/skullmeramon.jpg', 'Ultimate'),
        ('Pumpkinmon', 'https://digimon.shadowsmith.com/img/pumpkinmon.jpg', 'Ultimate'),
        ('Lillymon', 'https://digimon.shadowsmith.com/img/lillymon.jpg', 'Ultimate'),
        ('Zudomon', 'https://digimon.shadowsmith.com/img/zudomon.jpg', 'Ultimate'),
        ('MegaSeadramon', 'https://digimon.shadowsmith.com/img/megaseadramon.jpg', 'Ultimate'),
        ('Angewomon', 'https://digimon.shadowsmith.com/img/angewomon.jpg', 'Ultimate'),
        ('MegaKabuterimon', 'https://digimon.shadowsmith.com/img/megakabuterimon.jpg', 'Ultimate'),
        ('MagnaAngemon', 'https://digimon.shadowsmith.com/img/magnaangemon.jpg', 'Ultimate'),
        ('Parrotmon', 'https://digimon.shadowsmith.com/img/parrotmon.jpg', 'Ultimate'),
        ('Scorpiomon', 'https://digimon.shadowsmith.com/img/scorpiomon.jpg', 'Ultimate'),
        ('Divermon', 'https://digimon.shadowsmith.com/img/divermon.jpg', 'Ultimate'),
        ('Blossomon', 'https://digimon.shadowsmith.com/img/blossomon.jpg', 'Ultimate'),
        ('Deramon', 'https://digimon.shadowsmith.com/img/deramon.jpg', 'Ultimate'),
        ('Cherrymon', 'https://digimon.shadowsmith.com/img/cherrymon.jpg', 'Ultimate'),
        ('Garbagemon', 'https://digimon.shadowsmith.com/img/garbagemon.jpg', 'Ultimate'),
        ('WaruMonzaemon', 'https://digimon.shadowsmith.com/img/warumonzaemon.jpg', 'Ultimate'),
        ('LadyDevimon', 'https://digimon.shadowsmith.com/img/ladydevimon.jpg', 'Ultimate'),
        ('Megadramon', 'https://digimon.shadowsmith.com/img/megadramon.jpg', 'Ultimate'),
        ('Mamemon', 'https://digimon.shadowsmith.com/img/mamemon.jpg', 'Ultimate'),
        ('ExTyrannomon', 'https://digimon.shadowsmith.com/img/extyrannomon.jpg', 'Ultimate'),
        ('AeroVeedramon', 'https://digimon.shadowsmith.com/img/aeroveedramon.jpg', 'Ultimate'),
        ('MetalTyrannomon', 'https://digimon.shadowsmith.com/img/metaltyrannomon.jpg', 'Ultimate'),
        ('Vermilimon', 'https://digimon.shadowsmith.com/img/vermilimon.jpg', 'Ultimate'),
        ('Meteormon', 'https://digimon.shadowsmith.com/img/meteormon.jpg', 'Ultimate'),
        ('Gigadramon', 'https://digimon.shadowsmith.com/img/gigadramon.jpg', 'Ultimate'),
        ('Cyberdramon', 'https://digimon.shadowsmith.com/img/cyberdramon.jpg', 'Ultimate'),
        ('SkullSatamon', 'https://digimon.shadowsmith.com/img/skullsatamon.jpg', 'Ultimate'),
        ('Paildramon', 'https://digimon.shadowsmith.com/img/paildramon.jpg', 'Ultimate'),
        ('Dinobeemon', 'https://digimon.shadowsmith.com/img/dinobeemon.jpg', 'Ultimate'),
        ('Silphymon', 'https://digimon.shadowsmith.com/img/silphymon.jpg', 'Ultimate'),
        ('Shakkoumon', 'https://digimon.shadowsmith.com/img/shakkoumon.jpg', 'Ultimate'),
        ('VenomMyotismon', 'https://digimon.shadowsmith.com/img/venommyotismon.jpg', 'Mega'),
        ('WarGreymon', 'https://digimon.shadowsmith.com/img/wargreymon.jpg', 'Mega'),
        ('MetalGarurumon', 'https://digimon.shadowsmith.com/img/metalgarurumon.jpg', 'Mega'),
        ('MetalSeadramon', 'https://digimon.shadowsmith.com/img/metalseadramon.jpg', 'Mega'),
        ('Machinedramon', 'https://digimon.shadowsmith.com/img/machinedramon.jpg', 'Mega'),
        ('Piedmon', 'https://digimon.shadowsmith.com/img/piedmon.jpg', 'Mega'),
        ('Puppetmon', 'https://digimon.shadowsmith.com/img/puppetmon.jpg', 'Mega'),
        ('MetalEtemon', 'https://digimon.shadowsmith.com/img/metaletemon.jpg', 'Mega'),
        ('SaberLeomon', 'https://digimon.shadowsmith.com/img/saberleomon.jpg', 'Mega'),
        ('Apocalymon', 'https://digimon.shadowsmith.com/img/apocalymon.jpg', 'Mega'),
        ('HerculesKabuterimon', 'https://digimon.shadowsmith.com/img/herculeskabuterimon.jpg', 'Mega'),
        ('Plesiomon', 'https://digimon.shadowsmith.com/img/plesiomon.jpg', 'Mega'),
        ('Magnadramon', 'https://digimon.shadowsmith.com/img/magnadramon.jpg', 'Mega'),
        ('MarineAngemon', 'https://digimon.shadowsmith.com/img/marineangemon.jpg', 'Mega'),
        ('Boltmon', 'https://digimon.shadowsmith.com/img/boltmon.jpg', 'Mega'),
        ('Phoenixmon', 'https://digimon.shadowsmith.com/img/phoenixmon.jpg', 'Mega'),
        ('Jijimon', 'https://digimon.shadowsmith.com/img/jijimon.jpg', 'Mega'),
        ('Babamon', 'https://digimon.shadowsmith.com/img/babamon.jpg', 'Mega'),
        ('Goldramon', 'https://digimon.shadowsmith.com/img/goldramon.jpg', 'Mega'),
        ('Rosemon', 'https://digimon.shadowsmith.com/img/rosemon.jpg', 'Mega'),
        ('Milleniummon', 'https://digimon.shadowsmith.com/img/milleniummon.jpg', 'Mega'),
        ('Daemon', 'https://digimon.shadowsmith.com/img/daemon.jpg', 'Mega'),
        ('KingEtemon', 'https://digimon.shadowsmith.com/img/kingetemon.jpg', 'Mega'),
        ('Imperialdramon', 'https://digimon.shadowsmith.com/img/imperialdramon.jpg', 'Mega'),
        ('GranKuwagamon', 'https://digimon.shadowsmith.com/img/grankuwagamon.jpg', 'Mega'),
        ('Valkyrimon', 'https://digimon.shadowsmith.com/img/valkyrimon.jpg', 'Mega'),
        ('Vikemon', 'https://digimon.shadowsmith.com/img/vikemon.jpg', 'Mega'),
        ('Seraphimon', 'https://digimon.shadowsmith.com/img/seraphimon.jpg', 'Mega'),
        ('Zhuqiaomon', 'https://digimon.shadowsmith.com/img/zhuqiaomon.jpg', 'Mega'),
        ('Azulongmon', 'https://digimon.shadowsmith.com/img/azulongmon.jpg', 'Mega'),
        ('Baihumon', 'https://digimon.shadowsmith.com/img/baihumon.jpg', 'Mega'),
        ('Omnimon', 'https://digimon.shadowsmith.com/img/omnimon.jpg', 'Mega')
        `)
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
